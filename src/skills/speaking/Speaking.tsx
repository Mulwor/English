import { useState } from 'react';
import { Divider, Drawer, List } from "antd";

export const Speaking = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [drawerContent, setDrawerContent] = useState<{title: string, items: string[]}>({title: '', items: []});

  const levelData = {
    a0: {
      title: "A0 (beginner / starter)",
      items: [
        "Вы знаете алфавит, можете считать по-английски.",
        "Вы можете сообщать время и дату на английском языке.",
        "Вы можете сказать о себе несколько простых предложений.",
        "Вы можете ответить на элементарные вопросы о себе, своем хобби.",
        "Вы знаете названия некоторых профессий, стран мира, национальностей.",
        "Вы можете знакомиться с людьми, используя несколько простых фраз.",
        "Вы можете поддержать разговор и поговорить о погоде.",
        "Вы можете сделать базовые покупки в магазине и заказать блюдо в ресторане.",
        "-------------------------------- Список тем: ---------------------------------",
        "Знакомство",
        "Семья и друзья",
        "Люди, страны и национальности",
        "Числа и цвета",
        "Еда и напитки",
        "Работа",
        "Хобби",
        "Распорядок дня",
        "Погода",
        "Путешествия",
        "Посещение магазинов и ресторанов",
        "Деньги",
        "Одежда",
        "В гостинице, на заправке, в офисе",
      ]
    },
    a1: {
      title: "A1 (elementary)",
      items: [
        "Вы можете рассказать о себе, своей семье и доме несколькими простыми предложениями.",
        "Вы знаете, как рассказать о своих предпочтениях и увлечениях.",
        "Вы с легкостью описываете ваш рабочий день и отдых в выходные.",
        "Вы можете поделиться собеседником о своих планах на отпуск.",
        "Вы можете совершать покупки в магазине за границей или общаться с персоналом в отеле в пределах знакомой вам лексики.",
        "Вы можете говорить на простые бытовые темы.",
        "Вы можете отвечать на простые вопросы в рамках знакомых вам тем.",
        "-------------------------------- Список тем: ---------------------------------",
        "About myself and my family",
        "Countries and Nationalities",
        "Personal Preferences (likes/dislikes)",
        "Jobs",
        "Daily Routine",
        "Holidays",
        "The weather",
        "Food and drinks",
        "Sports and fitness",
        "Music and Films",
        "Houses and Furniture",
        "Places in city",
        "Transport",
        "In shops (clothes, coffee)",
        "Dates and Numbers",
        "Describing a person",
      ]
    },
    a2: {
      title: "A2 (pre-intermediate)",
      items: [
        "Вы говорите довольно четко, обладаете правильным произношением.",
        "Вы можете составить рассказ из 15-18 предложений о себе, своей семье, вкусах, взглядах, профессии, хобби.",
        "Вы знаете, что глагол с предлогом может иметь какое-то специфическое значение, а не переводиться дословно (фразовые глаголы).",
        "Вы понимаете главную мысль бытовой англоязычной речи, даже если вам неизвестны некоторые слова в ней.",
        "Вы можете общаться с носителем языка, если он строит беседу в рамках знакомых вам слов.",
        "Если вы не можете вспомнить какое-то слово, то не теряетесь, а объясняете его значение своими словами.",
        "-------------------------------- Список тем: ---------------------------------",
        "Family relationships and friendship",
        "Life stages and events",
        "Appearance and Personality",
        "Jobs, profession and workplaces",
        "Daily (everyday) activities",
        "Household objects",
        "Hobbies (sport, music)",
        "Food and health",
        "Holidays and travelling",
        "City life",
        "Transport",
        "Clothes and shopping",
        "Climate and weather",
        "Education",
        "Fears and phobias",
        "Animals",
        "News",
      ]
    }
  };

  const handleLevelClick = (level: 'a0' | 'a1' | 'a2') => {
    setDrawerContent(levelData[level]);
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <div>
      <ol className="a1">
        <p>
          Уровни владения английским языком делится на следующие уровни: 
          starter/beginner (A0), elementary (A1), pre-intermediate (A2), 
          intermediate (B1), upper-intermediate (B2), advanced (C1).
        </p>
        <p style={{marginTop: '1rem'}}>
          Стоит отметить, что в некоторых ресурсах отмечается, что А1 - 
          это beginner и подуровень его elementary, я решил поступить также
          объединить в один уровень A1 (starter / beginner - elementary). А потом
          на уровне А2 будут диалоги чуть посложнее (elementary plus - pre-intermediate)
        </p>

        <Divider>Speaking</Divider>

        <p>
          Теперь разберем каждый уровень по отдельности: 
            <span 
              style={{ 
                textDecoration: 'underline',
                cursor: 'pointer',
                marginLeft: '3px'
              }} 
              onClick={() => handleLevelClick('a0')}
            >
              A0 (beginner / starter);
            </span>

            <span  
              style={{
                textDecoration: 'underline',
                cursor: 'pointer',
                marginLeft: '3px'
              }}
              onClick={() => handleLevelClick('a1')}>
                A1 (elementary)
              </span>:

            <span  
              style={{
                textDecoration: 'underline',
                cursor: 'pointer',
                marginLeft: '3px'
              }}
              onClick={() => handleLevelClick('a2')}>
                A2 (pre-intermediate)
              </span>:
          </p>
        <p style={{marginTop: '1rem'}}>
          Лучшим решением будет в начале изучить все диалоги уровня А1, а 
          затем вернутся в начало и изучить все диалоги уровня А2. Для уровня B1 
          будет иной способ улучшения говорения (пока в разработке)
        </p>
      </ol>

      <Drawer
        title={drawerContent.title}
        placement="right"
        onClose={closeDrawer}
        open={drawerVisible}
        width={500}
      >
        <ul>
          {drawerContent.items?.map((item, index) => (
            <li key={index} style={{marginBottom: '8px'}}>{item}</li>
          ))}
        </ul>
      </Drawer>
    </div>
  );
};
