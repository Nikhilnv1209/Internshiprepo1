import "./App.css";
import Badgepage from "./pages/Badgepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BadgeTypes from "./Components/BadgeTypes";

// const routes = createBrowserRouter([
//   {
//     path: "/badges",
//     element: <Badgepage/>,
//     children: [
//       // { path: "/popular", element: <Popularbadges />, title: "Popular Badges"},
//       // { path: "/ongoing", element: <Ongoingbadges />, title: "Ongoing Badges"},
//       // { path: "/earned", element: <Earnedbadges />, title: "Earned Badges"}
//       {path: "/badges", element: <BadgeTypes />},
//       {path:"/badges/:badgetype",element:<BadgeTypes/>}
//     ]
//   },
//   {
//     path: "*",
//     element: <div>Not Found</div>
//   }
// ]);

function App() {
  return (
    // <RouterProvider router={routes}>
    //   <Badgepage />
    // </RouterProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/badges" element={<Badgepage />}>
          <Route path="/badges" element={<BadgeTypes />} />
          <Route path="/badges/:badgetype" element={<BadgeTypes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


