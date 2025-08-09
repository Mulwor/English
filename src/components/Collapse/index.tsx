import { Collapse, Table } from 'antd';

const { Panel } = Collapse;

type typeCollectionOfColumns = {
  title: string;
  dataIndex: string;
  key: string;
};

type collectionOfData = {
  key: string;
  english: string;
  pronunciation: string;
  russian: string;
};

type CollapseWithAccordionProps = {
  text: string;
  data: collectionOfData[];
  columns: typeCollectionOfColumns[];
};

export const CollapseWithAccordion = ({ text, data, columns }: CollapseWithAccordionProps) => {
  return (
    <Collapse accordion>
      <Panel
        header={text}
        key='1'
      >
        <Table
          dataSource={data}
          columns={columns}
          pagination={false}
          size='small'
        />
      </Panel>
    </Collapse>
  );
};
