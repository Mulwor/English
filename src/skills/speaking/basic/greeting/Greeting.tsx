import { Collapse, Divider } from 'antd';
import { BasicTable, Pagination, Video } from '../../../../components';
import {
  greeting_basic_01,
  greeting_basic_02,
  greeting_basic_03,
  greeting_basic_04,
  greeting_basic_05,
  greeting_elementary_01,
  greeting_elementary_02,
  greeting_elementary_03,
} from './data';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';

const { Panel } = Collapse;

export const Greeting = () => {
  const {
    data: a1Data,
    currentPage: a1CurrentPage,
    handlePageChange: a1HandlePageChange,
  } = usePaginatedData(greeting_basic_02, [
    greeting_basic_02,
    greeting_basic_03,
    greeting_basic_04,
    greeting_basic_05,
    greeting_elementary_01,
    greeting_elementary_02,
    greeting_elementary_03,
  ]);

  return (
    <>
      <Divider>Greeting - знакомство</Divider>

      <Collapse accordion>
        <Panel
          header='Vocabulary'
          key='1'
        >
          <BasicTable data={greeting_basic_01} />
        </Panel>
      </Collapse>

      <Divider>Listening</Divider>

      <Collapse accordion>
        <Panel
          header='Videos'
          key='2'
        >
          <div className='video'>
            <Video videoId='5StvZZccECg' />
            <Video videoId='RLs9lIy5WT0' />
            <Video videoId='Fw0rdSHzWFY' />
          </div>
        </Panel>
      </Collapse>

      <Divider>Dialogs</Divider>
      <BasicTable data={a1Data} />
      <Pagination
        currentPage={a1CurrentPage}
        totalPages={7}
        onPageChange={a1HandlePageChange}
      />

      <Divider>Полезные выражения</Divider>

      <ol>
        <li>Are you a student here? - Ты здесь учишься?</li>
        <li>Are you here on holiday? No, I'm a student here. - Ты здесь в отпуске? Нет, Я здесь учусь</li>
        <li>It is my first time - Это мой первый день</li>
        <li>I just moved here. - Я только что переехала сюда.</li>
        <li>Let me know if you need any help. - Дай мне знать, если тебе нужна помощь.</li>
      </ol>
    </>
  );
};
