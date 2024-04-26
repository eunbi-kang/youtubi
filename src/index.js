import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NotFound from "./pages/NotFound";
import { createBrowserRouter, RouterProvider, HashRouter, createHashRouter } from "react-router-dom";
import VideoDetail from "./pages/VideoDetail";
import Videos from "./pages/Videos";

const rootPath = process.env.NODE_ENV === "development" ? "/" : "/youtubi";
const router = createBrowserRouter( [
  {
    path: rootPath,
    element: <App />,
    errorElment: <NotFound />,
    children: [
      { index: true, element: <Videos /> },
      { path: "", element: <Videos /> },
      { path: rootPath + "videos", element: <Videos /> },
      { path: rootPath + "videos/:keyword", element: <Videos /> },
      { path: rootPath + "videos/watch/:videoId", element: <VideoDetail /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
