import { useState, useEffect } from 'react';
import { Divider, Button, Input, message } from 'antd';
import { toWords } from 'number-to-words';
import './Number.css';
import { BasicTable } from '../../components/Table';
import { numbers1, numbers2, numbers3, numbers4 } from '../../data/number'
import { Pagination } from '../../components/Pagination';
import { Video } from '../../components/Video';

const getRandomNumber = () => Math.floor(Math.random() * 1000);

export const Number = () => {
  const [randomNumber, setRandomNumber] = useState(getRandomNumber);
  const [inputValue, setInputValue] = useState('');
  
  const [numbers, setNumbers] = useState(numbers1);
  const [currentPage, setCurrentPage] = useState(1);

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

  const handlePageChange2 = (current: number) => {
    setCurrentPage(current);
    if (current === 1) {
      setNumbers(numbers1);
    } else if (current === 2) {
      setNumbers(numbers2);
    } else if (current === 3) {
      setNumbers(numbers3);
    } else {
      setNumbers(numbers4);
    } 
  };


  return (
    <div>
      <Divider>Numbers</Divider>

      <p>Базовые ресурсы: </p>

      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=e0dJWfQHF8Y" target="_blank">Правильное произношение чисел</a>
        </li>  

        <li>
          <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEge7GY2IA0tVcap1bp8W0JNkkVo4SsI9QZnamNQsfVNPDfFlq1kwqwpOiYlotyUSu2n2Aku_f6fCIKf9EtyvW8S7M1idffY1DkP7-ALLyGS1pFHs-hJA5eRU__umctvvez-nvVwZaAKroQ/s1600/Numbers.jpg" target="_blank">
            Картинка с числами
          </a>
        </li>
      </ul>

      <p>Listening: </p>

      <div className='video-container'>
        <Video videoId='G6c8NjhS1YE' width='410'/>
        <Video videoId='PhJ5VIR6ExM' width='410'/>
        <Video videoId='-5TuoZWAhQI' width='410'/>
      </div>

      <div className='container'>
        <div>Writing: {randomNumber}</div>
        <Input 
          placeholder="Write spelled-out number: twenty-three"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <Button type="primary" onClick={checkSpelling}>Check your spelling</Button>
      </div>

      <p>Dialogs: </p>

      <BasicTable data={numbers} />

      <Pagination
        currentPage={currentPage}
        totalPages={4}
        onPageChange={handlePageChange2}
      />
    </div>
  );
};
