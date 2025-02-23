import { createBrowserRouter, Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Demonstrative, Personal } from "./grammar/pronouns";
import { Number, Colors, Countries, Greeting, Weather } from "./speaking";
import { Jobs } from "./speaking/jobs/Jobs";
import { Clothing } from "./speaking/clothing/Clothing";
import { Shopping } from "./speaking/shopping/Shopping";
// import { Time } from "./speaking/time/time";

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
            path: "pronouns",
            children: [
              {
                path: 'personal',
                element: <Personal />
              },
              {
                path: 'demonstrative',
                element: <Demonstrative />
              }
            ] 
          },
          { path: "to-be", element: <div>В процессе</div> },
          { path: "subject-pronouns", element: <div>В процессе</div> },
          { path: "countable-nouns", element: <div>В процессе</div> },
          { path: "present-simple", element: <div>В процессе</div> },
          { path: "singular-plural-nouns", element: <div>В процессе</div> },
          { path: "prepositions", element: <div>В процессе</div> },
          { path: "present-continuous", element: <div>В процессе</div> },
          { path: "present-perfect", element: <div>В процессе</div> },
          { path: "future-simple", element: <div>В процессе</div> },
          { path: "adverbs-frequency", element: <div>В процессе</div> },
          { path: "past-simple", element: <div>В процессе</div> },
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
          { path: "talking-about-smth", element: <div>В процессе</div> },
          { path: "countries", element: <Countries /> },
          { path: "numbers", element: <Number /> },
          { path: "time", element:  <div>В процессе</div>  },
          { path: "colors", element: <Colors /> },
          { path: "personal-preferences", element: <div>В процессе</div> },
          { path: "food-and-drinks", element: <div>Придумать также 4-5 диалога на тему в ресторане, заказа еды</div> },
          { path: "jobs", element: <Jobs /> },
          { path: "hobbies", element: <div>В процессе</div> },
          { path: "daily-routine", element: <div>В процессе</div> },
          { path: "sport-and-fitness", element: <div>В процессе</div> },
          { path: "music-and-films", element: <div>В процессе</div> },
          { path: "weather", element: <Weather /> },
          { path: "holidays", element: <div>В процессе</div> },
          { path: "house-and-furniture", element: <div>В процессе</div> },
          { path: "travel", element: <div>В процессе</div> },
          { path: "places-in-the-city", element: <div>В процессе</div> },
          { path: "describing-a-person", element: <div>В процессе</div> },
          { path: "shopping", element: <Shopping />},
          { path: "money", element: <div>В процессе</div> },
          { path: "clothing", element: <Clothing /> },
          { path: "in-a-hotel", element: <div>В процессе</div> },
          { path: "at-a-gas-station", element: <div>В процессе</div> },
          { path: "at-the-office", element: <div>В процессе</div> },
        ]
      },
      { 
        path: "reading-and-listening",
        element: <div>Тут будут разные книги и аудиозаписи к этой книги</div>
      },
    ],
  },
]);
