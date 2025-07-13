import { Collapse, Divider, Table } from 'antd'
import { BasicTable, Pagination, Video } from '../../../../components';
import { jobs2, jobs3, jobs4, jobs5, jobs6, jobs7, jobs8, jobs9, jobs10, jobs, jobs1, allJobs } from './jobs';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';

const { Panel } = Collapse;

const columns = [
  { title: "English", dataIndex: "english", key: "english" },
  { title: "Pronunciation", dataIndex: "pronunciation", key: "pronunciation" },
  { title: "Russian", dataIndex: "russian", key: "russian" },
];


export const Jobs = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(jobs2, [
    jobs2, jobs3, jobs4, jobs5, jobs6, jobs7, jobs8, jobs9, jobs10
  ]);

  const { data: dialogsVideo, currentPage: dialogsVideoPage, handlePageChange: handlePageChangeDialogsVideo } = usePaginatedData(jobs, [
    jobs, jobs1,
  ]);
  
  return (
    <div>
      <Divider>Jobs - работа</Divider>

      <div>!!! Добавить также workplaces</div>

      <Collapse accordion>
        <Panel header="Vocabulary" key="1">
          <Table dataSource={allJobs} columns={columns} pagination={false} size="small" />
        </Panel>
      </Collapse>
    
      <Divider>Listening</Divider>

      <Collapse accordion>
        <Panel header="Videos" key="2">
          <div className='video'>
            <Video videoId='2TxVyxrOp0s' />
            <Video videoId='eejZ4UvMqoc' />
            <Video videoId='RUup841pZrs' />
          </div>

          <Divider>Video-script</Divider>

          <Collapse accordion>
            <Panel header="Dialogs video" key="3">
              <BasicTable data={dialogsVideo} />
              <Pagination currentPage={dialogsVideoPage} totalPages={2} onPageChange={handlePageChangeDialogsVideo} />
            </Panel>
        </Collapse>
        </Panel>
      </Collapse>

      <Divider>Tasks</Divider>

      <div className="links">
        <a href="https://www.gamestolearnenglish.com/jobs/" target="_href">
          1. Закрепление материала
        </a>

        <a href="https://test-english.com/listening/a1/whats-your-job-a1-english-listening-test/" target='_href'>
          2. Заполни пропуски
        </a>
      </div>

      <Divider>Dialogs</Divider>

      <BasicTable data={data} />
      <Pagination currentPage={currentPage} totalPages={9} onPageChange={handlePageChange} />

      <Divider>A2+ videos</Divider>

      <Collapse accordion>
        <Panel header="Videos" key="2">
          <div className="video">
            <Video videoId='0x1WRY4fvz4' />
            <Video videoId='v95eemWZ-4s' />
          </div>
        </Panel>
      </Collapse>
    </div>
  )
}