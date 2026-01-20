import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root")!;

createRoot(root).render(<App />);

// 👉 SEO-Content ausblenden, sobald React wirklich läuft
document.body.classList.add("js-loaded");
