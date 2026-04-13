const Header = (param) =>{
  return (
    <h1>{param.course.name}</h1>
  )
}
const Part = (param) => {
  return (
    <p>
      {param.part.name} {param.part.exercises}
    </p>
  )
}
 const Content = (param) =>{
  return(
      <div>
        <Part part = {param.part[0]}  />
        <Part part = {param.part[1]}  />
        <Part part = {param.part[2]}  />
      </div>
  )
 }

const Total = (param) =>{
  return (
    <p>
     Number of exercises {param.part[0].exercises+param.part[1].exercises+param.part[2].exercises}
    </p>
  )
}





const App = () => {
 const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course} />
      <Content part = {course.parts}  />
      <Total part = {course.parts} />
    </div>
  )
}

export default App