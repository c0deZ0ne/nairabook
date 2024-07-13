import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { RootState } from '../redux/store';
import downloadWhite from '../assets/icons/downloadWhite.svg';
import upload_bold from '../assets/icons/upload-bold.svg';
import { allIcons } from '../assets/icons';
import { BulkUploadProps } from '../types';
import { AppSuccess } from './alert/alerts';
import { downloadBase64File } from '../utils';
import { validationFileSchema } from '../validations/validation';
import { progress } from 'framer-motion';
const BulkUploadComp = ({
  handleClose,
  refreshPage,
  downloadTemplate,
  uploadFile,
  formLabels,
  downloadLoading,
  initialValues = { file: '' },
  Id,
  getStatus,
}: BulkUploadProps) => {
  const dispatch = useDispatch();

  const [file, setFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedSize, setUploadedSize] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [bulkJobId, setBulkJobId] = useState('');
  const { accessToken, clientId } = useSelector(
    (state: RootState) => state.persistUser,
  );
  const [loadingState, setLoadingState] = useState(false);

  useEffect(() => {
    let uploadInterval: number | null = null;

    if (bulkJobId) {
      uploadInterval = setInterval(async () => {
        try {
          const response = await getStatus(bulkJobId);
          const progress = response?.data?.data?.progress;
          setUploadProgress(progress);

          setUploadedSize((progress / 100) * (file?.size || 0));

          if (response?.data?.data) {
            const { isCompleted, blob } = response?.data?.data;

            const { contentType, fileContents, fileDownloadName } = blob;

            if (isCompleted) {
              setLoadingState(false);

              clearInterval(uploadInterval!);

              if (fileContents) {
                await downloadBase64File({
                  base64String: fileContents,
                  filename: fileDownloadName || 'outputFile',
                  contentType,
                });
                handleClose();
                refreshPage();
                dispatch(
                  AppSuccess({
                    message: response?.data?.message,
                    isTimed: 10000,
                  }),
                );
              }
            }
            setLoadingState(false);
          }
        } catch (error) {
          setLoadingState(false);
        }
      }, 5000); // Poll every second
    }

    return () => {
      if (uploadInterval) {
        clearInterval(uploadInterval);
      }
    };
  }, [bulkJobId, file, progress]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const fileExtension = selectedFile.name.split('.').pop()?.toLowerCase();
      if (fileExtension !== 'xlsx' && fileExtension !== 'xls') {
        setErrorMessage(
          'Invalid file format. Please upload an .xlsx or .xls file.',
        );
        setFile(null);
        return;
      }
      setErrorMessage('');
      setFile(selectedFile);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      setErrorMessage('Please select a file to upload.');

      return;
    }

    const formData = new FormData();
    if (Id) {
      formData.append('file', file);
      formData.append('clientId', Id);
    } else {
      formData.append('file', file);
    }

    setLoadingState(true);
    setUploadProgress(0);
    setUploadedSize(0);

    try {
      const response = await uploadFile({
        form: formData,
        clientData: { clientId, accessToken },
      }).unwrap();

      if (response.status === 200) {
        setBulkJobId(response.data.jobId);
      } else {
        setLoadingState(false);
      }
    } catch (error) {
      setLoadingState(false);
    }
  };

  const handleReset = () => {
    setFile(null);
    setUploadProgress(0);
    setLoadingState(false);
    setUploadedSize(0);
    setErrorMessage('');
  };

  return (
    <div className="w-[40rem] h-[90%]">
      <div className="w-[40rem] absolute top-[0px] flex flex-row justify-between pt-[20px] bg-[#1E49E2] text-[#FFF] px-[20px] items-center pb-[10px] font-normal text-[22px]">
        <p className="text-[18px] font-bold self-center">{formLabels.title}</p>
        <button
          onClick={handleClose}
          className="flex z-20 w-[30px] h-[30px] cursor-pointer  items-center justify-center rounded-full bg-white hover:bg-gray-400  self-center mt-auto mb-auto"
        >
          <span>
            {allIcons.close({ width: '10px', height: '10px', fill: '#000' })}
          </span>
        </button>
      </div>
      <div className="bg-white h-[400px] pt-[120px] px-[40px] space-y-[100px] w-full">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validation={validationFileSchema}
        >
          {({ resetForm }) => (
            <Form>
              <div className="flex justify-between items-center">
                <div className="space-y-[15px]">
                  <h3 className="text-[15px] font-semibold font-Open Sans">
                    {formLabels.step1}
                  </h3>
                  <h3 className="self-center text-[15px] font-semibold font-Open Sans">
                    Step 1: Download Sample Data
                  </h3>
                  <p className="text-[11px]">{formLabels.step1Description}</p>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={downloadTemplate}
                    className={
                      downloadLoading
                        ? 'py-[16px] px-[16px] w-[200px] h-[50px] font-Open Sans bg-gray-300 rounded-[10px] flex justify-start items-center gap-x-[10px] text-[#fff]'
                        : 'py-[16px] px-[16px] font-Open Sans bg-[#1E49E2] rounded-[10px] flex justify-start items-center gap-x-[10px] text-[#fff] hover:bg-[#1e48e2a4] cursor-pointer'
                    }
                  >
                    {downloadLoading ? (
                      'Downloading...'
                    ) : (
                      <>
                        {/* Add your download icon here */}
                        <img src={downloadWhite} alt="" />
                        <p className="text-[11px]">
                          {formLabels.downloadButton}
                        </p>
                      </>
                    )}
                  </button>
                </div>
              </div>
              <div className="flex justify-between mt-[30px] items-center w-full">
                <div className="space-y-[15px]">
                  <h3 className="text-[15px] font-semibold font-Open Sans">
                    {' '}
                    Step 2: {formLabels.step2}
                  </h3>

                  <p className="text-[11px] font-Open Sans font-normal">
                    {formLabels.step2Description}
                  </p>
                </div>
                {!file && (
                  <div className="font-Open Sans bg-[#1E49E2] rounded-[10px] flex justify-start items-center gap-x-[10px] text-[#fff] relative hover:bg-[#1e48e2a4] cu">
                    <Field
                      type="file"
                      accept=".xlsx, .xls"
                      id="file"
                      name="file"
                      onChange={handleChange}
                      className="absolute w-full inset-0 opacity-0 outline-none"
                    />
                    <span className="py-[16px] px-[25px] font-Open Sans bg-[#1E49E2] rounded-[10px] flex justify-start items-center gap-x-[10px] text-[#fff] cursor-pointer">
                      <img src={upload_bold} alt="" />
                      <p className="text-[11px]">Upload edited template</p>
                    </span>
                  </div>
                )}
                {file && (
                  <div className="w-[200px] h-[80px] border rounded-t-[10px] px-[5px]">
                    <span className="text-sm font-bold">{file?.name}</span>{' '}
                    <br />
                    <span className="text-xs text-gray-600">
                      {(uploadedSize / 1024).toFixed(2)} /{' '}
                      {(file.size / 1024).toFixed(2)} KB
                    </span>
                    <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-[#00C0AE] transition-all duration-30"
                        style={{ width: `${uploadProgress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
              {errorMessage && (
                <div className="text-red-500 text-sm mt-2 text-end">
                  {errorMessage}
                </div>
              )}
              <div className="flex justify-center items-center gap-x-[10px] mt-[25px]">
                <button
                  onClick={() => {
                    handleReset();
                    resetForm();
                  }}
                  type="button"
                  className={
                    'py-[10px] px-[40px] text-[12px] font-Open Sans bg-[#1E49E2] rounded-[10px] flex justify-start items-center gap-x-[10px] text-[#fff] hover:bg-[#1e48e2a4]'
                  }
                >
                  {formLabels.resetButton}
                </button>
                <button
                  disabled={loadingState}
                  type="submit"
                  className={
                    'py-[10px] px-[40px] text-[12px] font-Open Sans bg-[#1E49E2] rounded-[10px] flex justify-start items-center gap-x-[10px] text-[#fff] hover:bg-[#1e48e2a4]'
                  }
                >
                  {loadingState ? 'Processing...' : formLabels.uploadButton}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default BulkUploadComp;
