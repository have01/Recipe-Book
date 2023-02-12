import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Auth0Provider
      domain="dev-6633tsq5mwnhrrbz.us.auth0.com"
      clientId="X2eZrTfRNZ4RavpgXZW5Eveb3QxRDDI0"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </>
);
