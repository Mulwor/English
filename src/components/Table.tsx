import { Table } from 'antd';

interface BasicTableProps {
  english: string;
  russian: string
}

export const BasicTable = ({ english, russian }: BasicTableProps) => {
  const dataSource = [
    { key: '1', english, russian },
    { key: '2', english, russian }
  ];
  
  const columns = [
    { title: 'English', dataIndex: 'english', key: 'name' },
    { title: 'Russian', dataIndex: 'russian', key: 'age' },
  ];
  
  return <Table dataSource={dataSource} columns={columns} />;
};
