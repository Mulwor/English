import { Collapse, Divider } from 'antd';
import { Space, Card } from 'antd';
import { BasicTable, Pagination, Video } from '../../../../components';
import { usePaginatedData } from '../../../../hooks/usePaginatedData';
import {
  talkingAboutSmth_01,
  talkingAboutSmth_02,
  talkingAboutSmth_03,
  talkingAboutSmth_04,
  talkingAboutSmth_05,
  talkingAboutSmth_06,
  talkingAboutSmth_07,
  talkingAboutSmth_08,
} from './talkingAboutSmth';

const { Panel } = Collapse;

export const TalkingAboutSomeone = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(talkingAboutSmth_01, [
    talkingAboutSmth_01,
    talkingAboutSmth_02,
    talkingAboutSmth_03,
    talkingAboutSmth_04,
    talkingAboutSmth_05,
    talkingAboutSmth_06,
    talkingAboutSmth_07,
    talkingAboutSmth_08,
  ]);

  return (
    <div>
      <Divider>Talking about yourself, family and friend</Divider>

      <Collapse accordion>
        <Panel
          header={'Talking about yourself, family and friends'}
          key='1'
        >
          <Space
            direction='vertical'
            size='middle'
            style={{ display: 'flex' }}
          >
            <Card
              title='Personal Information'
              size='small'
            >
              <p>Name, age, nationality, country, city, birthplace, date of birth</p>
              <p>Address, phone number, occupation, background</p>
              <p>Single, married, husband, wife</p>
            </Card>
            <Card
              title='Family Members'
              size='small'
            >
              <p>Mother, father, sister, brother, grandmother, grandfather</p>
              <p>Uncle, aunt, cousin, nephew, niece</p>
              <p>Stepmother, stepfather, half-brother, half-sister, in-laws</p>
            </Card>
            <Card
              title='Friends & Relationships'
              size='small'
            >
              <p>Friend, best friend, classmate, neighbor, childhood friend</p>
              <p>Colleague, roommate, teammate, acquaintance, buddy, soulmate</p>
              <p>Close friend, reliable friend, have in common</p>
            </Card>
            <Card
              title='Describing People'
              size='small'
            >
              <p>Tall, short, young, old, happy, sad</p>
              <p>Friendly, funny, kind, smart, shy, talkative, serious</p>
              <p>Outgoing, confident, reliable, generous, stubborn, easygoing</p>
            </Card>
            <Card
              title='Hobbies & Interests'
              size='small'
            >
              <p>Like, love, enjoy, prefer, hate</p>
              <p>Be interested in, be into, go out, hang out</p>
              <p>Spend time with, catch up with</p>
            </Card>
          </Space>
        </Panel>
      </Collapse>

      <Divider>Dialogs</Divider>
      <BasicTable data={data} />
      <Pagination
        currentPage={currentPage}
        totalPages={8}
        onPageChange={handlePageChange}
      />

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
        Здравствуйте, давай я немного расскажу о себе, своей семье и лучшем друге. Меня зовут Али,
        мне 27 лет, я из Азербайджан. У меня темные волосы, карие глаза, рост 173. Если говорить о
        моем характере, то я серьезный и не очень старый, немного также застенчивый. Если говорить о
        моих увлечениях, то в детстве я увлекался настольным теннисом, шашками и немного футболом,
        сейчас же я увлекаюсь программированием. Ну и работаю по этой специальности. Если говорить о
        моей семье, то нас в семье 4 - я, жена, мама и отец. У меня нет ни брата ни сестры, я
        единственный ребенок в семье. Моя мама домработница и она очень добрая, а папа работает
        продавцом фруктов и овощей. Если говорить о характере моего отца, то он дружелюбный и
        общительный. Живем мы в Санкт-Петербурге уже более 20 лет. Моего лучшего друга зовут Олег,
        если его описывать, то он высокий и умный. Мы с ним дружим уже более 20 лет.
      </p>
    </div>
  );
};
