import { useState, useEffect } from 'react';
import { Divider, Button, Input, Collapse, message } from 'antd';
import { toWords } from 'number-to-words';
import './Number.css';
import { Video, BasicTable, Pagination } from '../../../../components';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';
import { numbers_basic_01, numbers_basic_02, numbers_basic_03, numbers_basic_04, numbers_basic_05 } from './data/basic';
import { numbers_elementary_01, numbers_elementary_02, numbers_elementary_03 } from './data/elementary';

const getRandomNumber = () => Math.floor(Math.random() * 1000);

const { Panel } = Collapse;

export const Number = () => {
  const [randomNumber, setRandomNumber] = useState(getRandomNumber);
  const [inputValue, setInputValue] = useState('');

  const {
    data: numbers,
    currentPage: numbersPage,
    handlePageChange: handleNumbersPageChange,
  } = usePaginatedData(numbers_basic_01, [
    numbers_basic_01,
    numbers_basic_02,
    numbers_basic_03,
    numbers_basic_04,
    numbers_elementary_01,
    numbers_basic_05,
    numbers_elementary_02,
    numbers_elementary_03,
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
    <>
      <Divider>Numbers - числа</Divider>

      <Collapse accordion>
        <Panel
          header='Vocabulary'
          key='1'
        >
          <div className='video'>
            <Video videoId='e0dJWfQHF8Y' />
            <img
              src='/src/assets/numb.jpg'
              width={394}
            />
          </div>
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

        <Button
          type='primary'
          onClick={checkSpelling}
        >
          Check your spelling
        </Button>
      </div>

      <Divider>Listening</Divider>

      <Collapse accordion>
        <Panel
          header='Videos'
          key='1'
        >
          <div className='video'>
            <Video videoId='-5TuoZWAhQI' />
            <Video videoId='G6c8NjhS1YE' />
            <Video videoId='PhJ5VIR6ExM' />
          </div>
        </Panel>
      </Collapse>

      <Divider>Dialogs</Divider>
      <BasicTable data={numbers} />
      <Pagination
        currentPage={numbersPage}
        totalPages={8}
        onPageChange={handleNumbersPageChange}
      />

      <Divider>Полезные выражения</Divider>
      <ol>
        <li>That will be 40 dollars - Это будет стоить 40</li>
        <li>Here you are. Keep the change. - Держите. Сдачи не надо</li>
        <li>The total is 200 rubles - Итоговая сумма: 200 руб</li>
      </ol>
    </>
  );
};
