import { ChakraProvider, CSSReset, Box, Text } from "@chakra-ui/react";

import Timer from "./components/Timer";

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Box textAlign="center" fontSize="xl" mt="4">
        <Text>Pomodoro</Text>
        <Timer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
