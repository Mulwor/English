import { Table, Divider } from "antd";

const columns = [
  {
    title: "Именительный падеж (Кто?, Что?)",
    dataIndex: "nominative",
    key: "nominative",
  },
  {
    title: "Объектный падеж (Кому?, Кого?, Кем?)",
    dataIndex: "objective",
    key: "objective",
  },
  {
    title: "Притяжательный падеж (Чей?)",
    dataIndex: "possessive",
    key: "possessive",
  },
];

const data = [
  { key: "1", nominative: "I — я", objective: "me — мне, меня", possessive: "my — мой" },
  { key: "2", nominative: "he — он", objective: "him — ему, его", possessive: "his — его" },
  { key: "3", nominative: "she — она", objective: "her — ей, ее", possessive: "her — ее" },
  { key: "4", nominative: "it — оно (это), для неодушевленных предметов и животных.", objective: "it — ему/ей, его/ее", possessive: "its — его/ее" },
  { key: "5", nominative: "we — мы", objective: "us — нам, нас", possessive: "our — наш" },
  { key: "6", nominative: "you — вы, ты", objective: "you — вам, вас, тебя, тебе", possessive: "your — ваш, твой" },
  { key: "7", nominative: "they — они", objective: "them — им, их", possessive: "their — их" },
];

const data2 = [
  { key: "1", nominative: "I love to read - Я люблю читать", objective: "She gave me a book - Она дала мне книгу", possessive: "This is my car - Это моя машина" },
  { key: "2", nominative: "They are playing soccer - Они играют в футбол", objective: "I saw him at the park - Я видел его в парке", possessive: "Their house is big - Их дом большой" },
  { key: "3", nominative: "He works at a bank - Он работает в банке", objective: "We met him yesterday - Мы встретили его вчера", possessive: "His job is interesting - Его работа интересная" },
  { key: "4", nominative: "She sings beautifully - Она красиво поёт", objective: "I called her in the morning - Я позвонил ей утром", possessive: "Her voice is amazing - Её голос потрясающий" },
  { key: "5", nominative: "We enjoy traveling - Мы любим путешествовать", objective: "The teacher helped us - Учитель помог нам", possessive: "Our plans are exciting - Наши планы захватывающие" },
];


export const Personal = () => {
  return (
    <div>
      <h2>Местоимения в английском языке - 1</h2>

      <p>Личные местоимения (Personal Pronouns) - Эти местоимения указывают на конкретное лицо или группу лиц.</p>
      Притяжательные местоимения (Possessive Pronouns) в английском
      Этот вид применяют для того, чтобы заменить или указать на принадлежность лица к конкретному объекту или существу.

      <Table columns={columns} dataSource={data} pagination={false} bordered size="small"/>

      <Divider>Примеры использования</Divider>

      <Table columns={columns} dataSource={data2} pagination={false} bordered size="small"/>

      <p>2. Указательные местоимение</p>
    </div>
  )
}