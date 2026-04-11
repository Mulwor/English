import { Collapse, Divider } from 'antd';
import { BasicTable, CollapseWithAccordion, Video, Pagination } from '../../../../components';
import { columns } from '../../../../data/sample';
import { fearsAndPhobias } from './vocab';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';
import {
  fears_dialog_01,
  fears_dialog_02,
  fears_07,
  fears_09,
    fears_11,
    fears_13,
    fears_15,
    fears_17,
} from './dialogs';

const { Panel } = Collapse;

export const FearsAndPhobias = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(fears_dialog_01, [
    fears_dialog_01,
    fears_dialog_02,
    fears_07,
    fears_09,
    fears_11,
    fears_13,
    fears_15,
    fears_17,
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
        totalPages={8}
        onPageChange={handlePageChange}
      />
    </>
  );
};
