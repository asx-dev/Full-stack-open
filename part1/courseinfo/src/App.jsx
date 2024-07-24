import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

function App() {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercise: 10 },
      { name: "Using props to pass data", exercise: 7 },
      { name: "State of a component", exercise: 14 },
    ],
  };
  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default App;
