import { Divider, Collapse } from 'antd';
import { BasicTable, Pagination, Video } from '../../../../components';
import { columns } from '../../../../data/sample';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';
import { CollapseWithAccordion } from '../../../../components/Collapse';
import { a1_weather_01, a1_weather_02, a1_weather_03, a1_weather_04, a1_weather_05, a1_weather_06, vocabulary_for_weather } from './data/a1';

const { Panel } = Collapse;

export const Weather = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(a1_weather_01, [
    a1_weather_01,
    a1_weather_02,
    a1_weather_03,
    a1_weather_04,
    a1_weather_05,
    a1_weather_06,
  ]);

  return (
    <>
      <Divider>Weather - погода</Divider>
      <div className='data'>
        <CollapseWithAccordion
          text={'Vocabulary'}
          data={vocabulary_for_weather}
          columns={columns}
        />

        <Collapse accordion>
          <Panel
            header='Tasks'
            key='1'
          >
            <div className='links'>
              <a
                href='https://www.gamestolearnenglish.com/weather/'
                target='_href'
              >
                1. Закрепление материала
              </a>

              <a
                href='https://test-english.com/vocabulary/a2/the-weather-a2-english-vocabulary/'
                target='_href'
              >
                2. Заполни пропуски
              </a>

              <a
                href='https://www.youtube.com/watch?v=HXjZL6BqEFI'
                target='_href'
              >
                3. Прослушай диалог и заполни таблицу
              </a>
            </div>
          </Panel>
        </Collapse>
      </div>

      <Divider>Listening</Divider>
      <Collapse accordion>
        <Panel
          header='Videos'
          key='1'
        >
          <div className='video'>
            <Video videoId='I8GeA3anPdo' />
            <Video videoId='CXKj7bm4Ops' />
            <Video videoId='n72v-tPu8FI' />
          </div>
        </Panel>
      </Collapse>

      <Divider>Dialogs</Divider>
      <BasicTable data={data} />
      <Pagination
        currentPage={currentPage}
        totalPages={6}
        onPageChange={handlePageChange}
      />

      <Divider> Полезные выражение </Divider>
      <ol>
        <li>turn on the fan - включи вентилятор</li>
        <li>stay warm - согреться (оставаться в тепле)</li>
      </ol>
    </>
  );
};
