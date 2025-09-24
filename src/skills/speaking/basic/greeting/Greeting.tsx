import { Collapse, Divider, Tabs } from 'antd';
import { BasicTable, Pagination, Video } from '../../../../components';
import { 
  greeting_basic_01, greeting_basic_02, greeting_basic_03, greeting_basic_04, greeting_basic_05,
  greeting_elementary_01, greeting_elementary_02, greeting_elementary_03, greeting_5, greeting_6,
  greeting_elementary_04, greeting_elementary_05, greeting_elementary_06
} from './data'
import { usePaginatedData } from '../../../../hooks/usePaginatedData';

const { Panel } = Collapse;

export const Greeting = () => {
  const { 
    data: a1Data, 
    currentPage: a1CurrentPage, 
    handlePageChange: a1HandlePageChange 
  } = usePaginatedData(greeting_basic_02, [
    greeting_basic_02,
    greeting_basic_03,
    greeting_basic_04,
    greeting_basic_05,
    greeting_elementary_01,
    greeting_elementary_02,
    greeting_elementary_03,
  ]);

  const { 
    data: a2Data, 
    currentPage: a2CurrentPage, 
    handlePageChange: a2HandlePageChange 
  } = usePaginatedData(greeting_elementary_04, [
    greeting_elementary_04,
    greeting_elementary_05,
    greeting_elementary_06,
    greeting_5,
    greeting_6,
  ]);

  const tabItems = [
    {
      key: 'a1',
      label: 'A1',
      children: (
        <>
          <Divider>Greeting for A1 (Beginner and elementary)</Divider>

          <Collapse accordion>
            <Panel header='Vocabulary' key='1'>
              <BasicTable data={greeting_basic_01} />
            </Panel>
          </Collapse>

          <Divider>Listening</Divider>

          <Collapse accordion>
            <Panel header='Videos' key='2'>
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
      ),
    },
    {
      key: 'a2',
      label: 'A2',
      children: (
        <>
          <Divider>Greeting for A2 (Pre-intermediate)</Divider>
        
          <Divider>Dialogs</Divider>

          <BasicTable data={a2Data} />
          <Pagination currentPage={a2CurrentPage} totalPages={5}  onPageChange={a2HandlePageChange} />

          <Divider>Полезные выражения</Divider>
          <ol>
            <li>I am here for two weeks. - Я здесь на две недели.</li>
          </ol>
        </>
      ),
    },
  ];

  return (
    <Tabs 
      defaultActiveKey="a1" 
      items={tabItems}
      tabPosition="top"
      type="card"
    />
  );
};