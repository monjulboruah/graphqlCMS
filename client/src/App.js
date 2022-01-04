import "./assets/css/fonts.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Navbar from "./components/Navbar";
import MainPage from "./pages/MainPage";
import CreatePostPage from "./pages/CreatePostPage";
import Posts from "./pages/Posts";
import CategoryPage from "./pages/CategoryPage";
import Footer from "./components/Footer";
import Admin from "./admin/Admin";
import EditPost from "./components/CreatePost/EditPost";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
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
            <Route exact strict path="/test" component={Admin} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
