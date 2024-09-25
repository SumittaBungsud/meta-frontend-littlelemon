import React, { useState } from "react";
import Header from "../components/Header";

function Auth() {
  const [isLogin, setLogin] = useState(true);

  return (
    <fragment id="auth">
      <Header />
      <form className="container">
        <fieldset className="auth-container">
          <section className="auth-body">
            <h3>{isLogin ? "Login" : "Signup"}</h3>
            <input id="email" name="email" type="email" placeholder="Email" />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
            />
          </section>
          <section className="auth-footer">
            <button className="button" type="submit">
              {isLogin ? "Login" : "Signup"}
            </button>
            <button type="button" onClick={() => setLogin(!isLogin)}>
              {isLogin ? "Signup" : "Login"}
            </button>
          </section>
        </fieldset>
      </form>
    </fragment>
  );
}

export default Auth;
