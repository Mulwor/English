import { Table, Collapse, Divider } from "antd"
import { BasicTable, Pagination } from '../../components';;
import { allFilms, films_01, films_02, films_03, films_04, films_05, films_06, films_07, films_08 } from "../../data/films";
import { allMusic, music_01, music_02, music_03, music_04, music_05, music_06, music_07, music_08 } from "../../data/music";
import { columns } from "../../data/sample";
import { usePaginatedData } from "../../hooks/usePaginatedData";

const { Panel } = Collapse;

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
        <Collapse accordion>
          <Panel header="Films list" key="1">
            <Table dataSource={allFilms} columns={columns} pagination={false} size="small" />
          </Panel>
        </Collapse>

        
        <Collapse accordion>
          <Panel header="Music list" key="1">
            <Table dataSource={allMusic} columns={columns} pagination={false} size="small" />
          </Panel>
        </Collapse>
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
