import React, { useReducer } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import reducer from "../reducers";
import EventForm from "./EventForm";
import Events from "./Events";

const App = () => {
	const [state, dispatch] = useReducer(reducer, []); //ここで作られたstateを他のコンポーネントでも共有して利用する
	return (
		<div className="container-fluid">
			<EventForm dispatch={dispatch} state={state} />
			<Events dispatch={dispatch} state={state} />
		</div>
	);
};

export default App;
