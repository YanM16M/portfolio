import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "./components/providers/theme-provider";

import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

import HomePage from "./pages/Home/Home";

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
              <Footer />
            </div>
          </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
