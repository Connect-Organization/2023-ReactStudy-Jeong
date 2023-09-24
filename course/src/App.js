import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick=()=>{
    alert("배빈님, 클릭에 성공했습니다!");
  }
  return (
   <>
    <h2>클릭 해주세요!</h2>
    <button onClick={handleClick}>✨🐨 BaeBin Click ME! 🐨✨</button>
   </>
  );
}

export default App;
