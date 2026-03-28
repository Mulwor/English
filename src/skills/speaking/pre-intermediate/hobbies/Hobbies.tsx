import { Divider } from 'antd';
import { BasicTable, CollapseWithAccordion, Pagination } from '../../../../components';
import { columns } from '../../../../data/sample';
import { hobbiesVocabulary } from './vocab';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';
import {
  hobbies_01,
  hobbies_02,
  hobbies_03,
  hobbies_04,
  hobbies_05,
  hobbies_06,
  hobbies_07,
  hobbies_08,
  hobbies_09,
  hobbies_10,
  hobbies_11,
  hobbies_12,
  hobbies_13,
  hobbies_14,
  hobbies_15,
} from './dialogs';

export const HobbiesAndFreeTime = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(hobbies_01, [
    hobbies_01,
    hobbies_02,
    hobbies_03,
    hobbies_04,
    hobbies_05,
    hobbies_06,
    hobbies_07,
    hobbies_08,
    hobbies_09,
    hobbies_10,
    hobbies_11,
    hobbies_12,
    hobbies_13,
    hobbies_14,
    hobbies_15,
  ]);

  return (
    <>
      <Divider>Hobbies & Free Time (Хобби и свободное время)</Divider>

      <p>
        Цель этого топика - научиться говорить о своих увлечениях (Talk about hobbies), любимых занятиях (Favorite hobbies) и планах на свободное время (Plans
        for free time). Ну и конечно обсуждать как часто ты этим занимаешься - всегда, редко, иногда.
      </p>

      <Divider>Vocabulary</Divider>
      <CollapseWithAccordion
        text={'All vocabulary daily activities'}
        data={hobbiesVocabulary}
        columns={columns}
      />

      <BasicTable data={data} />
      <Pagination
        currentPage={currentPage}
        totalPages={15}
        onPageChange={handlePageChange}
      />
    </>
  );
};
