
import { useContext } from 'react'
import './App.css'
import Button from './components/Button'
import { CounterContext } from './context/Counter'
import Item from './components/Item'
import Cart from './components/Cart'

function App() {

  const context = useContext(CounterContext);
  console.log(context);
  
  return (
    <>
      {/* <div> 
        <h1>
          Count : {context.count}
        </h1>
      </div>
      <div>
        <Button> </Button>
        <Button> </Button>
        <Button> </Button>
        <Button> </Button>
      </div> */}

      
      <div>
        <Item name="Laptop" price={100000}/>
        <Item name="Mobile" price={35000}/>
        <Item name="Pendrive" price={3500}/>
        <Item name="Webcam" price={5300}/>

      </div>
      <div>
        <Cart/>
      </div>
    </>
  )
}

export default App
