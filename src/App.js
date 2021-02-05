import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import FileView from './Components/FileView';
import RightBar from './Components/RightBar';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar/>
        <FileView/>
        <RightBar/>
      </div>
    </div>
  );
}

export default App;
