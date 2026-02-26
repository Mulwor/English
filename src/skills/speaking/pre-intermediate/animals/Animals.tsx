import { Divider } from 'antd';
import { CollapseWithAccordion, Video } from '../../../../components';
import { columns } from '../../../../data/sample';
import { animalActions, animalAdjectives, animalBodyParts, animalEnvironment, animals } from './vocab';

export const Animals = () => {
  return (
    <>
      <Divider>Animals (животные)</Divider>

      <p>
        Цель данного топика - научиться описывать животных и их категории (дикие, домашние и т.д), сравнивать их между собой, уметь рассказать о них в виде монолога - Мое любимое животное ... потому что ... потому что 
      </p>

      <Divider>Vocabulary</Divider>

      <div style={{display: 'flex', flexDirection: "column", gap: '8px'}}>
        <CollapseWithAccordion text={'All animals'} data={animals} columns={columns} />
        <CollapseWithAccordion text={'Actions - что делают животные'}  data={animalActions} columns={columns} />
        <CollapseWithAccordion text={'Adjectives'} data={animalAdjectives} columns={columns} />
        <CollapseWithAccordion text={'Environment'} data={animalEnvironment} columns={columns} />
        <CollapseWithAccordion text={'Body part - части тела животных'} data={animalBodyParts} columns={columns} />
      </div>

      <Divider>Videos</Divider>

      <Video videoId='https://www.youtube.com/watch?v=H2rkdtup7_o' />
      <Video videoId='https://www.youtube.com/watch?v=oJVv_kU4vr8' />
      <Video videoId='https://www.youtube.com/watch?v=0qBMd55ONss' />
      <Video videoId='https://www.youtube.com/watch?v=ocFW2TnfwAQ' />

      {
      /*  
        <p><strong>Категории животных:</strong></p>

        <ul>
          <li>Wild animals (дикие) - lion, elephant, tiger</li>
          <li>Pets (домашние питомцы) - dog, cat, hamster</li>
          <li>Farm animals (фермерские) - cow, horse, sheep</li>
          <li>Birds (птицы) - parrot, eagle, penguin</li>
          <li>Sea animals (морские) - dolphin, shark, whale</li>
          <li>Insects (насекомые) - butterfly, bee, ant</li>
        </ul> 
        
        // ==================================================

        1. Are you an animal lover?, 
        2. Are you raising any pets?, 
        3. Do you have a pet? If yes,
        4. What is it like? & 
        5. What does it look like?, 
        6. Why do people keep pets?, 
        7. Are pets well looked after in your country?, 
        8. Would you like to have  a pet? 
        9. Have you ever had a rabbit?, 
        10. Which animal are you most afraid of? Why?, 
        12. Which wild animal is the most dangerous? Why?, 
        13. Have you ever been to  a zoo or farm? If yes, Which animals have you seen?, 
        14. Which pets are most popularr in your country?, 
        15. What`s your favourite animal? Why?, 
        16. What`s the strangest animal you have ever eaten?.
       
       
        // =================================================
        
        {
          <strong>Выражение отношения к животным</strong>
          I like ... because ... 
          I'm afraid of ... because ...
          I think ... is cute/interesting/dangerous
        } 

        // =================================================

        {
          <p><strong>Грамматика:</strong></p>
          <ul>
            <li>Present Simple для описания фактов (The lion lives in Africa)</li>
            <li>Степени сравнения прилагательных (big - bigger - the biggest)</li>
            <li>Модальный глагол can/can't для способностей</li>
            <li>Have got/has got для описания внешности</li>
          </ul>
        } 

      <ol>
        <li>
          <strong>Уметь описать животное (5–7 предложений)</strong>
          Ученик должен свободно сказать: What animal it is Where it lives What it eats What it looks like What it can / can’t do --- It is a wild animal. It
          lives in Africa. It is big and strong. It has four legs and a long tail. It eats meat. It can run very fast.
        </li>
        <li>
          <strong>Уметь сравнить двух животных</strong>A tiger is bigger than a cat. A dog is friendlier than a wolf. An elephant is heavier than a horse.
        </li>
        <li>
          <strong>Уметь отвечать на простые вопросы без подготовки</strong>
          Where does a lion live? Can a penguin fly? What does a cow eat? Is a snake dangerous? Он отвечает быстро и простыми предложениями.
        </li>
        <li>
          <strong>Описать любимое животное (мини-монолог)</strong>
          Цель: говорить 30–60 секунд без остановки. Пример структуры: My favourite animal is… It lives… It looks… It eats… I like it because…
        </li>
      </ol>
     */
      }
    </>
  );
};

