import React, { useState } from 'react'

const App = () => {
	const [count, setCount] = useState(0)

		const increment = () => setCount(count+1)
		const decrement = () => setCount(count -1)
		const increment2 = () => setCount(previousCount => previousCount + 1)
		const decrement2 = () => setCount(previousCount => previousCount- 1)
		const reset = () => setCount(0)
		const multiple = () => setCount(count * 2)      
		const divide = () => setCount(previousCount => previousCount % 3 === 0 ? previousCount / 3 : previousCount
				)
		return (
				<>
				<div> 
				count: {count}
				</div>
				<button onClick={increment}>+1</button>
				<button onClick={decrement}>-1</button>
				<br />
				<button onClick={increment2}>+1</button>
				<button onClick={decrement2}>-1</button>
				<br />
				<button onClick={reset}>Reset</button>
				<button onClick={multiple}>x2</button>
				<br />
				<button onClick={divide}>3の倍数の時だけ3で割る</button>
				</>
		       )
}

export default App
