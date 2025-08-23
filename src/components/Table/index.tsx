import { Table } from 'antd';
import './index.css';

interface TableData {
  english: string;
  russian: string;
}

interface BasicTableProps {
  data: TableData[];
}

export const BasicTable = ({ data }: BasicTableProps) => {
  const columns = [
    { title: 'English', dataIndex: 'english', key: 'name' },
    { title: 'Russian', dataIndex: 'russian', key: 'age' },
  ];

  return (
    <Table
      dataSource={data}
      columns={columns}
      pagination={false}
    />
  );
};
