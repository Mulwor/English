import { useState } from 'react';
import { Divider, Table, Tooltip } from 'antd';
import alif from './alphabet/data/audio/alif.mp3';
import ba from './alphabet/data/audio/ba.mp3';
import ta from './alphabet/data/audio/ta.mp3';
import tha from './alphabet/data/audio/tha.mp3';

const dataSource = [
  {
    key: '1',
    name: '[əlif]',
    number: 1,
    zero: 'ا',
    first: 'ا',
    second: 'ــا',
    third: 'ــا',
    audio: alif,
    tooltip: "Алиф - читается как долгий звук 'а'",
  },
  {
    key: '2',
    number: 2,
    name: '[bāʾ]',
    zero: 'ب',
    first: 'بـ',
    second: 'ـبـ',
    third: 'ـب',
    audio: ba,
    tooltip: "Ба - читается как русская 'б'",
  },
  {
    key: '3',
    number: 3,
    name: '[tāʾ]',
    zero: 'ت',
    first: 'تـ',
    second: 'ـتـ',
    third: 'ـت',
    audio: ta,
    tooltip: "Та - читается как твёрдый звук 'т'",
  },
  {
    key: '4',
    number: 4,
    name: '[tẖāʾ]',
    zero: 'ث',
    first: 'ثـ',
    second: 'ـثـ',
    third: 'ـث',
    audio: tha,
    tooltip: "Са - читается как межзубный звук, похожий на английское 'th' в слове 'think'",
  },
];

export const Lesson01 = () => {
  const [audio] = useState(new Audio());

  const playSound = (audioSrc: any) => {
    audio.pause();
    audio.src = audioSrc;
    audio.play().catch((error) => {
      console.log('Audio play error:', error);
    });
  };

  const renderClickableCell = (text: string, record: any) => (
    <span
      style={{
        fontSize: '24px',
        fontFamily: 'Arial, sans-serif',
        cursor: 'pointer',
        userSelect: 'none',
      }}
      onClick={() => playSound(record.audio)}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          playSound(record.audio);
        }
      }}
      tabIndex={0}
      role='button'
      aria-label={`Произнести звук ${record.name}`}
    >
      {text}
    </span>
  );

  const renderClickableCellWithTooltip = (text: string, record: any) => (
    <Tooltip
      title={record.tooltip}
      placement='top'
    >
      <span
        style={{
          fontSize: '24px',
          fontFamily: 'Arial, sans-serif',
          cursor: 'pointer',
          userSelect: 'none',
        }}
        onClick={() => playSound(record.audio)}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            playSound(record.audio);
          }
        }}
        tabIndex={0}
        role='button'
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
      render: (text: string) => <span>{text}</span>,
    },
    {
      number: '№',
      title: 'Отдельная форма',
      dataIndex: 'zero',
      key: 'zero',
      render: (text: string, record: any) => renderClickableCellWithTooltip(text, record),
    },
    {
      title: 'В начале',
      dataIndex: 'first',
      key: 'first',
      render: (text: string, record: any) => renderClickableCell(text, record),
    },
    {
      title: 'В середине',
      dataIndex: 'second',
      key: 'second',
      render: (text: string, record: any) => renderClickableCell(text, record),
    },
    {
      title: 'В конце',
      dataIndex: 'third',
      key: 'third',
      render: (text: string, record: any) => renderClickableCell(text, record),
    },
  ];

  return (
    <>
      <Divider>Урок №1: Алфавит и таджвид</Divider>

      <p>Арабский алфавит состоит из 28 букв. Почти все они — согласные, и только Алиф обозначает долгий гласный звук.</p>
      <p>В этом уроке мы разберем первые 4 буквы. Ты увидишь, как каждая из них пишется в трех позициях: в начале, в середине и в конце слова.</p>

      <ol>
        Как работать с уроком:
        <li>Нажми на любую букву, чтобы услышать ее произношение.</li>
        <li>Наведи курсор на отдельную форму буквы, чтобы увидеть подсказку с правилами чтения.</li>
      </ol>

      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
      />

      <p>Задание №1: Необходимо прочитать алфавит как он есть: ج ا</p>
    </>
  );
};
