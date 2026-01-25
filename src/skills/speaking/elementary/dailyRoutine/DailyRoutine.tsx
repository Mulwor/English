import { Collapse, Divider } from 'antd';
import { CollapseWithAccordion } from '../../../../components/Collapse';
import { columns } from '../../../../data/sample';
import {
  allDailyRoutineList,
  dailyRoutine_01,
  dailyRoutine_02,
  dailyRoutine_03,
  dailyRoutine_04,
  dailyRoutine_05,
  dailyRoutine_06,
  dailyRoutine_07,
  dailyRoutine_08,
  dailyRoutine_09,
  dailyRoutine_10,
  dailyRoutine_11,
  dailyRoutine_12,
} from './daily-routine';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';
import { BasicTable, Pagination, Video } from '../../../../components';

const { Panel } = Collapse;

export const DailyRoutine = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(dailyRoutine_01, [
    dailyRoutine_01,
    dailyRoutine_02,
    dailyRoutine_03,
    dailyRoutine_04,
    dailyRoutine_05,
    dailyRoutine_06,
    dailyRoutine_07,
    dailyRoutine_08,
    dailyRoutine_09,
    dailyRoutine_10,
    dailyRoutine_11,
    dailyRoutine_12,
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
        totalPages={12}
        onPageChange={handlePageChange}
      />

      <Divider>Listening</Divider>

      <Collapse accordion>
        <Panel
          header='Videos'
          key='2'
        >
          <div className='video'>
            <Video videoId='aQ0w2I0Eb9I' />
            <Video videoId='fRyG93nGEog' />
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};
