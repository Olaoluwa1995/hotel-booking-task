import { Button, ButtonProps, Spinner } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../styles/theme";

export type CustomButtonProps = {
	to?: string;
} & ButtonProps;

const CustomButton: React.FC<CustomButtonProps> = ({
	children,
	...otherProps
}) => {
	return (
		<Button
			overflowX="hidden"
			rounded="12px"
			fontSize="0.8rem"
			border="1px solid transparent"
			boxShadow="0px 8px 5px rgba(75, 93, 104, 0.1)"
			bgColor={colors.primary}
			color="white"
			fontWeight="normal"
			h="2.2rem"
			_focus={{
				border: "none",
			}}
			_hover={{
				color: "black",
				bgColor: "grey"
			}}
			spinner={<Spinner color="white" size="sm" />}
			{...otherProps}>
			{children}
		</Button>
	);
};

export default CustomButton;
