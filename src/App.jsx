import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar/NavBar';
import Home from '../Pages/Home/Home';
import Books from '../Pages/Books/Books';
import Login from '../Pages/Login/Login'
import BookDetails from '../Pages/Books/BookDetails';
function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/books" element={<Books/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path='/bookDetails/:id' element={<BookDetails/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
