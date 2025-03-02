import { Divider } from "antd"
import { allWeather, weather_1, weather_10, weather_11, weather_2, weather_3, weather_4, weather_5, weather_6 } from "./weather";
import { BasicTable, Pagination, Video } from "../../../components";
import { columns } from "../../../data/sample";
import { usePaginatedData } from "../../../hooks/usePaginatedData";
import { CollapseWithAccordion } from "../../../components/Collapse";

export const Weather = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(weather_1, [
    weather_1, weather_2, weather_3, weather_4, weather_5, weather_6, weather_10, weather_11,
  ]);

  return (
    <div>
      <Divider>Weather</Divider>
      
      <p>Базовые ресурсы: </p>

      <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
        <Video videoId="I8GeA3anPdo"/>
        <Video videoId="CXKj7bm4Ops"/>
        <Video videoId="n72v-tPu8FI"/>
      </div>

      <Divider>Vocabulary</Divider>
      <CollapseWithAccordion text={'Weather List'} data={allWeather} columns={columns} />

      <Divider>Dialogs</Divider>

      <BasicTable data={data} />
      <Pagination currentPage={currentPage} totalPages={8} onPageChange={handlePageChange} />

      <Divider>Задачи</Divider>

      <div style={{display: 'flex', flexDirection: 'column'}}>
      <p>1. Прослушайте диалог и проставьте правильный вариант</p>
      <Video videoId="HXjZL6BqEFI"/>
      <a href="https://agendaweb.org/vocabulary/weather-exercises.html">2. Для закрепления можно воспользоваться данным ресурсом</a>
      <a href="https://test-english.com/vocabulary/a2/the-weather-a2-english-vocabulary/">3. Услышь и повтори</a>
      </div>

      <Divider>Подкасты и другие видеоролики на тему weather</Divider>

      <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
        <Video videoId="eYAaLWdx_h0"/>
        <Video videoId="40PRWD1-HWA"/>
      </div>
    </div>
  )
}