import { Collapse, Divider, Table } from 'antd'
import { BasicTable, Pagination, Video } from '../../../components';
import { jobs2, jobs3, jobs4, jobs5, jobs6, jobs7, jobs8, jobs9, jobs10, jobs, jobs1, allJobs } from './jobs';
import { usePaginatedData } from '../../../hooks/usePaginatedData';

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

      <div className="video">
        <Video videoId='2TxVyxrOp0s' />
        <Video videoId='eejZ4UvMqoc' />
      </div>

      <div className='data'>
        <Collapse accordion>
          <Panel header="Dialogs video" key="1">
            <BasicTable data={dialogsVideo} />
            <Pagination currentPage={dialogsVideoPage} totalPages={2} onPageChange={handlePageChangeDialogsVideo} />
          </Panel>
        </Collapse>

        <Collapse accordion>
          <Panel header="Jobs List" key="1">
            <Table dataSource={allJobs} columns={columns} pagination={false} size="small" />
          </Panel>
        </Collapse>
      </div>

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

      <Divider>Дополнительные материалы</Divider>
        
      <div className="video">
        <Video videoId='RUup841pZrs' />
        <Video videoId='0x1WRY4fvz4' />
        <Video videoId='v95eemWZ-4s' />
      </div>
    </div>
  )
}