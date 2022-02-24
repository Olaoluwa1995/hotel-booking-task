import { Flex, Heading, Image } from "@chakra-ui/react";
import React, { Component } from "react";

import { colors } from "../../styles/theme";
// import Logo from "../../assets/splash-logo.webp";
import "./loader.css";

export const Loader: React.FC<any> = ({ paddingRight = 0 }) => {
	return (
		<div id="loader">
			<div style={{ paddingRight: paddingRight }} className="loader-container">
				<div className="loader">
					<div className="sk-chase">
						<div className="sk-chase-dot"></div>
						<div className="sk-chase-dot"></div>
						<div className="sk-chase-dot"></div>
						<div className="sk-chase-dot"></div>
						<div className="sk-chase-dot"></div>
						<div className="sk-chase-dot"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export const SplashComponent = () => {
	return (
		<Flex h="100vh" w="100vw" bgColor={colors.secondary} align="center" justify="center">
			{/* <Image src={Logo} w="15%" h="auto"  /> */}
			<Heading>Hotels</Heading>
		</Flex>
	);
};

const withSplashScreen = (WrappedComponent: any) => {
	return class extends Component {
		state = {
			loading: true,
		};

		componentDidMount() {
			setTimeout(() => {
				this.setState({
					loading: false,
				});
			}, 1000);
		}

		render() {
			// while checking user session, show "loading" message
			if (this.state.loading) return SplashComponent();

			// otherwise, show the desired route
			return <WrappedComponent {...this.props} />;
		}
	};
};

export default withSplashScreen;
