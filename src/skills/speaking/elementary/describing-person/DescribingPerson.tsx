import { Collapse, Divider } from 'antd';
import { CollapseWithAccordion } from '../../../../components/Collapse';
import { columns } from '../../../../data/sample';
import {
  appearance,
  describingPerson_01,
  describingPerson_03,
  describingPerson_06,
  describingPerson_08,
  describingPerson_10,
  describingPerson_11,
  describingPerson_12,
  describingPerson_13,
  hairAndEyes,
  personality,
} from './describing-person';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';
import { Pagination, BasicTable, Video } from '../../../../components';

const { Panel } = Collapse;

export const DescribingPerson = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(describingPerson_01, [
    describingPerson_01,
    describingPerson_06,
    describingPerson_08,
    describingPerson_03,
    describingPerson_10,
    describingPerson_11,
    describingPerson_12,
    describingPerson_13,
  ]);

  return (
    <div>
      <Divider>Describing person</Divider>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
        <CollapseWithAccordion
          text={'Appearance'}
          data={appearance}
          columns={columns}
        />
        <CollapseWithAccordion
          text={'Hear and eyes'}
          data={hairAndEyes}
          columns={columns}
        />
        <CollapseWithAccordion
          text={'Personality'}
          data={personality}
          columns={columns}
        />
      </div>

      <Divider>Listening</Divider>

      <Collapse accordion>
        <Panel
          header='Videos'
          key='1'
        >
          <div className='video'>
            <Video videoId='KRO9MhBo604' />
            <Video videoId='x0YQX7gGkQs' />
            <Video videoId='Uwk_rJcTcBg' />
            <Video videoId='zT5IiE9m9oY' />
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

      <Divider>Tasks and listening</Divider>
      <Collapse accordion>
        <Panel
          header='Videos'
          key='1'
        >
          <div className='video'>
            <Video videoId='XK22iAxg3BI' />
            <Video videoId='YsDfuAiIzDE' />
            <Video videoId='etGK_zflaZE' />
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};
