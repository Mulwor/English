import { Collapse, Divider, Tabs } from 'antd';
import { BasicTable, Pagination, Video } from '../../../../components';
import { columns } from '../../../../data/sample';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';
import { CollapseWithAccordion } from '../../../../components/Collapse';
import { vocabulary_shopping } from './data/a1';
import { a1_shopping_01, a1_shopping_02, a1_shopping_03, a1_shopping_04, a1_shopping_05, a1_shopping_06, a1_shopping_07, a1_shopping_08 } from './data/a1';
import { a2_shopping_01, a2_shopping_02, a2_shopping_04, a2_shopping_03 } from './data/a2';

const { Panel } = Collapse;

export const Shopping = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(a1_shopping_01, [
    a1_shopping_01,
    a1_shopping_02,
    a1_shopping_03,
    a1_shopping_04,
    a1_shopping_05,
    a1_shopping_06,
    a1_shopping_07,
    a1_shopping_08,
  ]);

  const {
    data: a2Data,
    currentPage: a2CurrentPage,
    handlePageChange: a2HandlePageChange,
  } = usePaginatedData(a2_shopping_01, [a2_shopping_01, a2_shopping_02, a2_shopping_03, a2_shopping_04]);

  const tabItems = [
    {
      key: 'a1',
      label: 'A1',
      children: (
        <div>
          <Divider>Shopping</Divider>

          <div className='data'>
            <CollapseWithAccordion
              text={'Vocabulary'}
              data={vocabulary_shopping}
              columns={columns}
            />

            <Collapse accordion>
              <Panel
                header='Tasks'
                key='2'
              >
                <div className='links'>
                  <a href='https://www.speaklanguages.com/english/phrases/shopping'>
                    1. Shopping - here are some English phrases to help you when you go shopping, as well as some of the things you might see.
                  </a>

                  <a href='https://test-english.com/vocabulary/a1/shops-and-shopping-a1-english-vocabulary/'>
                    2. Shops and shopping - in this A1 Elementary Vocabulary Lesson, you will learn different common types of shops and useful phrases that are
                    used when shopping. Check the explanation to learn the words and then do the exercises.
                  </a>
                </div>
              </Panel>
            </Collapse>
          </div>

          <Divider>Listening</Divider>

          <Collapse accordion>
            <Panel
              header='Videos'
              key='2'
            >
              <div className='video'>
                <Video videoId='KyO_H_mNKNI' />
                <Video videoId='aWSg7MsHYpU' />
              </div>
            </Panel>
          </Collapse>

          <Divider>Dialogs</Divider>
          <BasicTable data={data} />
          <Pagination
            currentPage={currentPage}
            totalPages={8}
            onPageChange={handlePageChange}
          />
        </div>
      ),
    },
    {
      key: 'a2',
      label: 'A2',
      children: (
        <>
          <Divider>Shopping</Divider>

          <Divider>Dialogs</Divider>
          <BasicTable data={a2Data} />
          <Pagination
            currentPage={a2CurrentPage}
            totalPages={4}
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
