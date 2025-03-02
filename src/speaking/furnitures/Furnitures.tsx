import { usePaginatedData } from '../../hooks/usePaginatedData';
import { allFurniture, allRooms, furniture_01, furniture_02, furniture_03, furniture_04, furniture_05, furniture_06, furniture_07, furniture_08 } from '../../data/furniture';
import { Divider } from 'antd';
import { columns } from '../../data/sample';
import { CollapseWithAccordion } from '../../components/Collapse';
import { BasicTable, Pagination } from '../../components';

export const Furniture = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(furniture_01, [
    furniture_01, furniture_02, furniture_03, furniture_04, furniture_05, 
    furniture_06, furniture_07, furniture_08
  ]);
  
  return (
    <div>
      <Divider>House and furniture</Divider>

      <CollapseWithAccordion text={'Rooms'} data={allRooms} columns={columns} />
      <CollapseWithAccordion text={'Furniture'} data={allFurniture} columns={columns} />

      <Divider>Dialogs</Divider>
      <BasicTable data={data} />
      <Pagination currentPage={currentPage} totalPages={8} onPageChange={handlePageChange} />

      <Divider>Tasks</Divider>

      <li>
        <a href='https://test-english.com/vocabulary/a1/the-house-rooms-parts-and-things-a1-english-vocabulary/'>ССылка</a>
      </li>
      <li>
        <a href='https://agendaweb.org/vocabulary/house_furniture-exercises.html'>ССылка</a>
      </li>
      <li>
        <a href='https://learnenglishteens.britishcouncil.org/vocabulary/a1-a2-vocabulary/bedroom'>ССылка</a>
      </li>
    </div>
  )
}
