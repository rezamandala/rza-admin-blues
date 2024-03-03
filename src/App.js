import './App.css';
import MainContent from './component/MainContent/MainContent';
import RightContent from './component/RightContent/RightContent';
import Sidebar from './component/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MainContent />
        <RightContent />
      </div>
    </div>
  );
}

export default App;
