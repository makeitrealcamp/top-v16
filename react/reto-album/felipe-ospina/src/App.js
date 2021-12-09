import logo from './logo.svg';
import './App.css';
import Album from './components/Album';
import image from './assets/logo192.png'

function App() {
  return (
    <div className="App">
      <Album 
      img={image} 
      title="Rozes"
      artist='solista'
      albumName='Under The Grave'
      albumYear='2016'
      />
    </div>
  );
}

export default App;
