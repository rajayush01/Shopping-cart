import { Box, Flex, Text, Image, Button, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from Cart");
  };

  return (
    <Center >
    <Link to={`/product/${post.id}`}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}
        transition="all 0.3s ease-in-out"
        p="4"
        mt="10"
        ml={{ base: "0", md: "5" }} 
        borderRadius="xl"
        borderWidth="5px"
        borderColor="green.600"
        bg="white"
        boxShadow="md"
        cursor="pointer"
        maxW="270px" // Limit width for smaller screens
        mx="auto" // Center align on larger screens
      >
        <Box position="relative" w="full" h={{ base: "150px", md: "180px" }} alignContent="center" justifyContent={"center"} alignItems={"center"}> 
          <Image
            src={post.image}
            alt={post.title}
            objectFit="contain"
            h="full"
            w="full"
          />
          {cart.some((p) => p.id === post.id) && (
            <Box
              position="absolute"
              top={2}
              right={2}
              bg="green.100"
              px={2}
              py={1}
              borderRadius="md"
              fontSize="sm"
              fontWeight="bold"
              color="green.800"
            >
              In Cart
            </Box>
          )}
        </Box>
        <Box mt={4} w="full">
          <Text
            color="gray.700"
            fontWeight="semibold"
            fontSize="lg"
            textAlign="left"
            isTruncated
            w="full"
            mt="1"
          >
            {post.title}
          </Text>
          <Text
            w="full"
            color="gray.400"
            fontWeight="normal"
            fontSize="xs"
            textAlign="left"
            mt="2"
          >
            {post.description.split(" ").slice(0, 8).join(" ") + "..."}
          </Text>
        </Box>
        <Flex justify="space-between" w="full" mt="6" alignItems="center">
          <Text color="green.600" fontWeight="semibold" fontSize="lg">
            ${post.price}
          </Text>
          {cart.some((p) => p.id === post.id) ? (
            <Button
              color="white"
              bg="red.500"
              _hover={{ bg: "red.600" }}
              transition="all 0.3s ease-in-out"
              onClick={removeFromCart}
            >
              Remove
            </Button>
          ) : (
            <Button
              color="white"
              bg="green.500"
              _hover={{ bg: "green.600" }}
              transition="all 0.3s ease-in-out"
              onClick={addToCart}
            >
              Add to Cart
            </Button>
          )}
        </Flex>
      </Box>
    </Link>
    </Center>
  );
};

export default Product;
