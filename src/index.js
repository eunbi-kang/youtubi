import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NotFound from "./pages/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoDetail from "./pages/VideoDetail";
import Videos from "./pages/Videos";

// console.log(6);
// console.log(process.env.REACT_APP_SERVER_HOST);
// console.log(process.env.PUBLIC_URL);

// const rootPath = process.env.NODE_ENV === "development" ? "" : `${process.env.REACT_APP_SERVER_HOST}`;
// console.log('PUBLIC_URL값은??????????:'+rootPath);
const router = createBrowserRouter( [
  {
    path: "/",
    element: <App />,
    errorElment: <NotFound />,
    children: [
      { index: true, element: <Videos /> },
      { path: "videos", element: <Videos /> },
      { path: "videos/:keyword", element: <Videos /> },
      { path: "videos/watch/:videoId", element: <VideoDetail /> },
    ],
  },
],{ 
  basename: process.env.REACT_APP_SERVER_HOST
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
