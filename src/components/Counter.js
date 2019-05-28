// import React, {Component} from 'react'

// class Counter extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 0
//     }
//   }

//   render(){
//     return (
//       <div>
//         <p>You clicked {this.state.count + 1}</p>
//         <button onClick={prevState => this.setState({count: prevState.count + 1})}>
//           Click Me
//         </button>
//       </div>
//     )
//   }
// }

// export default Counter

import React, {useState} from 'react'

function Counter() {
  const [count, setCount] = useState(2)
  return (
    <div>
      <p>You clicked {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount ** 2)}>Click Me</button>
    </div>
  )
}

export default Counter