import { Divider } from 'antd';
import { BasicTable, Pagination } from '../../../../components';
import { CollapseWithAccordion } from '../../../../components/Collapse';
import { columns } from '../../../../data/sample';
import { vocabulary_money, a1_money_01, a1_money_02, a1_money_03, a1_money_04, a1_money_05, a1_money_06, a1_money_07 } from './data/a1';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';

export const Money = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(a1_money_01, [
    a1_money_01,
    a1_money_02,
    a1_money_03,
    a1_money_04,
    a1_money_05,
    a1_money_06,
    a1_money_07,
  ]);

  return (
    <div>
      <Divider>Money - деньги</Divider>

      <CollapseWithAccordion
        text={'Vocabulary'}
        data={vocabulary_money}
        columns={columns}
      />

      <Divider>Dialogs</Divider>
      <BasicTable data={data} />
      <Pagination
        currentPage={currentPage}
        totalPages={7}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
