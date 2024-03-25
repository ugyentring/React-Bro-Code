import Card from "./Card";

function App() {
  return (
    <>
      <Card name="Ugyen" age={22} isStudent={true} />
      <Card name="Dechen" age={18} isStudent={true}/>
      <Card name="Machum" age={39} isStudent={false} />
      <Card />
    </>
  );
}

export default App;
