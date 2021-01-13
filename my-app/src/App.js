import logo from './logo.svg';
import './App.css';
import Search from './Components/Search';
import Main from './Components/Main';
import Recipe from './Components/Recipe';
import RecipeList from './Components/RecipeList';
import DietaryFilter from './Components/DietaryFilter';
import Filters from './Components/Filters';


function App() {
  return (
    <div className="App">
    <Main/>
    <Search/>
    <Recipe/>
    <RecipeList/>
    <DietaryFilter/>
    <Filters/>
    </div>
  );
}

export default App;
