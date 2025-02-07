import { Collapse } from 'antd';
import type { CollapseProps } from 'antd';

interface Grammar {
  id: number;
  item: string;
  description: string;
}

export const Grammar = ({id, item, description}: Grammar) => {
  const items: CollapseProps['items'] = [
    {
      key: id,
      label: item,
      children: <p>{description}</p>,
    }
  ]

  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  
  return (
    <Collapse 
      size="small"
      items={items} 
      onChange={onChange} 
    />
  );
}