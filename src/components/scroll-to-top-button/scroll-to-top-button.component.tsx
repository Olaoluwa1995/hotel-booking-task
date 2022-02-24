import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./scroll-button.css";
import { colors } from "../../styles/theme";

const ScrollButton = () => {
	const [showScroll, setShowScroll] = useState(false);

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 400) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 400) {
			setShowScroll(false);
		}
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	window.addEventListener("scroll", checkScrollTop);

	return (
		<FaArrowCircleUp
			color={colors.primary}
			className="scrollTop"
			onClick={scrollTop}
			style={{ height: 40, display: showScroll ? "flex" : "none" }}
		/>
	);
};

export default ScrollButton;
