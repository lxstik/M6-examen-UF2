import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./views/Home";
import Partida from "./views/Partida";
import Instrucciones from "./views/Instrucciones";

function App() {
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top w-100 p-3">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/Home">Comecocos</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/Partida">Partida</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Instrucciones">Instrucciones</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-4" style={{ padding: 0 }}>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Partida" element={<Partida />} />
            <Route path="/Instrucciones" element={<Instrucciones />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;