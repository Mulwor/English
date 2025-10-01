import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'S-01',
    label: 'Speaking',
    children: [
      // ! Beginner and elementary
      { key: 'S-01-1', label: <Link to='/beginner-and-elementary/speaking/greeting'>Greeting (A1/A2)</Link> },
      { key: 'S-01-2', label: <Link to='/beginner-and-elementary/speaking/numbers'>Numbers (A1/A2)</Link> },
      { key: 'S-01-3', label: <Link to='/beginner-and-elementary/speaking/time'>Time (A1/A2)</Link> },
      { key: 'S-01-4', label: <Link to='/beginner-and-elementary/speaking/countries'>Countries (A1)</Link> },
      { key: 'S-01-5', label: <Link to='/beginner-and-elementary/speaking/colors'>Colors (A1)</Link> },
      { key: 'S-01-6', label: <Link to='/beginner-and-elementary/speaking/clothing'>Clothes</Link> },
      { key: 'S-01-7', label: <Link to='/beginner-and-elementary/speaking/weather'>Weather</Link> },
      { key: 'S-01-8', label: <Link to='/beginner-and-elementary/speaking/jobs'>Jobs</Link> },
      { key: 'S-01-9', label: <Link to='/beginner-and-elementary/speaking/money'> Money </Link> },
      { key: 'S-01-10', label: <Link to='/beginner-and-elementary/speaking/shopping'>Shopping</Link> },
      { key: 'S-01-11', label: <Link to='/beginner-and-elementary/speaking/food-and-drinks'>Food and drinks</Link> },
      { key: 'S-01-12', label: <Link to='/beginner-and-elementary/speaking/hobbies'>Hobbies</Link> },
      { key: 'S-01-13', label: <Link to='/beginner-and-elementary/speaking/music-and-films'>Music and films</Link> },
      { key: 'S-01-14', label: <Link to='/beginner-and-elementary/speaking/sport-and-fitness'>Sports and fitness</Link> },
      { key: 'S-01-15', label: <Link to='/beginner-and-elementary/speaking/daily-routine'>Daily routine</Link> },
      { key: 'S-01-16', label: <Link to='/beginner-and-elementary/speaking/describing-a-person'>Describing a person</Link>},
      { key: 'S-01-17', label: <Link to='/beginner-and-elementary/speaking/talking'>Talking about someone</Link>},
      { key: 'S-01-18', label: <Link to='/beginner-and-elementary/speaking/holidays'>Holidays</Link> },
      { key: 'S-01-19', label: <Link to='/beginner-and-elementary/speaking/house-and-furniture'>Houses and furniture</Link> },
      { key: 'S-01-20', label: <Link to='/beginner-and-elementary/speaking/travel'>Travel</Link> },
      { key: 'S-01-21', label: <Link to='/beginner-and-elementary/speaking/hotel'>Hotel</Link> },
      { key: 'S-02-1', label: <Link to='/pre-intermediate/speaking/family-relationships-and-friendship'>Family relationships and friendship (A2) </Link>},
      { key: 'S-02-2', label: <Link to='/pre-intermediate/speaking/life-stages-and-events'>Life stages and events (A2)</Link>},
      { key: 'S-02-3', label: <Link to='/pre-intermediate/speaking/city-life'>City life (A2)</Link> },
      { key: 'S-02-4', label: <Link to='/pre-intermediate/speaking/transport'>Transport (A2)</Link> },
      { key: 'S-02-5', label: <Link to='/pre-intermediate/speaking/education'>Education (A2)</Link> },
      { key: 'S-02-6', label: <Link to='/pre-intermediate/speaking/fears-and-phobias'>Fears and phobias (A2)</Link> },
      { key: 'S-02-7', label: <Link to='/pre-intermediate/speaking/animals'>Animals (A2)</Link> },
      { key: 'S-02-8', label: <Link to='/pre-intermediate/speaking/news'>News (A2)</Link> },
      { key: 'S-02-9', label: <Link to='/pre-intermediate/speaking/phrasal-verbs'>Phrasal verbs</Link> },
    ],
  },
  // {
  //   key: 'S-V2-01',
  //   label: 'Speaking V2',
  //   children: [
  //     { 
  //       key: 'S-V2-02', 
  //       label: 'A1', 
  //       children: [
  //         { key: 'S-V2-02_01', label: <Link to='/beginner-and-elementary/speaking/firstModule'>First module</Link> },
  //         { key: 'S-V2-02_02', label: <Link to='/beginner-and-elementary/speaking/secondModule'>Second module</Link> },
  //         { key: 'S-V2-02_03', label: <Link to='/beginner-and-elementary/speaking/thirdModule'>Third module</Link> },
  //       ],
  //     },
  //   ]
  // },
  {
    key: 'G-02',
    label: 'Grammar',
    children: [
      { key: 'G-02-01', label: <Link to='/grammar/pronouns'>Pronouns</Link> },
      { key: 'G-02-02', label: <Link to='/grammar/nouns'>Nouns</Link> },
      { key: 'G-02-03', label: <Link to='/grammar/to-be'>To be</Link> },
      { key: 'G-02-04', label: <Link to='/grammar/articles'>Articles</Link> },
      { key: 'G-02-05', label: <Link to=''>Prepositions of time and place</Link> },
      { key: 'G-02-06', label: <Link to='/grammar/preposition'>Preposition</Link> },
      { key: 'G-02-07', label: <Link to=''>Too, enough, a little, a few</Link> },
      { key: 'G-02-08', label: <Link to=''>Gerunds and Infinitives</Link> },
      { key: 'G-02-09', label: 'Present Tenses', 
        children: [
          { key: 'G-02-09-01', label: <Link to='/grammar/present/simple'>Simple</Link>},
          { key: 'G-02-09-02', label: <Link to='/grammar/present/continues'>Continuous</Link>},
          { key: 'G-02-09-03', label: <Link to='/grammar/present/perfect'> Perfect, Used to do and be used to doing something</Link> },
          { key: 'G-02-09-04', label: <Link to='/grammar/present/perfect'>Perfect continuous</Link>},
        ],
      },
      { key: 'G-02-10', label: 'Past Tenses',
        children: [
          { key: 'G-02-10-01', label: <Link to='/grammar/past/simple'>Simple</Link> },
          { key: 'G-02-10-02', label: <Link to='/grammar/past/continues'>Continuous</Link> },
          { key: 'G-02-10-03', label: <Link to='/grammar/past/perfect'>Perfect</Link> },
          { key: 'G-02-10-04', label: <Link to='/grammar/past/perfect'>Perfect continuous</Link> },
        ],
      },
      { key: 'G-02-11', label: 'Future Tenses',
        children: [
          { key: 'G-02-11-01', label: <Link to='/grammar/future/simple'>Simple</Link> },
          { key: 'G-02-11-02', label: <Link to='/grammar/future/continues'>Continuous</Link> },
          { key: 'G-02-11-03', label: <Link to='/grammar/future/perfect'>Perfect</Link> },
          { key: 'G-02-11-04', label: <Link to='/grammar/future/perfect'>Perfect continuous</Link> },
        ],
      },
      { key: 'G-02-12', label: <Link to='/grammar/questions'>Types of questions and word order in questions</Link> },
      { key: 'G-02-13', label: <Link to='/grammar/there-is-are'>There is/are</Link> },
      { key: 'G-02-14', label: <Link to='/grammar/adverbs-frequency'>Adverbs of frequency</Link> },
      { key: 'G-02-15', label: <Link to='/grammar/comparative-superlative'> Comparative and Superlative degrees of Adjectives</Link>},
      { key: 'G-02-16', label: 'Modal verbs',
        children: [
          { key: 'G-02-16-01', label: <Link to='/grammar/modal-verbs/can'>Can, could, be able to</Link> },
          { key: 'G-02-16-02', label: <Link to='/grammar/modal-verbs/should'>Should</Link> },
          { key: 'G-02-16-03', label: <Link to='/grammar/modal-verbs/must'>Must, Have to</Link> },
          { key: 'G-02-16-04', label: <Link to='/grammar/modal-verbs/may'>May, might</Link> },
          { key: 'G-02-16-05', label: <Link to='/grammar/modal-verbs/may'>Have to</Link> },
        ],
      },
      { key: 'G-02-17', label: 'Conditional',
        children: [
          { key: 'G-02-17-01', label: <Link to='/grammar/conditional/0'>Zero</Link> },
          { key: 'G-02-17-02', label: <Link to='/grammar/conditional/1'>First</Link> },
          { key: 'G-02-17-03', label: <Link to='/grammar/conditional/2'>Second</Link> },
          { key: 'G-02-17-04', label: <Link to='/grammar/conditional/3'>Third</Link> },
          { key: 'G-02-17-05', label: <Link to='/grammar/conditional/4'>Future time clauses</Link> },
        ],
      },
      { key: 'G-02-18', label: <Link to=''>Passive voice</Link> },
      { key: 'G-02-19', label: <Link to=''>Indirect (Reported) speech</Link> },
    ],
  },
  {
    key: 'R-04',
    label: <Link to='/beginner-and-elementary/reading-and-listening'>Reading and Listening</Link>,
  },
  // {
  //   key: "Arab",
  //   label: "Арабский язык",
  //   children: [
  //     {
  //       key: "AR-01", label: <Link to="/arab/lesson-01">Урок №1</Link>
  //     }
  //   ]
  // }
];

export const Navbar = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <Menu
      onClick={onClick}
      // defaultOpenKeys={['S-01']}
      mode='horizontal'
      items={items}
    />
  );
};
