import { useState } from "react";
import { Table, Collapse, Divider } from "antd";
import { allCountries, country, country1, country2, country3, country4, country5, country6 } from "../../data/countries";
import { Video } from "../../components/Video"
import './Countries.css'
import { BasicTable } from "../../components/Table";
import { Pagination } from "../../components/Pagination";

const { Panel } = Collapse;

const columns = [
  { title: "Country", dataIndex: "country", key: "country" },
  { title: "Nationality", dataIndex: "nationality", key: "nationality" },
  { title: "Translation", dataIndex: "translation", key: "translation" },
];

export const Countries = () => {
  const [data, setData] = useState(country);
  const [currentPage, setCurrentPage] = useState(1);
  
  const handlePageChange = (current: number) => {
      setCurrentPage(current);
      if (current === 1) {
        setData(country);
      } else if (current === 2) {
        setData(country1);
      } else if (current === 2) {
        setData(country2);
      } else if (current === 3) {
        setData(country3);
      } else if (current === 4) {
        setData(country4);
      } else if (current === 5) {
        setData(country5);
      } else if (current === 6) {
        setData(country6);
      }else {
        setData(country3);
      }
  };
  
  return (
    <div>

      <Divider>Countries and nationality</Divider>

      <p>Базовые ресурсы: </p>

      <div>
        <Video videoId="NJVV1LDt2hE" width='410'/>

        <Collapse accordion>
          <Panel header="Countries List" key="1">
            <Table
              dataSource={allCountries}
              columns={columns}
              pagination={false}
              size="small"
              />
          </Panel>
        </Collapse>
      </div>

      <Divider>Игра: угадай национальность или страну</Divider>

      <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem'}}>
        <Video videoId="PQE52ke83oI" width='410' />
        <Video videoId="SxZjx0N8Lbo" width='410' />
      </div>

      <Divider>Диалоги</Divider>

      <BasicTable data={data} />

      <Pagination
        currentPage={currentPage}
        totalPages={6}
        onPageChange={handlePageChange}
      />

      <Divider>Подкасты</Divider>

      <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
        <Video videoId="2Qpa1VPWSJg" width='410' />
        <Video videoId='qLR9QD8vxK8' width='410' />
        <Video videoId="QJGZh519tr0" width='410' />
      </div>
    </div>
  )
}

