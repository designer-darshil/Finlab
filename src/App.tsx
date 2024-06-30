import { Route, Routes } from 'react-router-dom';
import Layout from "./Pages/Layout/Layout";
import { routes } from './routes/routes';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path={routes.default} element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App
