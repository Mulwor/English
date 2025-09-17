import { Divider, Table, Tooltip } from "antd";
import { ReactNode } from "react";

export interface TooltipForRender {
  ex: any;
  text: string;
}

const dataSourceTable = [
  {
    key: '1',
    phrasalVerb: (
      <Tooltip title="вставать (с кровати)">
        get up
      </Tooltip>
    ),
    examples: [
      <Tooltip title="Я встаю в 7 часов каждое утро.">
        I get up at 7 o'clock every morning.
      </Tooltip>,
      <Tooltip title="Вчера она встала поздно и опоздала на работу.">
        She got up late yesterday and was late for work.
      </Tooltip>,
      <Tooltip title="Вставай, пожалуйста! Завтрак готов.">
        Get up, please! The breakfast is ready.
      </Tooltip>
    ]
  },
  {
    key: '2',
    phrasalVerb: (
      <Tooltip title="просыпаться">
        wake up
      </Tooltip>
    ),
    examples: [
      <Tooltip title="Я обычно просыпаюсь в 6:30 утра.">
        I usually wake up at 6:30 AM.
      </Tooltip>,
      <Tooltip title="Громкий шум разбудил меня посреди ночи.">
        The loud noise woke me up in the middle of the night.
      </Tooltip>,
      <Tooltip title="Просыпайся! Уже 10 часов!">
        Wake up! It's already 10 o'clock!
      </Tooltip>
    ]
  },
  {
    key: '3',
    phrasalVerb: (
      <Tooltip title="садиться">
        sit down
      </Tooltip>
    ),
    examples: [
      <Tooltip title="Пожалуйста, садитесь и устраивайтесь поудобнее.">
        Please sit down and make yourself comfortable.
      </Tooltip>,
      <Tooltip title="Он сел рядом со мной в автобусе.">
        He sat down next to me on the bus.
      </Tooltip>,
      <Tooltip title="Давай сядем и поговорим об этой проблеме.">
        Let's sit down and talk about this problem.
      </Tooltip>
    ]
  },
  {
    key: '4',
    phrasalVerb: (
      <Tooltip title="вставать">
        stand up
      </Tooltip>
    ),
    examples: [
      <Tooltip title="Пожалуйста, вставайте, когда учитель входит в класс.">
        Please stand up when the teacher enters the classroom.
      </Tooltip>,
      <Tooltip title="Все встали, чтобы аплодировать исполнителям.">
        Everyone stood up to applaud the performers.
      </Tooltip>,
      <Tooltip title="Встань прямо и не сутулься.">
        Stand up straight and don't slouch.
      </Tooltip>
    ]
  },
  {
    key: '5',
    phrasalVerb: (
      <Tooltip title="входить">
        come in
      </Tooltip>
    ),
    examples: [
      <Tooltip title="Входи! Дверь открыта.">
        Come in! The door is open.
      </Tooltip>,
      <Tooltip title="Она вошла тихо, чтобы никого не разбудить.">
        She came in quietly so as not to wake anyone.
      </Tooltip>,
      <Tooltip title="Можно войти? Мне нужно с тобой поговорить.">
        Can I come in? I need to talk to you.
      </Tooltip>
    ]
  },
  {
    key: '6',
    phrasalVerb: (
      <Tooltip title="выходить, уходить">
        go out
      </Tooltip>
    ),
    examples: [
      <Tooltip title="Я выхожу на прогулку. Скоро вернусь.">
        I'm going out for a walk. I'll be back soon.
      </Tooltip>,
      <Tooltip title="Они пошли ужинать в хороший ресторан.">
        They went out to dinner at a nice restaurant.
      </Tooltip>,
      <Tooltip title="Не выходи без пальто - на улице холодно!">
        Don't go out without a coat - it's cold outside!
      </Tooltip>
    ]
  },
  {
    key: '7',
    phrasalVerb: (
      <Tooltip title="входить (в систему)">
        log in / log on
      </Tooltip>
    ),
    examples: [
      <Tooltip title="Тебе нужно войти в систему, чтобы получить доступ к почте.">
        You need to log in to access your email.
      </Tooltip>,
      <Tooltip title="Я не могу войти в компьютер - забыл пароль.">
        I can't log on to my computer - I forgot my password.
      </Tooltip>,
      <Tooltip title="Войдите здесь с вашим логином и паролем.">
        Log in here with your username and password.
      </Tooltip>
    ]
  },
  {
    key: '8',
    phrasalVerb: (
      <Tooltip title="выходить (из системы)">
        log out / log off
      </Tooltip>
    ),
    examples: [
      <Tooltip title="Всегда выходи из своих аккаунтов на публичных компьютерах.">
        Always log out of your accounts on public computers.
      </Tooltip>,
      <Tooltip title="Не забудь выйти из системы, когда закончишь работу.">
        Don't forget to log off when you finish work.
      </Tooltip>,
      <Tooltip title="Я вышел из всех своих аккаунтов в социальных сетях.">
        I logged out of all my social media accounts.
      </Tooltip>
    ]
  },
  {
    key: '9',
    phrasalVerb: (
      <Tooltip title="искать">
        look for
      </Tooltip>
    ),
    examples: [
      <Tooltip title="Я ищу свои ключи. Ты не видел их?">
        I'm looking for my keys. Have you seen them?
      </Tooltip>,
      <Tooltip title="Они ищут новую квартиру в центре города.">
        They are looking for a new apartment in the city center.
      </Tooltip>,
      <Tooltip title="Что ты ищешь? Могу я помочь?">
        What are you looking for? Can I help you?
      </Tooltip>
    ]
  },
  {
    key: '10',
    phrasalVerb: (
      <Tooltip title="включать (прибор, свет)">
        turn on
      </Tooltip>
    ),
    examples: [
      <Tooltip title="Можешь включить свет? Становится темно.">
        Can you turn on the light? It's getting dark.
      </Tooltip>,
      <Tooltip title="Он включил телевизор, чтобы посмотреть новости.">
        He turned on the TV to watch the news.
      </Tooltip>,
      <Tooltip title="Включи обогреватель, пожалуйста. Здесь холодно.">
        Turn on the heater, please. It's cold in here.
      </Tooltip>
    ]
  },
  {
    key: '11',
    phrasalVerb: (
      <Tooltip title="выключать (прибор, свет)">
        turn off
      </Tooltip>
    ),
    examples: [
      <Tooltip title="Пожалуйста, выключай свет, когда выходишь из комнаты.">
        Please turn off the lights when you leave the room.
      </Tooltip>,
      <Tooltip title="Не забудь выключить компьютер перед уходом.">
        Don't forget to turn off the computer before you go.
      </Tooltip>,
      <Tooltip title="Выключи музыку - я пытаюсь учиться!">
        Turn off the music - I'm trying to study!
      </Tooltip>
    ]
  },
  {
    key: '12',
    phrasalVerb: (
      <Tooltip title="идти спать">
        go to bed
      </Tooltip>
    ),
    examples: [
      <Tooltip title="Я обычно ложусь спать в 11 вечера.">
        I usually go to bed at 11 PM.
      </Tooltip>,
      <Tooltip title="Дети легли спать рано, потому что устали.">
        The children went to bed early because they were tired.
      </Tooltip>,
      <Tooltip title="Уже поздно - пора спать!">
        It's late - time to go to bed!
      </Tooltip>
    ]
  },
  {
    key: '13',
    phrasalVerb: (
      <Tooltip title="надевать (одежду)">
        put on
      </Tooltip>
    ),
    examples: [
      <Tooltip title="Надень пальто - на улице холодно.">
        Put on your coat - it's cold outside.
      </Tooltip>,
      <Tooltip title="Она надела свое любимое платье на вечеринку.">
        She put on her favorite dress for the party.
      </Tooltip>,
      <Tooltip title="Мне нужно надеть очки, чтобы прочитать это.">
        I need to put on my glasses to read this.
      </Tooltip>
    ]
  },
  {
    key: '14',
    phrasalVerb: (
      <Tooltip title="снимать (одежду)">
        take off
      </Tooltip>
    ),
    examples: [
      <Tooltip title="Снимай обувь, когда входишь в дом.">
        Take off your shoes when you enter the house.
      </Tooltip>,
      <Tooltip title="Он снял пиджак, потому что в комнате было тепло.">
        He took off his jacket because the room was warm.
      </Tooltip>,
      <Tooltip title="Можешь снять шляпу сейчас - мы внутри.">
        You can take off your hat now - we're inside.
      </Tooltip>
    ]
  },
  {
    key: '15',
    phrasalVerb: (
      <Tooltip title="садиться (в транспорт: автобус, поезд, самолет)">
        get on
      </Tooltip>
    ),
    examples: [
      <Tooltip title="Мы сели на автобус на центральной станции.">
        We got on the bus at the central station.
      </Tooltip>,
      <Tooltip title="Поторопись и садись на поезд - он скоро отходит!">
        Hurry up and get on the train - it's about to leave!
      </Tooltip>,
      <Tooltip title="Пассажиры сейчас садятся в самолет.">
        Passengers are now getting on the plane.
      </Tooltip>
    ]
  },
  {
    key: '16',
    phrasalVerb: (
      <Tooltip title="выходить (из транспорта)">
        get off
      </Tooltip>
    ),
    examples: [
      <Tooltip title="Выходите на следующей остановке для центра города.">
        Get off at the next stop for the city center.
      </Tooltip>,
      <Tooltip title="Она вышла из поезда на станции Лондон Виктория.">
        She got off the train at London Victoria station.
      </Tooltip>,
      <Tooltip title="Будьте осторожны, выходя из автобуса.">
        Be careful when getting off the bus.
      </Tooltip>
    ]
  },
  {
    key: '17',
    phrasalVerb: (
      <Tooltip title="садиться (в машину, такси)">
        get in
      </Tooltip>
    ),
    examples: [
      <Tooltip title="Садись в машину быстро - идет дождь!">
        Get in the car quickly - it's raining!
      </Tooltip>,
      <Tooltip title="Они сели в такси и дали водителю адрес.">
        They got in the taxi and gave the driver the address.
      </Tooltip>,
      <Tooltip title="Можешь помочь мне сесть в машину? Мои руки заняты.">
        Can you help me get in the car? My hands are full.
      </Tooltip>
    ]
  },
  {
    key: '18',
    phrasalVerb: (
      <Tooltip title="выходить (из машины, такси)">
        get out (of)
      </Tooltip>
    ),
    examples: [
      <Tooltip title="Выходи из машины осторожно - дорога оживленная.">
        Get out of the car carefully - the road is busy.
      </Tooltip>,
      <Tooltip title="Мы вышли из такси и заплатили водителю.">
        We got out of the taxi and paid the driver.
      </Tooltip>,
      <Tooltip title="Пожалуйста, выходите из машины со стороны тротуара.">
        Please get out of the car on the sidewalk side.
      </Tooltip>
    ]
  },
  {
    key: '19',
    phrasalVerb: (
      <Tooltip title="поднимать">
        pick up
      </Tooltip>
    ),
    examples: [
      <Tooltip title="Можешь поднять ту книгу с пола?">
        Can you pick up that book from the floor?
      </Tooltip>,
      <Tooltip title="Она подняла трубку и ответила на звонок.">
        She picked up the phone and answered the call.
      </Tooltip>,
      <Tooltip title="Ребенок поднял игрушку и начал играть.">
        The child picked up the toy and started playing.
      </Tooltip>
    ]
  },
  {
    key: '20',
    phrasalVerb: (
      <Tooltip title="класть, ставить">
        put down
      </Tooltip>
    ),
    examples: [
      <Tooltip title="Поставь эту тяжелую сумку - ты повредишь спину.">
        Put down that heavy bag - you'll hurt your back.
      </Tooltip>,
      <Tooltip title="Он положил свои книги на стол и сел.">
        He put down his books on the table and sat down.
      </Tooltip>,
      <Tooltip title="Пожалуйста, поставь вазу осторожно - она хрупкая.">
        Please put down the vase carefully - it's fragile.
      </Tooltip>
    ]
  },
  {
    key: '21',
    phrasalVerb: (
      <Tooltip title="выбрасывать">
        throw away
      </Tooltip>
    ),
    examples: [
      <Tooltip title="Выбрось эту старую газету - она с прошлой недели.">
        Throw away that old newspaper - it's from last week.
      </Tooltip>,
      <Tooltip title="Не выбрасывай чек - он может понадобиться.">
        Don't throw away the receipt - you might need it.
      </Tooltip>,
      <Tooltip title="Нам стоит выбросить эти сломанные игрушки.">
        We should throw away these broken toys.
      </Tooltip>
    ]
  },
  {
    key: '22',
    phrasalVerb: (
      <Tooltip title="входить (в аккаунт на сайте)">
        sign in
      </Tooltip>
    ),
    examples: [
      <Tooltip title="Тебе нужно войти в свой аккаунт, чтобы совершить покупку.">
        You need to sign in to your account to make a purchase.
      </Tooltip>,
      <Tooltip title="Я вошел в систему, чтобы проверить свои сообщения.">
        I signed in to check my messages.
      </Tooltip>,
      <Tooltip title="Пожалуйста, войдите с вашим email и паролем.">
        Please sign in with your email and password.
      </Tooltip>
    ]
  },
  {
    key: '23',
    phrasalVerb: (
      <Tooltip title="выходить (из аккаунта)">
        sign out
      </Tooltip>
    ),
    examples: [
      <Tooltip title="Всегда помни о необходимости выходить из аккаунтов на публичных устройствах.">
        Always remember to sign out of your accounts on public devices.
      </Tooltip>,
      <Tooltip title="Я вышел из всех своих аккаунтов в соцсетях для безопасности.">
        I signed out of all my social media accounts for security.
      </Tooltip>,
      <Tooltip title="Не забудь выйти из системы, когда закончишь сеанс.">
        Don't forget to sign out when you finish your session.
      </Tooltip>
    ]
  },
  {
    key: '24',
    phrasalVerb: (
      <Tooltip title="слушать (кого-то, что-то)">
        listen to
      </Tooltip>
    ),
    examples: [
      <Tooltip title="Я люблю слушать музыку, пока работаю.">
        I like to listen to music while I work.
      </Tooltip>,
      <Tooltip title="Слушай меня внимательно - это важно.">
        Listen to me carefully - this is important.
      </Tooltip>,
      <Tooltip title="Она слушала подкаст об истории.">
        She was listening to a podcast about history.
      </Tooltip>
    ]
  }
];

export const columns = [
  { 
    title: "Phrasal verb", 
    dataIndex: "phrasalVerb", 
    key: "Phrasal verb" 
  },
  { 
    title: "Examples", 
    dataIndex: "examples", 
    key: "Examples",
    render: (examples: ReactNode[]) => (
      <ul style={{ margin: 0 }}>
        {examples.map((ex, idx) => (
          <li key={idx}>{ex}</li>
        ))}
      </ul>
    )
  }
];

export const PhrasalVerbsA1 = () => {
  return (
    <>
      <Divider>Фразовые глаголы уровня А1 (beginner)</Divider>

      <Table
        dataSource={dataSourceTable} 
        columns={columns} 
        pagination={{
          defaultPageSize: 5,
        }}
      />
    </>
  );
};
