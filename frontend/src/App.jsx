import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import spotsLoader from "./loaders/spotsLoader.js";
import TouristSpots from "./pages/TouristSpots.jsx";
import SpotsDetails from "./pages/SpotsDetails.jsx";
import spotDetailsLoader from "./loaders/spotDetailsLoader.js";
import TouristSpotsLayout from "./layouts/TouristSpotsLayout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} loader={spotsLoader}>
      <Route index element={<Home />} loader={spotsLoader} />

      <Route path="spots" element={<TouristSpotsLayout />}>
        <Route index element={<TouristSpots />} loader={spotsLoader} />
        <Route
          path=":id"
          element={<SpotsDetails />}
          loader={spotDetailsLoader}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
