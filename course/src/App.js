import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick=()=>{
    alert("정지민");
  }
  return (
   <>
    <h2>클릭해볼까??</h2>
    <button onClick={handleClick}>✨🐨 Click ME! 🐨✨</button>
   </>
  );
}

export default App;