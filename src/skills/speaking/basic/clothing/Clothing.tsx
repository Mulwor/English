import { Collapse, Divider } from 'antd';
import { columns } from '../../../../data/sample';
import { BasicTable, Video } from '../../../../components';
import { Pagination } from '../../../../components/Pagination';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';
import { CollapseWithAccordion } from '../../../../components/Collapse';
import { vocabulary_clothes, basic_clothes_01, basic_clothes_02, basic_clothes_03, basic_clothes_04, basic_clothes_05 } from './data/basic';
import {
  elementary_clothes_01,
  elementary_clothes_02,
  elementary_clothes_03,
  elementary_clothes_04,
  elementary_clothes_05,
  elementary_clothes_06,
  preIntermediate_clothes_01,
} from './data/elementary';

const { Panel } = Collapse;

export const Clothing = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(elementary_clothes_01, [
    elementary_clothes_01,
    basic_clothes_04,
    basic_clothes_03,
    elementary_clothes_06,
    basic_clothes_02,
    basic_clothes_05,
    elementary_clothes_02,
    elementary_clothes_03,
    elementary_clothes_05,
    elementary_clothes_04,
  ]);

  const {
    data: dialogsVideo,
    currentPage: dialogsVideoPage,
    handlePageChange: handlePageChangeDialogsVideo,
  } = usePaginatedData(preIntermediate_clothes_01, [preIntermediate_clothes_01, basic_clothes_01]);

  return (
    <>
      <Divider>Clothes - одежда</Divider>
      <CollapseWithAccordion
        text={'Vocabulary'}
        data={vocabulary_clothes}
        columns={columns}
      />

      <Divider>Listening</Divider>
      <Collapse accordion>
        <Panel
          header='Videos'
          key='1'
        >
          <div className='video'>
            <Video videoId='XNhvZtjg2q8' />
            <Video videoId='E47g3P64SYw' />
          </div>

          <Divider>Video-script</Divider>
          <BasicTable data={dialogsVideo} />
          <Pagination
            currentPage={dialogsVideoPage}
            totalPages={2}
            onPageChange={handlePageChangeDialogsVideo}
          />
        </Panel>
      </Collapse>

      <Divider>Dialogs</Divider>
      <BasicTable data={data} />
      <Pagination
        currentPage={currentPage}
        totalPages={9}
        onPageChange={handlePageChange}
      />

      <Divider>Полезные выражения</Divider>

      <ol>
        <li>made of wool - сделан из шерсти</li>
        <li>did you knit it yourself? - ты сама это связала</li>
        <li>try it on - примерить</li>
        <li>fitting room - примерочная</li>
      </ol>
    </>
  );
};
