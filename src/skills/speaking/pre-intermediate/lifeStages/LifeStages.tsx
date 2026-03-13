import { Divider } from 'antd';
import { BasicTable, CollapseWithAccordion, Pagination } from '../../../../components';
import { columns } from '../../../../data/sample';
import { lifeStagesVocab, lifeEventsVocab, keyVerbs } from './vocabulary';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';
import { life_dialogs_01, life_dialogs_02, life_dialogs_03 } from './dialogs';
import { life_stages_01, life_stages_02, life_stages_03, life_stages_04, life_stages_05, life_stages_06, life_stages_07, life_stages_08, life_stages_09, life_stages_10, life_stages_11, life_stages_12, life_stages_13, life_stages_14, life_stages_15 } from './main';

export const LifeStages = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(life_dialogs_01, [
    life_dialogs_01, life_dialogs_02, life_dialogs_03,
    life_stages_01, life_stages_02, life_stages_03, life_stages_04,
    life_stages_05, life_stages_06, life_stages_07, life_stages_08,
    life_stages_09, life_stages_10, life_stages_11, life_stages_12,
    life_stages_13, life_stages_14, life_stages_15
  ]);

  return (
    <>
      <Divider>Life stages and events - Этапы жизни и события</Divider>

      <p>
        Цель этого топика - научиться рассказывать о важных этапах жизни и событиях. А именно:
        <ul style={{ marginLeft: '16px' }}>
          <li>Описывать основные этапы жизни человека (детство, школа, работа и т.д.).</li>
          <li>Говорить о прошлых событиях (дни рождения, праздники) и планах на будущее.</li>
          <li>Использовать правильные глаголы в прошедшем времени (Past Simple).</li>
        </ul>
      </p>

      <Divider>Vocabulary</Divider>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
        <CollapseWithAccordion
          text={'Life Stages (Этапы жизни)'}
          data={lifeStagesVocab}
          columns={columns}
        />
        <CollapseWithAccordion
          text={'Life Events & Celebrations (События и праздники)'}
          data={lifeEventsVocab}
          columns={columns}
        />
        <CollapseWithAccordion
          text={'Key Verbs (Ключевые глаголы)'}
          data={keyVerbs}
          columns={columns}
        />
      </div>

      <Divider>Dialogs</Divider>
      <p>
        Прежде чем начать учить диалоги, убедитесь, что вы помните основные глаголы в прошедшем времени (was/were, had, went, did, got) и слова по теме. Это
        основа для рассказов о прошлом.
      </p>

      <div style={{ marginTop: '8px' }}>
        <BasicTable data={data} />
        <Pagination
          currentPage={currentPage}
          totalPages={18}
          onPageChange={handlePageChange}
        />
      </div>

      <Divider>Writing</Divider>
      <p>
        Давай я расскажу о важных событиях в моей жизни. Я родился в 1997 году в маленьком городке. В детстве я был очень активным ребенком. Я пошел в школу,
        когда мне было 7 лет. Я хорошо учился и любил математику. Я закончил школу в 2014 году. После школы я поступил в университет в Санкт-Петербурге. Это был очень важный этап в моей жизни. Я изучал информатику. В университете у меня появилось
        много новых друзей. Я получил диплом в 2019 году. Моя первая работа была в IT-компании. Я был очень рад! В 2021 году я встретил свою будущую жену. Мы поженились в 2022 году. Это был самый счастливый
        день в моей жизни. Сейчас мне 27 лет. Я все еще работаю программистом. В будущем я хочу стать senior-разработчиком и, возможно, мы с женой планируем завести детей. Я также
        хочу путешествовать больше.
      </p>
    </>
  );
};
