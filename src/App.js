import './App.css';
import { Input } from './Input';
import image from './bucket.png'

function App() {
  return (
    <div>
    <div className='App'>
      <h1>Create Your Own Bucket List - </h1>
      </div>
      <div className='App'>
      <p>a list of the things that a person would like to do or achieve before they die</p>
      </div>
      <div className='App'>
        <img src={image} alt="bucket" width="300px"/>
</div>
<div className='App'>
      <Input/>
 </div>
 </div>

  );
}

export default App;
