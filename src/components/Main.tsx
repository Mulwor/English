import { grammarData } from "../data/grammar"
import { speakingData } from "../data/speaking"
import { Grammar } from "./Grammar"

export const Main = () => {
  return (
    <>
      <h2>Уровень А1 (Beginner - Elementary)</h2>

      <hr />

      <h3>Грамматика</h3>


      {grammarData.levels.A1.topics.map((item) => {
        return <Grammar id={item.id} item={item.name} description={item.description} />
      })}


      <hr />

      <h3>Говорение</h3>

      {speakingData.levels.A1.topics.map((item) => {
        return <div key={item.id}>{item.name}</div>
      })}
    </>
  )
}