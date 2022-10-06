import { IconContext } from 'react-icons';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/layouts/default-layout';
import ErrorLayout from './components/layouts/error-layout';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

const App = () => {
  return (
    <IconContext.Provider value={{}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaultLayout />}>
            <Route index element={<Home />}></Route>;
            <Route path='login' element={<Login />}></Route>;
            <Route path='register' element={<Register />}></Route>;
          </Route>
          <Route path='*' element={<ErrorLayout />} />
        </Routes>
      </BrowserRouter>
    </IconContext.Provider>
  );
};

export default App;
