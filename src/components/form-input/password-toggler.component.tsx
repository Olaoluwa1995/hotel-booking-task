import { IconButton } from "@chakra-ui/react";
import React from "react";
import { BiHide, BiShow } from "react-icons/bi";

type Props = {
	showPassword: boolean;
	onShowPassword: () => void;
};

const PasswordToggler: React.FC<Props> = ({
	showPassword,
	onShowPassword,
	...otherProps
}) => (
	<IconButton
		variant="ghost"
		size="lg"
		_hover={{
			background: "primary-color-light",
			outline: "none",
			border: "none",
		}}
		_active={{
			background: "primary-color-light",
			outline: "none",
			border: "none",
		}}
		_focus={{
			boxShadow: "none",
		}}
		isRound
		color="grey"
		aria-label={showPassword ? "hide password" : "show password"}
		icon={
			showPassword ? <BiHide fontSize="1.8rem" /> : <BiShow fontSize="1.8rem" />
		}
		onClick={onShowPassword}
		background="primary-color-light"
		w="30px"
		h="30px"
		{...otherProps}
	/>
);

export default PasswordToggler;
