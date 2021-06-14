import './styles/App.scss';
import InfoBoard from './components/InfoBoard';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title">體態管理紀錄器</div>
      </header>
      <div className="App-body">
        <InfoBoard />
      </div>
    </div>
  );
}

export default App;
