import { Divider, Table, Tooltip, Collapse } from 'antd';

const { Panel } = Collapse;

export interface TooltipForRender {
  tip: string;
  text: string;
}

export const pronouncePersonalTable = [
  {
    title: (
      <Tooltip title='Личные местоимения — могут употребляться вместо подлежащего и обозначать лицо, выполняющее действие.'>
        Personal pronouns
      </Tooltip>
    ),
    dataIndex: 'personal',
    key: 'personal',
    render: (value: TooltipForRender) => (
      <Tooltip title={value.tip}>
        <span>{value.text}</span>
      </Tooltip>
    ),
  },
  {
    title: (
      <Tooltip title='Притяжательные прилагательные - указывают на принадлежность предмета или явления лицу или животному. Они отвечают на вопросы "чей?", "чья?", "чьё?", "чьи?"'>
        Possessive adjectives
      </Tooltip>
    ),
    dataIndex: 'possessiveAdj',
    key: 'possessiveAdj',
    render: (value: TooltipForRender) => (
      <Tooltip title={value.tip}>
        <span>{value.text}</span>
      </Tooltip>
    ),
  },
  {
    title: (
      <Tooltip title='Притяжательные местоимения - это местоимения, которые используются для указания на принадлежность или владение'>
        Possessive pronouns
      </Tooltip>
    ),
    dataIndex: 'possessive',
    key: 'possessive',
    render: (value: TooltipForRender) => (
      <Tooltip title={value.tip}>
        <span>{value.text}</span>
      </Tooltip>
    ),
  },
  {
    title: (
      <Tooltip title='Иногда нам нужно сказать, что действие объекта направлено на сам объект. В русском мы в таких случаях используем местоимение «себя» или частицу -ся. Например, говорим «Он облился водой», подразумевая, что кто-то сам себя облил.'>
        Reflexive Pronouns
      </Tooltip>
    ),
    dataIndex: 'reflexive',
    key: 'reflexive',
    render: (value: TooltipForRender) => (
      <Tooltip title={value.tip}>
        <span>{value.text}</span>
      </Tooltip>
    ),
  },
];

export const data = [
  {
    key: '1',
    personal: { text: 'I', tip: 'Я' },
    possessiveAdj: { text: 'My', tip: 'Мне, меня' },
    possessive: { text: 'Mine', tip: 'Мой' },
    reflexive: {
      text: 'Myself',
      tip: 'Себя, сам',
    },
  },
  {
    key: '2',
    personal: { text: 'He', tip: 'Он' },
    possessiveAdj: { text: 'His', tip: 'Ему, его' },
    possessive: { text: 'His', tip: 'Его' },
    reflexive: {
      text: 'Himself',
      tip: 'Себя, сам (о мужчине)',
    },
  },
  {
    key: '3',
    personal: { text: 'She', tip: 'Она' },
    possessiveAdj: { text: 'Her', tip: 'Ей, её' },
    possessive: { text: 'Hers', tip: 'Её' },
    reflexive: {
      text: 'Herself',
      tip: 'Себя, сама (о женщине)',
    },
  },
  {
    key: '4',
    personal: { text: 'It', tip: 'Оно (для неодушевленных предметов и животных)' },
    possessiveAdj: { text: 'Its', tip: 'Его (для неодушевленных предметов и животных)' },
    possessive: { text: 'Its', tip: 'Его (для неодушевленных предметов и животных)' },
    reflexive: {
      text: 'Itself',
      tip: 'Себя, само (о предмете или животном)',
    },
  },
  {
    key: '5',
    personal: { text: 'We', tip: 'Мы' },
    possessiveAdj: { text: 'Our', tip: 'Наш' },
    possessive: { text: 'Ours', tip: 'Наш' },
    reflexive: {
      text: 'Ourself',
      tip: 'Себя, сам (о себе в единственном числе от лица группы — используется редко, в основном в официальной или старинной речи)',
    },
  },
  {
    key: '6',
    personal: { text: 'You', tip: 'Ты/вы' },
    possessiveAdj: { text: 'Your', tip: 'Твой, ваш' },
    possessive: { text: 'Your', tip: 'Ваш' },
    reflexive: {
      text: 'Yourself',
      tip: 'Себя, сам (о тебе / вас, если обращение к одному человеку)',
    },
  },
  {
    key: '7',
    personal: { text: 'They', tip: 'Они' },
    possessiveAdj: { text: 'Their', tip: 'Их' },
    possessive: { text: 'Their', tip: 'Их' },
    reflexive: {
      text: 'Themselves',
      tip: 'Себя, сами (о них, о группе людей или предметов)',
    },
  },
];

export const Pronouns = () => {
  return (
    <>
      <Divider>Pronouns - местоимения</Divider>

      <p>
        Местоимения - это слова, заменяющие существительные в предложении. Существует несколько
        видов местоимения (pronouns) - personal (личные); possessive (притяжательные); demonstrative
        (указательные); reflexive (возвратные); interrogative (вопросительные); negative
        (отрицательные), indefinite (неопределенные)
      </p>

      <p>
        Разберем в начале personal pronounce, possessive adjectives, possessive pronounce, reflexive
        pronounce. При наведение на таблицу выходит tooltip с поясняющей подсказкой.
      </p>

      <Table
        columns={pronouncePersonalTable}
        dataSource={data}
        pagination={false}
        bordered
        size='small'
      />

      <div style={{ display: 'flex', gap: '2px', flexDirection: 'column', marginTop: '2px' }}>
        <Collapse accordion size='small' className="my-collapse">
          <Panel header='Personal pronouns examples' key='1'>
            <ol>
              <li>I am happy. – Я счастлив.</li>
              <li>You are my friend. – Ты мой друг.</li>
              <li>He is tall. – Он высокий.</li>
              <li>She is a teacher. – Она учительница</li>
              <li>We like pizza. – Мы любим пиццу.</li>
            </ol>
          </Panel>
        </Collapse>
        <Collapse accordion size='small'>
          <Panel header='Possessive adjectives examples' key='2'>
            <ol>
              <li>My book is on the table. – Моя книга на столе.</li>
              <li>Your dog is very friendly. – Твоя собака очень дружелюбная.</li>
              <li>His car is fast. – Его машина быстрая</li>
              <li>Her dress is beautiful. – Её платье красивое.</li>
              <li>Our house is big. – Наш дом большой.</li>
            </ol>
          </Panel>
        </Collapse>
        <Collapse accordion size='small'>
          <Panel header='Possessive pronouns examples' key='3'>
            <ol>
              <li>This book is mine. – Эта книга моя.</li>
              <li>That dog is yours. – Та собака твоя. </li>
              <li>The fast car is his. – Быстрая машина его. </li>
              <li>The beautiful dress is hers. – Красивое платье её. </li>
              <li>This big house is ours. – Этот большой дом наш.</li>
            </ol>
          </Panel>
        </Collapse>
        <Collapse accordion size='small'>
          <Panel header='Reflexive pronouns examples' key='3'>
            <ol>
              <li>I made this cake myself. – Я сделал этот торт сам.</li>
              <li>She looked at herself in the mirror. – Она посмотрела на себя в зеркало.</li>
              <li>We taught ourselves to play guitar. – Мы научились играть на гитаре сами.</li>
              <li>He blamed himself for the mistake. – Он винил себя за ошибку.</li>
              <li>The cat cleaned itself. – Кошка вылизала себя.</li>
            </ol>
          </Panel>
        </Collapse>
      </div>

      <p>
        Теперь разберем следующие местоимения - demonstrative (указательные), interrogative
        (вопросительные), negative (отрицательные), indefinite (неопределенные)
      </p>
      <Divider>Demonstrative pronouns</Divider>
      <p>
        К <strong>указательным местоимением</strong> относятся такие слова как:&nbsp;
        <strong>this</strong> - <em>это, этот, эта</em>; <strong>that</strong> - <em>то</em>;&nbsp;
        <strong>these</strong> - <em>эти</em>; <strong>those</strong> - <em>те</em>. Стоит отметить,
        что this и that используются в единственном числе и означают, что предмет близко, a these и those
        используются во множественном числе и означает что предмет далеко. Вот несколько примеров
        использование указательных местоимений:
      </p>

      <Collapse accordion size='small'>
        <Panel header='Demonstrative pronouns examples' key='5'>
          <ol>
            <li>This box is heavier than that one – Эта коробка тяжелее, чем та</li>
            <li>These cupcakes are mine, and those on the table are Katya’s – Эти кексики мои, а вон те на столе – Катины.</li>
            <li>This morning I saw you – Я видел тебя этим утром</li>
            <li>That day was wonderful – Тот день был чудесным</li>
            <li>These towels are wet but those are dry already – Эти полотенца мокрые, а вон те уже сухие.</li>
           </ol>
         </Panel>
      </Collapse>

      <Divider>Interrogative pronouns</Divider>
      <p>
        К <strong>вопросительным местоимениям </strong>относятся такие слова как:&nbsp;
        <strong>What?</strong>-<em>что?</em>; <strong>Which?</strong>-<em>который, какой?</em>&nbsp;
        <strong>Whose?</strong>-<em>чей?</em>; <strong>Who?</strong>-<em>кто?</em>
        <strong>Whom?</strong>-<em>Кому, кем?</em> Вот несколько примеров использование указательных
        местоимений:
      </p>

      <Collapse accordion size='small'>
        <Panel header='Interrogative pronouns examples' key='5'>
          <ol>
            <li> What do you want for dinner? – Что ты хочешь на ужин?</li>
            <li>Whose backpack is this? – Чей это рюкзак? </li>
            <li>Who won yesterday? – Кто вчера победил?</li>
            <li>I wonder what we’re doing tomorrow. - Мне интересно, что мы будем делать завтра. </li>
            <li> You should ask whom to call. - Тебе следует спросить, кому позвонить.</li>
           </ol>
         </Panel>
      </Collapse>

      <Divider>Negative pronouns</Divider>
      
      <strong> Отрицательные местоимения </strong> используются для того, чтобы придать 
      предложению отрицательное значение. К нему относятся следующие слова: 
      <strong> no</strong> - <em>никакой</em>; <strong>nothing</strong> — <em>ничего, ничто</em> 
      <strong> nobody</strong> — <em>никто</em>; <strong> no one</strong> — <em>никто</em>; 
      <strong> none</strong> — <em>ни один из, ничто</em>; <strong> neither</strong> — <em> ни тот 
      ни другой, ни один, никто</em>. 

      <Collapse accordion size='small'>
        <Panel header='Negative pronouns examples' key='5'>
          <ol>
            <li>I have no idea what to do with his attitude – У меня нет никаких идей насчет того, что делать с его поведением. </li>
            <li>No journalist talked about this case – Ни один журналист не говорил об этом случае. </li>
            <li>I need nothing from her – Мне ничего от нее не нужно. </li>
            <li>His decisions have nothing to do with me – Его решения не имеют со мной ничего общего.</li>
            <li>There was nobody at home – Никого не было дома.</li>
            <li>No one shared his point of view – Никто не разделял его точку зрения.</li>
            <li>None of them came back – Никто из них не вернулся назад. </li>
            <li>There is none like my sister – Никто не похож на мою сестру.</li>
            <li>Оn this festival I saw none of the celebrities I wanted – На этом фестивале я не увидел никого из знаменитостей, на кого хотел посмотреть.</li>
            <li>Would you like some tea or coffee? Neither. – Вам кофе или чаю? Ни того, ни другого. </li>
            <li>Neither of them was looking for a job – Никто из них не искал работу.</li>
           </ol>
         </Panel>
      </Collapse>

     
      <Divider>Indefinite pronouns</Divider>

      Неопределенные местоимения нужны в тех случаях, когда вы не хотите или не можете назвать
      конкретный предмет или персону: <strong> something</strong> - <em> кое-что, нечто, что-нибудь</em>;
      <strong> somebody / someone</strong> - <em> кто-нибудь, кто-то</em>; <strong> anything</strong> - <em>что-нибудь, 
      всё, что угодно</em>; <strong> anybody / anyone</strong> - <em>кто-нибудь, всякий, любой</em>.

      <Collapse accordion size='small'>
        <Panel header='Indefinite pronouns examples' key='5'>
          <ol>
            <li>Everybody enjoyed the concert. - Все насладились концертом. </li>
            <li>I opened the door but there was no one at home. - Я открыл дверь, но никого не было дома.</li>
            <li>It was a very clear day. We could see everything. - Это был ясный день. Мы могли видеть все вокруг.</li>
           </ol>
         </Panel>
      </Collapse>
    </>
  );
};
