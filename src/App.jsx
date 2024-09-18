import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";
import Books, { loader as BooksCollection} from "./Pages/Books/Books";
import Login from "./Pages/Login/Login";
import BookDetails , {loader as BookDetail} from "./Pages/Books/BookDetails";
import Notfound from "./Pages/Notfound/Notfound";
import { Provider } from "react-redux";
import AppLayout from "./Pages/AppLayout/AppLayout";
import store from "./store/store";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/books", element: <Books /> ,loader:BooksCollection,errorElement:<><h1>LOL</h1></>},
      { path: "/login", element: <Login /> },
      { path: "/bookDetails/:id", element: <BookDetails />,loader:BookDetail,errorElement:<><h1>LOL</h1></>},
    ],
  },
  { path: "*", element: <Notfound /> }
]);
function App() {
  return (
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
  );
}

export default App;
