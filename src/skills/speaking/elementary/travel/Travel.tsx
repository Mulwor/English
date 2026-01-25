import { Divider } from 'antd';
import { allTravel, travel_01, travel_02, travel_03, travel_05, travel_06, travel_07, travel_08, travel_09, travel_10 } from './travel';
import { columns } from '../../../../data/sample';
import { CollapseWithAccordion } from '../../../../components/Collapse';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';
import { BasicTable, Pagination } from '../../../../components';
import { location_01, location_02, location_03, location_04 } from './location';

export const Travel = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(travel_01, [
    travel_01,
    travel_02,
    travel_03,
    travel_05,
    travel_06,
    travel_07,
    travel_08,
    travel_09,
    travel_10,
  ]);

  const {
    data: location,
    currentPage: locationPage,
    handlePageChange: locationChange,
  } = usePaginatedData(location_01, [location_01, location_02, location_03, location_04]);

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
        totalPages={9}
        onPageChange={handlePageChange}
      />

      <Divider>Places in the city - уметь спрашивать как дойти до туда, или где находится что-либо</Divider>

      <BasicTable data={location} />
      <Pagination
        currentPage={locationPage}
        totalPages={4}
        onPageChange={locationChange}
      />
    </div>
  );
};
