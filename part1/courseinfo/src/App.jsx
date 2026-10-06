const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content contentProps={course.parts} />
      <Total contentProps={course.parts} />
    </div>
  );
};

const Header = ({ course }) => {
  return (
    <>
      <h1>{course.name}</h1>
    </>
  );
};

const Part = ({ partProp }) => {
  return (
    <>
      <p>
        {partProp.part} {partProp.exercises}
      </p>
    </>
  );
};

const Content = ({ contentProps }) => {
  return (
    <>
      <Part partProp={contentProps[0]} />
      <Part partProp={contentProps[1]} />
      <Part partProp={contentProps[2]} />
    </>
  );
};

const Total = ({ contentProps }) => {
  const totalExercise = contentProps.reduce(
    (total, currItem) => total + currItem.exercises,
    0,
  );
  console.log("total exercises is: ", totalExercise);
  return (
    <>
      <p>Number of exercises {totalExercise}</p>
    </>
  );
};

export default App;
