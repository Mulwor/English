import { Divider, Table } from "antd"
import type { ColumnsType } from "antd/es/table"
import './style.css'

interface UsageExample {
  key: string
  usage: string
  examples: React.ReactNode
  translation: React.ReactNode
}

export const PhrasalVerbs = () => {
  const columns: ColumnsType<UsageExample> = [
    {
      title: "Когда используется",
      dataIndex: "usage",
      key: "usage",
      width: "25%",
    },
    {
      title: "Примеры",
      dataIndex: "examples",
      key: "examples",
      width: "35%",
    },
    {
      title: "Перевод",
      dataIndex: "translation",
      key: "translation",
      width: "40%",
    },
  ]

  const data: UsageExample[] = [
    {
      key: "1",
      usage: "Для включения или отключения света, машин, приборов и т.д.",
      examples: (
        <>
          • Shall I leave the <span className="color-text">lights on</span> or <span className="color-text">turn them off</span>?<br />
          • Is the heating on? — No, I <span className="color-text">switched it off</span><br />
          • It was getting cold, so I <span className="color-text">put the heating on</span><br /> 
          • I wanted to bake a cake, so I <span className="color-text">put the oven on</span><br /> 
          • I wanted to make some tea, so I <span className="color-text">put the kettle on</span><br />
          • I wanted to listen to some music, so I <span className="color-text">put a CD on</span><br />
          • We need some boiling water, so I will <span className="color-text">put the kettle on</span><br />
          • I did not want to be disturbed, so I <span className="color-text">switched off my phone</span><br /> 
        </>
      ),
      translation: (
        <>
          • Оставить свет <span className="color-text">включенным</span> или <span className="color-text">выключить</span>?<br />
          • Горит ли отопление? — Нет, я <span className="color-text">выключил его</span><br />
          • Становилось холодно, поэтому я <span className="color-text">включил отопление</span><br />
          • Я хотел сделать пирог (торт), поэтому я <span className="color-text">включил духовку</span><br />
          • Я хотел заварить чай, поэтому я <span className="color-text">включил чайник</span><br />
          • Я хотел слушать музыку, поэтому я <span className="color-text">включил CD</span><br />
          • Нам нужна немного горячей воды, поэтому я <span className="color-text">включу чайник</span><br />
          • Мне не хотелось беспокоить, поэтому я <span className="color-text">выключил телефон</span><br />
        </>
      ),
    },
    {
      key: "2",
      usage: "Для событий: go on (happen - случилось), call off (cancel - отменять), put off (delay - отложить)",
      examples: (
        <>
          • What's all that noise? — What's <span className="color-text">going on</span>?<br />
          • What are all these people doing? What is <span className="color-text">going on</span>?<br />
          • The open air concert had to be <span className="color-text">called off</span> because of the weather<br />
          • The wedding was <span className="color-text">put off</span> because of the rain<br />
          • Don't <span className="color-text">put off</span> until tomorrow what you can do today<br />
          • There was going to be a strike by bus drivers, but now they have been offered more money and the strike has been <span className="color-text">called off</span><br />
        </>
      ),
      translation: (
        <>
          • Что за шум? — Что <span className="color-text">происходит</span>?<br />
          • Что все эти люди делают? Что <span className="color-text">происходит</span>?<br />
          • Открытый концерт был <span className="color-text">отменен</span> из-за погоды<br />
          • Свадьба была <span className="color-text">отложена</span> из-за дождя<br />
          • Не <span className="color-text">откладывайте</span> на завтра то, что можно сделать сегодня<br />
          • Водители автобуса хотели провести забастовку, но теперь им предложили больше денег и забастовка была <span className="color-text">отменена</span><br />
        </>
      ),
    },
    {
      key: "3",
      usage: "Для одежды (try on (примерить), take off (снять) put on (надеть или набрать в весе) clothes, glasses, make-up, a seat belt etc",
      examples: (
        <>
          • My hands were cold, so I <span className="color-text">put my gloves on</span><br />
          • I've <span className="color-text">put on</span> 2 kilograms in the last month<br />
          • I <span className="color-text">tried on</span> a jacket in the shop, but it didn't fit me very well<br />
          • I <span className="color-text">took off</span> my glasses<br />
          • Her hands were cold, so she <span className="color-text">put her gloves on</span><br />
          • Maria <span className="color-text">tried on</span> a hat but it was too big for her<br />
          • He took his sunglasses out of his pocket and <span className="color-text">put them on</span><br />
        </>
      ),
      translation: (
        <>
          • Мои руки были холодные, поэтому я <span className="color-text">надела перчатки</span><br />
          • Я <span className="color-text">набрала</span> 2 кг в последнем месяце<br />
          • Я <span className="color-text">примерила</span> куртку в магазине, но она мне не очень подошла<br />
          • Я <span className="color-text">снял очки</span><br />
          • Ее руки были холодные, поэтому она <span className="color-text">надела перчатки</span><br />
          • Мария <span className="color-text">примерила</span> шляпу, но она была слишком большой для нее<br />
          • Он достал из кармана солнцезащитные очки и <span className="color-text">надел их</span><br />
        </>
      ),
    },
    {
      key: "4",
      usage: "Off — подальше от места или человека: be off (to a place - уезжать, уходить отправляться), walk off (уехать), run off (убежать), drive off (уехать), ride off (ускакать), go off (~walk away / run away), set off (отправится в путь), take off (leave the ground ~ for planes ~ самолет взлетел), see somebody off (провожать кого-то в путь)",
      examples: (
        <>
          • Tomorrow <span className="color-text">I'm off</span> to Paris / <span className="color-text">I'm off</span> on holiday<br />
          • Diana got on her bike, and <span className="color-text">rode off</span><br />
          • Mark left home at the age of 18 and <span className="color-text">went off</span> to Canada<br />
          • We <span className="color-text">set off</span> very early to avoid the traffic<br />
          • After a long delay the plane finally <span className="color-text">took off</span><br />
          • The weather was too bad for the plane to <span className="color-text">take off</span>, so the flight was delayed<br />
          • Helen was going away. We went to the station with her to <span className="color-text">see her off</span><br />
          • The plane <span className="color-text">took off</span> at 10.55<br />
          • Mark's parents went to the airport to <span className="color-text">see him off</span><br />
        </>
      ),
      translation: (
        <>
          • Завтра я <span className="color-text">уезжаю</span> в Париж / Я <span className="color-text">уезжаю</span> в отпуск<br />
          • Диана села на велосипед и <span className="color-text">уехала</span><br />
          • Марк покинул дом в возрасте 18 лет и <span className="color-text">уехал</span> в Канаду<br />
          • Мы <span className="color-text">отправились</span> очень рано, чтобы избежать трафика<br />
          • После долгого ожидания самолет наконец-то <span className="color-text">взлетел</span><br />
          • Погода была слишком плохой, чтобы самолет мог <span className="color-text">взлететь</span>, поэтому полет был отложен<br />
          • Елена уезжала. Мы отправились на вокзал с ней, чтобы <span className="color-text">проводить её</span><br />
          • Самолет <span className="color-text">взлетел</span> в 10.55<br />
          • Родители Марка отправились в аэропорт, чтобы <span className="color-text">проводить его</span><br />
        </>
      ),
    },
    {
      key: "5",
      usage: "Verb + on = continue doing something - продолжать делать что-то: drive (ехать); walk (гулять); play (играть) on; go on / carry on (продолжать делать что-то) ~with; keep on doing smth - продолжать делать что-то на регулярной основе",
      examples: (
        <>
          • Shall we stop at this petrol station or shall we drive on to the next one? <br />
          • The party went on until 4 o'clock in the morning<br />
          • We can't go on spending money like this. We'll have nothing left soon<br />
          • I don't want to carry on working here. I'm going to look for another job.<br />
          • Don't let me disturb you. Please carry on with what you're doing. <br />
          • He keeps on criticizing me. I'm fed up with it! <br />
        </>
      ), 
      translation: (
        <>
          • Давайте остановимся на этом бензиновом станции или продолжим ехать к следующему? <br />
          • Вечеринка продолжалась до 4 часов утра <br />
          • Мы не можем продолжать тратить деньги таким образом. Мы скоро не останемся без денег<br />
          • Я не хочу продолжать работать здесь. Я поищу другую работу.<br />
          • Пожалуйста, не мешайте меня. Пожалуйста, продолжите делать то, что вы делает.<br />
          • Он продолжает критиковать меня. Я устал от этого!<br />
        </>
      ),
    }, 
    {
      key: "6",
      usage: "Get on",
      examples: (
        <>
          asd
        </>
      ),
      translation: (
        <>
          asd
        </>
      ),
    },
    {
      key: "7",
      usage: "Verb + off",
      examples: (
        <>
          asd
        </>
      ),
      translation: (
        <>
          asd
        </>
      ),
    },
  ]

  return (
    <>
      <Divider>Phrasal verbs - фразовые глаголы</Divider>

      <p>
        Фразовые глаголы (phrasal verbs) — это сочетания глагола с предлогом или наречием, 
        которые вместе образуют новое значение. В данном разделе будут изучать не списки фразовых глаголов, а 
        именно предлоги (on/off, in/out, up/down, away/back), которые используются с фразовыми глаголами.   
      </p>

      <Divider>Предлоги On / Off</Divider>

      <Table 
        columns={columns} 
        dataSource={data} 
        pagination={false}
        bordered
        size="middle"
      />
    </>
  )
}