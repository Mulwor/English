import { Collapse, Divider } from 'antd';
import { BasicTable, CollapseWithAccordion, Video, Pagination } from '../../../../components';
import { columns } from '../../../../data/sample';
import { fearsAndPhobias } from './vocab';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';
import {
  fears_01,
  fears_02,
  fears_03,
  fears_04,
  fears_05,
  fears_06,
  fears_07,
  fears_08,
  fears_09,
  fears_10,
  fears_11,
  fears_12,
  fears_13,
  fears_14,
  fears_15,
  fears_16,
  fears_17,
  fears_18,
} from './dialogs';

const { Panel } = Collapse;

export const FearsAndPhobias = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(fears_01, [
    fears_01,
    fears_02,
    fears_03,
    fears_04,
    fears_05,
    fears_06,
    fears_07,
    fears_08,
    fears_09,
    fears_10,
    fears_11,
    fears_12,
    fears_13,
    fears_14,
    fears_15,
    fears_16,
    fears_17,
    fears_18,
  ]);

  return (
    <>
      <Divider>Fears & Phobias (Страхи и фобии)</Divider>

      <p style={{ marginBottom: '8px' }}>
        Цель данного топика - научиться говорить о своих страхах, описывать чувства, объяснять причины и сравнивать разные страхи.
      </p>

      <CollapseWithAccordion
        text={'Fears and phobias vocabulary'}
        data={fearsAndPhobias}
        columns={columns}
      />

      <Divider>Videos</Divider>

      <Collapse accordion>
        <Panel
          header='Videos'
          key='1'
        >
          <div className='video'>
            <Video videoId='QV7nl6j0kfI'></Video>
            <Video videoId='M25ieTfZ1eI'></Video>
          </div>
        </Panel>
      </Collapse>

      <Divider>Dialogs</Divider>

      <BasicTable data={data} />
      <Pagination
        currentPage={currentPage}
        totalPages={18}
        onPageChange={handlePageChange}
      />
    </>
  );
};
