import { Collapse, Divider } from 'antd';
import { CollapseWithAccordion } from '../../../../components/Collapse';
import { columns } from '../../../../data/sample';
import {
  allDailyRoutineList,
  dailyRoutine_01,
  dailyRoutine_03,
  dailyRoutine_05,
  dailyRoutine_07
} from './daily-routine';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';
import { BasicTable, Pagination, Video } from '../../../../components';

const { Panel } = Collapse;

export const DailyRoutine = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(dailyRoutine_01, [
    dailyRoutine_01,
    dailyRoutine_03,
    dailyRoutine_05,
    dailyRoutine_07,
  ]);

  return (
    <div>
      <Divider>Daily routine</Divider>

      <CollapseWithAccordion
        text={'Daily routine list'}
        data={allDailyRoutineList}
        columns={columns}
      />

      <Divider>Dialogs</Divider>

      <BasicTable data={data} />
      <Pagination
        currentPage={currentPage}
        totalPages={4}
        onPageChange={handlePageChange}
      />

      <Divider>Выражение</Divider>

      <ul>
        <li>Brush my teeth [tiːθ] - чищу зубы</li>
        <li>Get dressed - одеваюсь</li>
        <li>Cereal ['sɪərɪəl] with milk. - каша с молоком</li>
        <li>Get ready - готовится</li>
        <li>Eat breakfast - завтракать</li>
      </ul>

      <Divider>Listening</Divider>

      <Collapse accordion>
        <Panel header='Videos' key='2'>
          <div className='video'>
            <Video videoId='aQ0w2I0Eb9I' />
            <Video videoId='fRyG93nGEog' />
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};
