import { Divider } from "antd"
import { Video } from "../../components/Video"
import { greeting, greeting1, greeting2, greeting3 } from "../../data/greeting"
import { BasicTable } from "../../components/Table";
import { Pagination } from "../../components/Pagination";
import { usePaginatedData } from "../../hooks/usePaginatedData";

export const Greeting = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(greeting, [
    greeting, greeting1, greeting2, greeting3,
  ]);
      
  return (
    <>
      <Divider>Greeting - знакомства</Divider>

      <p>Базовые ресурсы: </p>
      
      <div style={{display: 'flex', gap: '1rem', marginBottom: '1rem'}}>
        <Video videoId='5StvZZccECg' width="410" />
        <Video videoId='RLs9lIy5WT0' width="410" />
      </div>

      <Divider>Диалоги</Divider>
      <BasicTable data={data} />

      <Pagination
        currentPage={currentPage}
        totalPages={4}
        onPageChange={handlePageChange}
      />
    </>
  )
}