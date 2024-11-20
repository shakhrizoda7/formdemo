import FormDemo from "./components/Form/FormDemo";
import FormTwo from "./components/From2/FormTwo";

function App() {
  return (
    <div className="App" style={{display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'flex-start', gap: '50px', paddingTop: '20px'}}>
      <FormDemo/>
      <FormTwo/>
    </div>
  );
}

export default App;
