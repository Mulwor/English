import { Divider } from 'antd'
import { BasicTable, Pagination, Video } from '../../components'
import { usePaginatedData } from '../../hooks/usePaginatedData';
import { allHobbies, hobbies_01, hobbies_02, hobbies_03, hobbies_04, hobbies_05, hobbies_06, hobbies_07, hobbies_08, hobbies_09 } from '../../data/hobbies';
import { columns } from '../../data/sample';
import { CollapseWithAccordion } from '../../components/Collapse';

export const Hobbies = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(hobbies_01, [
    hobbies_01, hobbies_02, hobbies_03, hobbies_04, hobbies_05, 
    hobbies_06, hobbies_07, hobbies_08, hobbies_09, 
  ]);
  
  return (
    <div>
      <Divider>Hobbies</Divider>

      <CollapseWithAccordion text={'Hobbies list'} data={allHobbies} columns={columns} />
      
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem', marginBottom: '1rem'}}>
        <Video videoId='sKPKYRX311Q' /> 
        <Video videoId='tgVtVoxzwDI' />
        <Video videoId='6NHkCRgmbUI' />
      </div>

      <Divider>Dialogs</Divider>
      <BasicTable data={data} />
      <Pagination currentPage={currentPage} totalPages={9} onPageChange={handlePageChange} />
    </div>
  )
}