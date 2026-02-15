import { Collapse, Divider } from 'antd';
import { BasicTable, Pagination, Video } from '../../../../components';
import { sport_01, sport_03, sport_05, sport_07, sport_09, sport_11, sport_12, sportsData, sportsTypes } from './sport';
import { columns } from '../../../../data/sample';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';
import { CollapseWithAccordion } from '../../../../components/Collapse';

const { Panel } = Collapse;

export const Sport = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(sport_01, [sport_01, sport_03, sport_05, sport_07, sport_09, sport_11, sport_12]);

  return (
    <div>
      <Divider>Sport</Divider>

      <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
        <CollapseWithAccordion
          text={'Sport and verb vocabulary'}
          data={sportsTypes}
          columns={columns}
        />
        <CollapseWithAccordion
          text={'Place and inventory vocabulary'}
          data={sportsData}
          columns={columns}
        />
      </div>

      <Divider>Listening</Divider>

      <Collapse accordion>
        <Panel
          header='Videos'
          key='2'
        >
          <div className='video'>
            <Video videoId='JUpxmE1MuQQ' />
            <Video videoId='_RN6DjnslOM' />
            <Video videoId='mgSm4EoUYTQ' />
          </div>
        </Panel>
      </Collapse>

      <Divider>Dialogs</Divider>
      <BasicTable data={data} />
      <Pagination
        currentPage={currentPage}
        totalPages={7}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
