import logo from './logo.svg';
import './App.css';
import Home from '../component/home'
import Context, {Context2} from './Context'


function App() {
  return (
    <Context.Provider value="content">


    <Home/>


    </Context.Provider>
  );
}

export default App;
