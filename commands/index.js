import React, { Component } from "react";
import { Box, Color, Text } from "ink";
import BigText from "ink-big-text";
import Gradient from "ink-gradient";
import Spinner from "ink-spinner";

// Data fetching utility
import { getIndiaData } from "../utils/fetchdata";

//Primary Component
/// Provides deatils of all states
class App extends Component {
	render() {
		return (
			<Box flexDirection="column" alignItems="center">
				<Header></Header>
				<Details></Details>
			</Box>
		);
	}
}

// Header Component
class Header extends Component {
	render() {
		return (
			<Box padding={1}>
				<Gradient name="mind">
					<BigText text="COVID INDIA"></BigText>
				</Gradient>
			</Box>
		);
	}
}

// Details Component
class Details extends Component {
	state = {
		isDataAvailable: false,
		data: {},
	};

	componentDidMount() {
		getIndiaData().then((data) => {
			this.setState({
				isDataAvailable: true,
				data: data,
			});
		});
	}

	render() {
		if (this.state.isDataAvailable) {
			return (
				<Box padding={1}>
					<Text>
						India currently has
						<Color blue> {this.state.data.confirmed} </Color>
						registered cases with
						<Color magenta> {this.state.data.active}</Color> active cases,
						<Color green> {this.state.data.recovered}</Color> recoveries and
						<Color red> {this.state.data.deaths}</Color> deceased.
					</Text>
				</Box>
			);
		} else {
			return (
				<Box padding={1}>
					<Color green>
						<Spinner type="dots" />
					</Color>
					<Text>Loading</Text>
				</Box>
			);
		}
	}
}

export default App;
