import React from "react";
import Posts from "./components/posts/Posts";
import client from "./apollo";
import { ApolloProvider } from "@apollo/client";

const App = () => {
  return (
    //@ts-ignore
    <ApolloProvider client={client}>
      <Posts />
    </ApolloProvider>
  );
};

export default App;
