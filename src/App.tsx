import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./layout/Layout";
import GameDetails from "./components/GameDetails";
import NotFound from "./components/NotFound";
import GridMain from "./components/GridMain";
import { GameQueryProvider } from "./context/GameQueryContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<GridMain />} />
      <Route path="/game/:id" element={<GameDetails />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <GameQueryProvider>
      <RouterProvider router={router} />
    </GameQueryProvider>
  );
}

export default App;
