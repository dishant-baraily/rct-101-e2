import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import AddProduct from "./components/AddProduct";

const App = () => {
  return( 
    <div>
      <ChakraProvider>
        <AddProduct/>
      </ChakraProvider>
    </div>
  )
};

export default App;
