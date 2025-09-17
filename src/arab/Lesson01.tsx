import { useState } from "react";
import { Divider, Table, Tooltip } from "antd";
import alif from './alphabet/data/audio/alif.mp3'
import ba from './alphabet/data/audio/ba.mp3'
import ta from './alphabet/data/audio/ta.mp3'
import tha from './alphabet/data/audio/tha.mp3'

const dataSource = [
  { 
    key: '1', 
    name: "[əlif]", 
    number: 1,
    zero: 'ا', 
    first: 'ا', 
    second: 'ــا', 
    third: 'ــا',  
    audio: alif,
    tooltip: "Алиф - читается как долгий звук 'а'"
  },
  { 
    key: '2', 
    number: 2,
    name: "[bāʾ]", 
    zero: 'ب', first: 'بـ', second: 'ـبـ', third: 'ـب', 
    audio: ba,
    tooltip: "Ба - читается как русская 'б'"
  },
  { 
    key: '3',
    number: 3, 
    name: "[tāʾ]", 
    zero: 'ت', first: 'تـ', second: 'ـتـ', third: 'ـت', 
    audio: ta,
    tooltip: "Та - читается как твёрдый звук 'т'"
  },
  { 
    key: '4',
    number: 4, 
    name: "[tẖāʾ]", 
    zero: 'ث', first: 'ثـ', second: 'ـثـ', third: 'ـث', 
    audio: tha,
    tooltip: "Са - читается как межзубный звук, похожий на английское 'th' в слове 'think'"
  },
];

export const Lesson01 = () => {
  const [audio] = useState(new Audio());
  
  const playSound = (audioSrc) => {
    audio.pause();
    audio.src = audioSrc;
    audio.play().catch(error => {
      console.log("Audio play error:", error);
    });
  };

  const renderClickableCell = (text, record) => (
    <span 
      style={{ 
        fontSize: '24px', 
        fontFamily: 'Arial, sans-serif',
        cursor: 'pointer',
        userSelect: 'none'
      }}
      onClick={() => playSound(record.audio)}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          playSound(record.audio);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Произнести звук ${record.name}`}
    >
      {text}
    </span>
  );

  const renderClickableCellWithTooltip = (text, record) => (
    <Tooltip title={record.tooltip} placement="top">
      <span 
        style={{ 
          fontSize: '24px', 
          fontFamily: 'Arial, sans-serif',
          cursor: 'pointer',
          userSelect: 'none'
        }}
        onClick={() => playSound(record.audio)}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            playSound(record.audio);
          }
        }}
        tabIndex={0}
        role="button"
        aria-label={`Произнести звук ${record.name}`}
      >
        {text}
      </span>
    </Tooltip>
  );

  const columns = [
    { 
      title: 'Название', 
      dataIndex: 'name', 
      key: 'name',
      render: (text) => <span>{text}</span>
    },
    { 
      number: '№',
      title: 'Отдельная форма', 
      dataIndex: 'zero', 
      key: 'zero',
      render: (text, record) => renderClickableCellWithTooltip(text, record) // С тултипом
    },
    { 
      title: 'В начале', 
      dataIndex: 'first', 
      key: 'first',
      render: (text, record) => renderClickableCell(text, record) // Без тултипа
    },
    { 
      title: 'В середине', 
      dataIndex: 'second', 
      key: 'second',
      render: (text, record) => renderClickableCell(text, record) // Без тултипа
    },
    { 
      title: 'В конце', 
      dataIndex: 'third', 
      key: 'third',
      render: (text, record) => renderClickableCell(text, record) // Без тултипа
    },
  ];

  return (
    <>
      <Divider>Урок №1 - алфавит и таджвид</Divider>

      <p>
        В арабском языке всего 28 букв, и почти все они согласные, за исключением буквы Алиф. 
        В данном уроке будут рассмотрены первые 4 буквы арабского алфавита в трех формах - как 
        они пишутся в начале предложения, середине и конца.
      </p>

      <p>По нажатию на любую букву будет читаться текст (его произношение), 
        а также по наведению на отдельную форму будет всплывать поясняющий текст чтения буквы 
      </p>

      <Table 
        dataSource={dataSource} 
        columns={columns}
        pagination={false}
      />

      <p>
        Задание №1: Необходимо прочитать алфавит как он есть: 
        ج 
        ا
      
      
      </p>
    </>
  )
};