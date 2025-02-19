import { Collapse, Divider, Table } from "antd"
import { columns } from "../../data/sample";
import { allClothes } from "../../data/clothing";
import { Video } from "../../components/Video";

const { Panel } = Collapse;

export const Clothing = () => {
    // const [data, setData] = useState(country);
    // const [currentPage, setCurrentPage] = useState(1);
    
    // const handlePageChange = (current: number) => {
    //     setCurrentPage(current);
    //     if (current === 1) {
    //       setData(country);
    //     } else if (current === 2) {
    //       setData(country1);
    //     } else if (current === 2) {
    //       setData(country2);
    //     } else if (current === 3) {
    //       setData(country3);
    //     } else if (current === 4) {
    //       setData(country4);
    //     } else if (current === 5) {
    //       setData(country5);
    //     } else if (current === 6) {
    //       setData(country6);
    //     }else {
    //       setData(country3);
    //     }
    // };
    
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

        <a href="https://test-english.com/listening/a1/what-are-they-wearing-clothes-listening-test/">Тест</a>
    </div>
  )
}
