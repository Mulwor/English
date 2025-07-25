import { Collapse, Divider } from "antd"
import { Video } from "../../../../components"
import { greeting_4, greeting_1, greeting_3, greeting_5 } from "./greeting"
import { BasicTable } from "../../../../components";
import { Pagination } from "../../../../components/Pagination";
import { usePaginatedData } from "../../../../hooks/usePaginatedData";
import { video_1, video_2 } from "./greeting";
import { Link } from "react-router-dom";

const { Panel } = Collapse

export const Greeting = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(greeting_3, [
    greeting_3, greeting_4, greeting_5
  ]);

  const { data: videoContent, currentPage: videoContentPage, handlePageChange: videoContentChange } = usePaginatedData(video_1, [
    video_1, video_2
  ]);
      
  return (
    <>
      <Divider>Greeting - знакомства</Divider>

      <Collapse accordion>
        <Panel header="Greeting list" key="1">
          <BasicTable data={greeting_1} />
        </Panel>
      </Collapse>

      <div className="video">
        <Video videoId='5StvZZccECg' />
        <Video videoId='RLs9lIy5WT0' />
        <Video videoId='Fw0rdSHzWFY' />
      </div>

      <Collapse accordion>
        <Panel header="Dialogue from video" key="1">
          <BasicTable data={videoContent} />
          <Pagination currentPage={videoContentPage} totalPages={2} onPageChange={videoContentChange}/>
        </Panel>
      </Collapse>

      <Divider>Dialogs</Divider>
      <BasicTable data={data} />
      <Pagination currentPage={currentPage} totalPages={3} onPageChange={handlePageChange}/>

      <Divider>Grammar</Divider>
      <Link to='/a1/grammar/present/simple'>Когда необходимо ставить: Do/does, а когда am/is/are в вопросе</Link>
    </>
  )
}