import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import React from "react";
import { MdLocationOn } from "react-icons/md";
import { useHistory } from "react-router-dom";
import { colors } from "../../styles/theme";
import { baseUrl, HotelModel } from "../../utils/utils";
import '../../styles/hotel.css';
import CustomButton from "../custom-button/custom-button.component";

type Props =
    {
        hotel: HotelModel
    };

const HotelComponent: React.FC<Props> = ({ hotel }) => {
    const history = useHistory();
    return (
        <Box
            key={hotel?._id}
            pos="relative"
            bgColor="white"
            className="card"
            w={{ base: "100%", sm: "80%", md: "42%", lg: "29.3%" }}
            mx={{ base: "0%", sm: "10%", md: "4%", lg: "2%" }}
            h={{ base: "20rem", sm: "23rem" }}
            mb="2rem"
            _hover={{
                boxShadow: "0 0 10px 0 grey",
            }}
            boxShadow="0 0 3px 0 grey"
        >
            <Image
                src={`${baseUrl}/${hotel?.imageUrl}`}
                objectFit='cover'
                alt={hotel?.name}
                h="100%"
                w="100%"
            />
            <Flex flexDir="column" bottom="2rem" align="center" justify="center" w="100%" className="description" pos="absolute">
                <Box fontSize="xl" color={colors.primary}>{hotel?.name}</Box>
                <Flex align="center">
                    <Icon as={MdLocationOn} fontSize="lg" mr="0.3rem" />
                    <Box fontSize="md">{hotel?.location}</Box>
                </Flex>
                <CustomButton onClick={() => history.push(`/hotel/${hotel?._id}`)} mt="1rem">
                    View More
                </CustomButton>
            </Flex>
        </Box>
    );
}

export default HotelComponent;