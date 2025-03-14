import { createRoot } from "react-dom/client";
import bgImage from "./images/top-view-desk-concept-with-notepad.jpg"

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <div style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100%",
      }}>

        <App />
    </div>
);
