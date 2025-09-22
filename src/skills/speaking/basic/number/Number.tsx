import { useState, useEffect } from 'react';
import { Divider, Button, Input, Collapse, message } from 'antd';
import { toWords } from 'number-to-words';
import './Number.css';
import { Video, BasicTable, Pagination } from '../../../../components';
import { numbers0, numbers1, numbers2, numbers3, numbers4, numbers5, numbers6, numbers7, numbers8, numbers9, usefulExpressions } from './number';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';

const getRandomNumber = () => Math.floor(Math.random() * 1000);

const { Panel } = Collapse;

export const Number = () => {
  const [randomNumber, setRandomNumber] = useState(getRandomNumber);
  const [inputValue, setInputValue] = useState('');
  
  const {
    data: numbers,
    currentPage: numbersPage,
    handlePageChange: handleNumbersPageChange,
  } = usePaginatedData(numbers0, [
    numbers0,
    numbers1, 
    numbers4, 
    numbers2,
    numbers3,
    numbers7,
    numbers5, 
    numbers6, 
    numbers8,
    numbers9
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
      <Divider>Numbers - числа</Divider>

      <Collapse accordion>
        <Panel header='Vocabulary' key='1'>
          <div className='video'>
            <Video videoId='e0dJWfQHF8Y' />
            <img src='/src/assets/numb.jpg' width={394} />
          </div>
        </Panel>
      </Collapse>

      <p></p>

      <Collapse accordion>
        <Panel header="Useful expressions" key='2'>
          <BasicTable data={usefulExpressions} />
        </Panel>
      </Collapse>

      <Divider>Writing</Divider>

      <div className='container'>
        <span>{randomNumber}</span>

        <Input
          placeholder='Write spelled-out number: twenty-three'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
        />

        <Button type='primary' onClick={checkSpelling}>Check your spelling</Button>
      </div>

      <Divider>Listening</Divider>

      <Collapse accordion>
        <Panel header='Videos' key='1'>
          <div className='video'>
            <Video videoId='-5TuoZWAhQI' />
            <Video videoId='G6c8NjhS1YE' />
            <Video videoId='PhJ5VIR6ExM' />
          </div>
        </Panel>
      </Collapse>

      <Divider>Dialogs</Divider>
      <BasicTable data={numbers} />
      <Pagination currentPage={numbersPage} totalPages={10} onPageChange={handleNumbersPageChange} />
    </div>
  );
};
