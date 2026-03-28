import { Collapse, Divider } from 'antd';
import { BasicTable, CollapseWithAccordion, Pagination, Video } from '../../../../components';
import { columns } from '../../../../data/sample';
import { animalAdjectives, animalEnvironment, animals } from './vocab';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';
import { animal_01, animal_02, animal_03, animal_04, animal_05, animal_06, animal_07, animal_08 } from './dialogs';

const { Panel } = Collapse;

export const Animals = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(animal_01, [
    animal_01,
    animal_02,
    animal_03,
    animal_04,
    animal_05,
    animal_06,
    animal_07,
    animal_08,
  ]);

  return (
    <>
      <Divider>Animals (животные)</Divider>

      <p>
        Цель данного топика - научиться описывать животных и их категории (дикие, домашние и т.д), сравнивать их между собой, уметь рассказать о них в виде
        монолога - Мое любимое животное ... потому что ... потому что
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
            <Video videoId='H2rkdtup7_o' />
            <Video videoId='oJVv_kU4vr8' />
            <Video videoId='0qBMd55ONss' />
            <Video videoId='ocFW2TnfwAQ' />
          </div>
        </Panel>
      </Collapse>

      <Divider>Dialogs</Divider>

      <BasicTable data={data} />
      <Pagination
        currentPage={currentPage}
        totalPages={8}
        onPageChange={handlePageChange}
      />
    </>
  );
};
