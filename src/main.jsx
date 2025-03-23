import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToolbarContextProvider } from "./components/context/toolbar-context/toolbar-context.jsx";
import { BooksContextProvider } from "./components/context/books-context/books-context.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BooksContextProvider>
            <ToolbarContextProvider>
                <App />
            </ToolbarContextProvider>
        </BooksContextProvider>
    </StrictMode>
);
