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
}: {
  Element?: any;
  showBack: boolean;
  title?: string;
  query?: any;
}) {
  const history = useNavigate();

  return (
    <div
      className={
        'flex relative w-[100%] px-[24px] h-[100%]  align-middle border-b-[1px] text-nowrap font-normal text-[22px] flex-row justify-between capitalize '
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
      {Element}
    </div>
  );
}

export default Breadcrumb;
