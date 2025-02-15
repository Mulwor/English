import { useState, useEffect, KeyboardEvent } from 'react';
import { Divider, Button, Input, message } from 'antd';
import { toWords } from 'number-to-words';
import './Number.css';
import { ColorGame } from './Color';
import { BasicTable } from '../components/Table';

const getRandomNumber = () => Math.floor(Math.random() * 1000);

export const Number= () => {
  const [randomNumber, setRandomNumber] = useState(getRandomNumber);
  const [inputValue, setInputValue] = useState('');

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

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      checkSpelling();
    }
  };

  return (
    <div>
      <Divider>Numbers</Divider>

      <p>Ссылки для изучения numbers: </p>

      <ul>
        <li>
          <a href="https://www.youtube.com/watch?v=e0dJWfQHF8Y" target="_blank">Веселая песенка из ютуба</a>
        </li>  

        <li>
          <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEge7GY2IA0tVcap1bp8W0JNkkVo4SsI9QZnamNQsfVNPDfFlq1kwqwpOiYlotyUSu2n2Aku_f6fCIKf9EtyvW8S7M1idffY1DkP7-ALLyGS1pFHs-hJA5eRU__umctvvez-nvVwZaAKroQ/s1600/Numbers.jpg" target="_blank">
            Картинка с числами
          </a>
        </li>
      </ul>   

      <div className='container'>
        <div>Random: {randomNumber}</div>
        <Input 
          placeholder="Write spelled-out number: twenty-three"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <Button type="primary" onClick={checkSpelling}>Check your spelling</Button>
      </div>

      <ColorGame />

      <Divider>Диалоги на тему numbers and colors</Divider>

      <BasicTable english='Valera' russian='and' />
    </div>
  );
};
