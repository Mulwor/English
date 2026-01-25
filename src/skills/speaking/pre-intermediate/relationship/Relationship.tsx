import { Collapse, Divider } from 'antd';
import { BasicTable, CollapseWithAccordion, Pagination, Video } from '../../../../components';
import { columns } from '../../../../data/sample';
import { memberOfFamily, appearance, character } from './vocabulary';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';
import {
  family_dialogs_01,
  family_dialogs_02,
  family_dialogs_03,
  family_dialogs_04,
  family_dialogs_05,
  family_dialogs_06,
  family_dialogs_07,
  family_dialogs_08,
  family_dialogs_09,
} from './dialogs';
import { talkingAboutSmth_08 } from '../../elementary/talkingAboutSomeone/talkingAboutSmth';

const { Panel } = Collapse;

export const Relationship = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(talkingAboutSmth_08, [
    talkingAboutSmth_08,
    family_dialogs_01,
    family_dialogs_02,
    family_dialogs_03,
    family_dialogs_04,
    family_dialogs_05,
    family_dialogs_06,
    family_dialogs_07,
    family_dialogs_08,
    family_dialogs_09,
  ]);

  return (
    <>
      <Divider>Family relationships and friendship - семейные отношения и дружба</Divider>

      <p>
        Цель этого топика - научиться рассказывать о своей семье и друзьях. А именно:
        <ul style={{ marginLeft: '16px' }}>
          <li>Описывать их внешность и характер. </li>
          <li>Говорить о том, чем мы занимаемся вместе в повседневной жизни.</li>
        </ul>
      </p>

      <Divider>Vocabulary</Divider>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
        <CollapseWithAccordion
          text={'Member of family'}
          data={memberOfFamily}
          columns={columns}
        />
        <CollapseWithAccordion
          text={'Appearance (внешность)'}
          data={appearance}
          columns={columns}
        />
        <CollapseWithAccordion
          text={'Character / Personality'}
          data={character}
          columns={columns}
        />
      </div>

      <Divider>Tasks</Divider>
      <Collapse accordion>
        <Panel
          header='Различные задачи на закрепление'
          key='1'
        >
          <li>
             <a href='https://www.tinytap.com/activities/g4plf/play/describing-people-game?srsltid=AfmBOoobuyNLzsZ0hAYOHgS41xuyecfppuFddsbIPZkPhJFG21ASSZIO'>
        Прочитал предложение необходимо соотнести с картинкой
      </a>
          </li>
        </Panel>
      </Collapse>


      <Divider>Dialogs</Divider>
      <p>
        Прежде чем начать учить диалоги этого уровня, необходимо вспомнить как мы описывали человека для уровня{' '}
        <a href='/beginner-and-elementary/speaking/describing-a-person'>А1 (Beginner - elementary) - describing a person</a>, так как в данном диалоге будет
        использовать лишь А2 уровень c более сложными конструкциями
      </p>

      <div style={{ marginTop: '8px' }}>
        <BasicTable data={data} />
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          onPageChange={handlePageChange}
        />
      </div>

      <Divider>Videos</Divider>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          marginTop: '1rem',
          marginBottom: '1rem',
        }}
      >
        <Video videoId='5n2ma_4sy_8' />
      </div>

      <Divider>Writing</Divider>
      <p>
        Здравствуйте, давай я немного расскажу о себе, своей семье и лучшем друге. Меня зовут Али, мне 27 лет, я из Азербайджан. У меня темные волосы, карие
        глаза, рост 173. Если говорить о моем характере, то я серьезный и не очень старый, немного также застенчивый. Если говорить о моих увлечениях, то в
        детстве я увлекался настольным теннисом, шашками и немного футболом, сейчас же я увлекаюсь программированием. Ну и работаю по этой специальности. Если
        говорить о моей семье, то нас в семье 4 - я, жена, мама и отец. У меня нет ни брата ни сестры, я единственный ребенок в семье. Моя мама домработница и
        она очень добрая, а папа работает продавцом фруктов и овощей. Если говорить о характере моего отца, то он дружелюбный и общительный. Живем мы в
        Санкт-Петербурге уже более 20 лет. Моего лучшего друга зовут Олег, если его описывать, то он высокий и умный. Мы с ним дружим уже более 20 лет.
      </p>
    </>
  );
};
