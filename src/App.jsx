import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails"; // Import ProductDetails
import { Box } from "@chakra-ui/react";

const App = () => {
  return (
    <Box bg="black">
      <Box bg="transparent">
        <Navbar />
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} /> {/* Add route for ProductDetails */}
      </Routes>
    </Box>
  );
};

export default App;