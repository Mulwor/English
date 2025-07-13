import { Collapse, Divider } from "antd"
import { BasicTable, Pagination, Video } from "../../../../components";
import { video_1, video_2, greeting_4, greeting_1, greeting_3, greeting_5 } from "./greeting"
import { usePaginatedData } from "../../../../hooks/usePaginatedData";

const { Panel } = Collapse

export const Greeting = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(video_1, [
    video_1, video_2, greeting_3, greeting_4, greeting_5
  ]);

  return (
    <>
      <Divider>Greeting - знакомства</Divider>

      <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column'}}>
        <Collapse accordion>
          <Panel header="Vocabulary" key="1">
            <BasicTable data={greeting_1} />
          </Panel>
        </Collapse>

        <Collapse accordion>
          <Panel header="Videos" key="2">
            <div className="video">
              <Video videoId='5StvZZccECg' />
              <Video videoId='RLs9lIy5WT0' />
              <Video videoId='Fw0rdSHzWFY' />
            </div>
          </Panel>
        </Collapse>
      </div>

      <Divider>Dialogs</Divider>
      <BasicTable data={data} />
      <Pagination currentPage={currentPage} totalPages={5} onPageChange={handlePageChange}/>
    </>
  )
}