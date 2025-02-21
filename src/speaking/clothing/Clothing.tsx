import { Collapse, Divider, Table } from "antd"
import { columns } from "../../data/sample";
import { allClothes, clothes, clothes1, clothes2, clothes3, clothes4, clothes5, clothes6, clothes7, clothes8, clothes9, clothes10, clothes11 } from "../../data/clothing";
import { Video } from "../../components/Video";
import { BasicTable } from "../../components/Table";
import { Pagination } from "../../components/Pagination";
import { usePaginatedData } from "../../hooks/usePaginatedData";

const { Panel } = Collapse;

export const Clothing = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(clothes, [
    clothes1, clothes2, clothes3, clothes4, clothes5, clothes6, 
    clothes7, clothes8, clothes9, clothes10, clothes11,
  ]);
    
  return (
    <div>
      <Divider>Clothes - одежда</Divider>

      <p>Базовые ресурсы: </p>

      <Divider>Vocabulary</Divider>

      <Collapse accordion>
        <Panel header="Clothing List" key="1">
          <Table
            dataSource={allClothes}
            columns={columns}
            pagination={false}
            size="small"
          />
        </Panel>
      </Collapse>

      <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem'}}>
        <Video videoId="XNhvZtjg2q8" width="410" />
        <Video videoId="E47g3P64SYw" width="410" />
      </div>

      <BasicTable data={data} />
        
      <Pagination currentPage={currentPage} totalPages={12} onPageChange={handlePageChange} />

      <Divider>Задачи для самопроверки</Divider>

      <a href="https://test-english.com/listening/a1/what-are-they-wearing-clothes-listening-test/" >
        1. Задача на освоение устной части. Услышь во что одет человек
      </a>
    </div>
  )
}
