import { Table, Collapse, Divider } from "antd";
import { BasicTable, Pagination, Video } from "../../../components";
import { allShopping, shopping_1, shopping_10, shopping_2, shopping_3, shopping_4, shopping_5, shopping_6, shopping_7, shopping_8, shopping_9 } from "./shopping";
import { columns } from "../../../data/sample";
import { usePaginatedData } from "../../../hooks/usePaginatedData";
import { CollapseWithAccordion } from "../../../components/Collapse";

const { Panel } = Collapse;

export const Shopping = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(shopping_1, [
    shopping_1, shopping_2, shopping_3, shopping_4, shopping_5, 
    shopping_6, shopping_7, shopping_8, shopping_9, shopping_10
  ]);
  
  return (
    <div>
      <Divider>Shopping</Divider>
      
      <p>Базовые ресурсы</p>
      <CollapseWithAccordion text={'Shopping list'} data={allShopping} columns={columns} />

      <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem', marginBottom: '1rem'}}>
        <Video videoId="KyO_H_mNKNI" />
        <Video videoId="aWSg7MsHYpU" />
      </div>

      <Divider>Dialogs</Divider>
      <BasicTable data={data} />
      <Pagination currentPage={currentPage} totalPages={10} onPageChange={handlePageChange} />


      <Divider>Tasks</Divider>

      <a href="https://www.speaklanguages.com/english/phrases/shopping"> 1. Shopping - 
        here are some English phrases to help you when you go shopping, as well as 
        some of the things you might see.
      </a>

      <a href="https://test-english.com/vocabulary/a1/shops-and-shopping-a1-english-vocabulary/">
        2. Shops and shopping - in this A1 Elementary Vocabulary Lesson, you will learn 
        different common types of shops and useful phrases that are used when shopping. 
        Check the explanation to learn the words and then do the exercises.
      </a>
    </div>
  )
}