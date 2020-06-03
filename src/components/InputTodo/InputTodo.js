import React, { Component } from "react";
import "./InputTodo.css";

class InputTodo extends Component {
	constructor(props) {
		super(props);
		this.inputRef = React.createRef();
	}

	componentDidMount() {
		this.inputRef.current.focus();
	}

	render() {
		return (
			<React.Fragment>
				<input
					onKeyPress={this.props.saveChangeHandler}
					className="form-control"
          type="text"
					ref={this.inputRef}
				/>
			</React.Fragment>
		);
	}
}

export default InputTodo;
