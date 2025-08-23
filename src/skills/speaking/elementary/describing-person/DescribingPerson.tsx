import { Divider } from 'antd';
import { CollapseWithAccordion } from '../../../../components/Collapse';
import { columns } from '../../../../data/sample';
import {
  appearance,
  describingPerson_01,
  describingPerson_02,
  describingPerson_03,
  describingPerson_04,
  describingPerson_05,
  describingPerson_06,
  describingPerson_07,
  describingPerson_08,
  describingPerson_09,
  describingPerson_10,
  describingPerson_11,
  describingPerson_12,
  describingPerson_13,
  hairAndEyes,
  personality,
} from './describing-person';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';
import { Pagination, BasicTable, Video } from '../../../../components';

export const DescribingPerson = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(describingPerson_01, [
    describingPerson_01,
    describingPerson_02,
    describingPerson_03,
    describingPerson_04,
    describingPerson_05,
    describingPerson_06,
    describingPerson_07,
    describingPerson_08,
    describingPerson_09,
    describingPerson_10,
    describingPerson_11,
    describingPerson_12,
    describingPerson_13,
  ]);

  return (
    <div>
      <Divider>Describing person</Divider>

      <div>! Разобрать Appearance and Personality</div>

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

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          marginTop: '1rem',
          marginBottom: '1rem',
        }}
      >
        <Video videoId='KRO9MhBo604' />
        <Video videoId='x0YQX7gGkQs' />
        <Video videoId='Uwk_rJcTcBg' />
        <Video videoId='zT5IiE9m9oY' />
      </div>

      <Divider>Dialogs</Divider>
      <BasicTable data={data} />
      <Pagination
        currentPage={currentPage}
        totalPages={9}
        onPageChange={handlePageChange}
      />

      <Divider>Tasks</Divider>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          marginTop: '1rem',
          marginBottom: '1rem',
        }}
      >
        <Video videoId='XK22iAxg3BI' />
        <Video videoId='YsDfuAiIzDE' />
      </div>

      <Divider>Reading and listening</Divider>
      <Video videoId='etGK_zflaZE' />
    </div>
  );
};
