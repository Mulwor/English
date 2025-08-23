import { Divider } from 'antd';

export const Nouns = () => {
  return (
    <>
      <Divider>Nouns</Divider>

      <p>
        Существительное (Noun) – это часть речи, которая обозначает, называет предмет, лицо или явление и отвечает на вопросы «кто?» или «что?».

        <ol>
          <li>
            Нарицательные существительные — обозначают классы или категории людей, животных, вещей 
            Примеры: leaf, grass, street, cake
         </li>
          <li>
            Имена собственные обозначают имена конкретных людей и других живых существ, названия вещей и мест
            Примеры: Moscow, Caribbean, Kate, Mustafa  
          </li>
        
        </ol>
      </p>

      <Divider>Countable and uncountable nouns</Divider>
      <Divider>Singular and plural nouns</Divider>

      <li>
        <a href='https://grammarway.com/ru/nouns/'>
          Грамматика
        </a>
      </li>
    </>
  )
}