import { Table, Collapse, Divider } from "antd";
import { allCountries, country, country1, country2, country3, country4, country5, country6 } from "./countries";
import { Video } from "../../../components/Video"
import './Countries.css'
import { BasicTable } from "../../../components/Table";
import { Pagination } from "../../../components/Pagination";
import { usePaginatedData } from "../../../hooks/usePaginatedData";

const { Panel } = Collapse;

const columns = [
  { title: "Country", dataIndex: "country", key: "country" },
  { title: "Phonetics", dataIndex: "phonetics", key: "phonetics" },
  { title: "Nationality", dataIndex: "nationality", key: "nationality" },
  { title: "Translation", dataIndex: "translation", key: "translation" },
];

export const Countries = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(country, [
    country, country1, country2, country3, country4, country5, country6, 
  ]);
  
  return (
    <div>
      <Divider>Countries and nationality</Divider>
        
      <div className="video">
        <Video videoId="NJVV1LDt2hE" />
        <Video videoId="PQE52ke83oI" />
        <Video videoId="SxZjx0N8Lbo" />
      </div>

      <Collapse accordion>
        <Panel header="Countries List" key="1">
          <Table dataSource={allCountries} columns={columns} pagination={false} size="small" />
        </Panel>
      </Collapse>

      <Divider>Dialogs</Divider>

      <BasicTable data={data} />
      <Pagination currentPage={currentPage} totalPages={7} onPageChange={handlePageChange} />

      <Divider>Дополнительные материалы</Divider>

      <div className="video">
        <Video videoId="2Qpa1VPWSJg" />
        <Video videoId='qLR9QD8vxK8' />
        <Video videoId="QJGZh519tr0" />
      </div>
    </div>
  )
}

