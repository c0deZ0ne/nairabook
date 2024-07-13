import React from 'react';
import { useLocation } from 'react-router-dom';
import GoBackButton from '../../../../ui-components/goback';
import SelectButton from '../../../../ui-components/select';
import Input from '../../../../ui-components/Input';
import MultipleSelectChip from '../../../../ui-components/multi-select';
import MultipleSelect from '../../../../ui-components/multi-select';
import { genYears } from '../../../../utils';
import SelectPop from '../../../../ui-components/selectPopUps';
import { useNavigate } from 'react-router-dom';
import { allIcons } from '../../../../assets/icons';
import ConvertTopdf from '../../../../ui-components/convertTopdf/convert-topdf';
import SelectCalendar from '../../../../ui-components/calendar';

function Breadcrumb({
  Element,
  showBack,
  title,
  entityData,
  handleOutput,
  showStartDate,
  showEndDate,
  taxTypes,
  showRangePicker,
  ShowSelectMonth = false,
  showTaxTypes = false,
  query,
}: {
  Element?: any;
  taxTypes: Array<any>;
  showBack: boolean;
  title?: string;
  showStartDate: boolean;
  showEndDate: boolean;
  handleOutput: any;
  entityData: Array<{ key: string; value: string }>;
  showRangePicker: boolean;
  ShowSelectMonth: boolean;
  showTaxTypes?: boolean;
  query?: any;
}) {
  const history = useNavigate();

  return (
    <div
      className={
        'flex relative w-[100%] px-[24px] h-[100%]  align-middle border-b-[1px] bg-white text-nowrap font-normal text-[22px] flex-row justify-between capitalize '
      }
    >
      <div className="flex  justify-between items-center gap-x-[10px] ">
        {showBack && (
          <div
            onClick={() => history(-1)}
            className="flex flex-row items-center cursor-pointer"
          >
            {allIcons.goBackIcon({})}
          </div>
        )}{' '}
        <div className="flex flex-row  font-Open Sans text-[20px] font-[600] text-black ">
          {title}
        </div>
      </div>
      <div className="flex  w-[60%] h-[100%] relative  justify-end   gap-x-[10px]  ">
        {entityData?.length > 0 && (
          <div className="flex ml-5 w-[100px] h-[35px]  self-center gap-x-[10px] mx-[10px] ">
            {/* <span className="text-[14px] self-center">{'Entity'}</span> */}
            <MultipleSelect
              data={entityData}
              handleSelect={handleOutput}
              fieldName={'entity'}
              locationKey={'entityIds'}
              className={
                'outline-none border rounded-lg text-[14px] w-[100px] px-[10px] flex items-center'
              }
              handleClose={undefined}
            />
          </div>
        )}

        {ShowSelectMonth && (
          <div className="h-[35px]  text-center border w-[100px] flex self-center  relative rounded-md group">
            <MultipleSelect
              data={genYears()}
              handleSelect={handleOutput}
              fieldName={'years'}
              locationKey={'years'}
              handleClose={undefined}
              displayName={'Select Year'}
              className={
                ' text-[12px] text-justify pt-[7px] pl-[9px] pb-[auto] cursor-pointer'
              }
            />
          </div>
        )}

        {showTaxTypes && (
          <div className="flex ml-5  w-[100px] h-[35px]  self-center gap-x-[10px] mx-[10px] border rounded-md">
            <SelectButton
              items={taxTypes || []}
              handleSelect={handleOutput}
              fieldName={'Tax Type'}
              locationKey={'pseudoMnemonic'}
              isRadio={true}
              className={''}
              fill={''}
              value={'Tax Type'}
            />
          </div>
        )}
        {showRangePicker && (
          <div className="h-[100%]  flex">
            <div className="flex items-center gap-x-5 w-[100%] h-[35px]  self-center">
              <span className="w-[120px] h-[35px] border rounded-md pl-[20px]">
                <SelectCalendar
                  onChange={(data: any) =>
                    handleOutput({
                      ...data,
                      value: data?.value,
                      locationKey: 'startDate',
                      fieldName: 'startDate',
                    })
                  }
                  value={query?.startDate}
                  locationKey={undefined}
                />
              </span>
              -
              <span className="w-[120px] h-[35px] border rounded-md pl-[20px]">
                <SelectCalendar
                  onChange={(data: any) =>
                    handleOutput({
                      ...data,
                      value: data?.value,
                      locationKey: 'endDate',
                      fieldName: 'endDate',
                    })
                  }
                  value={query?.endDate}
                  locationKey={undefined}
                />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Breadcrumb;
