import logo from './logo.svg';
import {Machine} from './components/Machine/Machine';
import {Complaint} from './components/Complaint/Complaint';
import {TM} from './components/TM/TM';
import './App.css';

function App() {
  return (
    <div>
      <Machine/>
      <Complaint/>
      <TM/>
    </div>
  );
}

export default App;
