import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContect from "./context/UserContect"; // ✅ correct import

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContect>   {/* ✅ yaha UserContect wrapper use karo */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContect>
  </StrictMode>
);
