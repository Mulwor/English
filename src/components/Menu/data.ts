import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

export const items: MenuItem[] = [
  {
    key: "sub1",
    label: "A1 (Beginner)",
    children: [
      {key: "1", label: "Grammar"},
      {key: "2", label: "Reading"},
      {key: "3", label: "Vocabulary"},
      {key: "4", label: "Listening"},
      {key: "5", label: "Speaking"},
      {key: "6", label: "Writing"},
    ],
  },
  {
    key: "sub2",
    label: "A1 (Elementary)",
    children: [
      {key: "7", label: "Grammar"},
      {key: "8", label: "Reading"},
      {key: "9", label: "Vocabulary"},
      {key: "10", label: "Listening"},
      {key: "11", label: "Speaking"},
      {key: "12", label: "Writing"},
    ],
  },
  {
    key: "sub3",
    label: "A2 (Pre-Intermediate)",
    children: [
      {key: "13", label: "Grammar"},
      {key: "14", label: "Reading"},
      {key: "15", label: "Vocabulary"},
      {key: "16", label: "Listening"},
      {key: "17", label: "Speaking"},
      {key: "18", label: "Writing"},
    ],
  },
  {
    key: "sub4",
    label: "B1 (Intermediate)",
    children: [
      {key: "19", label: "Grammar"},
      {key: "20", label: "Reading"},
      {key: "21", label: "Vocabulary"},
      {key: "22", label: "Listening"},
      {key: "23", label: "Speaking"},
      {key: "24", label: "Writing"},
    ],
  },
  {
    key: "sub5",
    label: "B2 (Upper-Intermediate)",
    children: [
      {key: "25", label: "Grammar"},
      {key: "26", label: "Reading"},
      {key: "27", label: "Vocabulary"},
      {key: "28", label: "Listening"},
      {key: "29", label: "Speaking"},
      {key: "30", label: "Writing"},
    ],
  },
]