import './App.css';
import { Mychart } from './components/Mychart';
import { Mychart2 } from './components/Mychart2';
import { Mychart3 } from './components/Mychart3';
function App() {
  return (
   <>
   <div className='App'>
    <div className='mychart'>
      <Mychart/>
    </div>
    <div className='mychart2'>
    <Mychart2/>
    </div>
    <div className='mychart3'>
   < Mychart3/>
    </div>
   </div>
   </>
  );
}

export default App;