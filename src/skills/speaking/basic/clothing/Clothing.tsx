import { Collapse, Divider, Tabs } from 'antd';
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
} from './data/elementary';
import {
  preIntermediate_clothes_01,
  preIntermediate_clothes_02,
  preIntermediate_clothes_03,
  preIntermediate_clothes_04,
  preIntermediate_clothes_05,
  preIntermediate_clothes_06,
  preIntermediate_clothes_07,
  preIntermediate_clothes_08,
  preIntermediate_clothes_09,
} from './data/preIntermediate';

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
    elementary_clothes_04,
    elementary_clothes_05,
  ]);

  const {
    data: a2Data,
    currentPage: a2CurrentPage,
    handlePageChange: a2HandlePageChange,
  } = usePaginatedData(preIntermediate_clothes_02, [
    preIntermediate_clothes_02,
    preIntermediate_clothes_03,
    preIntermediate_clothes_04,
    preIntermediate_clothes_05,
    preIntermediate_clothes_06,
    preIntermediate_clothes_07,
    preIntermediate_clothes_08,
    preIntermediate_clothes_09,
  ]);

  const {
    data: dialogsVideo,
    currentPage: dialogsVideoPage,
    handlePageChange: handlePageChangeDialogsVideo,
  } = usePaginatedData(preIntermediate_clothes_01, [preIntermediate_clothes_01, basic_clothes_01]);

  const tabItems = [
    {
      key: 'a1',
      label: 'A1',
      children: (
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
            totalPages={10}
            onPageChange={handlePageChange}
          />
        </>
      ),
    },
    {
      key: 'a2',
      label: 'A2',
      children: (
        <>
          <Divider>Clothes 2</Divider>

          <Divider>Dialogs</Divider>
          <BasicTable data={a2Data} />
          <Pagination
            currentPage={a2CurrentPage}
            totalPages={9}
            onPageChange={a2HandlePageChange}
          />
        </>
      ),
    },
  ];

  return (
    <Tabs
      defaultActiveKey='a1'
      items={tabItems}
      tabPosition='top'
      type='card'
    />
  );
};
