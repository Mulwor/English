import { useState, useEffect, KeyboardEvent } from 'react';
import { Divider, Button, Input, message } from 'antd';
import './Colors.css';
import { BasicTable } from '../../components/Table';
import { colors, colors2, colors3, colors4, colors5, colors6 } from '../../data/colors';
import { Pagination } from '../../components/Pagination';
import { usePaginatedData } from '../../hooks/usePaginatedData';

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
    colors2, colors3, colors4, colors5, colors6, 
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

      <p>Ссылки для изучения цветов:</p>

      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=4QakVc28CEc" target="_blank">Веселая песенка из ютуба</a>
        </li>  

        <li>
          <a href="https://ilmish.com/wp-content/uploads/2024/09/Colors-Names-1.png" target="_blank">
            Картинка с цветами
          </a>
        </li>
      </ul>   

      <div className="container">
        <div 
          style={{
            width: "120px",
            height: "33px",
            backgroundColor: randomColor,
            borderRadius: '8px'
          }}
        />
        <Input 
          placeholder="Write the color name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <Button type="primary" onClick={checkSpelling}>Check your spelling</Button>
      </div>

            <p>Dialogs: </p>
      
            <BasicTable data={data} />
      
            <Pagination
              currentPage={currentPage}
              totalPages={6}
              onPageChange={handlePageChange}
            />
    </div>
  );
}