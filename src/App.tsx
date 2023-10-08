import { ApolloProvider } from "@apollo/client";
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import { AuthPage } from "./pages/AuthPage";
import { DashboardPage } from "./pages/DashboardPage";
import { client } from "./apollo";

const App = () => {
  const authToken = localStorage.getItem("token");

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={authToken ? "/dashboard" : "/login"} />}
          />
          <Route path="/login" Component={AuthPage} />
          <Route path="/dashboard" Component={DashboardPage} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
