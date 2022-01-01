import React from "react";
import Event from "./Event";
const Events = ({ dispatch, state }) => {
	return (
		<>
			<h4>イベント一覧</h4>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>ID</th>
						<th>タイトル</th>
						<th>ボディー</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{state.map((event, index) => (
						<Event event={event} key={index} dispatch={dispatch} />
					))}
				</tbody>
			</table>
		</>
	);
};

export default Events;
