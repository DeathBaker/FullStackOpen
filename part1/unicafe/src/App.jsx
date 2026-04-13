import { useState } from 'react'

const Header = (param) =>{
  return (
    <h1>{param.name}</h1>
  )
}
const StatisticLine = (param) => {
  return <tr>
    <td>
    {param.text} {param.value}
    </td>
  </tr>
}

const Statistics = (param) => {
   if (param.good==0 && param.bad==0 && param.neutral==0){
    return  <p>No feedback given</p>
     
    }
  return ( 
   
    <table>
      <tbody>
      <StatisticLine text = "good" value = {param.good} />
      <StatisticLine text = "bad" value = {param.bad} />
      <StatisticLine text = "neutral" value = {param.neutral} />
      < StatisticLine text = "all" value=  {param.good+param.bad+param.neutral}/>
      <StatisticLine text = "average" value = {(param.good+param.bad*-1)/(param.good+param.bad+param.neutral)} />
      <StatisticLine text = "positive" value = {((param.good)/(param.good+param.bad+param.neutral))*100} />
      </tbody>
    </table>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header name = "give feedback" />

      <button onClick={() => setGood(good+1)}>good</button>  
      <button onClick={() => setNeutral(neutral+1)}>neutral</button>
      <button onClick={() => setBad(bad+1)} >bad</button>

      <Header name = "statistics" />
     
      <Statistics good ={good} bad = {bad} neutral= {neutral} />

    </div>
  )
}

export default App