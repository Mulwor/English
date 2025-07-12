import { useState, useEffect, KeyboardEvent } from 'react';
import { Divider, Button, Input, message } from 'antd';
import './Colors.css';
import { BasicTable } from '../../../../components';
import { colors, colors2, colors3, colors4, colors5 } from './colors';
import { Pagination } from '../../../../components/Pagination';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';
import { Video } from '../../../../components';

const getRandomColor = () => {
  const colors = [
    'red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown', 'gray', 'black', 'white', 'violet', 'indigo', 'cyan'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const Colors = () => {
  const [randomColor, setRandomColor] = useState(getRandomColor());
  const [inputValue, setInputValue] = useState('');
  const { data, currentPage, handlePageChange } = usePaginatedData(colors, [
    colors, colors2, colors3, colors4, colors5, 
  ]);

  useEffect(() => {
    setInputValue('');
  }, [randomColor]);

  const checkSpelling = () => {
    if (inputValue.trim().toLowerCase() === randomColor.toLowerCase()) {
      message.success('Успешно!');
      setRandomColor(getRandomColor()); 
    } else {
      message.error('Неуспешно! Попробуйте снова.');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      checkSpelling();
    }
  };

  return (
    <div>
      <Divider>Colors</Divider>

      <div style={{display: 'flex', gap: '1rem'}}>
        <Video videoId='4QakVc28CEc' />
        <img src='/src/assets/colors.png' width={555} />
      </div>

      <Divider>Writing</Divider>

      <div className="container">
        <div style={{ width: "120px", height: "33px", backgroundColor: randomColor, borderRadius: '8px'}} />

        <Input 
          placeholder="Write the color name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
        />

        <Button type="primary" onClick={checkSpelling}>Check your spelling</Button>
      </div>

      <Divider>Dialogs</Divider>
      
      <BasicTable data={data} />
      <Pagination currentPage={currentPage} totalPages={5} onPageChange={handlePageChange} />
    </div>
  );
}