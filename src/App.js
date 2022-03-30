import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Header from './components/Header';
import Login from './components/Login';
import FridgeLists from './components/FridgeLists';
import EditFridgeTempPage from './components/EditFridgeTempPage';
import RecordFridgeTemp from './components/RecordFridgeTemp';
import NavigationBar from './components/NavigationBar/NavigationBar';
import FoodTempForm from './components/tempForms/FoodTempForm'
import {QueryClient, QueryClientProvider} from "react-query";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import {useAuthentication} from "./security/authentication";
import {AuthenticatedApp} from "./AuthenticatedApp";

const themeConfig = {
    initialColorMode: "light",
    useSystemColorMode: true,
};

const theme = extendTheme({
  themeConfig
});

const queryClient = new QueryClient()

const App = () => {
  let {isLoggedIn} = useAuthentication();
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
          {isLoggedIn
            ? <AuthenticatedApp/>
            : <Login/>
          }

        {/*<Router>*/}
        {/*  <Header />*/}
        {/*  <NavigationBar />*/}
        {/*  <Routes>*/}
        {/*    <Route path='/' element={<Home />} />*/}
        {/*    <Route path='login' element={<Login />} />*/}
        {/*    <Route path='fridgelists' element={<FridgeLists />} />*/}
        {/*    <Route path='edit/:id' element={<EditFridgeTempPage />} />*/}
        {/*    <Route path='temp' element={<RecordFridgeTemp />} />*/}
        {/*    <Route path='food' element={<FoodTempForm />} />*/}
        {/*  </Routes>*/}
        {/*</Router>*/}
      </QueryClientProvider>
    </ChakraProvider>
  )
};

export default App;