import React, { Component } from "react";
import { TodoConsumer } from "../TodoComponent/TodoContext";

class UserLogin extends Component {
	render() {
		return (
			<TodoConsumer>
				{(myState) => {
					return (
						<React.Fragment>
							{myState.isLogged ? (
								<button
									onClick={myState.clickHandler}
									className="btn btn-sm btn-primary mx-4"
								>
									Logout
								</button>
							) : (
								<button
									onClick={myState.clickHandler}
									className="btn btn-sm btn-primary mx-4"
								>
									Login
								</button>
							)}
						</React.Fragment>
					);
				}}
			</TodoConsumer>
		);
	}
}

export default UserLogin;
