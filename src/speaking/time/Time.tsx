import { Divider } from "antd"
import { BasicTable } from "../../components/Table"
import { usePaginatedData } from "../../hooks/usePaginatedData";
import { numbers3, numbers5, numbers6 } from "../../data/number";
import { Pagination } from "../../components/Pagination";

export const Time = () => {
    const { data: time, currentPage: timePage, handlePageChange: handleNumbersPageTime } = usePaginatedData(numbers3, [
      numbers3, numbers5, numbers6
    ]);
    
  return (
    <div>
      <h1>Данный раздел в процессе доработки, в топиков его не было. Но я решил добавить. Появится со второй версии</h1>
      <Divider>Time</Divider>
      <BasicTable data={time} />
      <Pagination currentPage={timePage} totalPages={3} onPageChange={handleNumbersPageTime} />
    </div>
  )
}