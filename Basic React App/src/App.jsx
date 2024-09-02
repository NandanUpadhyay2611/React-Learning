import { Component, useState } from 'react'
import './App.css'
import SimpleComponent from './testComponent'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//      <SimpleComponent/>
//     </div>
//   )
// }

// export default App

//class Components

class MyCLassCom extends Component{
  handleClick=()=>{
    alert("Hi");
  };
render(){
  return(
    <div>
    <h1>Hello</h1>
    <button onClick={this.handleClick}>Click Here</button>
    </div>
  )
}

}
export default MyCLassCom