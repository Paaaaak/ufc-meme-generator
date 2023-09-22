import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='el-container'>
        <div>
          <select>
            <option value="" disabled selected hidden>Select an athele</option>
            <option value="conor">Conor McGregor</option>
            <option value="alex">Alex Pereira</option>
            <option value="jones">John Jones</option>
          </select>
          <select>
            <option value="" disabled selected hidden>Select an image</option>
            <option value="option1">옵션 1</option>
            <option value="option2">옵션 2</option>
            <option value="option3">옵션 3</option>
          </select>
        </div>
        <div className='el-image-container'>Image</div>
        <div className='el-condition-container'>
          <div>
            <input readOnly type='text' placeholder='Original text'></input>
          </div>
          <div>
            <input type='text' placeholder='New text'></input>
            <button>Add</button>
          </div>
          <div>font type</div>
          <div>font size</div>
          <div>font weight</div>
          <div>font color</div>
        </div>
        <div>Download</div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;