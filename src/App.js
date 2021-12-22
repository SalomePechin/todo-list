import './App.css';
import TaskList from './components/TaskList';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initList = [];

function App() {

  const [list, setList] = useState(initList);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');

  function handleCreate(event) {
    event.preventDefault();
    if (name && desc && date) {
      const newList = list.concat({ id: uuidv4(), name, desc, date });
      setList(newList);
    } else {
      alert('Veuillez renseigner tous les champs.');
    }
    setName('');
    setDesc('');
    setDate('');
  }

  function handleRemove(index) {
    const removeList = list;
    removeList.splice(index, 1);
    setList(removeList);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Todo List App</h1>
      </header>

      <TaskList list={list} handleRemove={handleRemove} />

      <form onSubmit={handleCreate} className="NewTaskInput">
        <input type="text" placeholder="Nom de la tâche" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
        <input type="textarea" placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)} /><br /><br />
        <input type="date" placeholder="Date limite" value={date} onChange={(e) => setDate(e.target.value)} /><br /><br />
        <button type="submit">
          Créer tâche
        </button>
      </form>
    </div>
  );
}

export default App;