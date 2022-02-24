import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Flex, Skeleton, Text, useToast } from "@chakra-ui/react";
import bgImage from "../assets/images/bg.jpeg";
import { baseUrl, HotelModel } from "../utils/utils";
import HotelComponent from "../components/hotel/hotel-component";

const Home = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const toast = useToast();

	useEffect(() => {
		fetchHotels();
	}, [])

	const fetchHotels = async () => {
		setLoading(true);
		try {
			axios.get(`${baseUrl}/hotels`).then((res) => {
				setData(res.data.data);
				setLoading(false);
			})
		} catch (error: any) {
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
				h="35rem" 
				w="100%" 
				align="center"
				justify="center"
				bgImage={`url(${bgImage})`}
				backgroundSize="cover"
				backgroundPosition="center"
				backgroundRepeat="no-repeat">
					<Flex h="100%" w="100%" bgColor="blackAlpha.500" flexDir="column" align="center" justify="center">
						<Text fontSize={{base: "2xl", md: "4xl"}} color="white" fontWeight="bold">
							Home Away From Home
						</Text>
						<Text fontSize={{base: "md", md: "xl"}} color="white">
							Stay with us and enjoy the luxuries meant for royalty alone.
						</Text>
					</Flex>
			</Flex>
			<Box w="100%" pos="absolute" mt="30rem" px="5%">
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
						data.map((hotel: HotelModel) => {
							return (
								<HotelComponent hotel={hotel} />
							);
						})}
				</Flex>
			</Box>
		</Flex>
	);
};

export default React.memo(Home);
