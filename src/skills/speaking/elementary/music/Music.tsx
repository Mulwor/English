import { Divider } from "antd"
import { BasicTable, Pagination } from '../../../../components';;
import { allFilms, films_01, films_02, films_03, films_04, films_05, films_06, films_07, films_08 } from "./films";
import { allMusic, music_01, music_02, music_03, music_04, music_05, music_06, music_07, music_08 } from "./music";
import { columns } from "../../../../data/sample";
import { usePaginatedData } from "../../../../hooks/usePaginatedData";
import { CollapseWithAccordion } from "../../../../components/Collapse";

export const MusicAndFilms = () => {
  const { 
    data: musicData, 
    currentPage: musicCurrentPage, 
    handlePageChange: musicHandlePageChange 
  } = usePaginatedData(music_01, [
    music_01, music_02, music_03, 
    music_04, music_05, music_06, 
    music_07, music_08
  ]);

  const {
    data: filmsData, 
    currentPage: filmsCurrentPage, 
    handlePageChange: filmsHandlePageChange 
  } = usePaginatedData(films_01, [
    films_01, films_02, films_03, 
    films_04, films_05, films_06, 
    films_07, films_08
  ]);

  return (
    <div>
      <Divider>Music and Films</Divider>

      <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column'}}>
        <CollapseWithAccordion text={'Films list'} data={allFilms} columns={columns} />
        <CollapseWithAccordion text={'Music list'} data={allMusic} columns={columns} />
      </div>
        
      <Divider>Dialogs about musics</Divider> 

      <BasicTable data={musicData} />
      <Pagination currentPage={musicCurrentPage} totalPages={8} onPageChange={musicHandlePageChange} />
                
      <Divider>Dialogs about films</Divider> 

      <BasicTable data={filmsData} />
      <Pagination currentPage={filmsCurrentPage} totalPages={8} onPageChange={filmsHandlePageChange} />
    </div>
  )
}
