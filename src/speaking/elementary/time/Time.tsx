import { Collapse, Divider, Table } from "antd"
import { BasicTable } from "../../../components/Table"
import { usePaginatedData } from "../../../hooks/usePaginatedData";
import { time_1, time_2, time_3, time_4, time_5, time_6, time_7, time_8, time_9, time_10, allTime } from "./time";
import { Pagination } from "../../../components/Pagination";
import { Video } from "../../../components/Video";
import { columns } from "../../../data/sample";
import { CollapseWithAccordion } from "../../../components/Collapse";

const { Panel } = Collapse;

export const Time = () => {
    const { data, currentPage, handlePageChange } = usePaginatedData(time_1, [
      time_1, time_2, time_3, time_4, time_5, time_6, time_7, time_8, time_9, time_10
    ]);
    
  return (
    <div>
      <Divider>Time</Divider>

      <Divider>Vocabulary</Divider>

      <CollapseWithAccordion text={'Times list'} data={allTime} columns={columns} />

      <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem', marginBottom: '1rem'}}>
        <Video videoId="HQDaZOL1I5Y" />
        <Video videoId="DvTkgW19KeI" />
      </div>

      <Divider>Dialogs</Divider>
      <BasicTable data={data} />
      <Pagination currentPage={currentPage} totalPages={10} onPageChange={handlePageChange} />
    
      <Divider>Задачи</Divider>
      <a href="https://learnenglish.britishcouncil.org/general-english/video-series/starting-out/episode-11-what-time-it">
        Задача со временем
      </a>
    </div>
  )
}