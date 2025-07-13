import { Table, Collapse, Divider } from "antd";
import { allCountries, country, country1, country2, country3, country4, country5, country6 } from "./countries";
import { Video } from "../../../../components"
import { BasicTable } from "../../../../components";
import { Pagination } from "../../../../components/Pagination";
import { usePaginatedData } from "../../../../hooks/usePaginatedData";

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
      <Divider>Countries and nationality - страны и национальности</Divider>

        <Collapse accordion>
          <Panel header="Vocabulary" key="1">
            <Table dataSource={allCountries} columns={columns} pagination={false} size="small" />
          </Panel>
        </Collapse>

        
      <Divider>Listening</Divider>

        <Collapse accordion>
          <Panel header="Videos" key="2">
            <div className="video">
              <Video videoId="NJVV1LDt2hE" />
              <Video videoId="PQE52ke83oI" />
              <Video videoId="SxZjx0N8Lbo" />
            </div>
          </Panel>
        </Collapse>
      
      <Divider>Dialogs</Divider>

      <BasicTable data={data} />
      <Pagination currentPage={currentPage} totalPages={7} onPageChange={handlePageChange} />

      <Divider>A2+ videos</Divider>

      <Collapse accordion>
        <Panel header="Videos" key="2">
          <div className="video">
            <Video videoId="2Qpa1VPWSJg" />
            <Video videoId='qLR9QD8vxK8' />
            <Video videoId="QJGZh519tr0" />
          </div>
        </Panel>
      </Collapse>
    </div>
  )
}

