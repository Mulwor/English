import { Divider } from 'antd';
import './ReadingAndListeningA1.css';

export const ReadingAndListeningA1 = () => {
  return (
    <>
      <Divider>Reading</Divider>

      <ul>
        <li>
          <a href="https://english-e-reader.net/level/starter"  target='_blank'>Адаптированные книги уровня Beginner</a>
        </li>

        <li>
          <a href="https://english-e-reader.net/level/elementary" target='_blank'>Адаптированные книги уровня Elementary</a>
        </li>

        <li>
          <a href="https://test-english.com/reading/a1/" target='_blank'>Тесты на понимания текста</a>
        </li>
      </ul>

      <Divider>Listening</Divider>

      <ul>
        <li>
          <a href='https://www.youtube.com/playlist?list=PLSV0vsgFaay-nvySnlQ8AeVxmGNTAuyVk' target='_blank'>Muzzy </a>
          is an educational animated series created by the BBC for learning English. It is designed for beginners (A1 level) and is suitable for both 
          children and adults who are just starting to learn the language.
        </li>

        <li>
          <a href='https://www.youtube.com/playlist?list=PLc0_DKGuWp_2GK_ZyY81hiV_vdMaUmezE' target='_blank'>Podcasts</a>
        </li>

        <li>
          <a href='https://www.youtube.com/playlist?list=PLdYSWqTrWP2jyqWIdjsATbrb11uN_BMrF' target='_blank'>Extra </a>
          is an educational sitcom designed for English learners at the A2-B1 level. It consists of 30 episodes and is a fun way to practice English.
        </li>

        <li>
          <a href='https://www.youtube.com/playlist?list=PLhNRdHEdUQewzYZ0X6gt3x9_CVen_HldI' target='_blank'>Podcasts</a>
        </li>
    </ul>
    </>
  )
}