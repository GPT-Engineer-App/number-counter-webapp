// Basic number counting webapp using Chakra UI and React Icons
import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    setHistory([...history, `Increased to ${newCount}`]);
  };
  const decrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    setHistory([...history, `Decreased to ${newCount}`]);
  };

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
      <Box w="100%" maxW="400px" overflowY="auto" maxHeight="200px">
        <Text fontSize="md" fontWeight="bold" mb={2}>
          History:
        </Text>
        {history.map((entry, index) => (
          <Text key={index} fontSize="sm">
            {entry}
          </Text>
        ))}
      </Box>
    </VStack>
  );
};

export default Index;
