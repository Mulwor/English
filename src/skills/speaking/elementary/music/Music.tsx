import { Divider } from 'antd';
import { BasicTable, Pagination } from '../../../../components';
import { allFilms, films_02, films_04, films_05 } from './films';
import { allMusic, music_01, music_02, music_04 } from './music';
import { columns } from '../../../../data/sample';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';
import { CollapseWithAccordion } from '../../../../components/Collapse';

export const MusicAndFilms = () => {
  const {
    data: musicData,
    currentPage: musicCurrentPage,
    handlePageChange: musicHandlePageChange,
  } = usePaginatedData(music_01, [music_01, music_02, music_04, films_02, films_04, films_05]);

  return (
    <div>
      <Divider>Music and Films</Divider>

      <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
        <CollapseWithAccordion
          text={'Films list'}
          data={allFilms}
          columns={columns}
        />
        <CollapseWithAccordion
          text={'Music list'}
          data={allMusic}
          columns={columns}
        />
      </div>

      <Divider>Dialogs about musics and films</Divider>

      <BasicTable data={musicData} />
      <Pagination
        currentPage={musicCurrentPage}
        totalPages={6}
        onPageChange={musicHandlePageChange}
      />
    </div>
  );
};
