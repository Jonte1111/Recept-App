import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
function App() {
  const [update, setUpdate] = useState(0);
  //Binding
  //Side effects/lifecycle
  //Mount
  //Update
  //Unmount

  //Events
  function addIngredient(e) {
    const data = e.data;
    const ingredient = data.map((data) => <li>{data}</li>);
    return <ul>{ingredient}</ul>
  }
    return(
    <div>
      <h1>
        <p>Lägg till ingredienser!</p>
      </h1>
    <div id="ingredientList">
      <ol>
        <li>Morot</li>
      </ol>
    </div>
    <form>
      <input type="text" placeholder='fot'></input>      
      <Dropdown>
        <Dropdown.Toggle variant='success' id='dropdown-basic'>
          Enhet
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#action-1">Volym</Dropdown.Item>
          <Dropdown.Item href="#action-2">Vikt</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </form>
    <button onClick={addIngredient}>Ny Ingrediens</button>
    </div>


  );
}

export default App;
