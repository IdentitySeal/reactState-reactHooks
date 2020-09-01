// Creating  increment , decrement and reset counter .

// using react React-Hooks useState Method


// stateless component

import React,{useState} from "react"

const ReactHooksApp = (props)=> {

const [value , setValue] = useState(0)

const increment = () => {
  setValue(value + 1)
}
const decrement = () =>{
  setValue(value - 1)
}
const reset = () =>{
  setValue(0)
}


  return (
    <div style={{textAlign:'center'}}>
    <h2>{props.title}</h2>
      <h1>{value}</h1>
      <button onClick = {decrement}> Decrement</button>
      <button onClick = {reset}> Reset</button>
      <button onClick = {increment}> Increment</button>

    </div>
  )
}

// using react setState Method



class ReactStateApp extends React.Component{
  constructor(){
      super()
      this.state = {
          count:0
      }
      // this.handleIncrement = this.handleIncrement.bind(this)
      // this.handleDecrement = this.handleDecrement.bind(this)

      // means is that => this is not defined unless you define methods as arrow functions:
}
 handleIncrement =  () =>   {
      this.setState((setCount) => {
           return{   count : setCount.count + 1
      }})
  }

  handleDefault =  () =>   {
    this.setState((setCount)=>{
      return {
        count : setCount.count = 0
      }
    })
}


  handleDecrement = () =>{
      this.setState((changeCount) => {
          return {
              count : changeCount.count -1
          }
        }
      )
  }
  render(){
      return (

        <div style={{textAlign:'center'}}>
          <h2>{this.props.title}</h2>
          <h1>{this.state.count}</h1>
          <div> 
                <button onClick = {this.handleDecrement}> Decrement </button>
                <button onClick = {this.handleDefault}> Reset </button>
                <button onClick = {this.handleIncrement}> increment </button>    
          </div>
        </div>
      )
  }
}


const App = ()=> {
  return(
    <>
      <ReactHooksApp title = "ReactHooksApp"/>
        <br/>
        <br/>
      <ReactStateApp title= "ReactStateApp"/>
    </>
  )

}

export default App