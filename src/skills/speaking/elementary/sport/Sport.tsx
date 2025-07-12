import { Divider } from "antd"
import { BasicTable, Pagination, Video } from '../../../../components';
import { sport_01, sport_02, sport_03, sport_04, sport_05, sport_06, sport_07, sport_08, sport_09, sport_10, sport_11, sport_12, sportsData, sportsTypes } from "./sport";
import { columns } from "../../../../data/sample";
import { usePaginatedData } from "../../../../hooks/usePaginatedData";
import { CollapseWithAccordion } from "../../../../components/Collapse";

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
        <CollapseWithAccordion text={'Sport and verb list'} data={sportsTypes} columns={columns} />
        <CollapseWithAccordion text={'Place and inventory list'} data={sportsData} columns={columns} />  
      </div>

      <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem', marginBottom: '1rem'}}>
        <Video videoId="JUpxmE1MuQQ" />
        <Video videoId="_RN6DjnslOM" />
        <Video videoId="mgSm4EoUYTQ" />
      </div>

      <Divider>Dialogs</Divider>
      <BasicTable data={data} />
      <Pagination currentPage={currentPage} totalPages={12} onPageChange={handlePageChange} />
    </div>
  )
}