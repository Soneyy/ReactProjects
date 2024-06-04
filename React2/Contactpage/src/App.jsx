import React from "react";
import "/images/Frame.png";
import Navigation from "./components/Navigation/Navigation";
import ContactHeader from "./components/ContactHeader.jsx/ContactHeader";
import ContactForm from "./components/ContactForm/ContactForm";
const App = () => {
  return (
    <div>
      <Navigation />
      <main className="main_container">
      <ContactHeader />
      <ContactForm/>
      </main>
      
    </div>
  );
};

export default App;
