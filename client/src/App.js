import "./assets/css/fonts.css";
import { AuthProvider } from "./context";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from "@apollo/client";
import AuthRoute from "./utils/AuthRoute";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import CreatePostPage from "./pages/CreatePostPage";
import Posts from "./pages/Posts";
import CategoryPage from "./pages/CategoryPage";
import Footer from "./components/Footer";
import Admin from "./admin/Admin";
import EditPost from "./components/CreateEditPost/EditPost";
import Register from "./components/RegisterAndLogin/Register";
import Login from "./components/RegisterAndLogin/Login";
import Test from "./components/Test";
const httpLink = createHttpLink({
  uri: "http://localhost:4000/",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("jwtToken");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <AuthProvider>
          <BrowserRouter>
            <Navbar />
            <Switch>
              <Route exact strict path="/" component={MainPage} />
              <Route
                exact
                strict
                path="/create-post"
                component={CreatePostPage}
              />
              <Route exact strict path="/edit-post/:id" component={EditPost} />
              <Route exact strict path="/all-post" component={Posts} />
              <Route exact strict path="/categories" component={CategoryPage} />
              <Route exact strict path="/admin" component={Admin} />
              <AuthRoute exact strict path="/register" component={Register} />
              <AuthRoute exact path="/login" component={Login} />
              <Route exact strict path="/test" component={Test} />
              <Route path="*" component={MainPage} />
            </Switch>
            <Footer />
          </BrowserRouter>
        </AuthProvider>
      </ApolloProvider>
    </div>
  );
}

export default App;
