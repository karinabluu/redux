import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  // 여기에서 store에 접근하여, counter의 값을 얻어오고 싶다!
  // useSelector
  const data = useSelector((state) => {
    return state;
  });

  console.log('data', data);

  return <div>redux!</div>;
}

export default App;
