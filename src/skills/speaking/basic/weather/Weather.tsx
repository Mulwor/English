import { Divider } from "antd"
import { allWeather, weather_1, weather_10, weather_11, weather_2, weather_3, weather_4, weather_5, weather_6 } from "./weather";
import { BasicTable, Pagination, Video } from "../../../../components";
import { columns } from "../../../../data/sample";
import { usePaginatedData } from "../../../../hooks/usePaginatedData";
import { CollapseWithAccordion } from "../../../../components/Collapse";

export const Weather = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(weather_1, [
    weather_1, weather_2, weather_3, weather_4, weather_5, weather_6, weather_10, weather_11,
  ]);

  return (
    <div>
      <Divider>Weather</Divider>

      <div>Добавить также про климат диалоги</div>

      <div className="video">
        <Video videoId="I8GeA3anPdo"/>
        <Video videoId="CXKj7bm4Ops"/>
        <Video videoId="n72v-tPu8FI"/>
      </div>

      <div className="data">
        <CollapseWithAccordion text={'Weather List'} data={allWeather} columns={columns} />
      </div>

      <div className="links">
        <a href="https://www.gamestolearnenglish.com/weather/" target="_href">
          1. Закрепление материала
        </a>

        <a href="https://test-english.com/vocabulary/a2/the-weather-a2-english-vocabulary/" target="_href">
          2. Заполни пропуски
        </a>

        <a href="https://www.youtube.com/watch?v=HXjZL6BqEFI" target="_href">
          3. Прослушай диалог и заполни таблицу
        </a>
      </div>

      <Divider>Dialogs</Divider>

      <BasicTable data={data} />
      <Pagination currentPage={currentPage} totalPages={8} onPageChange={handlePageChange} />

      <Divider>Дополнительные материалы</Divider>

      <div className="video">
        <Video videoId="eYAaLWdx_h0"/>
        <Video videoId="40PRWD1-HWA"/>
      </div>
    </div>
  )
}