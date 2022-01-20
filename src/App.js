import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Form } from './components/Accounts/Form';

import Home from './components/home/Home';
import { NotFound } from './components/NotFound';
import Login from './components/Accounts/Login';
// import FridgeList from './components/FridgeList';
// import { FoodApp } from './components/Food/FoodApp';
// import { EditFood } from './components/Food/EditFood';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='signup' element={<Form />} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
          {/* <Route path='fridgelist' element={<FridgeList />} />
          <Route path='foodtemp' element={<FoodApp />} /> */}
        </Routes>
      </Router>
    </Fragment>
  )
};

export default App;