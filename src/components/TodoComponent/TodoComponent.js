import React, { Component } from "react";
import InputTodo from "./../InputTodo/InputTodo";
import ParentTodo from "./../ParentTodo/ParentTodo";
import "./TodoComponent.css";
import { TodoProvider } from "./TodoContext";

class TodoComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			Todos: ["Learning React", "Contest a 8 pm"],
		};
	}

	saveChangeHandler = (event) => {
		let myTodo = event.target.value;
		if (event.key === "Enter" && myTodo !== "") {
			let user = { ...this.state };
			user.Todos.push(myTodo);
			this.setState({
				user,
			});
			event.target.value = "";
		}
	};

	deleteHandler = (event) => {
		let myTodo = event.target.getAttribute("name");
		this.setState({
			Todos: this.state.Todos.filter((Todo) => Todo !== myTodo),
		});
	};

	render() {
		return (
			<React.Fragment>
				{this.props.isLogged ? (
					<div className="row TodoApp">
						<div className="col-md-12">
							<InputTodo saveChangeHandler={this.saveChangeHandler} />
						</div>
						<div className="col-md-8 TodoList">
							<TodoProvider
								value={{ ...this.state, deleteHandler: this.deleteHandler }}
							>
								<ParentTodo />
							</TodoProvider>
						</div>
					</div>
				) : (
					<h5 className="NotLoggedIn">
						<i className="fas fa-ban mx-4"></i>----- Login First -----
						<i className="fas fa-ban mx-4"></i>
					</h5>
				)}
			</React.Fragment>
		);
	}
}

export default TodoComponent;
