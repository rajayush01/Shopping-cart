import { Box, Flex, Image, Text, IconButton } from "@chakra-ui/react";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="gray.50"
      boxShadow="md"
      p="5"
      m="3"
      transition="transform 0.3s"
      _hover={{ transform: "scale(1.05)", boxShadow: "lg" }}
    >
      <Flex direction={{ base: "column", md: "row" }} alignItems="center">
        <Box
          w={{ base: "100%", md: "150px" }}
          h={{ base: "auto", md: "150px" }}
          mb={{ base: 4, md: 0 }}
          mr={{ md: 4 }}
        >
          <Image
            src={item.image}
            alt={item.title}
            objectFit="contain"
            borderRadius="md"
            boxShadow="sm"
            w="100%"
            h="100%"
          />
        </Box>
        <Flex flex="1" direction="column" justifyContent="space-between">
          <Box>
            <Text fontSize="lg" fontWeight="bold" color="gray.800">
              {item.title}
            </Text>
            <Text fontSize="md" color="gray.600" noOfLines={2} mt="2">
              {item.description}
            </Text>
          </Box>
          <Flex mt="4" alignItems="center" justifyContent="space-between">
            <Text fontSize="xl" fontWeight="bold" color="green.600">
              ${item.price}
            </Text>
            <IconButton
              aria-label="Remove item"
              icon={<FcDeleteDatabase />}
              onClick={removeFromCart}
              variant="ghost"
              colorScheme="red"
              size="lg"
              _hover={{ bg: "red.100" }}
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CartItem;
