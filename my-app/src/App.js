import './App.css';
import Search from './Components/Search';
import Main from './Components/Main';
import Recipe from './Components/Recipe';
import DietaryFilter from './Components/DietaryFilter';
import Filters from './Components/Filters';
import Ingridients from './Components/Ingridients';

function App() {
  return (
    <div className="App">
      <Main/>
      <Search/>
      <Recipe/>
      <DietaryFilter/>
      <Filters/>
      <Ingridients/>
    </div>
  );
}

export default App;
