import { Divider } from 'antd';

export const ReadingAndListeningA1 = () => {
  return (
    <>
      <Divider>Reading and Listening</Divider>

      <h4>
        В этом разделе необходимо увеличить словарный запас и начать читать адаптированные книги.
        Это те книги, которые подстроены под уровни владения языком.
      </h4>

      <ul>
        <Divider>Reading</Divider>

        <p>
          Для того, чтобы читать адаптированные книги уровня beginner (starter) необходимо знать
          около 600-800 слов, а для чтения уровня elementary около 1500 слов, а для уровня
          pre-intermediate уже должен знать от 1500-2500 слов.
        </p>

        <p>
          Данный словарный запас можно получить двумя способами - выучить все слова без контекста
          или сразу разбирать в контексте через адаптированные книги. Стоит отметить, что первый
          способ должен быть только до уровня elementary, а затем все слова начиная с уровня
          pre-intermediate выучить уже в контексте. Также у некоторых адаптированных книг есть
          аудио-дорожка с помощью него можно улучшить и listening
        </p>

        <li>
          <a
            href='https://english-e-reader.net/level/starter'
            target='_blank'
          >
            Адаптированные книги уровня Beginner
          </a>
        </li>

        <li>
          <a
            href='https://english-e-reader.net/level/elementary'
            target='_blank'
          >
            Адаптированные книги уровня Elementary
          </a>
        </li>

        <li>
          <a
            href='https://test-english.com/reading/a1/'
            target='_blank'
          >
            Тесты на понимания текста Beginner-Elementary
          </a>
        </li>

        <li>
          <a
            href='https://english-e-reader.net/level/pre-intermediate'
            target='_blank'
          >
            Адаптированные книги уровня Pre-intermediate
          </a>
        </li>

        <li>
          <a
            href='https://test-english.com/reading/a2/'
            target='_blank'
          >
            Тесты на понимания текста Pre-intermediate
          </a>
        </li>
      </ul>

      <Divider>Listening</Divider>

      <p>
        Иногда бывает так, что у нас есть словарный запас необходимый и мы хотим прокачать только
        listening, но не затрагивая адаптированные книги. В этом нам поможет уже адаптированные
        listening под определенные уровни.
      </p>

      <ul>
        <li>
          <a
            href='https://www.youtube.com/playlist?list=PLSV0vsgFaay-nvySnlQ8AeVxmGNTAuyVk'
            target='_blank'
          >
            Muzzy
          </a>
          <span style={{ marginLeft: '3px' }}>
            - образовательный анимационный сериал, созданный BBC для изучения английского языка. Он
            рассчитан на начинающих (уровень beginner-elementary) и подходит как детям, так и
            взрослым, которые только начинают изучать язык.
          </span>
        </li>

        <li>
          <a
            href='https://www.youtube.com/playlist?list=PLc0_DKGuWp_2GK_ZyY81hiV_vdMaUmezE'
            target='_blank'
          >
            Podcasts
          </a>
          <span style={{ marginLeft: '3px' }}>- для уровня beginner-elementary на разные темы</span>
        </li>

        <li>
          <a
            href='https://www.youtube.com/playlist?list=PLdYSWqTrWP2jyqWIdjsATbrb11uN_BMrF'
            target='_blank'
          >
            Extra
          </a>
          is an educational sitcom designed for English learners at the A2-B1 level. It consists of
          30 episodes and is a fun way to practice English.
        </li>

        <li>
          <a
            href='https://www.youtube.com/playlist?list=PLhNRdHEdUQewzYZ0X6gt3x9_CVen_HldI'
            target='_blank'
          >
            Podcasts
          </a>
          <span style={{ marginLeft: '3px' }}>
            - для уровня elementary plus или pre-intermediate
          </span>
        </li>

        <li>
          <a
            href='https://www.youtube.com/playlist?list=PLhNRdHEdUQewzYZ0X6gt3x9_CVen_HldI'
            target='_blank'
          >
            Podcasts
          </a>
          <span style={{ marginLeft: '3px' }}>
            - для уровня pre-intermediate и intermediate minus
          </span>
        </li>
      </ul>
    </>
  );
};
