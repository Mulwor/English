import { Collapse, Divider } from 'antd';
import { BasicTable, CollapseWithAccordion, Pagination, Video } from '../../../../components';
import { columns } from '../../../../data/sample';
import { dailyActivitiesVocabulary } from './vocab';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';
import {
  daily_routine_01,
  daily_routine_02,
  daily_routine_03,
  daily_routine_04,
  daily_routine_05,
  daily_routine_06,
  daily_routine_07,
  daily_routine_08,
  daily_routine_09,
  daily_routine_10,
  daily_routine_11,
  daily_routine_12,
  daily_routine_13,
  daily_routine_14,
  daily_routine_15,
} from './dialogs';

const { Panel } = Collapse;
export const DailyActivities = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(daily_routine_01, [
    daily_routine_01,
    daily_routine_02,
    daily_routine_03,
    daily_routine_04,
    daily_routine_05,
    daily_routine_06,
    daily_routine_07,
    daily_routine_08,
    daily_routine_09,
    daily_routine_10,
    daily_routine_11,
    daily_routine_12,
    daily_routine_13,
    daily_routine_14,
    daily_routine_15,
  ]);

  return (
    <>
      <Divider>Daily Activities (Ежедневные действия)</Divider>

      <p>
        Цель этого топика - научиться рассказывать о своём распорядке дня, описывать свои обычные действия, описывать привычки и регулярные действия (Habits &
        routines), говорить о свободном времени (Leisure activities), рассказывать о хобби и занятиях после работы/учёбы, Сравнивать свой день с другими
        (Comparisons).
      </p>

      <Divider>Vocabulary</Divider>

      <CollapseWithAccordion
        text={'All vocabulary daily activities'}
        data={dailyActivitiesVocabulary}
        columns={columns}
      />

      <Divider>Dialogs</Divider>

      <BasicTable data={data} />
      <Pagination
        currentPage={currentPage}
        totalPages={15}
        onPageChange={handlePageChange}
      />

      <Collapse accordion>
        <Panel
          header='Videos'
          key='1'
        >
          <div className='video'>
            <Video videoId='mrcLQA8wPJU' />
            <Video videoId='VsqkTzOVP9U' />
            <Video videoId='-5iUfno6gPI' />
          </div>
        </Panel>
      </Collapse>
    </>
  );
};
