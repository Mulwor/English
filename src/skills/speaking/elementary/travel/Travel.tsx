import { Divider } from 'antd';
import { allTravel, travel_01, travel_03, travel_06, travel_08, travel_10 } from './travel';
import { columns } from '../../../../data/sample';
import { CollapseWithAccordion } from '../../../../components/Collapse';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';
import { BasicTable, Pagination } from '../../../../components';
import { location_01, location_03 } from './location';

export const Travel = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(travel_01, [
    travel_01,
    travel_03,
    location_01,
    travel_06,
    location_03,
    travel_08,
    travel_10,
  ]);

  return (
    <div>
      <Divider>Travel</Divider>

      <CollapseWithAccordion
        text={'Hotel list'}
        data={allTravel}
        columns={columns}
      />

      <Divider>Dialogs</Divider>
      <BasicTable data={data} />
      <Pagination
        currentPage={currentPage}
        totalPages={7}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
