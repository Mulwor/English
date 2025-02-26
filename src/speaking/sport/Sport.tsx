import { Table, Collapse, Divider } from "antd"
import { BasicTable, Pagination } from '../../components';
import { sport_01, sport_02, sport_03, sport_04, sport_05, sport_06, sport_07, sport_08, sport_09, sport_10, sport_11, sport_12, sportsData, sportsTypes } from "../../data/sport";
import { columns } from "../../data/sample";
import { usePaginatedData } from "../../hooks/usePaginatedData";

const { Panel } = Collapse;

export const Sport = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(sport_01, [
    sport_01, sport_02, sport_03, sport_04, sport_05, 
    sport_06, sport_07, sport_08, sport_09, sport_10, 
    sport_11, sport_12
  ]);

  return (
    <div>
      <Divider>Sport</Divider>

      <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column'}}>
        <Collapse accordion>
          <Panel header="Sport and verb list" key="1">
            <Table dataSource={sportsTypes} columns={columns} pagination={false} size="small" />
          </Panel>
        </Collapse>
          
        <Collapse accordion>
          <Panel header="Place and inventory list" key="1">
            <Table dataSource={sportsData} columns={columns} pagination={false} size="small" />
          </Panel>
        </Collapse>
      </div>

      <Divider>Dialogs</Divider>
      <BasicTable data={data} />
      <Pagination currentPage={currentPage} totalPages={12} onPageChange={handlePageChange} />
    </div>
  )
}