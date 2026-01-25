import { Collapse, Divider, Table } from 'antd';
import { BasicTable, Pagination, Video } from '../../../../components';
import { a1_jobs, a1_jobs_01, a1_jobs_02, a1_jobs_03, a1_jobs_04, a1_jobs_05, a1_jobs_06, vocabulary_jobs } from './data/a1';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';

const { Panel } = Collapse;

const columns = [
  { title: 'English', dataIndex: 'english', key: 'english' },
  { title: 'Pronunciation', dataIndex: 'pronunciation', key: 'pronunciation' },
  { title: 'Russian', dataIndex: 'russian', key: 'russian' },
];

export const Jobs = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(a1_jobs_02, [a1_jobs_02, a1_jobs_03, a1_jobs_04, a1_jobs_05, a1_jobs_06]);

  const {
    data: dialogsVideo,
    currentPage: dialogsVideoPage,
    handlePageChange: handlePageChangeDialogsVideo,
  } = usePaginatedData(a1_jobs, [a1_jobs, a1_jobs_01]);

  return (
    <>
      <Divider>Jobs - работа</Divider>

      <div className='data'>
        <Collapse accordion>
          <Panel
            header='Vocabulary'
            key='1'
          >
            <Table
              dataSource={vocabulary_jobs}
              columns={columns}
              pagination={false}
              size='small'
            />
          </Panel>
        </Collapse>

        <Collapse accordion>
          <Panel
            header='Tasks'
            key='1'
          >
            <div className='links'>
              <a
                href='https://www.gamestolearnenglish.com/jobs/'
                target='_href'
              >
                1. Закрепление материала
              </a>

              <a
                href='https://test-english.com/listening/a1/whats-your-job-a1-english-listening-test/'
                target='_href'
              >
                2. Заполни пропуски
              </a>
            </div>
          </Panel>
        </Collapse>
      </div>

      <Divider>Listening</Divider>

      <Collapse accordion>
        <Panel
          header='Videos'
          key='2'
        >
          <div className='video'>
            <Video videoId='2TxVyxrOp0s' />
            <Video videoId='eejZ4UvMqoc' />
            <Video videoId='RUup841pZrs' />
          </div>

          <Collapse accordion>
            <Panel
              header='Dialogs video'
              key='3'
            >
              <BasicTable data={dialogsVideo} />
              <Pagination
                currentPage={dialogsVideoPage}
                totalPages={2}
                onPageChange={handlePageChangeDialogsVideo}
              />
            </Panel>
          </Collapse>
        </Panel>
      </Collapse>

      <Divider>Dialogs</Divider>
      <BasicTable data={data} />
      <Pagination
        currentPage={currentPage}
        totalPages={5}
        onPageChange={handlePageChange}
      />
    </>
  );
};
