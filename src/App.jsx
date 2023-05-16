import "./App.css";
import Badgepage from "./pages/Badgepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BadgeTypes from "./Components/BadgeTypes";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Badgepage/>,
    children: [
      // { path: "/popular", element: <Popularbadges />, title: "Popular Badges"},
      // { path: "/ongoing", element: <Ongoingbadges />, title: "Ongoing Badges"},
      // { path: "/earned", element: <Earnedbadges />, title: "Earned Badges"}
      { path: "/", element: <BadgeTypes />},
      {path:"/:badgetype",element:<BadgeTypes/>}
    ]
  },
  {
    path: "*",
    element: <div>Not Found</div>
  }
]);

function App() {
  return (
    <RouterProvider router={routes}>
      <Badgepage />
    </RouterProvider>
  );
}

export default App;
