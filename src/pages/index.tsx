import { useState } from 'react';

const person = {
  name: 'Kolia',
};

let label = 'Some text';

const renameUser = (user: Object, newName: string) => {
  user.name = newName;
};

const renameLabel = (labelParam: string, newLabel: string) => {
  labelParam = newLabel;
  console.log(labelParam);
};


export default function Home() {
  const [t, setT] = useState(true);

  const onChangeUserName = (event) => {
    console.log(person.name);
    renameUser(person, event.target.value);
    console.log(person.name);
    setT(!t);
  };

  const onChangeLabel = (event) => {
    console.log(label);
    renameLabel(label, event.target.value);
    console.log(label);
    setT(!t);
  };

  return (
    <div style={{padding: 100}}>
      {t}
      <div style={{border: '1px red solid', padding: 10}}>
        <h4>By reference</h4>
        <br/>
        <input onChange={onChangeUserName} value={person.name}/>
        <br/>
        <br/>
        {person.name}
      </div>
      <div style={{border: '1px red solid', padding: 10}}>
        <h4>By value</h4>
        <br/>
        <input onChange={onChangeLabel} value={label}/>
        <br/>
        <br/>
        {label}
      </div>
    </div>
  );
}
