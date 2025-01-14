
import { useContext } from 'react'
import './App.css'
import Button from './components/Button'
import { CounterContext } from './context/Counter'

function App() {

  const context = useContext(CounterContext);
  console.log(context);
  
  return (
    <>
      <div>
        <h1>
          Count : {context.count}
        </h1>
      </div>
      <div>
        <Button> </Button>
        <Button> </Button>
        <Button> </Button>
        <Button> </Button>
      </div>
    </>
  )
}

export default App
