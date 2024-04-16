import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home/Home";
import { Navbar } from "./components/navbar";
import { ThemeProvider } from "./components/providers/theme-provider";

function App() {
    return (
        <BrowserRouter>
          <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <div className="h-full flex flex-col">
              <Navbar />
              <main className="flex-1">
                  <Routes>
                      <Route path="/" element={<HomePage />} />
                  </Routes>
              </main>
              <div>
                Footer
              </div>
            </div>
          </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
