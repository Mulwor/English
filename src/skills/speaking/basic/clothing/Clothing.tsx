import { Collapse, Divider } from 'antd';
import { columns } from '../../../../data/sample';
import {
  allClothes,
  clothes,
  clothes1,
  clothes12,
  clothes15,
  clothes13,
  clothes14,
  clothes2,
  clothes3,
  clothes4,
  clothes16,
  clothes17,
  clothes5,
} from './clothing';
import { Video } from '../../../../components';
import { BasicTable } from '../../../../components';
import { Pagination } from '../../../../components/Pagination';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';
import { CollapseWithAccordion } from '../../../../components/Collapse';

const { Panel } = Collapse;

export const Clothing = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(clothes2, [
    clothes2,
    clothes3,
    clothes4,
    clothes5,
    clothes12,
    clothes13,
    clothes14,
    clothes15,
    clothes16,
    clothes17,
  ]);

  const {
    data: dialogsVideo,
    currentPage: dialogsVideoPage,
    handlePageChange: handlePageChangeDialogsVideo,
  } = usePaginatedData(clothes, [clothes, clothes1]);

  return (
    <div>
      <Divider>Clothes - одежда</Divider>
      <CollapseWithAccordion
        text={'Vocabulary'}
        data={allClothes}
        columns={columns}
      />

      <Divider>Listening</Divider>

      <Collapse accordion>
        <Panel
          header='Videos'
          key='2'
        >
          <div className='video'>
            <Video videoId='XNhvZtjg2q8' />
            <Video videoId='E47g3P64SYw' />
          </div>

          <Divider>Video-script</Divider>
          <BasicTable data={dialogsVideo} />
          <Pagination
            currentPage={dialogsVideoPage}
            totalPages={2}
            onPageChange={handlePageChangeDialogsVideo}
          />
        </Panel>
      </Collapse>

      <Divider>Dialogs</Divider>

      <BasicTable data={data} />
      <Pagination
        currentPage={currentPage}
        totalPages={10}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
