import { createBrowserRouter, Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Demonstrative, Personal } from "./skills/grammar/pronouns";
import { ReadingAndListeningA1 } from "./skills/reading-and-listening/ReadingAndListeningA1";
import { Clothing, Colors, Countries, Food, Greeting, Jobs, Money, Weather, Number } from "./skills/speaking/basic";
import { Travel, DailyRoutine, DescribingPerson, Furniture, Hobbies, Hotel, MusicAndFilms, Shopping, Sport, TalkingAboutSomeone, Time, Holidays } from "./skills/speaking/elementary";
import { ReadingAndListeningA2 } from "./skills/reading-and-listening/ReadingAndListeningA2";

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
            { path: 'simple', element: 
              <div>
                <div>
                Do – это глагол, значит требует после себя ДРУГОЙ ГЛАГОЛ!!! Особенно – глагол действие!
      Например: Do you read? Do you sleep? Do you speak English? Do you love me? Do you want a drink?
                </div>

              <div>
                Are – используется с прилагательными (для чайников – прилагательные – это слова, которые описывают предмет,
                например: красивый, умный, интересный). Например: Are you happy? Are you a good girl? Are you sad? Why are you unhappy?
                Также Are используется при выражении возраста, профессии, страны (откуда вы родом), имени и национальности. 
              </div>
              </div> 
            },
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
          { path: "holidays", element: <Holidays /> },
          { path: "house-and-furniture", element: <Furniture /> },
          { path: "travel", element: <Travel /> },
          { path: "describing-a-person", element: <DescribingPerson /> },
          { path: "shopping", element: <Shopping />},
          { path: "money", element: <Money /> },
          { path: "clothing", element: <Clothing /> },
          { path: "hotel", element: <Hotel /> },
        ]
      },
      { path: "reading-and-listening", element: <ReadingAndListeningA1 /> },
    ],
  },
  {
    path: "a2",
    element: <Layout />,
    children: [
      { 
        path: "speaking",
        children: [
          { path: "animals", element: <div>В процессе</div> },
          { path: "fears-and-phobias", element: <div>В процессе</div> },
          { path: "family-relationships-and-friendship", element: <div>В процессе</div> },
          { path: "life-stages-and-events", element: <div>В процессе</div> },
          { path: "transport", element: <div>В процессе</div> },
          { path: "city-life", element: <div>В процессе</div> },
          { path: "education", element: <div>В процессе</div> },
          { path: "news", element: <div>В процессе</div> },
        ]
      },
      { 
        path: "reading-and-listening",
        element: <ReadingAndListeningA2 />
      },
    ]
  }
]);
