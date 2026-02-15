import { usePaginatedData } from '../../../../hooks/usePaginatedData';
import { allFurniture, allRooms, furniture_01, furniture_03, furniture_05, furniture_07, furniture_08 } from './furniture';
import { Collapse, Divider } from 'antd';
import { columns } from '../../../../data/sample';
import { CollapseWithAccordion } from '../../../../components/Collapse';
import { BasicTable, Pagination } from '../../../../components';

const { Panel } = Collapse;

export const Furniture = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(furniture_01, [furniture_01, furniture_08, furniture_03, furniture_05, furniture_07]);

  return (
    <div>
      <Divider>House and furniture</Divider>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
        <CollapseWithAccordion
          text={'Rooms'}
          data={allRooms}
          columns={columns}
        />
        <CollapseWithAccordion
          text={'Furniture'}
          data={allFurniture}
          columns={columns}
        />
      </div>

      <Divider>Dialogs</Divider>
      <BasicTable data={data} />
      <Pagination
        currentPage={currentPage}
        totalPages={5}
        onPageChange={handlePageChange}
      />

      <Divider>Tasks</Divider>
      <Collapse accordion>
        <Panel
          header='Videos'
          key='1'
        >
          <li>
            <a
              href='https://agendaweb.org/vocabulary/house_furniture-exercises.html'
              target='_blank'
            >
              Заучивание слов через разные способы
            </a>
          </li>
          <li>
            <a
              href='https://test-english.com/vocabulary/a1/the-house-rooms-parts-and-things-a1-english-vocabulary/'
              target='_blank'
            >
              Вставь пропущенное слово
            </a>
          </li>
        </Panel>
      </Collapse>
    </div>
  );
};
