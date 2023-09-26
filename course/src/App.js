import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick=()=>{
    alert("장지연");
  }
  return (
   <>
    <h2>클릭 해주세요!</h2>
    <button onClick={handleClick}>✨🐨 이름 🐨✨</button>
   </>
  );
}

export default App;
