import React, { Component } from "react";
import "./App.css";
import UserLogin from "./components/UserLogin/UserLogin";
import TodoComponent from "./components/TodoComponent/TodoComponent";
import { TodoProvider } from "./components/TodoComponent/TodoContext";

class App extends Component {
	state = {
		isLogged: false,
	};

	clickHandler = () => {
		this.setState({
			isLogged: !this.state.isLogged,
		});
	};

	render() {
		return (
			<div className="App container">
				<h1>React Todo App</h1>
				<div className="row">
					<div className="col-md-12">
						<TodoProvider
							value={{ ...this.state, clickHandler: this.clickHandler }}
						>
							<UserLogin />
						</TodoProvider>
					</div>

					<div className="col-md-12">
						<TodoComponent isLogged={this.state.isLogged} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
