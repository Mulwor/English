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
          { key: "1-1", label: <Link to="/a1/grammar/to-be">To be</Link> },
          {
            key: "1-2",
            label: (
              <Link to="/a1/grammar/subject-pronouns">
                Subject, object and demonstrative pronouns
              </Link>
            ),
          },
          {
            key: "1-3",
            label: (
              <Link to="/a1/grammar/possessive-pronouns">
                Possessive pronouns and possessive adjectives
              </Link>
            ),
          },
          {
            key: "1-4",
            label: (
              <Link to="/a1/grammar/countable-nouns">
                Countable and uncountable nouns
              </Link>
            ),
          },
          {
            key: "1-5",
            label: <Link to="/a1/grammar/present-simple">Present Simple</Link>,
          },
          {
            key: "1-6",
            label: (
              <Link to="/a1/grammar/singular-plural-nouns">
                Singular and plural nouns
              </Link>
            ),
          },
          {
            key: "1-7",
            label: (
              <Link to="/a1/grammar/adverbs-frequency">
                Adverbs of frequency
              </Link>
            ),
          },
          {
            key: "1-8",
            label: <Link to="/a1/grammar/prepositions">Prepositions</Link>,
          },
          {
            key: "1-9",
            label: (
              <Link to="/a1/grammar/present-continuous">
                Present Continuous
              </Link>
            ),
          },
          {
            key: "1-10",
            label: (
              <Link to="/a1/grammar/present-perfect">Present Perfect</Link>
            ),
          },
          {
            key: "1-11",
            label: (
              <Link to="/a1/grammar/future-simple">
                Future Simple + be going to, like doing
              </Link>
            ),
          },
          {
            key: "1-12",
            label: (
              <Link to="/a1/grammar/past-simple">
                Past Simple (Regular / Irregular verbs)
              </Link>
            ),
          },
          {
            key: "1-13",
            label: <Link to="/a1/grammar/articles">Articles</Link>,
          },
          {
            key: "1-14",
            label: (
              <Link to="/a1/grammar/modal-verbs">
                Modal verbs: can, can’t, should
              </Link>
            ),
          },
          {
            key: "1-15",
            label: <Link to="/a1/grammar/there-is-are">There is/are</Link>,
          },
          {
            key: "1-16",
            label: (
              <Link to="/a1/grammar/word-order-questions">
                Word order in questions
              </Link>
            ),
          },
          {
            key: "1-17",
            label: (
              <Link to="/a1/grammar/comparative-superlative">
                Comparative and Superlative degrees of Adjectives
              </Link>
            ),
          },
        ],
      },
      { key: "2", 
        label: <Link to="speaking-&-writing">Speaking and writing</Link>,
        children: [
          {
            key: "2-1",
            label: (
              <Link to='/a1/speaking-&-writing/acquaintance'>Acquaintance</Link>
            )
          },
          {
            key: "2-2",
            label: (
              <Link to='/a1/speaking-&-writing/talking-about-smth'>Talking about yourself, family, and friends</Link>
            )
          },
          {
            key: "2-3",
            label: (
              <Link to='/a1/speaking-&-writing/people'>People, countries, and nationalities</Link>
            )
          },
          {
            key: "2-4",
            label: (
              <Link to='/a1/speaking-&-writing/numbers'>Numbers, dates, and colors</Link>
            )
          },
          {
            key: "2-5",
            label: (
              <Link to='/a1/speaking-&-writing/personal-preferences'>Personal preferences</Link>
            )
          },
          {
            key: "2-6",
            label: (
              <Link to='/a1/speaking-&-writing/food-and-drinks'>Food and drinks</Link>
            )
          },
          {
            key: "2-7",
            label: (
              <Link to='/a1/speaking-&-writing/jobs'>Jobs</Link>
            )
          },
          {
            key: "2-8",
            label: (
              <Link to='/a1/speaking-&-writing/hobbies'>Hobbies</Link>
            )
          },
          {
            key: "2-9",
            label: (
              <Link to='/a1/speaking-&-writing/daily-routine'>Daily routine</Link>
            )
          },
          {
            key: "2-10",
            label: (
              <Link to='/a1/speaking-&-writing/sport-and-fitness'>Sports and fitness</Link>
            )
          },
          {
            key: "2-11",
            label: (
              <Link to='/a1/speaking-&-writing/music-and-films'>Music and films</Link>
            )
          },
          {
            key: "2-12",
            label: (
              <Link to='/a1/speaking-&-writing/weather'>The weather</Link>
            )
          },
          {
            key: "2-13",
            label: (
              <Link to='/a1/speaking-&-writing/holidays'>Holidays</Link>
            )
          },
          {
            key: "2-14",
            label: (
              <Link to='/a1/speaking-&-writing/house-and-furniture'>Houses and furniture</Link>
            )
          },
          {
            key: "2-15",
            label: (
              <Link to='/a1/speaking-&-writing/travel'>Travel</Link>
            )
          },
          {
            key: "2-16",
            label: (
              <Link to='/a1/speaking-&-writing/places-in-the-city'>Places in the city</Link>
            )
          },
          {
            key: "2-17",
            label: (
              <Link to='/a1/speaking-&-writing/describing-a-person'>Describing a person</Link>
            )
          },
          {
            key: "2-18",
            label: (
              <Link to='/a1/speaking-&-writing/shopping-&-dining-out'>Shopping and dining out</Link>
            )
          },
          {
            key: "2-19",
            label: (
              <Link to='/a1/speaking-&-writing/money'>Money</Link>
            )
          },
          {
            key: "2-20",
            label: (
              <Link to='/a1/speaking-&-writing/clothing'>Clothing</Link>
            )
          },
          {
            key: "2-21",
            label: (
              <Link to='/a1/speaking-&-writing/in-a-hotel'>In a hotel</Link>
            )
          },
          {
            key: "2-22",
            label: (
              <Link to='/a1/speaking-&-writing/at-a-gas-station'>At a gas station</Link>
            )
          },
          {
            key: "2-23",
            label: (
              <Link to='/a1/speaking-&-writing/at-the-office'>At the office</Link>
            )
          },

        ]
      
      },
      { key: "3", label: <Link to="reading-&-listening">Reading and listening</Link> },
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
      style={{ width: 350, height: "100vh" }}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};
