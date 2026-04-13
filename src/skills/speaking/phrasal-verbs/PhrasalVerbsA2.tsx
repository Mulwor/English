import { Divider, Table, Tooltip } from 'antd';
import { ReactNode } from 'react';

export interface TooltipForRender {
  ex: any;
  text: string;
}

const dataSourceTableA2 = [
  // COME (приходить/возвращаться)
  {
    key: '1',
    phrasalVerb: <Tooltip title='приходить, заходить'>come over</Tooltip>,
    examples: [
      <Tooltip title='Приходи ко мне сегодня вечером.'>Come over to my place tonight.</Tooltip>,
      <Tooltip title='Можешь зайти на минутку?'>Can you come over for a minute?</Tooltip>,
      <Tooltip title='Они пришли к нам на ужин.'>They came over for dinner.</Tooltip>,
    ],
  },
  {
    key: '2',
    phrasalVerb: <Tooltip title='возвращаться'>come back</Tooltip>,
    examples: [
      <Tooltip title='Я вернусь через час.'>I'll come back in an hour.</Tooltip>,
      <Tooltip title='Она никогда не возвращалась в этот город.'>She never came back to this city.</Tooltip>,
      <Tooltip title='Когда ты вернешься домой?'>When will you come back home?</Tooltip>,
    ],
  },
  {
    key: '3',
    phrasalVerb: <Tooltip title='входить (без стука)'>come in</Tooltip>,
    examples: [
      <Tooltip title='Входи, дверь открыта.'>Come in, the door is open.</Tooltip>,
      <Tooltip title='Можно войти?'>Can I come in?</Tooltip>,
      <Tooltip title='Она вошла и закрыла дверь.'>She came in and closed the door.</Tooltip>,
    ],
  },

  // GO (идти/ходить)
  {
    key: '4',
    phrasalVerb: <Tooltip title='выходить (в свет), встречаться'>go out</Tooltip>,
    examples: [
      <Tooltip title='Мы идем гулять сегодня вечером.'>We're going out tonight.</Tooltip>,
      <Tooltip title='Они встречаются уже два года.'>They've been going out for two years.</Tooltip>,
      <Tooltip title='Хочешь куда-нибудь сходить?'>Do you want to go out somewhere?</Tooltip>,
    ],
  },
  {
    key: '5',
    phrasalVerb: <Tooltip title='продолжать'>go on</Tooltip>,
    examples: [
      <Tooltip title='Продолжай, я слушаю.'>Go on, I'm listening.</Tooltip>,
      <Tooltip title='Что здесь происходит?'>What's going on here?</Tooltip>,
      <Tooltip title='Не останавливайся, продолжай читать.'>Don't stop, go on reading.</Tooltip>,
    ],
  },
  {
    key: '6',
    phrasalVerb: <Tooltip title='возвращаться'>go back</Tooltip>,
    examples: [
      <Tooltip title='Я хочу вернуться в Испанию.'>I want to go back to Spain.</Tooltip>,
      <Tooltip title='Вернись на свое место.'>Go back to your seat.</Tooltip>,
      <Tooltip title='Они вернулись домой поздно.'>They went back home late.</Tooltip>,
    ],
  },

  // TRY/THROW/PICK (пробовать/бросать/поднимать)
  {
    key: '7',
    phrasalVerb: <Tooltip title='пробовать (одежду)'>try on</Tooltip>,
    examples: [
      <Tooltip title='Можно примерить это платье?'>Can I try on this dress?</Tooltip>,
      <Tooltip title='Примерь эти джинсы.'>Try on these jeans.</Tooltip>,
      <Tooltip title='Она примерила пальто, но оно было мало.'>She tried on the coat, but it was too small.</Tooltip>,
    ],
  },
  {
    key: '8',
    phrasalVerb: <Tooltip title='выбрасывать'>throw away</Tooltip>,
    examples: [
      <Tooltip title='Не выбрасывай эту коробку.'>Don't throw away this box.</Tooltip>,
      <Tooltip title='Я выбросил старые газеты.'>I threw away the old newspapers.</Tooltip>,
      <Tooltip title='Пора выбросить этот мусор.'>It's time to throw away this trash.</Tooltip>,
    ],
  },
  {
    key: '9',
    phrasalVerb: <Tooltip title='поднимать/забирать'>pick up</Tooltip>,
    examples: [
      <Tooltip title='Подними книгу с пола.'>Pick up the book from the floor.</Tooltip>,
      <Tooltip title='Я закажу пиццу и заберу ее.'>I'll order pizza and pick it up.</Tooltip>,
      <Tooltip title='Он поднял трубку и позвонил.'>He picked up the phone and called.</Tooltip>,
    ],
  },

  // PUT (класть/ставить)
  {
    key: '10',
    phrasalVerb: <Tooltip title='ставить, класть'>put down</Tooltip>,
    examples: [
      <Tooltip title='Положи сумку, она тяжелая.'>Put down the bag, it's heavy.</Tooltip>,
      <Tooltip title='Он положил книгу на стол.'>He put down the book on the table.</Tooltip>,
      <Tooltip title='Поставь чашку осторожно.'>Put down the cup carefully.</Tooltip>,
    ],
  },
  {
    key: '11',
    phrasalVerb: <Tooltip title='класть на место, убирать'>put away</Tooltip>,
    examples: [
      <Tooltip title='Убери свои игрушки.'>Put away your toys.</Tooltip>,
      <Tooltip title='Я убрал чистую посуду.'>I put away the clean dishes.</Tooltip>,
      <Tooltip title='Она убрала одежду в шкаф.'>She put away the clothes in the wardrobe.</Tooltip>,
    ],
  },
  {
    key: '12',
    phrasalVerb: <Tooltip title='надевать'>put on</Tooltip>,
    examples: [
      <Tooltip title='Надень пальто, холодно.'>Put on your coat, it's cold.</Tooltip>,
      <Tooltip title='Она надела красное платье.'>She put on a red dress.</Tooltip>,
      <Tooltip title='Я надел очки, чтобы читать.'>I put on glasses to read.</Tooltip>,
    ],
  },

  // FINISH/HURRY/WAIT (заканчивать/торопиться/ждать)
  {
    key: '13',
    phrasalVerb: <Tooltip title='заканчивать'>finish up</Tooltip>,
    examples: [
      <Tooltip title='Я заканчиваю свою работу.'>I'm finishing up my work.</Tooltip>,
      <Tooltip title='Доешь свой ужин.'>Finish up your dinner.</Tooltip>,
      <Tooltip title='Они закончили встречу.'>They finished up the meeting.</Tooltip>,
    ],
  },
  {
    key: '14',
    phrasalVerb: <Tooltip title='торопиться'>hurry up</Tooltip>,
    examples: [
      <Tooltip title='Поторопись, мы опаздываем!'>Hurry up, we're late!</Tooltip>,
      <Tooltip title='Торопись, поезд уходит.'>Hurry up, the train is leaving.</Tooltip>,
      <Tooltip title='Ему нужно поторопиться.'>He needs to hurry up.</Tooltip>,
    ],
  },
  {
    key: '15',
    phrasalVerb: <Tooltip title='ждать (не ложиться спать)'>wait up</Tooltip>,
    examples: [
      <Tooltip title='Подожди меня, я иду!'>Wait up for me, I'm coming!</Tooltip>,
      <Tooltip title='Не жди меня, я приду поздно.'>Don't wait up for me, I'll be late.</Tooltip>,
      <Tooltip title='Она ждала его до полуночи.'>She waited up for him until midnight.</Tooltip>,
    ],
  },

  // GET (получать/становиться/передвигаться)
  {
    key: '16',
    phrasalVerb: <Tooltip title='садиться (в машину)'>get in</Tooltip>,
    examples: [
      <Tooltip title='Садись в машину.'>Get in the car.</Tooltip>,
      <Tooltip title='Они сели в такси.'>They got in the taxi.</Tooltip>,
      <Tooltip title='Помоги мне сесть в машину.'>Help me get in the car.</Tooltip>,
    ],
  },
  {
    key: '17',
    phrasalVerb: <Tooltip title='выходить (из машины)'>get out</Tooltip>,
    examples: [
      <Tooltip title='Выходи из машины.'>Get out of the car.</Tooltip>,
      <Tooltip title='Она вышла из такси.'>She got out of the taxi.</Tooltip>,
      <Tooltip title='Выходите осторожно.'>Get out carefully.</Tooltip>,
    ],
  },
  {
    key: '18',
    phrasalVerb: <Tooltip title='садиться (в автобус/поезд)'>get on</Tooltip>,
    examples: [
      <Tooltip title='Садись в автобус.'>Get on the bus.</Tooltip>,
      <Tooltip title='Они сели на поезд.'>They got on the train.</Tooltip>,
      <Tooltip title='Мы сели не на тот автобус.'>We got on the wrong bus.</Tooltip>,
    ],
  },
  {
    key: '19',
    phrasalVerb: <Tooltip title='выходить (из автобуса/поезда)'>get off</Tooltip>,
    examples: [
      <Tooltip title='Выходи на следующей остановке.'>Get off at the next stop.</Tooltip>,
      <Tooltip title='Она вышла из поезда.'>She got off the train.</Tooltip>,
      <Tooltip title='Мы вышли из автобуса.'>We got off the bus.</Tooltip>,
    ],
  },
  {
    key: '20',
    phrasalVerb: <Tooltip title='вставать'>get up</Tooltip>,
    examples: [
      <Tooltip title='Я встаю в 7 утра.'>I get up at 7 AM.</Tooltip>,
      <Tooltip title='Вставай, уже поздно!'>Get up, it's late!</Tooltip>,
      <Tooltip title='Он всегда встает рано.'>He always gets up early.</Tooltip>,
    ],
  },
  {
    key: '21',
    phrasalVerb: <Tooltip title='возвращаться'>get back</Tooltip>,
    examples: [
      <Tooltip title='Я вернусь в 6 вечера.'>I'll get back at 6 PM.</Tooltip>,
      <Tooltip title='Когда они вернулись из отпуска?'>When did they get back from vacation?</Tooltip>,
      <Tooltip title='Он вернулся домой поздно.'>He got back home late.</Tooltip>,
    ],
  },

  // LIE/WAKE (лежать/просыпаться)
  {
    key: '22',
    phrasalVerb: <Tooltip title='ложиться'>lie down</Tooltip>,
    examples: [
      <Tooltip title='Я хочу прилечь.'>I want to lie down.</Tooltip>,
      <Tooltip title='Она легла на диван.'>She lay down on the sofa.</Tooltip>,
      <Tooltip title='Приляг, если устал.'>Lie down if you're tired.</Tooltip>,
    ],
  },
  {
    key: '23',
    phrasalVerb: <Tooltip title='просыпаться'>wake up</Tooltip>,
    examples: [
      <Tooltip title='Я проснулся в 7 утра.'>I woke up at 7 AM.</Tooltip>,
      <Tooltip title='Разбуди меня в 8.'>Wake me up at 8.</Tooltip>,
      <Tooltip title='Она всегда просыпается рано.'>She always wakes up early.</Tooltip>,
    ],
  },

  // TURN (поворачивать/включать)
  {
    key: '24',
    phrasalVerb: <Tooltip title='включать'>turn on</Tooltip>,
    examples: [
      <Tooltip title='Включи свет, пожалуйста.'>Turn on the light, please.</Tooltip>,
      <Tooltip title='Он включил телевизор.'>He turned on the TV.</Tooltip>,
      <Tooltip title='Не включай музыку громко.'>Don't turn on the music loudly.</Tooltip>,
    ],
  },
  {
    key: '25',
    phrasalVerb: <Tooltip title='выключать'>turn off</Tooltip>,
    examples: [
      <Tooltip title='Выключи компьютер.'>Turn off the computer.</Tooltip>,
      <Tooltip title='Она выключила свет и легла спать.'>She turned off the light and went to bed.</Tooltip>,
      <Tooltip title='Не забудь выключить телефон.'>Don't forget to turn off your phone.</Tooltip>,
    ],
  },
  {
    key: '26',
    phrasalVerb: <Tooltip title='делать громче'>turn up</Tooltip>,
    examples: [
      <Tooltip title='Сделай телевизор громче.'>Turn up the TV.</Tooltip>,
      <Tooltip title='Я не слышу, сделай музыку громче.'>I can't hear, turn up the music.</Tooltip>,
      <Tooltip title='Он сделал звук громче.'>He turned up the volume.</Tooltip>,
    ],
  },
  {
    key: '27',
    phrasalVerb: <Tooltip title='делать тише'>turn down</Tooltip>,
    examples: [
      <Tooltip title='Сделай музыку тише.'>Turn down the music.</Tooltip>,
      <Tooltip title='Можешь убавить телевизор?'>Can you turn down the TV?</Tooltip>,
      <Tooltip title='Она убавила звук.'>She turned down the sound.</Tooltip>,
    ],
  },

  // CLEAN/WASH/COOK/HEAT (уборка/готовка)
  {
    key: '28',
    phrasalVerb: <Tooltip title='убирать, чистить'>clean up</Tooltip>,
    examples: [
      <Tooltip title='Убери в своей комнате.'>Clean up your room.</Tooltip>,
      <Tooltip title='Они убрали после вечеринки.'>They cleaned up after the party.</Tooltip>,
      <Tooltip title='Помоги мне убрать на кухне.'>Help me clean up the kitchen.</Tooltip>,
    ],
  },
  {
    key: '29',
    phrasalVerb: <Tooltip title='мыть (посуду/руки)'>wash up</Tooltip>,
    examples: [
      <Tooltip title='Помой посуду.'>Wash up the dishes.</Tooltip>,
      <Tooltip title='Он помыл руки перед едой.'>He washed up before dinner.</Tooltip>,
      <Tooltip title='Я помою посуду позже.'>I'll wash up later.</Tooltip>,
    ],
  },
  {
    key: '30',
    phrasalVerb: <Tooltip title='готовить (еду)'>cook up</Tooltip>,
    examples: [
      <Tooltip title='Я приготовлю что-нибудь вкусное.'>I'll cook up something tasty.</Tooltip>,
      <Tooltip title='Она быстро приготовила ужин.'>She cooked up dinner quickly.</Tooltip>,
      <Tooltip title='Что ты приготовил?'>What did you cook up?</Tooltip>,
    ],
  },
  {
    key: '31',
    phrasalVerb: <Tooltip title='разогревать'>heat up</Tooltip>,
    examples: [
      <Tooltip title='Разогрей суп.'>Heat up the soup.</Tooltip>,
      <Tooltip title='Я разогрею вчерашнюю пиццу.'>I'll heat up yesterday's pizza.</Tooltip>,
      <Tooltip title='Еда остыла, нужно разогреть.'>The food got cold, need to heat it up.</Tooltip>,
    ],
  },

  // RUN/FIND/GIVE (бежать/находить/давать)
  {
    key: '32',
    phrasalVerb: <Tooltip title='заканчиваться (о продуктах)'>run out</Tooltip>,
    examples: [
      <Tooltip title='У нас закончился хлеб.'>We ran out of bread.</Tooltip>,
      <Tooltip title='Молоко закончилось.'>The milk has run out.</Tooltip>,
      <Tooltip title='У меня закончились деньги.'>I ran out of money.</Tooltip>,
    ],
  },
  {
    key: '33',
    phrasalVerb: <Tooltip title='узнать, выяснить'>find out</Tooltip>,
    examples: [
      <Tooltip title='Я узнал правду.'>I found out the truth.</Tooltip>,
      <Tooltip title='Выясни, когда начинается фильм.'>Find out when the movie starts.</Tooltip>,
      <Tooltip title='Она узнала об этом из новостей.'>She found out about it from the news.</Tooltip>,
    ],
  },
  {
    key: '34',
    phrasalVerb: <Tooltip title='возвращать (деньги)'>give back</Tooltip>,
    examples: [
      <Tooltip title='Верни мне мою книгу.'>Give me back my book.</Tooltip>,
      <Tooltip title='Я вернул ему деньги.'>I gave him his money back.</Tooltip>,
      <Tooltip title='Когда ты вернешь мою ручку?'>When will you give back my pen?</Tooltip>,
    ],
  },

  // GROW/HOLD/SHOW (расти/держать/показывать)
  {
    key: '35',
    phrasalVerb: <Tooltip title='вырастать'>grow up</Tooltip>,
    examples: [
      <Tooltip title='Я вырос в Москве.'>I grew up in Moscow.</Tooltip>,
      <Tooltip title='Когда я вырасту, я буду врачом.'>When I grow up, I'll be a doctor.</Tooltip>,
      <Tooltip title='Они выросли в маленьком городе.'>They grew up in a small town.</Tooltip>,
    ],
  },
  {
    key: '36',
    phrasalVerb: <Tooltip title='подождать, держаться'>hold on</Tooltip>,
    examples: [
      <Tooltip title='Подожди минутку, я проверю.'>Hold on a minute, I'll check.</Tooltip>,
      <Tooltip title='Держись за поручень.'>Hold on to the handle.</Tooltip>,
      <Tooltip title='Подожди, я сейчас вернусь.'>Hold on, I'll be right back.</Tooltip>,
    ],
  },
  {
    key: '37',
    phrasalVerb: <Tooltip title='появляться'>show up</Tooltip>,
    examples: [
      <Tooltip title='Он не появился на вечеринке.'>He didn't show up at the party.</Tooltip>,
      <Tooltip title='Сколько людей появилось?'>How many people showed up?</Tooltip>,
      <Tooltip title='Она всегда появляется вовремя.'>She always shows up on time.</Tooltip>,
    ],
  },

  // TAKE (брать)
  {
    key: '38',
    phrasalVerb: <Tooltip title='снимать (одежду)'>take off</Tooltip>,
    examples: [
      <Tooltip title='Сними обувь, когда входишь.'>Take off your shoes when you come in.</Tooltip>,
      <Tooltip title='Он снял куртку.'>He took off his jacket.</Tooltip>,
      <Tooltip title='Не снимай шапку, холодно.'>Don't take off your hat, it's cold.</Tooltip>,
    ],
  },
  {
    key: '39',
    phrasalVerb: <Tooltip title='вынимать, выносить'>take out</Tooltip>,
    examples: [
      <Tooltip title='Вынеси мусор.'>Take out the trash.</Tooltip>,
      <Tooltip title='Она вынула телефон из сумки.'>She took out her phone from her bag.</Tooltip>,
      <Tooltip title='Мы вынесли стулья в сад.'>We took the chairs out into the garden.</Tooltip>,
    ],
  },

  // LOOK (смотреть)
  {
    key: '40',
    phrasalVerb: <Tooltip title='искать'>look for</Tooltip>,
    examples: [
      <Tooltip title='Что ты ищешь?'>What are you looking for?</Tooltip>,
      <Tooltip title='Я ищу свои ключи.'>I'm looking for my keys.</Tooltip>,
      <Tooltip title='Она ищет новую работу.'>She's looking for a new job.</Tooltip>,
    ],
  },
  {
    key: '41',
    phrasalVerb: <Tooltip title='смотреть на'>look at</Tooltip>,
    examples: [
      <Tooltip title='Посмотри на эту фотографию.'>Look at this photo.</Tooltip>,
      <Tooltip title='Не смотри на меня так.'>Don't look at me like that.</Tooltip>,
      <Tooltip title='Она смотрит на часы.'>She's looking at her watch.</Tooltip>,
    ],
  },
  {
    key: '42',
    phrasalVerb: <Tooltip title='присматривать за'>look after</Tooltip>,
    examples: [
      <Tooltip title='Она присматривает за детьми.'>She looks after the children.</Tooltip>,
      <Tooltip title='Кто присмотрит за собакой?'>Who will look after the dog?</Tooltip>,
      <Tooltip title='Он заботится о своей бабушке.'>He looks after his grandmother.</Tooltip>,
    ],
  },

  // WORK/TIDY/SLOW/STAY (работать/прибирать/замедляться/оставаться)
  {
    key: '43',
    phrasalVerb: <Tooltip title='заниматься спортом, решать (проблему)'>work out</Tooltip>,
    examples: [
      <Tooltip title='Я занимаюсь в спортзале 3 раза в неделю.'>I work out at the gym 3 times a week.</Tooltip>,
      <Tooltip title='Мы решили эту проблему.'>We worked out the problem.</Tooltip>,
      <Tooltip title='Всё будет хорошо.'>Everything will work out fine.</Tooltip>,
    ],
  },
  {
    key: '44',
    phrasalVerb: <Tooltip title='прибирать, наводить порядок'>tidy up</Tooltip>,
    examples: [
      <Tooltip title='Прибери в своей комнате.'>Tidy up your room.</Tooltip>,
      <Tooltip title='Она прибралась перед гостями.'>She tidied up before the guests arrived.</Tooltip>,
      <Tooltip title='Помоги мне прибраться.'>Help me tidy up.</Tooltip>,
    ],
  },
  {
    key: '45',
    phrasalVerb: <Tooltip title='замедляться'>slow down</Tooltip>,
    examples: [
      <Tooltip title='Замедлись, ты слишком быстро говоришь.'>Slow down, you're talking too fast.</Tooltip>,
      <Tooltip title='Машина замедлилась перед светофором.'>The car slowed down before the traffic light.</Tooltip>,
      <Tooltip title='Замедлись и отдохни.'>Slow down and rest.</Tooltip>,
    ],
  },
  {
    key: '46',
    phrasalVerb: <Tooltip title='не ложиться спать'>stay up</Tooltip>,
    examples: [
      <Tooltip title='Вчера я не ложился допоздна.'>I stayed up late yesterday.</Tooltip>,
      <Tooltip title='Можно мне не ложиться сегодня?'>Can I stay up tonight?</Tooltip>,
      <Tooltip title='Они не спали всю ночь.'>They stayed up all night.</Tooltip>,
    ],
  },

  // ASK/WAIT/TALK/THINK (спрашивать/ждать/говорить/думать)
  {
    key: '47',
    phrasalVerb: <Tooltip title='просить о'>ask for</Tooltip>,
    examples: [
      <Tooltip title='Попроси помощи.'>Ask for help.</Tooltip>,
      <Tooltip title='Он попросил воды.'>He asked for some water.</Tooltip>,
      <Tooltip title='Не проси слишком многого.'>Don't ask for too much.</Tooltip>,
    ],
  },
  {
    key: '48',
    phrasalVerb: <Tooltip title='ждать'>wait for</Tooltip>,
    examples: [
      <Tooltip title='Я жду автобус.'>I'm waiting for the bus.</Tooltip>,
      <Tooltip title='Подожди меня.'>Wait for me.</Tooltip>,
      <Tooltip title='Она ждала его 2 часа.'>She waited for him for 2 hours.</Tooltip>,
    ],
  },
  {
    key: '49',
    phrasalVerb: <Tooltip title='говорить о'>talk about</Tooltip>,
    examples: [
      <Tooltip title='О чем ты говоришь?'>What are you talking about?</Tooltip>,
      <Tooltip title='Мы говорили о погоде.'>We talked about the weather.</Tooltip>,
      <Tooltip title='Не говори об этом.'>Don't talk about it.</Tooltip>,
    ],
  },
  {
    key: '50',
    phrasalVerb: <Tooltip title='думать о'>think about</Tooltip>,
    examples: [
      <Tooltip title='Я думаю о тебе.'>I'm thinking about you.</Tooltip>,
      <Tooltip title='Подумай об этом.'>Think about it.</Tooltip>,
      <Tooltip title='О чем ты думаешь?'>What are you thinking about?</Tooltip>,
    ],
  },
  {
    key: '51',
    phrasalVerb: <Tooltip title='слушать'>listen to</Tooltip>,
    examples: [
      <Tooltip title='Послушай меня.'>Listen to me.</Tooltip>,
      <Tooltip title='Я слушаю музыку.'>I'm listening to music.</Tooltip>,
      <Tooltip title='Он не слушает советы.'>He doesn't listen to advice.</Tooltip>,
    ],
  },
  {
    key: '52',
    phrasalVerb: <Tooltip title='принадлежать'>belong to</Tooltip>,
    examples: [
      <Tooltip title='Эта сумка принадлежит мне.'>This bag belongs to me.</Tooltip>,
      <Tooltip title='Кому принадлежит эта машина?'>Who does this car belong to?</Tooltip>,
      <Tooltip title='Эта книга принадлежит библиотеке.'>This book belongs to the library.</Tooltip>,
    ],
  },
  {
    key: '53',
    phrasalVerb: <Tooltip title='зависеть от'>depend on</Tooltip>,
    examples: [
      <Tooltip title='Это зависит от погоды.'>It depends on the weather.</Tooltip>,
      <Tooltip title='На него можно положиться.'>You can depend on him.</Tooltip>,
      <Tooltip title='Цена зависит от размера.'>The price depends on the size.</Tooltip>,
    ],
  },
  {
    key: '54',
    phrasalVerb: <Tooltip title='смеяться над'>laugh at</Tooltip>,
    examples: [
      <Tooltip title='Не смейся надо мной.'>Don't laugh at me.</Tooltip>,
      <Tooltip title='Они смеялись над шуткой.'>They laughed at the joke.</Tooltip>,
      <Tooltip title='Почему ты смеешься над ним?'>Why are you laughing at him?</Tooltip>,
    ],
  },
  {
    key: '55',
    phrasalVerb: <Tooltip title='платить за'>pay for</Tooltip>,
    examples: [
      <Tooltip title='Я заплатил за кофе.'>I paid for the coffee.</Tooltip>,
      <Tooltip title='Кто заплатит за ужин?'>Who will pay for dinner?</Tooltip>,
      <Tooltip title='Она заплатила за билеты.'>She paid for the tickets.</Tooltip>,
    ],
  },
  {
    key: '56',
    phrasalVerb: <Tooltip title='указывать на'>point at</Tooltip>,
    examples: [
      <Tooltip title='Не указывай пальцем.'>Don't point at people.</Tooltip>,
      <Tooltip title='Он указал на дом.'>He pointed at the house.</Tooltip>,
      <Tooltip title='На что ты указываешь?'>What are you pointing at?</Tooltip>,
    ],
  },
  {
    key: '57',
    phrasalVerb: <Tooltip title='кричать на'>shout at</Tooltip>,
    examples: [
      <Tooltip title='Не кричи на меня.'>Don't shout at me.</Tooltip>,
      <Tooltip title='Почему она кричит на него?'>Why is she shouting at him?</Tooltip>,
      <Tooltip title='Он кричал на детей.'>He shouted at the children.</Tooltip>,
    ],
  },
  {
    key: '58',
    phrasalVerb: <Tooltip title='улыбаться'>smile at</Tooltip>,
    examples: [
      <Tooltip title='Улыбнись мне.'>Smile at me.</Tooltip>,
      <Tooltip title='Она улыбнулась ему.'>She smiled at him.</Tooltip>,
      <Tooltip title='Почему ты улыбаешься?'>Why are you smiling at me?</Tooltip>,
    ],
  },
  {
    key: '59',
    phrasalVerb: <Tooltip title='работать на'>work for</Tooltip>,
    examples: [
      <Tooltip title='Я работаю на большую компанию.'>I work for a big company.</Tooltip>,
      <Tooltip title='Он работает на своего отца.'>He works for his father.</Tooltip>,
      <Tooltip title='На кого ты работаешь?'>Who do you work for?</Tooltip>,
    ],
  },
  {
    key: '60',
    phrasalVerb: <Tooltip title='верить в'>believe in</Tooltip>,
    examples: [
      <Tooltip title='Я верю в тебя.'>I believe in you.</Tooltip>,
      <Tooltip title='Она верит в любовь.'>She believes in love.</Tooltip>,
      <Tooltip title='Ты веришь в призраков?'>Do you believe in ghosts?</Tooltip>,
    ],
  },
  {
    key: '61',
    phrasalVerb: <Tooltip title='помогать'>help out</Tooltip>,
    examples: [
      <Tooltip title='Можешь помочь мне?'>Can you help me out?</Tooltip>,
      <Tooltip title='Она всегда помогает друзьям.'>She always helps her friends out.</Tooltip>,
      <Tooltip title='Спасибо, что помог.'>Thanks for helping out.</Tooltip>,
    ],
  },
  {
    key: '62',
    phrasalVerb: <Tooltip title='перезванивать'>call back</Tooltip>,
    examples: [
      <Tooltip title='Я перезвоню тебе позже.'>I'll call you back later.</Tooltip>,
      <Tooltip title='Можешь перезвонить?'>Can you call back?</Tooltip>,
      <Tooltip title='Он не перезвонил.'>He didn't call back.</Tooltip>,
    ],
  },
  {
    key: '63',
    phrasalVerb: <Tooltip title='есть вне дома'>eat out</Tooltip>,
    examples: [
      <Tooltip title='Мы любим есть вне дома.'>We like to eat out.</Tooltip>,
      <Tooltip title='Давай поедим в ресторане.'>Let's eat out tonight.</Tooltip>,
      <Tooltip title='Они часто едят в кафе.'>They often eat out.</Tooltip>,
    ],
  },
  {
    key: '64',
    phrasalVerb: <Tooltip title='заполнять (бланк)'>fill in / fill out</Tooltip>,
    examples: [
      <Tooltip title='Заполни эту форму.'>Fill in this form.</Tooltip>,
      <Tooltip title='Он заполнил анкету.'>He filled out the application.</Tooltip>,
      <Tooltip title='Заполните, пожалуйста.'>Please fill it in.</Tooltip>,
    ],
  },
  {
    key: '65',
    phrasalVerb: <Tooltip title='входить в систему'>log in / log on</Tooltip>,
    examples: [
      <Tooltip title='Войди в свой аккаунт.'>Log in to your account.</Tooltip>,
      <Tooltip title='Я не могу войти.'>I can't log in.</Tooltip>,
      <Tooltip title='Она вошла в систему.'>She logged on.</Tooltip>,
    ],
  },
  {
    key: '66',
    phrasalVerb: <Tooltip title='выходить из системы'>log out / log off</Tooltip>,
    examples: [
      <Tooltip title='Не забудь выйти.'>Don't forget to log out.</Tooltip>,
      <Tooltip title='Он вышел из системы.'>He logged off.</Tooltip>,
      <Tooltip title='Выйди и войди снова.'>Log out and log in again.</Tooltip>,
    ],
  },
  {
    key: '67',
    phrasalVerb: <Tooltip title='откладывать (деньги)'>save up</Tooltip>,
    examples: [
      <Tooltip title='Я коплю на машину.'>I'm saving up for a car.</Tooltip>,
      <Tooltip title='Она копит деньги на отпуск.'>She's saving up money for vacation.</Tooltip>,
      <Tooltip title='Мы копили целый год.'>We saved up for a whole year.</Tooltip>,
    ],
  },
  {
    key: '68',
    phrasalVerb: <Tooltip title='заткнуться'>shut up</Tooltip>,
    examples: [
      <Tooltip title='Заткнись!'>Shut up!</Tooltip>,
      <Tooltip title='Она сказала ему заткнуться.'>She told him to shut up.</Tooltip>,
      <Tooltip title='Почему они не заткнутся?'>Why won't they shut up?</Tooltip>,
    ],
  },
  {
    key: '69',
    phrasalVerb: <Tooltip title='пробовать, тестировать'>try out</Tooltip>,
    examples: [
      <Tooltip title='Попробуй эту новую игру.'>Try out this new game.</Tooltip>,
      <Tooltip title='Я хочу попробовать этот рецепт.'>I want to try out this recipe.</Tooltip>,
      <Tooltip title='Она пробовалась на роль.'>She tried out for the role.</Tooltip>,
    ],
  },
  {
    key: '70',
    phrasalVerb: <Tooltip title='использовать полностью'>use up</Tooltip>,
    examples: [
      <Tooltip title='Мы израсходовали весь бензин.'>We used up all the gas.</Tooltip>,
      <Tooltip title='Я использовал всю бумагу.'>I used up all the paper.</Tooltip>,
      <Tooltip title='Не расходуй всю воду.'>Don't use up all the water.</Tooltip>,
    ],
  },
  {
    key: '71',
    phrasalVerb: <Tooltip title='разогреваться'>warm up</Tooltip>,
    examples: [
      <Tooltip title='Сделай разминку перед бегом.'>Warm up before running.</Tooltip>,
      <Tooltip title='Суп разогревается.'>The soup is warming up.</Tooltip>,
      <Tooltip title='Они разминались 10 минут.'>They warmed up for 10 minutes.</Tooltip>,
    ],
  },
];

export const columns = [
  {
    title: 'Phrasal verb',
    dataIndex: 'phrasalVerb',
    key: 'phrasalVerb',
    width: '25%',
  },
  {
    title: 'Examples',
    dataIndex: 'examples',
    key: 'examples',
    render: (examples: ReactNode[]) => (
      <ul style={{ margin: 0, paddingLeft: 20 }}>
        {examples.map((ex, idx) => (
          <li
            key={idx}
            style={{ marginBottom: 8 }}
          >
            {ex}
          </li>
        ))}
      </ul>
    ),
  },
];

export const PhrasalVerbsA2 = () => {
  return (
    <>
      <Divider orientation='left'>Phrasal Verbs A1-A2</Divider>
      <Table
        dataSource={dataSourceTableA2}
        columns={columns}
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: true,
          pageSizeOptions: ['10', '20', '50'],
        }}
        bordered
        size='middle'
      />
    </>
  );
};
