import { Divider } from "antd"
import { BasicTable } from "../../../../components"
import { usePaginatedData } from "../../../../hooks/usePaginatedData";
import { time_1, time_2, time_3, time_4, time_5, time_6, time_7, time_8, time_9, time_10, allTime } from "./time";
import { Pagination } from "../../../../components/Pagination";
import { Video } from "../../../../components";
import { columns } from "../../../../data/sample";
import { CollapseWithAccordion } from "../../../../components/Collapse";

export const Time = () => {
    const { data, currentPage, handlePageChange } = usePaginatedData(time_1, [
      time_1, time_3, time_4, time_2, time_5, 
      time_6, time_8, time_9, time_10, time_7,
    ]);
    
  return (
    <div>
      <Divider>Time</Divider>

      <div className='video'>
        <Video videoId="WLAZpKY-9Ks" />
        <Video videoId="HQDaZOL1I5Y" />
        <Video videoId="DvTkgW19KeI" />
      </div>

      <CollapseWithAccordion text={'Times vocabulary'} data={allTime} columns={columns} />

      <div className="links">
        <a href="https://www.gamestolearnenglish.com/telling-the-time/" target="_blank">Задача: ответь правильно и заставь пройти через мостик</a>
        <a href="https://www.gamestolearnenglish.com/days-of-the-week/" >Задачи на дни недели</a>
      </div>

      <Divider>Dialogs</Divider>
      <BasicTable data={data} />
      <Pagination currentPage={currentPage} totalPages={10} onPageChange={handlePageChange} />
    
      <Divider>Дополнительные материалы</Divider>
      <a href="https://learnenglish.britishcouncil.org/general-english/video-series/starting-out/episode-11-what-time-it">
        Необходимо прослушать диалог и ответить на вопросы
      </a>
    </div>
  )
}