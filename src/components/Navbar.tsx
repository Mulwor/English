import { Link } from "react-router-dom";
import { Menu } from "antd";
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "sub1",
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
          { key: "1-5", label: <Link to="/a1/grammar/present-simple">Present Simple</Link> },
          { key: "1-6", label: <Link to="/a1/grammar/singular-plural-nouns"> Singular and plural nouns </Link> },
          { key: "1-7", label: <Link to="/a1/grammar/adverbs-frequency"> Adverbs of frequency </Link> },
          { key: "1-8", label: <Link to="/a1/grammar/prepositions">Prepositions</Link> },
          { key: "1-9", label: <Link to="/a1/grammar/present-continuous">Present Continuous </Link> },
          { key: "1-10", label: <Link to="/a1/grammar/present-perfect">Present Perfect</Link> },
          { key: "1-11", label: <Link to="/a1/grammar/future-simple"> Future Simple + be going to, like doing </Link> },
          { key: "1-12", label: <Link to="/a1/grammar/past-simple"> Past Simple (Regular / Irregular verbs) </Link> },
          { key: "1-13", label: <Link to="/a1/grammar/articles"> Articles</Link> },
          { key: "1-14", label: <Link to="/a1/grammar/modal-verbs"> Modal verbs: can, can’t, should </Link> },
          { key: "1-15", label: <Link to="/a1/grammar/there-is-are">There is/are</Link> },
          { key: "1-16", label: <Link to="/a1/grammar/word-order-questions"> Word order in questions </Link> },
          { key: "1-17", label: <Link to="/a1/grammar/comparative-superlative">Comparative and Superlative degrees of Adjectives </Link>},
        ],
      },
      { 
        key: "2", 
        label: 'Speaking',
        children: [
          { key: "2-1", label: <Link to='/a1/speaking/greeting'>Greeting</Link> },
          { key: "2-2", label: <Link to='/a1/speaking/numbers'>Numbers</Link> },
          { key: "2-3", label: <Link to='/a1/speaking/countries'>Countries</Link> },
          { key: "2-4", label: <Link to='/a1/speaking/colors'>Colors</Link> },
          { key: "2-5", label: <Link to='/a1/speaking/clothing'>Clothes</Link> },
          { key: "2-6", label: <Link to='/a1/speaking/weather'>Weather</Link> },
          { key: "2-7", label: <Link to='/a1/speaking/jobs'>Jobs</Link> },
          { key: "2-21", label: <Link to='/a1/speaking/shopping'>Shopping</Link> },
          { key: "2-8", label: <Link to='/a1/speaking/personal-preferences'>Personal preferences</Link> },
          { key: "2-9", label: <Link to='/a1/speaking/food-and-drinks'>Food and drinks</Link> },
          { key: "2-10", label: <Link to='/a1/speaking/music-and-films'>Music and films</Link> },
          { key: "2-11", label: <Link to='/a1/speaking/sport-and-fitness'>Sports and fitness</Link> },
          { key: "2-12", label: <Link to='/a1/speaking/hobbies'>Hobbies</Link> },
          { key: "2-13", label: <Link to='/a1/speaking/daily-routine'>Daily routine</Link> },
          { key: "2-14", label: <Link to='/a1/speaking/talking-about-smth'>Talking about yourself, family, and friends</Link> },
          { key: "2-15", label: <Link to='/a1/speaking/holidays'>Holidays</Link> },
          { key: "2-16", label: <Link to='/a1/speaking/house-and-furniture'>Houses and furniture</Link> },
          { key: "2-17", label: <Link to='/a1/speaking/travel'>Travel</Link> },
          { key: "2-18", label: <Link to="/a1/speaking/money"> Money </Link>},
          { key: "2-19", label: <Link to='/a1/speaking/in-a-hotel'>In a hotel</Link> },
          { key: "2-20", label: <Link to='/a1/speaking/places-in-the-city'>Places in the city</Link> },
          { key: "2-21", label: <Link to='/a1/speaking/describing-a-person'>Describing a person</Link> },
          { key: "2-21", label: <Link to='/a1/speaking/describing-a-person'>Dining out</Link> },
          { key: "2-23", label: <Link to='/a1/speaking/at-a-gas-station'>At a gas station</Link> },
          { key: "2-24", label: <Link to='/a1/speaking/at-the-office'>At the office</Link>},
        ]
      },
      { key: "3", label: 'Reading and listening' },
    ],
  },
];

export const Navbar = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 250, height: "100vh" }}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};
