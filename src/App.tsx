import React from "react";
import { Header } from "./components";
import {
  Box,
  Button,
  Center,
  ChakraProvider,
  defaultSystem,
  Input,
} from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Center
        display={"flex"}
        flexDirection="column"
        bgColor="teal"
        height="100vh"
      >
        <Header title="Banco Zathura" />
        <Box bgColor="white" p={10} borderRadius={10} boxShadow="md">
          <Center>
            <h3>Entre agora ou crie sua conta!</h3>
          </Center>
          <label htmlFor="emailInput">Email:</label>
          <Input
            type="email"
            id="emailInput"
            name="emailInput"
            placeholder="Digite seu email"
          />
          <label htmlFor="passwordInput">Senha:</label>
          <Input
            type="password"
            id="passwordInput"
            name="passwordInput"
            placeholder="Digite sua senha"
          />
          <Center>
            <Button color="white" marginTop={10} padding={5} bgColor="teal">
              Entrar
            </Button>
          </Center>
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;
