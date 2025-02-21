import { Collapse, Divider, Table } from 'antd'
import { Video } from '../../components/Video'
import { allJobs, jobs, jobs1, jobs2, jobs3, jobs4, jobs5, jobs6, jobs7, jobs8, jobs9, jobs10, jobs11 } from '../../data/jobs';
import { BasicTable } from '../../components/Table';
import { Pagination } from '../../components/Pagination';
import { usePaginatedData } from '../../hooks/usePaginatedData';

const { Panel } = Collapse;

const columns = [
  { title: "English", dataIndex: "english", key: "english" },
  { title: "Pronunciation", dataIndex: "pronunciation", key: "pronunciation" },
  { title: "Russian", dataIndex: "russian", key: "russian" },
];


export const Jobs = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(jobs, [
    jobs1, jobs2, jobs3, jobs4, jobs5, jobs6, jobs7, jobs8, jobs9, jobs10, jobs11,
  ]);
      
  return (
    <div>
        <Divider>Jobs - работа</Divider>

        <p>Базовые ресурсы: </p>

        <Divider>Vocabulary</Divider>

        <Collapse accordion>
          <Panel header="Jobs List" key="1">
            <Table
              dataSource={allJobs}
              columns={columns}
              pagination={false}
              size="small"
              />
          </Panel>
        </Collapse>

        
        <Divider>Dialogs</Divider>

        <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem', marginBottom: '1rem'}}>
          <Video videoId='2TxVyxrOp0s' width='410' />
          <Video videoId='eejZ4UvMqoc' width='410' />
        </div>

      <BasicTable data={data} />

      <Pagination
        currentPage={currentPage}
        totalPages={11}
        onPageChange={handlePageChange}
      />

        <Divider>Practice</Divider>


        <a href="https://test-english.com/listening/a1/whats-your-job-a1-english-listening-test/" >
          Задача на освоение устной части. Услышь то чем занимается человек и выбери верный ответ
        </a>

        <Divider>Подкасты и другие видеоролики на тему работы</Divider>
        
        <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
          <Video videoId='RUup841pZrs' width='410' />
          <Video videoId='0x1WRY4fvz4' width='410' />
          <Video videoId='v95eemWZ-4s' width='410' />
        </div>
    </div>
  )
}