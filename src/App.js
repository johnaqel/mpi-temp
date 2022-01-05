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
import {QueryClient} from "react-query";

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='fridgelists' element={<FridgeLists />} />
          <Route path='edit/:id' element={<EditFridgeTempPage />} />
          <Route path='temp' element={<RecordFridgeTemp />} />
          <Route path='food' element={<FoodTempForm />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
};

export default App;