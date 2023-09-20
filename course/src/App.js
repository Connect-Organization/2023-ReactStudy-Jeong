import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick=()=>{
    alert("클릭에 성공했습니다!");
  }
  return (
   <>
    <h2>클릭 해주세요!</h2>
    <h3>안녕하세요. 저는 남채윤입니다!</h3>
    <button onClick={handleClick}>✨🐨 Click ME! 🐨✨</button>
   </>
  );
}

export default App;
