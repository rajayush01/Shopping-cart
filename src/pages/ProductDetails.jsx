import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, Text, Button, Flex, Spinner, Stack } from '@chakra-ui/react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/Slices/CartSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => {
        const product = data.find(p => p.id === parseInt(id));
        setProduct(product);
      });
  }, [id]);

  const addToCart = () => {
    dispatch(add(product));
    toast.success('Item added to Cart');
  };

  const removeFromCart = () => {
    dispatch(remove(product.id));
    toast.error('Item removed from Cart');
  };

  if (!product) {
    return (
      <Flex justify="center" align="center" minHeight="100vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

  return (
    <Box p={5} maxWidth="800px" mx="auto" bg="gray.800" borderRadius="lg" minHeight="100vh">
      <Flex direction={{ base: 'column', md: 'row' }} boxShadow="lg" borderRadius="lg" overflow="hidden" bg="gray.700">
        <Box flex="1" display="flex" justifyContent="center" alignItems="center" p={4} bg="gray.800">
          <Box
            boxShadow="md"
            borderRadius="lg"
            overflow="hidden"
            borderWidth="2px"
            borderColor="teal.500"
            p={4}
            bg="white"
            position="relative"
          >
            <Image src={product.image} alt={product.title} objectFit="contain" width="250px" height="250px" />
            <Box
              position="absolute"
              top={2}
              right={2}
              bg="teal.200"
              px={2}
              py={1}
              borderRadius="md"
              fontSize="sm"
              fontWeight="bold"
              color="teal.800"
            >
              New
            </Box>
          </Box>
        </Box>
        <Box flex="1" p={6} color="white">
          <Stack spacing={5}>
            <Text fontSize="3xl" fontWeight="bold" color="teal.300">
              {product.title}
            </Text>
            <Text fontSize="2xl" color="teal.500">
              ${product.price}
            </Text>
            <Flex alignItems="center" fontSize="lg">
              <Text fontWeight="bold" mr={4}>
                Rating: {product.rating.rate} ({product.rating.count} reviews)
              </Text>
              <Text fontWeight="bold">Category: {product.category}</Text>
            </Flex>
            <Flex justify="space-between" align="center" mt={4} gap={4}>
              {cart.some(p => p.id === product.id) ? (
                <Button
                  color="white"
                  bg="red.500"
                  _hover={{ bg: 'red.600' }}
                  transition="all 0.3s ease-in-out"
                  onClick={removeFromCart}
                  fontSize={"md"}
                >
                  Remove from Cart
                </Button>
              ) : (
                <Button
                  color="white"
                  bg="green.500"
                  _hover={{ bg: 'green.600' }}
                  transition="all 0.3s ease-in-out"
                  onClick={addToCart}
                  fontSize={"sm"}
                >
                  Add to Cart
                </Button>
              )}
              <Button
                color="white"
                bg="teal.500"
                _hover={{ bg: 'teal.600' }}
                fontSize={"14px"}
                size="md"
                onClick={() =>
                  window.location.href = `https://wa.me/918787878787?text=Hey, I am interested in buying ${product.title} - ${product.price}`
                }
              >
                Inquire on WhatsApp
              </Button>
            </Flex>
          </Stack>
        </Box>
      </Flex>
      <Box mt={8} p={6} bg="gray.700" borderRadius="lg">
        <Text color="teal.300" fontSize="2xl" mb={4}>Description</Text>
        <Text fontSize="lg" color="gray.300">{product.description}</Text>
      </Box>
    </Box>
  );
};

export default ProductDetails;
