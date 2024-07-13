import Button from './Button_ib';
import Input from './Input';
import Select from './Select_ib';

function AuditExcercisesModal({
  closeForm,
}: {
  openForm?: VoidFunction;
  closeForm?: VoidFunction;
}) {
  return (
    <div className="text-center w-full h-full bg-zinc-300 flex flex-col justify-center items-center py-[24px]">
      <div className=" relative bg-white w-[957px] py-[39px] px-[35px] rounded-[20px] bg-gradient-to-br from-white to-white flex-col flex overflow-auto modal-container">
        <img
          className=" right-[31px] top-[26px] absolute cursor-pointer"
          src="vector.svg"
          onClick={closeForm}
        />
        <div className="w-full h-[27px] mb-[30px] text-[20px] font-bold leading-[27.24px] text-center ">
          Closed Audit Excercises
        </div>

        <div className="pb-[20px] flex justify-between">
          <div className="flex flex-col w-[350px]">
            <Input
              value="Companies Income Tax - CIT"
              readOnly
              label="Tax Type"
              fieldName={''}
              onChange={undefined}
              locationKey={''}
            />
          </div>
          <div className="flex flex-col w-[350px]">
            <Input
              value="2018 - 2022"
              readOnly
              label="Audit Period"
              fieldName={''}
              onChange={undefined}
              locationKey={''}
            />
          </div>
        </div>

        <div className="flex justify-between pb-[20px]">
          <div className="flex flex-col w-[350px]">
            <Select label="Audit Type" readOnly>
              <option>Special Investigation</option>
            </Select>
          </div>
          <div className="flex flex-col w-[350px]">
            <Select label="Regulatory Agency" readOnly>
              <option>CBN</option>
            </Select>
          </div>
        </div>

        <div className="pb-[40px] flex justify-between">
          <div className="flex flex-col w-[350px]">
            <Input
              value={1200000000.0}
              readOnly
              label="Amount Assessed"
              fieldName={''}
              onChange={undefined}
              locationKey={''}
            />
          </div>
          <div className="flex flex-col w-[350px]">
            <Input
              value={300000000.0}
              readOnly
              label="Amount Paid"
              fieldName={''}
              onChange={undefined}
              locationKey={''}
            />
          </div>
        </div>

        <div className="pb-[37px]  flex flex-col">
          <div className="pb-[20px] text-[20px] font-semibold leading-[27.24px] text-left ">
            Documents
          </div>

          <div className="text-[13px] font-semibold leading-[17.7px] text-left ">
            Please view document
          </div>
        </div>

        <div className="flex justify-between pb-[25px]">
          <div className="text-[13px] font-normal flex ">
            <p className="py-[10px]">
              2018 - 2022 / tax audit / FIRS / Correspondence from / 19-06-2023
            </p>
          </div>
          <Button variant="primary" customWidth={171}>
            Preview
          </Button>
        </div>

        <div className="flex justify-between pb-[25px]">
          <div className="text-[13px] font-normal flex ">
            <p className="py-[10px]">
              2018 - 2022 / tax audit / FIRS / Correspondence to / 20-06-2023
            </p>
          </div>
          <Button variant="primary" customWidth={171}>
            Preview
          </Button>
        </div>

        <div className="flex justify-between pb-[25px]">
          <div className="text-[13px] font-normal flex ">
            <p className="py-[10px]">
              2018 - 2022 / tax audit / FIRS / Correspondence to / 21-06-2023
            </p>
          </div>
          <Button variant="primary" customWidth={171}>
            Preview
          </Button>
        </div>

        <div className="flex justify-between pb-[25px]">
          <div className="text-[13px] font-normal flex ">
            <p className="py-[10px]">
              2018 - 2022 / tax audit / FIRS / Correspondence from / 22-08-2023
            </p>
          </div>
          <Button variant="primary" customWidth={171}>
            Preview
          </Button>
        </div>

        <div className="flex justify-between pb-[25px]">
          <div className="text-[13px] font-normal flex ">
            <p className="py-[10px]">
              2018 - 2022 / tax audit / FIRS / Correspondence to / 23-08-2023
            </p>
          </div>
          <Button variant="primary" customWidth={171}>
            Preview
          </Button>
        </div>

        <div className="flex justify-between pb-[44px]">
          <div className="text-[13px] font-normal flex ">
            <p className="py-[10px]">
              2018 - 2022 / tax audit / FIRS / Correspondence from / 31-06-2023
            </p>
          </div>
          <Button variant="primary" customWidth={171}>
            Preview
          </Button>
        </div>

        <div className="pb-[24px]">
          <Button customWidth={140} handleClick={closeForm} variant="primary">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AuditExcercisesModal;
