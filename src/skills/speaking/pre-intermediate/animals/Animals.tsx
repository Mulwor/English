import { Collapse, Divider } from 'antd';
import { BasicTable, CollapseWithAccordion, Pagination, Video } from '../../../../components';
import { columns } from '../../../../data/sample';
import { animalAdjectives, animalEnvironment, animals } from './vocab';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';
import { animal_01, animal_01_02, animal_03, animal_03_02, animal_05, animal_05_01, animal_07, animal_07_01, animal_09, animal_09_01, animal_11, animal_11_01, animal_13, animal_13_01, animal_15 } from './dialogs';

const { Panel } = Collapse;

export const Animals = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(animal_01, [
    animal_01,
    animal_01_02,
    animal_03,
    animal_03_02,
    animal_05,
    animal_05_01,
  ]);

  const { 
    data: dataDay_01, 
    currentPage: currentPageDay_01, 
    handlePageChange: handlePageDay_01, 
  } = usePaginatedData(animal_07, [
    animal_07,
    animal_07_01,
    animal_09,
    animal_09_01,
    animal_11,
    animal_11_01,
  ]);

   const { 
    data: dataDay_02, 
    currentPage: currentPageDay_02, 
    handlePageChange: handlePageDay_02, 
  } = usePaginatedData(animal_13, [
    animal_13,
    animal_13_01,
    animal_15,
  ]);

  return (
    <>
      <Divider>Animals (животные)</Divider>

      <p>
        Цель данного топика - научиться описывать животных и их категории (дикие, домашние и т.д), 
        сравнивать их между собой, уметь рассказать о них в виде монолога - Мое любимое животное 
        ... потому что ... потому что
      </p>

      <Divider>Vocabulary</Divider>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <CollapseWithAccordion
          text={'All animals and they body part'}
          data={animals}
          columns={columns}
        />
        <CollapseWithAccordion
          text={'Adjectives и Actions - Как выглядят животные и что они делают'}
          data={animalAdjectives}
          columns={columns}
        />
        <CollapseWithAccordion
          text={'Environment - среда обитания'}
          data={animalEnvironment}
          columns={columns}
        />
      </div>

      <Divider>Listening</Divider>

      <Collapse accordion>
        <Panel
          header='Videos'
          key='1'
        >
          <div className='video'>
            <Video videoId='https://www.youtube.com/watch?v=H2rkdtup7_o' />
            <Video videoId='https://www.youtube.com/watch?v=oJVv_kU4vr8' />
            <Video videoId='https://www.youtube.com/watch?v=0qBMd55ONss' />
            <Video videoId='https://www.youtube.com/watch?v=ocFW2TnfwAQ' />
          </div>
        </Panel>
      </Collapse>

      <Divider>Dialogs</Divider>

      <Collapse accordion>
        <Panel header='Dialogs (day_1 and day_2)' key='1' >
          <BasicTable data={data} />
          <Pagination
            currentPage={currentPage}
            totalPages={6}
            onPageChange={handlePageChange}
          />
        </Panel>
      </Collapse>

       <Collapse accordion>
        <Panel header='Dialogs (day_3 and day_4)' key='1' >
          <BasicTable data={dataDay_01} />
          <Pagination
            currentPage={currentPageDay_01}
            totalPages={6}
            onPageChange={handlePageDay_01}
          />
        </Panel>
      </Collapse>

      <Collapse accordion>
        <Panel header='Dialogs (last days)' key='1' >
          <BasicTable data={dataDay_02} />
          <Pagination
            currentPage={currentPageDay_02}
            totalPages={3}
            onPageChange={handlePageDay_02}
          />
        </Panel>
      </Collapse>
    </>
  );
};
