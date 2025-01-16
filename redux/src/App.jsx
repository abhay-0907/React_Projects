import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './features/counter/CounterSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <>
      <h1 className="text-red-500 text-3xl">Simple Counter App using Redux ToolKit</h1>

      <div className="m-20 p-2 flex items-center justify-center">
        <h3 className="text-4xl mx-6">Count: {count}</h3>
        <button
          className="mx-4 px-4 py-2 text-white font-semibold rounded-md 
          bg-gray-700 shadow-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => dispatch(increment())} // Wrapped in a function
        >
          +
        </button>
        <button
          className="px-4 py-2 text-white font-semibold bg-gray-700 rounded-md shadow-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => dispatch(decrement())} // Wrapped in a function
        >
          -
        </button>
        <button
          className="mx-4 px-4 py-2 text-white font-semibold bg-blue-500 rounded-md shadow-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => dispatch(reset())} // Wrapped in a function
        >
          Reset Value
        </button>
      </div>
    </>
  );
}

export default App;
