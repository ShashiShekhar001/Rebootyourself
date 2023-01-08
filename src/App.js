import Navbar from './components/Navbar/Navbar.js';
import "bootstrap/dist/css/bootstrap.min.css";
import Alpha from './components/alpha/alpha.js';
import Beta from './components/beta/Beta.js';
import Charlie from './components/charlie/Charlie.js';
import Delta from './components/delta/Delta.js';
import Echo from './components/echo/Echo.js';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <div>
          <Alpha/>
          <Beta/>
          <Charlie/>
          <Delta/>
          <Echo/>
        </div>
    </div>
  );
}

export default App;
