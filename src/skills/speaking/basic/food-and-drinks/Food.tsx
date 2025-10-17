import { Collapse, Divider } from 'antd';
import { columns } from '../../../../data/sample';
import { BasicTable, Pagination, Video } from '../../../../components';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';
import { allDrinks, allFood, food_1, food_10, food_11, food_12, food_2, food_3, food_4, food_5, food_6, food_7, food_8, food_9 } from './food';
import { CollapseWithAccordion } from '../../../../components/Collapse';

const { Panel } = Collapse;

export const Food = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(food_1, [
    food_1,
    food_2,
    food_3,
    food_4,
    food_5,
    food_6,
    food_7,
    food_8,
    food_9,
    food_10,
    food_11,
    food_12,
  ]);

  return (
    <div>
      <Divider>Food and drinks</Divider>

      <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
        <CollapseWithAccordion
          text={'Food list'}
          data={allFood}
          columns={columns}
        />
        <CollapseWithAccordion
          text={'Drinks list'}
          data={allDrinks}
          columns={columns}
        />

        <Collapse accordion>
          <Panel
            header='Tasks'
            key='2'
          >
            <Video videoId='FXGLTZCKMmY' />
          </Panel>
        </Collapse>
      </div>

      <Divider>Dialogs</Divider>

      <BasicTable data={data} />
      <Pagination
        currentPage={currentPage}
        totalPages={12}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
