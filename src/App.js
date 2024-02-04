import React,{useState} from 'react';
import Monthly from './components/Monthly.jsx';
import Once from './components/Once.jsx';

function App() {

  const [showComponentA, setShowComponentA] = useState(true);
  const [showComponentB, setShowComponentB] = useState(false);

  const showA = () => {
    setShowComponentA(true);
    setShowComponentB(false);
  };

  const showB = () => {
    setShowComponentA(false);
    setShowComponentB(true);
  };

  return (
    <div>
      <div className='flex lg:ml-[26.5%] lg:mt-[10%] font-semibold'>
      <button onClick={showA} className={`p-5 border-solid border-t border-l border-gray-200 ${showComponentA ? 'bg-white text-blue-800' : 'bg-blue-800 text-white'} rounded-sm`} >Donate monthly</button>
      <button onClick={showB} className={`p-5 border-solid border-t border-r border-gray-200 ${showComponentA ? 'bg-blue-800 text-white' : 'bg-white text-blue-800'} rounded-sm`}>Donate once</button>
      </div>
      {showComponentA && <Monthly />}
      {showComponentB && <Once />}
    </div>
  );
}

export default App;
