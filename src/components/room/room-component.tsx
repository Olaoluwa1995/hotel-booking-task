import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import React from "react";
import { colors } from "../../styles/theme";
import { baseUrl, RoomModel } from "../../utils/utils";
import '../../styles/hotel.css';
import { FaMoneyBill } from "react-icons/fa";
import BookRoom from "./book-room";

type Props =
    {
        hotelId: string;
        room: RoomModel;
    };

const RoomComponent: React.FC<Props> = ({ hotelId, room }) => {
    return (
        <Box
            key={room?._id}
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
                src={`${baseUrl}/${room?.imageUrl}`}
                objectFit='cover'
                alt=""
                h="100%"
                w="100%"
            />
            <Flex flexDir="column" bottom="2rem" align="center" justify="center" w="100%" className="description" pos="absolute">
                <Box fontSize="xl">{room?.type}</Box>
                <Flex color={colors.primary} align="center">
                    <Icon as={FaMoneyBill} fontSize="lg" mr="0.3rem" />
                    <Box fontSize="md">{`$${room?.price}`}</Box>
                </Flex>
                <BookRoom hotelId={hotelId} room={room} />
            </Flex>
        </Box>
    );
}

export default RoomComponent;