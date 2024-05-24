import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import { Center, Box, SimpleGrid, Text } from "@chakra-ui/react";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchProductData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/products.json');
      const data = await response.json();
      setPosts((prevPosts) => [...prevPosts, ...data]);
      setHasMore(false); // Set hasMore to false since we fetched all data
    } catch (error) {
      console.error("Error fetching product data:", error);
      setPosts([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight && hasMore) {
        fetchProductData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore]);

  return (
    <Box>
      {loading && posts.length === 0 ? (
        <Center>
          <Spinner justifyContent="center" alignItems="center" />
        </Center>
      ) : posts.length > 0 ? (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={5} p={2} mx="10" minH="80vh">
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </SimpleGrid>
      ) : (
        <Box display="flex" justifyContent="center" alignItems="center" minH="80vh">
          <Text>No Data Found</Text>
        </Box>
      )}
      {loading && posts.length > 0 && (
        <Center>
          <Spinner justifyContent="center" alignItems="center" />
        </Center>
      )}
    </Box>
  );
};

export default Home;
