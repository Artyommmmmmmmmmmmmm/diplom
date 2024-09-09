// import { Machine } from './components/Machine/Machine';
// import { Complaint } from './components/Complaint/Complaint';
// import { TM } from './components/TM/TM';
import { Main } from './components/Main/Main';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { MachineDetail } from './components/MachineDetail/MachineDetail';
import { TMDetail } from './components/TMDetail/TMDetail';
import { ComplaintDetail } from './components/ComplaintDetail/ComplaintDetail';
import { ControlDetail } from './components/OtherDetail/ControlDetail/ControlDetail';
import { EngineDetail } from './components/OtherDetail/EngineDetail/EngineDetail';
import { FailureNodeDetail } from './components/OtherDetail/FailureNodeDetail/FailureNodeDetail';
import { LeadDetail } from './components/OtherDetail/LeadDetail/LeadDetail';
import { MachineModelDetail } from './components/OtherDetail/MachineModelDetail/MachineModelDetail';
import { RecoveryMethodDetail } from './components/OtherDetail/RecoveryMethodDetail/RecoveryMethodDetail';
import { ServiceCompanyDetail } from './components/OtherDetail/ServiceCompanyDetail/ServiceCompanyDetail';
import { TMTypeDetail } from './components/OtherDetail/TMTypeDetail/TMTypeDetail';
import { TransmissionDetail } from './components/OtherDetail/TransmissionDetail/TransmissionDetail';
import { Unauthorized } from './components/Unauthorized/Unauthorized';
import SignIn from './components/SignIn/SignIn';
import './App.css';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className='global'>
      <Header/>
      <div className='main'>
        <Routes>
          <Route path='/main' element={<Main/>}/>
          <Route path='/main/machine' element={<MachineDetail/>}/>
          <Route path='/main/tm' element={<TMDetail/>}/>
          <Route path='/main/complaint' element={<ComplaintDetail/>}/>
          <Route path='/main/control' element={<ControlDetail/>}/>
          <Route path='/main/engine' element={<EngineDetail/>}/>
          <Route path='/main/failurenode' element={<FailureNodeDetail/>}/>
          <Route path='/main/lead' element={<LeadDetail/>}/>
          <Route path='/main/machinemodel' element={<MachineModelDetail/>}/>
          <Route path='/main/recoverymethod' element={<RecoveryMethodDetail/>}/>
          <Route path='/main/servicecompany' element={<ServiceCompanyDetail/>}/>
          <Route path='/main/tmtype' element={<TMTypeDetail/>}/>
          <Route path='/main/transmission' element={<TransmissionDetail/>}/>
          <Route path='/main/unauthorized' element={<Unauthorized/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
