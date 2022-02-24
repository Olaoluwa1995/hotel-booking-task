import {
	BoxProps,
	FormControl,
	FormControlProps,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	FormLabelProps,
	Input,
	InputElementProps,
	InputGroup,
	InputLeftElement,
	InputProps,
	InputRightElement,
	Text,
	Textarea,
	TextareaProps,
} from "@chakra-ui/react";
import React, { useState } from "react";
import PasswordToggler from "./password-toggler.component";

interface Props {
	formControlProps?: FormControlProps;
	isTouched?: boolean | any;
	error?: string | any;
	labelProps?: FormLabelProps;
	leftElement?: InputElementProps;
	rightElement?: InputElementProps;
	useTextForError?: boolean;
	tip?: BoxProps;
}

export type FormInputProps = Props & InputProps & TextareaProps;

const FormInput: React.FC<FormInputProps> = ({
	isRequired,
	isTouched,
	error,
	formControlProps,
	name,
	type = "text",
	w,
	leftElement,
	rightElement,
	labelProps,
	useTextForError,
	tip,
	...otherProps
}) => {
	const [showPassword, setShowPassword] = useState(false);
	const onShowPassword = () => setShowPassword(!showPassword);

	const decideRightElement = () => {
		const children =
			type === "password" ? (
				<PasswordToggler
					showPassword={showPassword}
					onShowPassword={onShowPassword}
				/>
			) : (
				rightElement?.children
			);

		return (
			<InputRightElement
				h="100%"
				mr={{ base: "5%", md: "2%"}}
				children={children}
				{...(rightElement && rightElement)}
			/>
		);
	};

	return (
		<FormControl
			id={name}
			isInvalid={!!(isTouched && error)}
			isRequired={isRequired}
			w={w || "100%"}
			{...formControlProps}
			pos="relative">
			{labelProps?.children && (
				<FormLabel
					htmlFor={name}
					fontSize={{ base: "sm", md: "md" }}
					ml={2}
					mb="0"
					{...labelProps}>
					{labelProps?.children}
				</FormLabel>
			)}

			<InputGroup h={{ base: "2.5rem", md: "3rem" }}>
				{leftElement && <InputLeftElement {...leftElement} h="100%" />}

				{type === "textarea" ? (
					<Textarea fontSize="0.9rem" {...otherProps} />
				) : (
					<Input
						type={showPassword ? "text" : type}
						rounded="12px"
						h={{ base: "2.2rem", md: "2.5rem" }}
						fontSize={{ base: "0.7rem", md: "0.8rem"}}
						borderColor="transparent"
						bgColor="#F6F6F6"
						_hover={{ bgColor: "gainsboro" }}
						_focus={{ borderColor: "transparent", bgColor: "#F6F6F6" }}
						{...otherProps}
					/>
				)}

				{decideRightElement()}
			</InputGroup>

			{tip && (
				<FormHelperText
					fontSize={{ base: "xs", sm: "sm" }}
					mb={2}
					mt={0}
					{...tip}
				/>
			)}

			{error && useTextForError && (
				<Text mt={1} color="red" fontSize="0.8rem">
					{error}
				</Text>
			)}

			<FormErrorMessage>{error}</FormErrorMessage>
		</FormControl>
	);
};

export default React.memo(FormInput);
