import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  StackDivider,
  useMediaQuery,
} from "@chakra-ui/react";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <Box minHeight="100vh" minWidth="90vw" p={isMobile ? 4 : 8} overflowX="hidden">
      {cart.length > 0 ? (
        <Flex flexDirection={isMobile ? "column" : "row"} alignItems={isMobile ? "center" : "flex-start"}>
          <Box flex="1">
            <VStack spacing={4} divider={<StackDivider borderColor="gray.200" />} align="stretch">
              {cart.map((item, index) => (
                <CartItem key={item.id} item={item} itemIndex={index} />
              ))}
            </VStack>
          </Box>
          <Box mt={isMobile ? 8 : 0} bg="white" p={6} borderRadius="md" boxShadow="lg">
            <Heading size="lg" mb={4} color="blue.800" textAlign={isMobile ? "center" : "left"}>
              Your Cart
            </Heading>
            <Heading size="md" mb={2} color="blue.600" textAlign={isMobile ? "center" : "left"}>
              Summary
            </Heading>
            <Text mb={4} color="blue.800" fontSize="lg" textAlign={isMobile ? "center" : "left"}>
              <span>Total Items: {cart.length}</span>
            </Text>
            <Text fontSize="xl" fontWeight="bold" mb={4} color="blue.800" textAlign={isMobile ? "center" : "left"}>
              Total Amount: ${totalAmount}
            </Text>
            <Button colorScheme="blue" size="lg">
              CheckOut Now
            </Button>
          </Box>
        </Flex>
      ) : (
        <Box textAlign="center" mt={12}>
          <Heading color="white">Cart Empty</Heading>
          <Link to="/">
            <Button colorScheme="blue" mt={4}>
              Shop Now
            </Button>
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default Cart;

