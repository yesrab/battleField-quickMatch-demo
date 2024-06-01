import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/Home/HomePage.jsx";
import Layout from "./pages/Layout.jsx";
import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/Home/Home.jsx";
import MultiplayerPage from "./pages/Multiplayer/MultiplayerPage.jsx";
import QMpage from "./pages/QuickMatch/QMpage.jsx";

import { loader as listLoader } from "./pages/QuickMatch/QMpage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<NotFound />} element={<Layout />}>
      <Route element={<HomePage />}>
        <Route index element={<Home />} />
        <Route path='multiplayer' element={<MultiplayerPage />} />
      </Route>
      <Route path='quickmatch' loader={listLoader} element={<QMpage />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

