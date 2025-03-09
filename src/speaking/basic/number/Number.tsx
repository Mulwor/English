import { useState, useEffect } from 'react';
import { Divider, Button, Input, message } from 'antd';
import { toWords } from 'number-to-words';
import './Number.css';
import { Video, BasicTable, Pagination } from '../../../components';
import { numbers1, numbers2, numbers4 } from './number';
import { usePaginatedData } from '../../../hooks/usePaginatedData';

const getRandomNumber = () => Math.floor(Math.random() * 1000);

export const Number = () => {
  const [randomNumber, setRandomNumber] = useState(getRandomNumber);
  const [inputValue, setInputValue] = useState('');
  const { data: numbers, currentPage: numbersPage, handlePageChange: handleNumbersPageChange } = usePaginatedData(numbers1, [
    numbers1, numbers2, numbers4
  ]);

  useEffect(() => {
    setInputValue('');
  }, [randomNumber]);

  const checkSpelling = () => {
    const spelledNumber = toWords(randomNumber).toLowerCase();
   
    if (inputValue.trim().toLowerCase() === spelledNumber) {
      message.success('Успешно!');
      setRandomNumber(getRandomNumber());
    } else {
      message.error('Неуспешно! Попробуйте снова.');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      checkSpelling();
    }
  };

  return (
    <div>
      <Divider>Numbers</Divider>

      <div className='video'>
        <Video videoId='e0dJWfQHF8Y' />
        <img src='/src/assets/numb.jpg' width={394} />
      </div>

      <Divider>Writing</Divider>
      <div className='container'>
        <span>{randomNumber}</span>
        <Input 
          placeholder="Write spelled-out number: twenty-three"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <Button type="primary" onClick={checkSpelling}>Check your spelling</Button>
      </div>

      <Divider>Listening</Divider>

      <div className='video'>
        <Video videoId='-5TuoZWAhQI'/>
        <Video videoId='G6c8NjhS1YE'/>
        <Video videoId='PhJ5VIR6ExM'/>
      </div>

      <Divider>Dialogs</Divider>
      <BasicTable data={numbers} />
      <Pagination currentPage={numbersPage} totalPages={3} onPageChange={handleNumbersPageChange} />
    </div>
  );
};
