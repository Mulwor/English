import { Divider } from 'antd'
import { BasicTable, Pagination } from '../../../../components'
import { CollapseWithAccordion } from '../../../../components/Collapse'
import { columns } from '../../../../data/sample'
import { 
  allMoneyVocabulary, money_01, money_02, money_03, money_04, 
  money_05, money_06, money_07, money_08, money_09 
} from './money'
import { usePaginatedData } from '../../../../hooks/usePaginatedData'

export const Money = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(money_01, [
    money_01, money_02, money_03, money_04, money_05, 
    money_06, money_07, money_08, money_09, 
  ]);

  return (
    <div>
      <Divider>Hobbies</Divider>

      <CollapseWithAccordion text={'Money list'} data={allMoneyVocabulary} columns={columns} />

      <Divider>Dialogs</Divider>
      <BasicTable data={data} />
      <Pagination currentPage={currentPage} totalPages={9} onPageChange={handlePageChange} />
    </div>
  )
}