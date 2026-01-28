import { Collapse, Divider } from 'antd';
import { BasicTable, Pagination, Video } from '../../../../components';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';
import { allHobbies, hobbies_01, hobbies_03, hobbies_06, hobbies_07 } from './hobbies';
import { columns } from '../../../../data/sample';
import { CollapseWithAccordion } from '../../../../components/Collapse';

const { Panel } = Collapse;

export const Hobbies = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(hobbies_01, [
    hobbies_01,
    hobbies_03,
    hobbies_06,
    hobbies_07,
  ]);

  return (
    <div>
      <Divider>Hobbies</Divider>

      <CollapseWithAccordion
        text={'Hobbies list'}
        data={allHobbies}
        columns={columns}
      />

      <Divider>Listening</Divider>
      <Collapse accordion>
        <Panel
          header='Videos'
          key='1'
        >
          <div className='video'>
            <Video videoId='sKPKYRX311Q' />
            <Video videoId='tgVtVoxzwDI' />
            <Video videoId='6NHkCRgmbUI' />
          </div>
        </Panel>
      </Collapse>

      <Divider>Dialogs</Divider>
      <BasicTable data={data} />
      <Pagination
        currentPage={currentPage}
        totalPages={4}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
