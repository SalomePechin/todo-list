import './App.css';
import react from 'react';
import NewTaskList from './components/NewTaskList';
import NewTask from './components/NewTask';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initList = [
  {
    id: 1,
    name: 'Task 1',
    desc: 'desc',
    date: 'date'
  },
  {
    id: 2,
    name: 'Task 2',
    desc: 'desc',
    date: 'date'
  }
];

function App() {

  const [list, setList] = useState(initList);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState();
  const [date, setDate] = useState();

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleAdd() {
    if (name != '') {
      const newList = list.concat({ nameid: uuidv4(), name, desc, date  });
      setList(newList);
    } else {
      alert('Veuillez entrer un autre titre pour votre tâche.');
    }
    setName('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Todo List App</h1>
      </header>

      <input type="text" placeholder="Nom de la tâche" value={name} onChange={handleChange} /><br /><br />
      <input type="text" placeholder="Description" value={desc} onChange={handleChange} /><br /><br />
      <input type="text" placeholder="Date limite" value={date} onChange={handleChange} /><br /><br />
      <button type="button" onClick={handleAdd}>
        Créer tâche
      </button>

      <NewTask
        name={name}
        desc={desc}
        date={date} />

      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
