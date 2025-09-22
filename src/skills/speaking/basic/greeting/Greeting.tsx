import { Collapse, Divider } from 'antd';
import { BasicTable, Pagination, Video } from '../../../../components';
import { 
  greeting_basic_01, greeting_basic_02, greeting_basic_03, greeting_basic_04, greeting_basic_05,
  greeting_elementary_01, greeting_elementary_02, greeting_elementary_03, greeting_5, greeting_6,
  greeting_elementary_04, greeting_elementary_05, greeting_elementary_06
} from './data'
import { usePaginatedData } from '../../../../hooks/usePaginatedData';

const { Panel } = Collapse;

export const Greeting = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(greeting_basic_02, [
    greeting_basic_02,
    greeting_basic_03,
    greeting_basic_04,
    greeting_basic_05,
    greeting_elementary_01,
    greeting_elementary_02,
    greeting_elementary_03,
    greeting_elementary_04,
    greeting_elementary_05,
    greeting_elementary_06
  ]);


  const { 
    data: preIntermediate, 
    currentPage: preIntermediateCurrentPage, 
    handlePageChange: preIntermediateHandle 
  } = usePaginatedData(greeting_5, [
    greeting_5,
    greeting_6,
  ]);

  return (
    <>
      <Divider>Greeting - знакомства</Divider>

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

      <Divider>Dialogs for A1 (Beginner)</Divider>
      <BasicTable data={data} />
      <Pagination currentPage={currentPage} totalPages={10} onPageChange={handlePageChange} />

      <Divider>Полезные выражения</Divider>

      <ol>
        <li>Are you here on holiday? - Ты здесь в отпуске?</li>
        <li>I'm a student here. - Я здесь учусь</li>
        <li>It is my first time - Это мой первый день</li>
        <li>I am here for two weeks. - Я здесь на две недели.</li>
      </ol>

      <p></p>

      <Collapse accordion>
        <Panel header='Dialogs for A2 (Pre-intermediate)' key='3'>
          <BasicTable data={preIntermediate} />
          <Pagination currentPage={preIntermediateCurrentPage} totalPages={2} onPageChange={preIntermediateHandle} />
        </Panel>
      </Collapse>
    </>
  );
};
