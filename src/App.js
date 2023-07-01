import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
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
    <Stack direction="horizontal" gap={3}>
      <Form.Control className="ingredientForm" placeholder="fot"/>
      <Button variant="success">Lägg till</Button>
      <Button variant="danger">Ta bort</Button>
    </Stack>
      <Dropdown>
        <Dropdown.Toggle variant='success' id='dropdown-basic'>
          Enhet
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#action-1">Volym</Dropdown.Item>
          <Dropdown.Item href="#action-2">Vikt</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>


  );
}

export default App;
