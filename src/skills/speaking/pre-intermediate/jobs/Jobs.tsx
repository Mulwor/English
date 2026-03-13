import { Collapse, Divider } from 'antd';
import { columns } from '../../../../data/sample';
import { jobRelatedVerbsAndPhrases, jobsAndProfessions, workplaces } from './vocab';
import { BasicTable, CollapseWithAccordion, Pagination, Video } from '../../../../components';
import { jobs_01, jobs_02, jobs_03, jobs_04, jobs_05, jobs_06, jobs_07, jobs_08, jobs_09, jobs_10, jobs_11, jobs_12, jobs_13, jobs_14, jobs_15 } from './dialogs';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';

const { Panel } = Collapse;

export const JobsAndProfessions = () => {
   const { data, currentPage, handlePageChange } = usePaginatedData(jobs_01, [
    jobs_01, jobs_02, jobs_03, jobs_04, jobs_05, jobs_06, jobs_07,
    jobs_08, jobs_09, jobs_10, jobs_11, jobs_12, jobs_13, jobs_14,
    jobs_15
   ])

  return (
    <>
      <Divider>Jobs, professions and workplaces</Divider>

      <p>
        Цель этого топика - научится называть профессию и уметь сказать где работают эти люди; 
        уметь описать простые обязанности (Daily routines) через always, usually, sometimes; объяснить, 
        почему нравится или не нравится работа (Opinions & Adjectives) - уметь использовать простые 
        прилагательные для выражения мнения. Уметь строить вопросы и рассказывать о своих планах и мечтах 
        на будущее ~ want to be, would like to be 
      </p>

      <Divider>Vocabulary</Divider>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
        <CollapseWithAccordion
          text={'Jobs and professions'}
          data={jobsAndProfessions}
          columns={columns}
        />
        <CollapseWithAccordion
          text={'Workplaces'}
          data={workplaces}
          columns={columns}
        />
        <CollapseWithAccordion
          text={'Jobs related verbs and phrases'}
          data={jobRelatedVerbsAndPhrases}
          columns={columns}
        />
      </div>

      <Divider>Videos</Divider>

                  <Collapse accordion>
        <Panel header='Videos' key='1'>
          <div className='video'>
      <Video videoId="AFFJhLQu590"></Video>
      <Video videoId='z6pbDPafURw'></Video>
      <Video videoId="qHWtJtRSYjc"></Video>
      <Video videoId="VgLDY_Z52_g"></Video>
          </div>
          </Panel>
          </Collapse>

                <div style={{ marginTop: '8px' }}>
                  <BasicTable data={data} />
                  <Pagination
                    currentPage={currentPage}
                    totalPages={15}
                    onPageChange={handlePageChange}
                  />
                </div>
    </>
  );
};
