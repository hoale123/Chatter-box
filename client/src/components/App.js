
import React, { useEffect, useState } from "react";
// import ReviewsContainer from './ReviewsContainer'
import TitleHeader from "./TitleHeader";
import Homepage from "./Homepage";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);



  return (

    <div className="app">
      <TitleHeader user={user} />
      <Homepage user={user} setUser={setUser} />

    </div>
  );
}

export default App;
