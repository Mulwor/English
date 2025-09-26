import { useState, useEffect } from 'react';
import { Divider, Button, Input, Collapse, message, Tabs } from 'antd';
import { toWords } from 'number-to-words';
import './Number.css';
import { Video, BasicTable, Pagination } from '../../../../components';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';
import { numbers_basic_01, numbers_basic_02, numbers_basic_03, numbers_basic_04, numbers_basic_05 } from './data/basic';
import { numbers_elementary_01, numbers_elementary_02, numbers_elementary_03, numbers_elementary_04, numbers_elementary_05 } from './data/elementary';
import { numbers6, numbers8, numbers9 } from './data/preIntermediate';

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
    numbers_elementary_04,
    numbers_elementary_05
  ]);

  const { 
    data: a2Data, 
    currentPage: a2CurrentPage, 
    handlePageChange: a2HandlePageChange 
    } = usePaginatedData(numbers6, [
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

  const tabItems = [
    {
      key: 'a1',
      label: 'A1',
      children: (
        <>
          <Divider>Numbers for A1 (Beginner and elementary)</Divider>

          <Collapse accordion>
            <Panel header='Vocabulary' key='1'>
              <div className='video'>
                <Video videoId='e0dJWfQHF8Y' />
                <img src='/src/assets/numb.jpg' width={394} />
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
        
          <Divider>Полезные выражения</Divider>
          <ol>
            <li>That will be 40 dollars	- Это будет стоить 40</li>
            <li>Here you are. Keep the change. - Держите. Сдачи не надо</li>
            <li>The total is 200 rubles - Итоговая сумма: 200 руб</li>
          </ol>
        </>
      )
    },
    {
      key: 'a2',
      label: 'A2',
      children: (
        <>
          <Divider>Numbers for A2 (Pre-intermediate)</Divider>
        
          <Divider>Dialogs</Divider>

          <BasicTable data={a2Data} />
          <Pagination currentPage={a2CurrentPage} totalPages={3}  onPageChange={a2HandlePageChange} />

          <Divider>Полезные выражения</Divider>
          <ol>
            <li>I am here for two weeks. - Я здесь на две недели.</li>
          </ol>

          <Divider>Полезные выражения - 2</Divider>
          <ol>
            <li>I live at forty-two Maple Street, apartment twelve - Я живу на Мэйпл-стрит, 42, квартира 12</li>
            <li>How much does this cost? - Сколько это стоит?</li>
            <li>It costs fifteen dollars and ninety-nine cents - Это стоит 15 долларов 99 центов</li>
            <li>There are seven days in a week - В неделе семь дней</li>
            <li>This book has three hundred pages - В этой книге триста страниц</li>
            <li>The meeting is at nine o’clock - Встреча в девять часов </li>
            <li>I have been to three countries - Я был(а) в трёх странах</li>
          </ol>
        </>
      ),
    },
  ]

  return (
    <Tabs 
      defaultActiveKey="a1" 
      items={tabItems}
      tabPosition="top"
      type="card"
    />
  );
};
