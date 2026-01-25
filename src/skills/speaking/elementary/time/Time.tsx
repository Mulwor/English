import { Divider, Collapse } from 'antd';
import { BasicTable } from '../../../../components';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';
import { allTime } from './time';
import { Pagination } from '../../../../components/Pagination';
import { Video } from '../../../../components';
import { columns } from '../../../../data/sample';
import { CollapseWithAccordion } from '../../../../components/Collapse';
import { basic_time_01, basic_time_02, basic_time_03 } from './data/basic';
import {
  elementary_time_01,
  elementary_time_02,
  elementary_time_03,
  elementary_time_04,
  elementary_time_05,
  elementary_time_06,
  elementary_time_07,
} from './data/elementary';

const { Panel } = Collapse;

export const Time = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(basic_time_01, [
    basic_time_01,
    basic_time_02,
    basic_time_03,
    elementary_time_01,
    elementary_time_02,
    elementary_time_03,
    elementary_time_04,
    elementary_time_05,
    elementary_time_06,
    elementary_time_07,
  ]);

  return (
    <>
      <Divider>Time - время</Divider>
      <CollapseWithAccordion
        text={'Vocabulary'}
        data={allTime}
        columns={columns}
      />

      <Collapse
        accordion
        style={{ marginTop: '8px' }}
      >
        <Panel
          header='Tasks'
          key='1'
        >
          <div className='links'>
            <a
              href='https://www.gamestolearnenglish.com/telling-the-time/'
              target='_blank'
            >
              Задача: ответь правильно и заставь пройти через мостик
            </a>
            <a href='https://www.gamestolearnenglish.com/days-of-the-week/'>Задачи на дни недели</a>
          </div>
        </Panel>
      </Collapse>

      <Divider>Listening</Divider>
      <Collapse accordion>
        <Panel
          header='Videos'
          key='1'
        >
          <div className='video'>
            <Video videoId='WLAZpKY-9Ks' />
            <Video videoId='HQDaZOL1I5Y' />
            <Video videoId='DvTkgW19KeI' />
          </div>
        </Panel>
      </Collapse>

      <Divider>Dialogs</Divider>
      <BasicTable data={data} />
      <Pagination
        currentPage={currentPage}
        totalPages={10}
        onPageChange={handlePageChange}
      />

      <Divider>Полезные выражение</Divider>
      <p>1. Weekend is coming! - Скоро выходные или приближаются выходные</p>
      <p>2. I cook dinner - Я готовлю ужин</p>
      <p>3. I eat dinner - Я ужинаю</p>
      <p>4. Do you walk or take the bus? - Ты идешь пешком или едешь на автобусе?</p>

      <Divider>Дополнительные материалы</Divider>
      <a href='https://learnenglish.britishcouncil.org/general-english/video-series/starting-out/episode-11-what-time-it'>
        Необходимо прослушать диалог и ответить на вопросы
      </a>
    </>
  );
};
