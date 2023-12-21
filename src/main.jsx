import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./pages/routes/Routes.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AllContext from "./Context/AllContext.jsx";

const queryClient = new QueryClient()        

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AllContext>
           <RouterProvider router={router}></RouterProvider>
      </AllContext>
    </QueryClientProvider>
  </React.StrictMode>
);
