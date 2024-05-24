import { Flex, Text, IconButton, Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaBagShopping } from "react-icons/fa6";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <Box bg={"gray.800"}>
      <Flex
        justify="space-between"
        alignItems="center"
        h="20"
        maxW="5xl"
        mx="auto"
        px="4"
        bg="gray.800"
        color="white"
        wrap="wrap"
      >
        <Link to="/">
          <Flex alignItems="center">
            <IconButton
              aria-label="Logo"
              icon={<FaBagShopping fontSize="2xl" />}
              color="green.600"
              bg="transparent"
              outlineColor="white"
              mr="2"
            ></IconButton>
            <Text ml="2" fontSize="xl" fontWeight="bold">
              toqri.com
            </Text>
          </Flex>
        </Link>

        <Flex alignItems="center" spacing="6">
          <InputGroup maxW="md" mr="10" display={{ base: "none", sm: "flex" }}>
            <Input
              placeholder="Search..."
              bg="white"
              color="gray.800"
              borderRadius="full"
            />
            <InputRightElement>
              <IconButton
                aria-label="Search"
                icon={<FaSearch />}
                color="gray.500"
                bg="transparent"
              />
            </InputRightElement>
          </InputGroup>

          <Link to="/">
            <Text mr="10" fontWeight="medium">
              Home
            </Text>
          </Link>

          <Link to="/cart">
            <Flex position="relative">
              <IconButton
                aria-label="Cart"
                icon={<FaShoppingCart fontSize="2xl" />}
                color="green.600"
                bg="transparent"
                outlineColor="white"
              />
              {cart.length > 0 && (
                <Box
                  position="absolute"
                  top="-1"
                  right="-2"
                  bg="green.600"
                  fontSize="xs"
                  w="5"
                  h="5"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="full"
                  color="white"
                  animation="bounce 1s infinite"
                >
                  {cart.length}
                </Box>
              )}
            </Flex>
          </Link>
        </Flex>
      </Flex>
      <Box bg="white" height="1px" />
    </Box>
  );
};

export default Navbar;
