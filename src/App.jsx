import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AppRouter from "./router/AppRouter";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <AppRouter />
    </div>
  );
};

export default App;
