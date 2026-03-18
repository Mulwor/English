import { Divider } from 'antd';
import { BasicTable, CollapseWithAccordion, Pagination } from '../../../../components';
import { columns } from '../../../../data/sample';
import { householdObjects } from './vocab';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';
import { home_living_01, home_living_02, home_living_03, home_living_04, home_living_05, home_living_06, home_living_07, home_living_08, home_living_09, home_living_10, home_living_11, home_living_12, home_living_13, home_living_14, home_living_15 } from './dialogs';

export const HouseholdObjects = () => {
    const { data, currentPage, handlePageChange } = usePaginatedData(home_living_01, [
      home_living_01, home_living_02, home_living_03, home_living_04,
      home_living_05, home_living_06, home_living_07, home_living_08,
      home_living_09, home_living_10, home_living_11, home_living_12,
      home_living_13, home_living_14, home_living_15,
    ]);

  return (
    <>
      <Divider>Household objects (Предметы домашнего обихода)</Divider>

      <p>
        Цель этого топика - научиться рассказывать о своём доме (мебель),
        описывать его комнаты и предметы, говорить о местонахождении 
        предметов, описывать о каком дом мечтаешь. И уметь спрашивать и отвечать 
        о домашних делах (Household chores) -  "I clean my room every
        Saturday." "Do you wash the dishes?" "She vacuums the carpet."
      </p>

      <Divider>Vocabulary</Divider>
      <CollapseWithAccordion 
        text={'All vocabulary daily activities'} 
        data={householdObjects} 
        columns={columns} 
      />

      <BasicTable data={data} />
      <Pagination
        currentPage={currentPage}
        totalPages={15}
        onPageChange={handlePageChange}
      />
    </>
  );
};
