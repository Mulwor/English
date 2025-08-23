import { Divider } from 'antd';
import { BasicTable, Pagination } from '../../../../components';
import {
  allHolidays,
  holidays_01,
  holidays_02,
  holidays_03,
  holidays_04,
  holidays_05,
  holidays_06,
  holidays_07,
  holidays_08,
  holidays_09,
  holidays_10,
} from './holidays';
import { CollapseWithAccordion } from '../../../../components/Collapse';
import { columns } from '../../../../data/sample';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';

export const Holidays = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(holidays_01, [
    holidays_01,
    holidays_02,
    holidays_03,
    holidays_04,
    holidays_05,
    holidays_06,
    holidays_07,
    holidays_08,
    holidays_09,
    holidays_10,
  ]);

  return (
    <div>
      <Divider>Holidays</Divider>

      <CollapseWithAccordion
        text={'Rooms'}
        data={allHolidays}
        columns={columns}
      />

      <Divider>Dialogs</Divider>
      <BasicTable data={data} />
      <Pagination
        currentPage={currentPage}
        totalPages={8}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
