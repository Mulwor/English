import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ReadingAndListeningA1 } from './skills/reading-and-listening/ReadingAndListeningA1';
import {
  Clothing,
  Colors,
  Countries,
  Food,
  Greeting,
  Jobs,
  Money,
  Weather,
  Number,
} from './skills/speaking/basic';
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

const Layout = () => (
  <div style={{ display: 'flex' }}>
    <Navbar />

    <div style={{ marginLeft: 20, padding: '10px', width: '100%' }}>
      <Outlet />
    </div>
  </div>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
  },
  {
    path: 'a1',
    element: <Layout />,
    children: [
      {
        path: 'speaking',
        children: [
          { path: 'greeting', element: <Greeting /> },
          { path: 'talking-about-smth', element: <TalkingAboutSomeone /> },
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
    path: 'a2',
    element: <Layout />,
    children: [
      {
        path: 'speaking',
        children: [
          { path: 'animals', element: <div>В процессе</div> },
          { path: 'fears-and-phobias', element: <div>В процессе</div> },
          {
            path: 'family-relationships-and-friendship',
            element: <div>В процессе</div>,
          },
          { path: 'life-stages-and-events', element: <div>В процессе</div> },
          { path: 'transport', element: <div>В процессе</div> },
          { path: 'city-life', element: <div>В процессе</div> },
          { path: 'education', element: <div>В процессе</div> },
          { path: 'news', element: <div>В процессе</div> },
        ],
      },
      {
        path: 'reading-and-listening',
        element: <ReadingAndListeningA1 />,
      },
    ],
  },
  {
    path: 'grammar',
    element: <Layout />,
    children: [
      {
        path: 'pronouns',
        element: <div>Personal, Possessive pronouns and possessive adjectives, demonstrative</div>,
      },
      { path: 'to-be', element: <div>В процессе</div> },
      {
        path: 'countable-nouns',
        element: <div>Countable and uncountable nouns, Singular and plural nouns</div>,
      },
      {
        path: 'articles',
        element: <div>Articles: a/an, the, no article</div>,
      },
      {
        path: 'quantifiers',
        element: <div>any, some, few, a lot of, a piece of</div>,
      },
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
  {
    path: 'arch',
    element: <Layout />,
    children: [
      {
        path: 'speaking',
        element: (
          <ul>
            <li>Family and Personality</li>
            <li>Describing people’s appearance and character</li>
            <li>Jobs, Money and Success</li>
            <li>Business</li>
            <li>Education</li>
            <li>Modern manners</li>
            <li>Transport and Travelling</li>
            <li>Places to live</li>
            <li>Nature and Environment</li>
            <li>Climate and Natural disasters</li>
            <li>Communication</li>
            <li>Television and Media</li>
            <li>Cinema and Movies</li>
            <li>Art</li>
            <li>Shopping</li>
            <li>Food and Restaurants</li>
            <li>Lifestyle</li>
            <li>Sport</li>
            <li>Friendship</li>
            <li>Challenges and Success</li>
            <li>Good and bad luck</li>
            <li>Crime and Punishment</li>
          </ul>
        ),
      },
      {
        path: 'grammar',
        element: (
          <ul>
            <li>Action and state verbs</li>
            <li>Future forms (to be going to, Present Continuous, will/shall)</li>
            <li>Comparative and superlative adjectives</li>
            <li>Relative clauses: defining and non-defining</li>
            <li>Reported Speech: statements, questions, commands</li>
            <li>Question tags</li>
            <li>Phrasal verbs</li>
          </ul>
        ),
      },
    ],
  },
]);
