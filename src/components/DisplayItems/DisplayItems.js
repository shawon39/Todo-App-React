import React, { Component } from "react";
import "./DisplayItems.css";
import { TodoConsumer } from "../TodoComponent/TodoContext";

class DisplayItems extends Component {
	state = {
		checked: false,
		lineThrough: ''
	};

	handleCheck = (event) => {
		let checked = event.target.checked;
		if(checked) {
			this.setState({
				lineThrough: 'line-through'
			})
		} else {
			this.setState({
				lineThrough: ''
			})
		}
	}

	render() {
		return (
			<TodoConsumer>
				{(myTodos) => {
					return (
						<li className="list-group-item">
							<span>
								<input
									onChange={this.handleCheck}
									className="mr-4"
									defaultChecked={this.state.checked}
									type="checkbox"
								/>
							</span>
							<span className={this.state.lineThrough}>
								{this.props.Todo}
							</span>
							<span className="Item">
								<span onClick={myTodos.deleteHandler}>
									<i name={this.props.Todo} className="fas fa-trash-alt"></i>
								</span>
							</span>
						</li>
					);
				}}
			</TodoConsumer>
		);
	}
}

export default DisplayItems;
