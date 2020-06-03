import React, { Component } from "react";
import DisplayItems from "./../DisplayItems/DisplayItems";
import { TodoConsumer } from "../TodoComponent/TodoContext";

class ParentTodo extends Component {
	render() {
		let k = 1;
		return (
			<TodoConsumer>
				{(myTodos) => {
					return myTodos.Todos.map((Todo) => {
						return (
							<React.Fragment key={++k}>
								<DisplayItems Todo={Todo} />
							</React.Fragment>
						);
					});
				}}
			</TodoConsumer>
		);
	}
}

export default ParentTodo;
