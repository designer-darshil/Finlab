import { Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import { routes } from "./routes/routes";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Wallets from "./Pages/Wallets/Wallets";
import HelpCenter from "./Pages/HelpCenter/HelpCenter";
import Settings from "./Pages/Settings/Settings";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path={routes.default} element={<Dashboard />}></Route>
          <Route path={routes.wallets} element={<Wallets />}></Route>
          <Route path={routes.settings} element={<Settings />}></Route>
          <Route path={routes.helpcenter} element={<HelpCenter />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
