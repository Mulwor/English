import { createBrowserRouter, Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Demonstrative, Personal } from "./grammar/pronouns";
import { 
  Number, Colors, Countries, Greeting, Weather, Jobs, Clothing, Shopping, Time, 
  Food, DailyRoutine, Hobbies, MusicAndFilms, Sport, Money, DescribingPerson, 
  TalkingAboutSomeone 
} from "./speaking";
import { Listening } from "./listening/Listening";
import { ReadingA1 } from "./reading/ReadingA1";
import { Furniture } from "./speaking/furnitures/Furnitures";

const Layout = () => (
  <div style={{ display: "flex" }}>
    <Navbar />

    <div style={{ marginLeft: 20, padding: "10px", width: '100%' }}>
      <Outlet />
    </div>
  </div>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },
  {
    path: "a1",
    element: <Layout />,
    children: [
      { 
        path: "grammar",
        children: [
          { 
            path: "pronouns", children: [
              { path: 'personal', element: <Personal /> },
              { path: 'demonstrative', element: <Demonstrative /> },
              { path: 'object', element: <div>В процессе</div>  }
            ] 
          },
          { path: "to-be", element: <div>В процессе</div> },
          { path: "subject-pronouns", element: <div>В процессе</div> },
          { path: "countable-nouns", element: <div>В процессе</div> },
          { path: "past-simple", element: <div>В процессе</div> },
          { path: "present", children: [
            { path: 'simple', element: <div>В процессе</div> },
            { path: 'continuous', element: <div>В процессе</div> },
            { path: 'perfect', element: <div>В процессе</div> }
          ]},
          { path: "future-simple", element: <div>В процессе</div> },
          { path: "present-simple", element: <div>В процессе</div> },
          { path: "singular-plural-nouns", element: <div>В процессе</div> },
          { path: "prepositions", element: <div>В процессе</div> },
          { path: "adverbs-frequency", element: <div>В процессе</div> },
          { path: "articles", element: <div>В процессе</div> },
          { path: "modal-verbs", element: <div>В процессе</div> },
          { path: "there-is-are", element: <div>В процессе</div> },
          { path: "word-order-questions", element: <div>В процессе</div> },
          { path: "comparative-superlative", element: <div>В процессе</div> },
        ],
      },
      { 
        path: "speaking",
        children: [
          { path: "greeting", element: <Greeting /> },
          { path: "talking-about-smth", element: <TalkingAboutSomeone /> },
          { path: "countries", element: <Countries /> },
          { path: "numbers", element: <Number /> },
          { path: "time", element:  <Time />},
          { path: "colors", element: <Colors /> },
          { path: "food-and-drinks", element: <Food /> },
          { path: "jobs", element: <Jobs /> },
          { path: "hobbies", element: <Hobbies /> },
          { path: "daily-routine", element: <DailyRoutine />},
          { path: "sport-and-fitness", element: <Sport /> },
          { path: "music-and-films", element: <MusicAndFilms /> },
          { path: "weather", element: <Weather /> },
          { path: "holidays", element: <div>В процессе</div> },
          { path: "house-and-furniture", element: <Furniture /> },
          { path: "travel", element: 
            <div> 
              <div>Places in the city - уметь спрашивать как дойти до туда, или где находится что-либо</div> 
            </div> 
          },
          { path: "describing-a-person", element: <DescribingPerson /> },
          { path: "shopping", element: <Shopping />},
          { path: "money", element: <Money /> },
          { path: "clothing", element: <Clothing /> },
          { path: "in-a-hotel", element: <div> В процессе</div> },
        ]
      },
      { 
        path: "reading",
        element: <ReadingA1 />
      },
      { 
        path: "listening",
        element: <Listening />
      },
    ],
  },
]);
