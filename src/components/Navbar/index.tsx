import { Link } from "react-router-dom";
import { Menu } from "antd";
import { PieChartOutlined } from '@ant-design/icons';
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "sub1",
    icon: <PieChartOutlined />,
    label: "A1 (Beginner-elementary)",
    children: [
      { 
        key: "1", 
        label: "Grammar",
        children: [
          { 
            key: "1-1", label: <Link to="/a1/grammar/pronouns">Pronouns</Link>, 
            children: [
              { key: "1-1-1", label:<Link to="/a1/grammar/pronouns/personal">Personal</Link> },
              { key: "1-1-2", label: <Link to="/a1/grammar/pronouns/demonstrative">Demonstrative</Link> }
            ],
          },
          { key: "1-2", label: <Link to="/a1/grammar/to-be">To be</Link> },
          { key: "1-3", label: <Link to="/a1/grammar/possessive-pronouns"> Possessive pronouns and possessive adjectives</Link> },
          { key: "1-4", label: <Link to="/a1/grammar/countable-nouns"> Countable and uncountable nouns </Link> },
          { 
            key: "1-5", 
            label: <Link to="/a1/grammar/present">Present</Link>, 
            children: [
              { key: "1-5-1", label: <Link to="/a1/grammar/present/simple">Simple</Link> },
              { key: "1-5-2", label: <Link to="/a1/grammar/present/continues">Continuous</Link> },
              { key: "1-5-3", label: <Link to="/a1/grammar/present/perfect">Perfect</Link> },
            ] 
          },
          { 
            key: "1-6", 
            label: <Link to="/a1/grammar/past">Past</Link>, 
            children: [
              { key: "1-6-1", label: <Link to="/a1/grammar/simple">Simple</Link> },
              { key: "1-6-2", label: <Link to="/a1/grammar/continues">Continuous</Link> },
              { key: "1-6-3", label: <Link to="/a1/grammar/perfect">Perfect</Link> },
            ] 
          },
          { 
            key: "1-7", 
            label: <Link to="/a1/grammar/future">Future</Link>, 
            children: [
              { key: "1-7-1", label: <Link to="/a1/grammar/simple">Simple</Link> },
              { key: '1-7-1-1', label: <Link to="/a1/grammar/simple">+ be going to, like doing</Link> },
              { key: "1-7-2", label: <Link to="/a1/grammar/continues">Continuous</Link> },
              { key: "1-7-3", label: <Link to="/a1/grammar/perfect">Perfect</Link> },
            ] 
          },
          { 
            key: "1-11", 
            label: <Link to="/a1/grammar/modal-verbs">Modal verbs</Link>, 
            children: [
              { key: "1-11-1", label: <Link to="/a1/grammar/modal-verbs/can">Can</Link> },
              { key: '1-11-2', label: <Link to="/a1/grammar/modal-verbs/should">Should</Link> },
              { key: '1-11-3', label: <Link to="/a1/grammar/modal-verbs/must">Must</Link> },
            ] 
          },
          { key: "1-8", label: <Link to="/a1/grammar/singular-plural-nouns">Singular and plural nouns</Link> },
          { key: "1-9", label: <Link to="/a1/grammar/adverbs-frequency">Adverbs of frequency</Link> },
          { key: "1-10", label: <Link to="/a1/grammar/prepositions">Prepositions</Link> },
          { key: "1-12", label: <Link to="/a1/grammar/there-is-are">There is/are</Link> },
          { key: "1-13", label: <Link to="/a1/grammar/word-order-questions">Word order in questions</Link> },
          { key: "1-14", label: <Link to="/a1/grammar/comparative-superlative">Comparative and Superlative degrees of Adjectives </Link>},
        ],
      },
      { 
        key: "2", 
        label: 'Speaking',
        children: [
          { key: "2-1", label: <Link to='/a1/speaking/greeting'>Greeting</Link> },
          { key: "2-2", label: <Link to='/a1/speaking/numbers'>Numbers</Link> },
          { key: "2-3", label: <Link to='/a1/speaking/time'>Time</Link> },
          { key: "2-4", label: <Link to='/a1/speaking/countries'>Countries</Link> },
          { key: "2-5", label: <Link to='/a1/speaking/colors'>Colors</Link> },
          { key: "2-6", label: <Link to='/a1/speaking/clothing'>Clothes</Link> },
          { key: "2-7", label: <Link to='/a1/speaking/weather'>Weather</Link> },
          { key: "2-8", label: <Link to='/a1/speaking/jobs'>Jobs</Link> },
          { key: "2-19", label: <Link to="/a1/speaking/money"> Money </Link>},
          { key: "2-9", label: <Link to='/a1/speaking/shopping'>Shopping</Link> },
          { key: "2-10", label: <Link to='/a1/speaking/food-and-drinks'>Food and drinks</Link> },
          { key: "2-13", label: <Link to='/a1/speaking/hobbies'>Hobbies</Link> },
          { key: "2-11", label: <Link to='/a1/speaking/music-and-films'>Music and films</Link> },
          { key: "2-12", label: <Link to='/a1/speaking/sport-and-fitness'>Sports and fitness</Link> },
          { key: "2-14", label: <Link to='/a1/speaking/daily-routine'>Daily routine</Link> },
          { key: "2-22", label: <Link to='/a1/speaking/describing-a-person'>Describing a person</Link> },
          { key: "2-15", label: <Link to='/a1/speaking/talking-about-smth'>Talking about yourself, family, and friends</Link> },
          { key: "2-16", label: <Link to='/a1/speaking/holidays'>Holidays</Link> },
          { key: "2-17", label: <Link to='/a1/speaking/house-and-furniture'>Houses and furniture</Link> },
          { key: "2-18", label: <Link to='/a1/speaking/travel'>Travel</Link> },
          { key: "2-20", label: <Link to='/a1/speaking/hotel'>Hotel</Link> },
        ]
      },
      { key: "3", label: <Link to="/a1/reading-and-listening">Reading and Listening</Link>  },
    ],
  },
  {
    key: "sub2",
    label: "A2 (pre-intermediate)",
    children: [
      { 
        key: "5", 
        label: "Grammar",
        children: [
          { key: "5-1", label: <Link to="">Past continues</Link> },
          { key: "5-2", label: <Link to="">Past perfect</Link> },
          { key: "5-3", label: <Link to="">Used to do and be used to doing something</Link> },
          { key: "5-4", label: <Link to="">Future Simple + be going to</Link> },
          { key: "5-5", label: <Link to="">Types of questions</Link> },
          { key: "5-6", label: <Link to="">Too, enough, a little, a few</Link> },
          { key: "5-7", label: <Link to="">Gerunds and Infinitives</Link> },
          { key: "5-8", label: <Link to="">Modal verbs (have to, must, can, may, might, should)</Link> },
          { key: "5-9", label: <Link to="">Prepositions of time and place</Link> },
          { key: "5-10", label: <Link to="">First and Second Conditional </Link> },
          { key: "5-11", label: <Link to="">Passive voice</Link> },
          { key: "5-12", label: <Link to="">Indirect (Reported) speech</Link> },
          { key: "5-13", label: <Link to=""> Articles</Link> },
        ],
      },  
      { 
        key: "6", 
        label: 'Speaking',
        children: [
          { key: "6-1", label: <Link to='/a2/speaking/family-relationships-and-friendship'>Family relationships and friendship</Link> },
          { key: "6-2", label: <Link to='/a2/speaking/life-stages-and-events'>Life stages and events</Link> },
          { key: "6-3", label: <Link to='/a2/speaking/city-life'>City life</Link> },
          { key: "6-4", label: <Link to='/a2/speaking/transport'>Transport</Link> },
          { key: "6-5", label: <Link to='/a2/speaking/transport'>Education</Link> },
          { key: "6-6", label: <Link to='/a2/speaking/fears-and-phobias'>Fears and phobias</Link> },
          { key: "6-7", label: <Link to='/a2/speaking/animals'>Animals</Link> },
          { key: "6-8", label: <Link to='/a2/speaking/animals'>News</Link> },
        ]
      },
      { key: "7", label: <Link to="/a2/reading-and-listening">Reading and Listening</Link>  },
    ]
  },
];

export const Navbar = () => {;
  
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
      <Menu
        onClick={onClick}
        style={{ height: "100vh", maxWidth: '250px' }}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
  );
};
