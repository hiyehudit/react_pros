import logo from './logo.svg';
import './App.css';
import Exchange from './comps/exchange';
import Counter from './comps/counter';
import AppHw from './comps/appHw';

function App() {
  return (
    <React.Fragment>
    <Exchange/>
    <Counter/>
    {/* <AppHw/> */}
    </React.Fragment>
  );
}

export default App;
