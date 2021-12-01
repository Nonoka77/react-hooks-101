import React, { useState } from 'react'

const App = props => {

	const [state, setState] = useState(props)
		const{price, name} = state
		return (
				<>
				<p>現在{name}は、{price}円です。</p>
				<button onClick={() => setState({...state, price: price + 100})}>+100</button>
				<button onClick={() => setState({...state, price: price - 100})}>-100</button>
				<br />
				<input value={name} onChange={(e) => setState({...state, name: e.target.value})}/>
				<br />			
				<button onClick={() => setState(props)}>Reset</button>			
				</>

		       )
}

App.defaultProps = {
name: "", 
      price: 1000
}  

export default App
