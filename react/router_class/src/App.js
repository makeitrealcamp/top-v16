import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        Hello
        <nav style={{borderBottom: "solid 1px", paddingBottom: "1rem"}}>
          <Link to="/personas" style={{marginRight: "1rem"}}>Personas</Link>
          <Link to="/empresas" >Empresas</Link>
        </nav>
        <Outlet />
      </div>
    </>
  );
}

export default App;
