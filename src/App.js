import './App.css';
import react from 'react';
import TaskList from './components/TaskList';
import Task from './components/Task';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initList = [];

function App() {

  const [list, setList] = useState(initList);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');

  function addList() {
    if (name != '') {
      const newList = list.concat({ nameid: uuidv4(), name, desc, date });
      setList(newList);
    } else {
      alert('Veuillez entrer un autre titre pour votre tâche.');
    }
    setName('');
    setDesc('');
    setDate('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Todo List App</h1>
      </header>

      <input type="text" placeholder="Nom de la tâche" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
      <input type="text" placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)} /><br /><br />
      <input type="date" placeholder="Date limite" value={date} onChange={(e) => setDate(e.target.value)} /><br /><br />
      <button type="button" onClick={addList}>
        Créer tâche
      </button>

      <TaskList list={list} />

    </div>
  );
}

export default App;
