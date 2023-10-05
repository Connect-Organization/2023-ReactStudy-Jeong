import './App.css';
import { Component } from 'react';
import NameCard from './Pages/NameCard';
function App() {
  return (
   <div style={
    {display:'flex',
    justifyContent:'center'
   }}>
   <NameCard />
   </div>
  );
}

export default App;



