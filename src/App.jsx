import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/Main';
import Edit from './pages/Edit';

function App() {
  return (
    <div className="App">
      <h1>Meme Generator</h1>
      <Main></Main>
    </div>
  );
}

export default App;