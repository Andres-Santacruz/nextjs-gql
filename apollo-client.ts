import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
const client = new ApolloClient({
  // uri: "https://myDominio.com/api",
  cache: new InMemoryCache(),
  link: createUploadLink({
    uri: "<YOUR_API>"
  })
});

export default client;
