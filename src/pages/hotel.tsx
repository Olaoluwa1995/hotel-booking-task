import { Box, Flex, Icon, Image, Skeleton, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { useHistory, useParams } from "react-router-dom";
import HotelComponent from "../components/hotel/hotel-component";
import RoomComponent from "../components/room/room-component";
import { baseUrl, HotelModel, RoomModel } from "../utils/utils";

const Hotel = () => {
    const params: any = useParams();
    console.log(params);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<HotelModel>();
    const toast = useToast();
    const history = useHistory();

    useEffect(() => {
        fetchHotelDetails();
    }, []);

    const fetchHotelDetails = async () => {
		setLoading(true);
		try {
			axios.get(`${baseUrl}/hotels/${params?.id}`).then((res) => {
				setData(res.data.data);
				console.log(res.data.data);
				setLoading(false);
			})
		} catch (error) {
            toast({
				status: "error",
				title: "Error!",
				description: "Sorry, something went wrong!",
				duration: 3000,
			  });
			setLoading(false);
		}
	}; 

	return (
        <Flex flexDir="column" minH="100%" minW="100%" pb="5rem">
            <Flex 
                h="30rem" 
                w="100%" 
                objectFit="cover"
				bgImage={`url(${baseUrl}/${data?.imageUrl})`}
				backgroundSize="cover"
				backgroundPosition="center"
				backgroundRepeat="no-repeat">
				<Flex cursor="pointer" onClick={() => history.push('/')} ml="1rem" mt="1rem" pl="1%" h="3rem" w="3rem" bgColor="blackAlpha.400" align="center" justify="center" borderRadius="50%">
                    <Icon as={MdArrowBackIos} fontSize="2rem" color="white" />
                </Flex>
			</Flex>

            <Flex flexDir="column" mt="2rem" w="100%" px="5%">
                <Box ml="1rem" mb="1rem" fontSize="2xl">Rooms</Box>
                <Flex w="100%" flexWrap="wrap" mt={{ base: "0.7rem", md: "1rem" }}>
                    {loading ? 
                        [1,2,3,4,5,6].map((x: number, index: number) => (
                            <Skeleton  
                                key={index}
                                w={{ base: "100%", sm: "80%", md: "42%", lg: "29.3%" }}
                                mx={{ base: "0%", sm: "10%", md: "4%", lg: "2%" }}
                                h={{ base: "20rem", sm: "23rem" }}
                                mb="2rem" />
                        ))	 
                    :
                        data?.rooms?.map((room: any) => {
                            return (
                                <RoomComponent hotelId={data._id} room={room} />
                            );
                        })}
                </Flex>
            </Flex>
        </Flex>
	);
};

export default Hotel;
