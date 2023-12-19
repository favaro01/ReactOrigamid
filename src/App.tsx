import React from 'react';
import Button from './button';
import Input from './Input';

function App() {
  const [date, setDate] = React.useState('');

  return (
    <div>
      <Input id='email' label='E-mail' type='email'/>
      <Input id='nome' label='Nome'/>
      <Input value={date} id='viagem' label='Inicio da viagem' type='date'/>
      <Input id='horario' label='Horário' type='time'/>
    </div>
  );
}

export default App;
