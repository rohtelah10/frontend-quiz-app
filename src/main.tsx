import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeModeProvider } from "./context/ThemeContext.tsx";

createRoot(document.getElementById("root")!).render(

  <ThemeModeProvider>
      <App />
  </ThemeModeProvider>
);
