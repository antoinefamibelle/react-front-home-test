import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "./App";
import './styles.css'

const rootElement = document.getElementById("root");
const root = rootElement && ReactDOMClient.createRoot(rootElement);

root &&
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
