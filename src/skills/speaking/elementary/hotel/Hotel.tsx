import { Collapse, Divider } from 'antd';
import { CollapseWithAccordion } from '../../../../components/Collapse';
import { allHotel, hotel_01, hotel_03, hotel_05, hotel_07, hotel_09 } from './hotel';
import { columns } from '../../../../data/sample';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';
import { BasicTable, Pagination, Video } from '../../../../components';

const { Panel } = Collapse;

export const Hotel = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(hotel_01, [hotel_01, hotel_03, hotel_05, hotel_07, hotel_09]);

  return (
    <div>
      <Divider>Hotel</Divider>
      <CollapseWithAccordion
        text={'Hotel list'}
        data={allHotel}
        columns={columns}
      />

      <Divider>Listening</Divider>
      <Collapse accordion>
        <Panel
          header='Videos'
          key='1'
        >
          <div className='video'>
            <Video videoId='av9XRDVsbd8' />
            <Video videoId='G1FoU1p1YPI' />
            <Video videoId='0_yzAhXRgRw' />
          </div>
        </Panel>
      </Collapse>

      <Divider>Dialogs</Divider>
      <BasicTable data={data} />
      <Pagination
        currentPage={currentPage}
        totalPages={5}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
