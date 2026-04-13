import { createBrowserRouter, Link, Outlet } from 'react-router-dom';
import { Navbar } from './navbar';
import { ReadingAndListeningA1 } from './skills/reading-and-listening/ReadingAndListeningA1';
import { Clothing, Colors, Countries, Food, Greeting, Jobs, Money, Weather, Number } from './skills/speaking/basic';
import {
  Travel,
  DailyRoutine,
  DescribingPerson,
  Furniture,
  Hobbies,
  Hotel,
  MusicAndFilms,
  Shopping,
  Sport,
  TalkingAboutSomeone,
  Time,
  Holidays,
} from './skills/speaking/elementary';
import { Pronouns, Nouns } from './skills/grammar/basic';
import { Speaking } from './skills/speaking/Speaking';
import {
  Animals,
  CityLife,
  ClimateAndWeather,
  ClothesAndShopping,
  DailyActivities,
  Education,
  FearsAndPhobias,
  FoodAndHealth,
  HobbiesAndFreeTime,
  HouseholdObjects,
  LifeStages,
  Relationship,
  Transport,
  JobsAndProfessions,
} from './skills/speaking/pre-intermediate';
import { AllPhrasalVerbs } from './skills/speaking/phrasal-verbs/AllPhrasalVerbs';
import { HolidaysAndTravelling } from './skills/speaking/pre-intermediate/holidays/Holidays';
import { PhrasalVerbs } from './skills/grammar/phrasalVerbs/PhrasalVerbs';

const Layout = () => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #C5C5C5' }}>
      <h3 style={{ fontSize: '18px', padding: '1rem' }}>
        <Link to='/'>English</Link>
      </h3>
      <Navbar />
    </div>

    <div style={{ flex: 1, padding: '10px' }}>
      <Outlet />
    </div>
  </div>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <>
            <Speaking />
          </>
        ),
      },
    ],
  },
  {
    path: 'beginner-and-elementary',
    element: <Layout />,
    children: [
      {
        path: 'speaking',
        children: [
          { path: 'greeting', element: <Greeting /> },
          { path: 'talking', element: <TalkingAboutSomeone /> },
          { path: 'countries', element: <Countries /> },
          { path: 'numbers', element: <Number /> },
          { path: 'time', element: <Time /> },
          { path: 'colors', element: <Colors /> },
          { path: 'food-and-drinks', element: <Food /> },
          { path: 'jobs', element: <Jobs /> },
          { path: 'hobbies', element: <Hobbies /> },
          { path: 'daily-routine', element: <DailyRoutine /> },
          { path: 'sport-and-fitness', element: <Sport /> },
          { path: 'music-and-films', element: <MusicAndFilms /> },
          { path: 'weather', element: <Weather /> },
          { path: 'holidays', element: <Holidays /> },
          { path: 'house-and-furniture', element: <Furniture /> },
          { path: 'travel', element: <Travel /> },
          { path: 'describing-a-person', element: <DescribingPerson /> },
          { path: 'shopping', element: <Shopping /> },
          { path: 'money', element: <Money /> },
          { path: 'clothing', element: <Clothing /> },
          { path: 'hotel', element: <Hotel /> },
        ],
      },
      { path: 'reading-and-listening', element: <ReadingAndListeningA1 /> },
    ],
  },
  {
    path: 'pre-intermediate',
    element: <Layout />,
    children: [
      {
        path: 'speaking',
        children: [
          { path: 'animals', element: <Animals /> },
          { path: 'fears-and-phobias', element: <FearsAndPhobias /> },
          { path: 'family-relationships-and-friendship', element: <Relationship /> },
          { path: 'jobs-profession-and-workplaces', element: <JobsAndProfessions /> },
          { path: 'life-stages-and-events', element: <LifeStages /> },
          { path: 'transport', element: <Transport /> },
          { path: 'city-life', element: <CityLife /> },
          { path: 'education', element: <Education /> },
          { path: 'phrasal-verbs', element: <AllPhrasalVerbs /> },
          { path: 'household-objects', element: <HouseholdObjects /> },
          { path: 'daily-activities', element: <DailyActivities /> },
          { path: 'holidays-and-travelling', element: <HolidaysAndTravelling /> },
          { path: 'clothes-and-shopping', element: <ClothesAndShopping /> },
          { path: 'climate-and-weather', element: <ClimateAndWeather /> },
          { path: 'food-and-health', element: <FoodAndHealth /> },
          {
            path: 'hobbies',
            element: (
              <>
                <div>Изучить тему более глубоко и разобраться с хобби человека - фильмы, музыка, спорт</div>
                <HobbiesAndFreeTime />
              </>
            ),
          },
        ],
      },
      {
        path: 'reading-and-listening',
        element: <ReadingAndListeningA1 />,
      },
    ],
  },
  {
    path: 'main',
    element: <Layout />,
    children: [{ path: 'speaking', element: <Speaking /> }],
  },
  {
    path: 'grammar',
    element: <Layout />,
    children: [
      { path: 'pronouns', element: <Pronouns /> },
      { path: 'nouns', element: <Nouns /> },
      { path: 'phrasal-verbs', element: <PhrasalVerbs /> },
      { path: 'to-be', element: <div>В процессе</div> },
      { path: 'articles', element: <div>Articles: a/an, the, no article</div> },
      { path: 'quantifiers', element: <div>any, some, few, a lot of, a piece of</div> },
      // { path: "subject-pronouns", element: <div>В процессе</div> },
      // { path: "countable-nouns", element: <div>В процессе</div> },
      // { path: "past-simple", element: <div>В процессе</div> },
      // {
      //   path: "present",
      //   children: [
      //     {
      //       path: "simple",
      //       element: (
      //         <div>
      //           <div>
      //             Do – это глагол, значит требует после себя ДРУГОЙ ГЛАГОЛ!!!
      //             Особенно – глагол действие! Например: Do you read? Do you
      //             sleep? Do you speak English? Do you love me? Do you want a
      //             drink?
      //           </div>

      //           <div>
      //             Are – используется с прилагательными (для чайников –
      //             прилагательные – это слова, которые описывают предмет,
      //             например: красивый, умный, интересный). Например: Are you
      //             happy? Are you a good girl? Are you sad? Why are you unhappy?
      //             Также Are используется при выражении возраста, профессии,
      //             страны (откуда вы родом), имени и национальности.
      //           </div>
      //         </div>
      //       ),
      //     },
      //     { path: "continuous", element: <div>В процессе</div> },
      //     { path: "perfect", element: <div>В процессе</div> },
      //   ],
      // },
      // { path: "future-simple", element: <div>В процессе</div> },
      // { path: "present-simple", element: <div>В процессе</div> },
      // { path: "singular-plural-nouns", element: <div>В процессе</div> },
      // { path: "prepositions", element: <div>В процессе</div> },
      // { path: "adverbs-frequency", element: <div>В процессе</div> },
      // { path: "articles", element: <div>В процессе</div> },
      // { path: "modal-verbs", element: <div>В процессе</div> },
      // { path: "there-is-are", element: <div>В процессе</div> },
      // { path: "word-order-questions", element: <div>В процессе</div> },
      // { path: "comparative-superlative", element: <div>В процессе</div> },
    ],
  },
  // {
  //   path: 'arab',
  //   element: <Layout />,
  //   children: [
  //     { path: 'lesson-01', element: <Lesson01 />},
  //   ]
  // },
]);
