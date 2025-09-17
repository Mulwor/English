import { Divider } from "antd";
import { Link } from "react-router-dom";
import { CollapseWithAccordion } from "../../../components";
import { appearance } from "../elementary/describing-person/describing-person";
import { columns } from "../../../data/sample";

export const Relationship = () => {
  return (
    <>
      <Divider>Family relationships and friendship - семейные отношения и дружба</Divider>

      <p>
        В данном топике необходимо научится рассказывать о своей семье, друзьях, 
        описать их внешность, характер, а также говорить о повседневных занятиях 
        вместе с ними. 
      </p>

      <p>
        1. Начнем с членов семьи - mother, father, parents, sister, brother, son, 
        daughter, children, husband, wife, grandmother, grandfather, grandparents,
        aunt, uncle, cousin, nephew, niece, step-mother/brother (сводные), relatives.
      </p>

      <p>2. Далее необходимо научится описывать их внешность и характер</p>
    
      <CollapseWithAccordion
        text={'Appearance (внешность)'}
        data={appearance}
        columns={columns}
      />

      <p>К нему относятся - внешность: tall, short, of medium height, slim, thin, plump, has blue eyes, has long dark hair, blonde, handsome, beautiful.</p>
      <p>Характер (качества): kind, funny, smart/intelligent, friendly, shy, quiet, talkative, hard-working, lazy, serious, nice, pleasant. (Это именно то, на что вы ссылались в своем пункте).</p>
    
      3. Дружба и отношения (Friendship and relationships):

friend, best friend, close friend, boyfriend, girlfriend, classmate, colleague.

Глаголы: to be friends with, to get on well with (ладить с), to spend time together, to help each other, to trust (доверять), to argue (ссориться), to forgive (прощать).

<p>
4. Занятия с семьей и друзьями (Activities) - to go for a walk, to watch films/TV together, to play video/board games, to go shopping, to have dinner/lunch, to visit relatives, to talk on the phone, to go to the park/cafe, to help with homework.

</p>
    </>
  )
};
