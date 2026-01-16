import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import { ThemeProvider } from "./context/ThemeContext";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Loader from "./components/Loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-red-500 dark:bg-gray-900 dark:text-yellow-500 transition-colors duration-500">
        <Loader isLoading={isLoading} />
        {!isLoading && (
          <>
            <Hero />
            <Services />
            <Contact />
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
