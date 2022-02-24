import React from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalBody,
	useToast,
    Flex,
    Icon,
    Select,
    Spinner,
    useDisclosure,
} from "@chakra-ui/react";
import { Field, FieldProps, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import 'react-phone-number-input/style.css'

import "../form-input/phone-input.css";
import { useHistory } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { DatePickerField } from "../form-input/date-time-picker.component";
import { baseUrl, RoomModel } from "../../utils/utils";
import PhoneInput from "react-phone-number-input";

type FormValues = {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    adult: string;
    children: string;
    checkIn: string;
    checkOut: string;
    totalPrice: string;
  };
  
const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("First Name is required"),
    lastname: Yup.string().required("Last Name is required"),
    email: Yup.string()
        .required("Email is required")
        .email("Enter a valid email"),
    adult: Yup.string().required("No of Adults is required"),
    children: Yup.string().required("No of Children required"),
});

const selectStyle = {
    rounded: "12px",
    h: { base: "2.5rem", md: "3rem"},
    fontSize: { base: "0.7rem", md: "0.8rem"},
    borderColor: "transparent",
    color: "grey",
    my: { base: 1, md: 2 },
    bgColor: "#F6F6F6",
    _hover: { bgColor: "gainsboro" },
    _focus: { borderColor: "transparent", bgColor: "#F6F6F6" },
};

type Props =
    {
        hotelId: string;
        room: RoomModel;
    };

const BookRoom: React.FC<Props> = ({
	hotelId,
    room
}) => {

  const [loading, setLoading] = React.useState(false);

  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const initialValues: FormValues = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    adult: "",
    children: "",
    checkIn: "",
    checkOut: "",
    totalPrice: "",
  };

  const handleSubmit = async (values: FormValues) => {
    console.log({ values });

    values.totalPrice = room.price.toString();

    if(values.phone === "") {
        toast({
            status: "error",
            title: "Validation Error",
            description: "Phone Number is required!",
            duration: 3000,
          });
    } else if(values.checkIn === "") {
        toast({
            status: "error",
            title: "Validation Error",
            description: "Check-In date is required!",
            duration: 3000,
          });
    } else if(values.checkOut === "") {
        toast({
            status: "error",
            title: "Validation Error",
            description: "Check-Out date is required!",
            duration: 3000,
          });
    } else {
        setLoading(true);
        try {
        axios.post(`${baseUrl}/hotels/${hotelId}/book/${room._id}`, values, {
           headers : { 'Content-Type': "application/json" }
        }).then((res) => {
            console.log(res.data);
            toast({
                status: "success",
                title: "Booking Success!",
                description: res.data?.message,
                duration: 3000,
            });
            setLoading(false);
            onClose();
        })    
        } catch (error: any) {
            toast({
                status: "error",
                title: "Booking Failed!",
                description: "Sorry, something went wrong!",
                duration: 3000,
            });
            setLoading(false);
            onClose();
        }
    }
  };

	return (
		<>
         <CustomButton onClick={onOpen} mt="1rem">
            Book Now
        </CustomButton>
         <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <Formik
                onSubmit={handleSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
                >
                {({ handleSubmit, values }: any) => (
                    <ModalContent as="form" onSubmit={handleSubmit} borderRadius="30px" px="2%" py="1%">
                        <Icon as={IoIosArrowBack} onClick={onClose} ml="4%" mt="3%" fontSize="2rem" />
                        <ModalHeader>Book Room</ModalHeader>
                        <ModalBody pb={6} display="flex" flexDir="column">
                            <Field name="firstname">
                            {({ field, form }: FieldProps) => {
                                const { name } = field;
                                const { errors, touched } = form;

                                return (
                                <FormInput
                                    {...field}
                                    error={errors[name]}
                                    isTouched={touched[name]}
                                    h={{ base: "2.5rem", md: "3rem"}}
                                    isRequired
                                    formControlProps={{ my: { base: 1, md: 2 } }}
                                    placeholder="First Name"
                                />
                                );
                            }}
                            </Field>

                            <Field name="lastname">
                            {({ field, form }: FieldProps) => {
                                const { name } = field;
                                const { errors, touched } = form;

                                return (
                                <FormInput
                                    {...field}
                                    error={errors[name]}
                                    isTouched={touched[name]}
                                    h={{ base: "2.5rem", md: "3rem"}}
                                    isRequired
                                    formControlProps={{ my: { base: 1, md: 2 } }}
                                    placeholder="Last Name"
                                />
                                );
                            }}
                            </Field>

                            <Field name="email">
                            {({ field, form }: FieldProps) => {
                                const { name } = field;
                                const { errors, touched } = form;

                                return (
                                <FormInput
                                    {...field}
                                    error={errors[name]}
                                    isTouched={touched[name]}
                                    type="email"
                                    h={{ base: "2.5rem", md: "3rem"}}
                                    isRequired
                                    formControlProps={{ my: { base: 1, md: 2 } }}
                                    placeholder="Email Address"
                                />
                                );
                            }}
                            </Field>

                            <Field name="adult">
                            {({ field, form }: FieldProps) => {
                                const { name } = field;
                                const { errors, touched } = form;

                                return (
                                <FormInput
                                    {...field}
                                    error={errors[name]}
                                    isTouched={touched[name]}
                                    type="number"
                                    h={{ base: "2.5rem", md: "3rem"}}
                                    isRequired
                                    formControlProps={{ my: { base: 1, md: 2 } }}
                                    placeholder="No of Adult(s)"
                                />
                                );
                            }}
                            </Field>

                            <Field name="children">
                            {({ field, form }: FieldProps) => {
                                const { name } = field;
                                const { errors, touched } = form;

                                return (
                                <FormInput
                                    {...field}
                                    error={errors[name]}
                                    isTouched={touched[name]}
                                    type="number"
                                    h={{ base: "2.5rem", md: "3rem"}}
                                    isRequired
                                    formControlProps={{ my: { base: 1, md: 2 } }}
                                    placeholder="No of Children"
                                />
                                );
                            }}
                            </Field>

                            <Field name="phone">
                            {({ field, form }: FieldProps) => {
                                const { name, value} = field;
                                const { setFieldValue } = form;

                                return (
                                    <PhoneInput
                                        placeholder="Phone number"
                                        name={name}
                                        value={value}
                                        onChange={(value: any) => setFieldValue("phone", value)}
                                    />
                                );
                            }}
                            </Field>

                            <Flex flexDir="column" my={{ base: 1, md: 2 }}>
                                <DatePickerField
                                    name="checkIn"
                                    my={{ base: 1, md: 2 }}
                                    placeholderText="Click to pick check-in date"
                                    allowSameDay={true}
                                    dateFormat="dd/MM/yyyy"
                                    startDate={Date.now()}
                                    minDate={new Date()}
                                    />
                            </Flex>

                            <Flex flexDir="column" my={{ base: 1, md: 2 }}>
                                <DatePickerField
                                    name="checkOut"
                                    my={{ base: 1, md: 2 }}
                                    placeholderText="Click to pick check-out date"
                                    allowSameDay={true}
                                    dateFormat="dd/MM/yyyy"
                                    startDate={Date.parse(values?.checkIn)}
                                    minDate={Date.parse(values?.checkIn)}
                                    />
                            </Flex>
                            <CustomButton
                                w="100%"
                                h="3rem"
                                mt={8}
                                fontWeight="700"
                                fontSize="1rem"
                                type="submit"
                                isLoading={loading}
                            >
                                Submit
                            </CustomButton>   
                            </ModalBody>
                        </ModalContent>
                    )}
            </Formik>
          </Modal>
		</>
	);
};
  

export default BookRoom;