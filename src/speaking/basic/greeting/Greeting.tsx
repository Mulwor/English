import { Collapse, Divider, Table } from "antd"
import { Video } from "../../../components/Video"
import { greeting_4, greeting_1, greeting_2, greeting_3, greeting_5 } from "./greeting"
import { BasicTable } from "../../../components/Table";
import { Pagination } from "../../../components/Pagination";
import { usePaginatedData } from "../../../hooks/usePaginatedData";
import { column2 } from "../../../data/sample";
import { video_1, video_2 } from "./greeting";

const { Panel } = Collapse

export const Greeting = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(greeting_1, [
    greeting_1, greeting_2, greeting_3, greeting_4, greeting_5
  ]);
      
  return (
    <>
      <Divider>Greeting - знакомства</Divider>

      <p>Базовые ресурсы: </p>
      
      <div style={{display: 'flex', gap: '1rem', marginBottom: '1rem'}}>
        <Video videoId='5StvZZccECg' width="410" />
        <Video videoId='RLs9lIy5WT0' width="410" />
        <Video videoId='Fw0rdSHzWFY' width="410" />
      </div>

      <Collapse accordion>
        <Panel header="Dialogue from video" key="1">
          <Table dataSource={video_1} columns={column2} pagination={false} size="small" />
          <br />
          <Table dataSource={video_2} columns={column2} pagination={false} size="small" />
        </Panel>
      </Collapse>


      <Divider>Диалоги</Divider>
      <BasicTable data={data} />

      <Pagination
        currentPage={currentPage}
        totalPages={5}
        onPageChange={handlePageChange}
      />
    </>
  )
}