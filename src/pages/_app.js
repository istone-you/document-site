import "@/styles/globals.css";
import React, { useEffect, useState } from "react";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "../aws-exports";

Amplify.configure({
  ...awsconfig,
  oauth: {
    domain:
      "**********",
    scope: [
      "phone",
      "email",
      "openid",
      "profile",
      "aws.cognito.signin.user.admin",
    ],
    redirectSignIn: "https://**********/",
    redirectSignOut: "https://**********/",
    responseType: "code",
  },
});

export default function App({ Component, pageProps }) {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      await Auth.currentSession();
      console.log("user is authenticated");
      setAuthenticated(true);
    } catch (error) {
      console.log("user is not authenticated");
      setAuthenticated(false);
      Auth.federatedSignIn(); // AWS SSOのログインページにリダイレクトする
    }
  };

  return (
    <div>{authenticated && <Component {...pageProps} />}</div>
    // <Component {...pageProps} />
  );
}
