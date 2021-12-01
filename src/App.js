import React, { useState } from 'react'

const App = props => {

	const [name, setName] = useState(props.name)
	const [price, setPrice] = useState(props.price)

	const reset = () => {
		setPrice(props.price)
			setName(props.name)
	}

	return (
			<>
			<p>現在{name}は、{price}円です。</p>
			<button onClick={() => setPrice(price + 100)}>+100</button>	       			<button onClick={() => setPrice(price - 100)}>-100</button>
			<br />
			<input value={name} onChange={e => setName(e.target.value)}/>
			<br />			
			<button onClick={reset}>Reset</button>			
			</>

	       )
}

App.defaultProps = {
name: "", 
      price: 1000
}  

export default App
