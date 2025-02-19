import { useState } from "react";
import { Divider } from "antd"
import { Video } from "../../components/Video"
import { greeting, greeting1, greeting2, greeting3 } from "../../data/greeting"
import { BasicTable } from "../../components/Table";
import { Pagination } from "../../components/Pagination";

export const Greeting = () => {
  const [data, setData] = useState(greeting);
  const [currentPage, setCurrentPage] = useState(1);
  
  
    const handlePageChange = (current: number) => {
        setCurrentPage(current);
        if (current === 1) {
          setData(greeting);
        } else if (current === 2) {
          setData(greeting1);
        } else if (current === 3) {
          setData(greeting2);
        } else {
          setData(greeting3);
        }
    };
    
  
  return (
    <>
      <Divider>Greeting - знакомства</Divider>

      <p>Базовые ресурсы: </p>
      
      <div style={{display: 'flex', gap: '1rem', marginBottom: '1rem'}}>
        <Video videoId='5StvZZccECg' width="410" />
        <Video videoId='RLs9lIy5WT0' width="410" />
      </div>

      <BasicTable data={data} />

      <Pagination
        currentPage={currentPage}
        totalPages={4}
        onPageChange={handlePageChange}
      />
    </>
  )
}