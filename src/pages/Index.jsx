// Basic number counting webapp using Chakra UI and React Icons
import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <VStack spacing={4} align="center" justify="center" height="100vh">
      <Text fontSize="2xl" fontWeight="bold">
        Counter App
      </Text>
      <Text fontSize="4xl">{count}</Text>
      <Box>
        <Button leftIcon={<FaMinus />} colorScheme="pink" onClick={decrement} m={2}>
          Decrease
        </Button>
        <Button rightIcon={<FaPlus />} colorScheme="teal" onClick={increment} m={2}>
          Increase
        </Button>
      </Box>
    </VStack>
  );
};

export default Index;
