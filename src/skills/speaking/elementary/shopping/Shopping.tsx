import { Collapse, Divider } from 'antd';
import { BasicTable, Pagination, Video } from '../../../../components';
import { columns } from '../../../../data/sample';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';
import { CollapseWithAccordion } from '../../../../components/Collapse';
import { vocabulary_shopping } from './data/a1';
import { a1_shopping_01, a1_shopping_02, a1_shopping_03, a1_shopping_04, a1_shopping_05, a1_shopping_06, a1_shopping_07, a1_shopping_08 } from './data/a1';

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

  return (
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
                2. Shops and shopping - in this A1 Elementary Vocabulary Lesson, you will learn different common types of shops and useful phrases that are used
                when shopping. Check the explanation to learn the words and then do the exercises.
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
  );
};
