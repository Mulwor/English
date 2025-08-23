import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'S-01',
    label: 'Speaking',
    children: [
      {
        key: '2-1',
        label: <Link to='/a1/speaking/greeting'>Greeting</Link>,
      },
      { key: '2-2', label: <Link to='/a1/speaking/numbers'>Numbers</Link> },
      { key: '2-3', label: <Link to='/a1/speaking/time'>Time</Link> },
      {
        key: '2-4',
        label: <Link to='/a1/speaking/countries'>Countries</Link>,
      },
      { key: '2-5', label: <Link to='/a1/speaking/colors'>Colors</Link> },
      { key: '2-6', label: <Link to='/a1/speaking/clothing'>Clothes</Link> },
      { key: '2-7', label: <Link to='/a1/speaking/weather'>Weather</Link> },
      { key: '2-8', label: <Link to='/a1/speaking/jobs'>Jobs</Link> },
      { key: '2-19', label: <Link to='/a1/speaking/money'> Money </Link> },
      {
        key: '2-9',
        label: <Link to='/a1/speaking/shopping'>Shopping</Link>,
      },
      {
        key: '2-10',
        label: <Link to='/a1/speaking/food-and-drinks'>Food and drinks</Link>,
      },
      {
        key: '2-13',
        label: <Link to='/a1/speaking/hobbies'>Hobbies</Link>,
      },
      {
        key: '2-11',
        label: <Link to='/a1/speaking/music-and-films'>Music and films</Link>,
      },
      {
        key: '2-12',
        label: <Link to='/a1/speaking/sport-and-fitness'>Sports and fitness</Link>,
      },
      {
        key: '2-14',
        label: <Link to='/a1/speaking/daily-routine'>Daily routine</Link>,
      },
      {
        key: '2-22',
        label: <Link to='/a1/speaking/describing-a-person'>Describing a person</Link>,
      },
      {
        key: '2-15',
        label: (
          <Link to='/a1/speaking/talking-about-smth'>
            Talking about yourself, family, and friends
          </Link>
        ),
      },
      {
        key: '2-16',
        label: <Link to='/a1/speaking/holidays'>Holidays</Link>,
      },
      {
        key: '2-17',
        label: <Link to='/a1/speaking/house-and-furniture'>Houses and furniture</Link>,
      },
      { key: '2-18', label: <Link to='/a1/speaking/travel'>Travel</Link> },
      { key: '2-20', label: <Link to='/a1/speaking/hotel'>Hotel</Link> },
      {
        key: '6-1',
        label: (
          <Link to='/a2/speaking/family-relationships-and-friendship'>
            Family relationships and friendship
          </Link>
        ),
      },
      {
        key: '6-2',
        label: <Link to='/a2/speaking/life-stages-and-events'>Life stages and events</Link>,
      },
      {
        key: '6-3',
        label: <Link to='/a2/speaking/city-life'>City life</Link>,
      },
      {
        key: '6-4',
        label: <Link to='/a2/speaking/transport'>Transport</Link>,
      },
      {
        key: '6-5',
        label: <Link to='/a2/speaking/transport'>Education</Link>,
      },
      {
        key: '6-6',
        label: <Link to='/a2/speaking/fears-and-phobias'>Fears and phobias</Link>,
      },
      { key: '6-7', label: <Link to='/a2/speaking/animals'>Animals</Link> },
      { key: '6-8', label: <Link to='/a2/speaking/animals'>News</Link> },
    ],
  },
  {
    key: 'G-02',
    label: 'Grammar',
    children: [
      { key: 'G-02-01', label: <Link to='/grammar/pronouns'>Pronouns</Link> },
      { key: 'G-02-02', label: <Link to='/grammar/nouns'>Nouns</Link> },
      // { key: 'G-02-03', label: <Link to='/grammar/to-be'>To be</Link> },
      // { key: 'G-02-04', label: <Link to='/grammar/articles'>Articles</Link> },
      // { key: 'G-02-05', label: <Link to=''>Prepositions of time and place</Link> },
      // { key: 'G-02-06', label: <Link to='/grammar/preposition'>Preposition</Link> },
      // { key: 'G-02-07', label: <Link to=''>Too, enough, a little, a few</Link> },
      // { key: 'G-02-08', label: <Link to=''>Gerunds and Infinitives</Link> },
      // { key: 'G-02-09', label: 'Present Tenses', 
      //   children: [
      //     { key: 'G-02-09-01', label: <Link to='/grammar/present/simple'>Simple</Link>},
      //     { key: 'G-02-09-02', label: <Link to='/grammar/present/continues'>Continuous</Link>},
      //     { key: 'G-02-09-03', label: <Link to='/grammar/present/perfect'> Perfect, Used to do and be used to doing something</Link> },
      //     { key: 'G-02-09-04', label: <Link to='/grammar/present/perfect'>Perfect continuous</Link>},
      //   ],
      // },
      // { key: 'G-02-10', label: 'Past Tenses',
      //   children: [
      //     { key: 'G-02-10-01', label: <Link to='/grammar/past/simple'>Simple</Link> },
      //     { key: 'G-02-10-02', label: <Link to='/grammar/past/continues'>Continuous</Link> },
      //     { key: 'G-02-10-03', label: <Link to='/grammar/past/perfect'>Perfect</Link> },
      //     { key: 'G-02-10-04', label: <Link to='/grammar/past/perfect'>Perfect continuous</Link> },
      //   ],
      // },
      // { key: 'G-02-11', label: 'Future Tenses',
      //   children: [
      //     { key: 'G-02-11-01', label: <Link to='/grammar/future/simple'>Simple</Link> },
      //     { key: 'G-02-11-02', label: <Link to='/grammar/future/continues'>Continuous</Link> },
      //     { key: 'G-02-11-03', label: <Link to='/grammar/future/perfect'>Perfect</Link> },
      //     { key: 'G-02-11-04', label: <Link to='/grammar/future/perfect'>Perfect continuous</Link> },
      //   ],
      // },
      // { key: 'G-02-12', label: <Link to='/grammar/questions'>Types of questions and word order in questions</Link> },
      // { key: 'G-02-13', label: <Link to='/grammar/there-is-are'>There is/are</Link> },
      // { key: 'G-02-14', label: <Link to='/grammar/adverbs-frequency'>Adverbs of frequency</Link> },
      // { key: 'G-02-15', label: <Link to='/grammar/comparative-superlative'> Comparative and Superlative degrees of Adjectives</Link>},
      // { key: 'G-02-16', label: 'Modal verbs',
      //   children: [
      //     { key: 'G-02-16-01', label: <Link to='/grammar/modal-verbs/can'>Can, could, be able to</Link> },
      //     { key: 'G-02-16-02', label: <Link to='/grammar/modal-verbs/should'>Should</Link> },
      //     { key: 'G-02-16-03', label: <Link to='/grammar/modal-verbs/must'>Must, Have to</Link> },
      //     { key: 'G-02-16-04', label: <Link to='/grammar/modal-verbs/may'>May, might</Link> },
      //     { key: 'G-02-16-05', label: <Link to='/grammar/modal-verbs/may'>Have to</Link> },
      //   ],
      // },
      // { key: 'G-02-17', label: 'Conditional',
      //   children: [
      //     { key: 'G-02-17-01', label: <Link to='/grammar/conditional/0'>Zero</Link> },
      //     { key: 'G-02-17-02', label: <Link to='/grammar/conditional/1'>First</Link> },
      //     { key: 'G-02-17-03', label: <Link to='/grammar/conditional/2'>Second</Link> },
      //     { key: 'G-02-17-04', label: <Link to='/grammar/conditional/3'>Third</Link> },
      //     { key: 'G-02-17-05', label: <Link to='/grammar/conditional/4'>Future time clauses</Link> },
      //   ],
      // },
      // { key: 'G-02-18', label: <Link to=''>Passive voice</Link> },
      // { key: 'G-02-19', label: <Link to=''>Indirect (Reported) speech</Link> },
    ],
  },
  {
    key: 'R-04',
    label: <Link to='/a1/reading-and-listening'>Reading and Listening</Link>,
  },
];

export const Navbar = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ height: '100vh', maxWidth: '250px' }}
      defaultOpenKeys={['sub1']}
      mode='inline'
      items={items}
    />
  );
};
