
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './assets/components/Commom/Home'
import Navbar from './assets/components/Commom/Navbar'
import Footer from './assets/components/Commom/Footer';
import Authenticate from './assets/components/Authenticate/authenticate'; 
import BookCreatePage from './assets/Pages/BookCreatePage';
import BookUpdatedPage from './assets/Pages/BookUpdatedPage';
import BookDetailsPage from './assets/Pages/BookDetailsPage';
import AllBooksPage from './assets/Pages/AllBooksPage';
import BookCartsListDeleted from './assets/components/Book/BookCartsListDeleted';
import AllUsersPage from './assets/Pages/AllUsersPage';
import AboutMePage from './assets/Pages/AboutMePage';
import LoggedUserDetailsPage from './assets/Pages/LoggedUserDetailsPage';
import { ToastContainer } from 'react-toastify';
import UserHistoryPage from './assets/Pages/UserHistoryPage';
import BookSearchPage from './assets/Pages/BookSearchPage';
import RegistrationPage from './assets/Pages/RegistrationPage';
import LoginPage from './assets/Pages/LoginPage';
import ContactMePage from './assets/Pages/ContactMePage';
import NotFoundPage from './assets/Pages/NotFoundPage';
import Customer from './assets/components/Authenticate/Customer';
import Admin from './assets/components/Authenticate/Admin';





function App() {
  return (
    <>
      <div>
     
        <Navbar></Navbar>

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/contact" element={<ContactMePage />} />

      <Route element={<Authenticate />}>
       
        <Route path="/books" element={<AllBooksPage />} />
        <Route path="/books/:bookId" element={<BookDetailsPage />} />
        <Route path="/book/search" element={<BookSearchPage />} />
        <Route path="/userDetails" element={<LoggedUserDetailsPage />} />
      </Route>

      <Route element={<Admin />}>
        <Route path="/book/create" element={<BookCreatePage />} />
        <Route path="/book/update" element={<BookUpdatedPage />} />
        <Route path="/users" element={<AllUsersPage />} />
        <Route path="/book/deletedBook" element={<BookCartsListDeleted />} />
        
      </Route>  

      <Route element={<Customer />}>
        <Route path="/history" element={<UserHistoryPage />} />

        <Route path="/books" element={<AllBooksPage />} />
        <Route path="/books/:bookId" element={<BookDetailsPage />} />
        <Route path="/book/search" element={<BookSearchPage />} />
        <Route path="/userDetails" element={<LoggedUserDetailsPage />} />
      </Route>  
       
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
     
       
        <Footer></Footer>

        <ToastContainer />
      </div>
    </>
  )
}

export default App





// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'
// import { Route, Routes } from 'react-router-dom';
// import Home from './assets/components/Commom/Home'
// import Navbar from './assets/components/Commom/Navbar'
// import Footer from './assets/components/Commom/Footer';
// import Authenticate from './assets/components/Authenticate/authenticate'; 
// import BookCreatePage from './assets/Pages/BookCreatePage';
// import BookUpdatedPage from './assets/Pages/BookUpdatedPage';
// import BookDetailsPage from './assets/Pages/BookDetailsPage';
// import AllBooksPage from './assets/Pages/AllBooksPage';
// import BookCartsListDeleted from './assets/components/Book/BookCartsListDeleted';
// import AllUsersPage from './assets/Pages/AllUsersPage';
// import AboutMePage from './assets/Pages/AboutMePage';
// import LoggedUserDetailsPage from './assets/Pages/LoggedUserDetailsPage';
// import { ToastContainer } from 'react-toastify';
// import UserHistoryPage from './assets/Pages/UserHistoryPage';
// import BookSearchPage from './assets/Pages/BookSearchPage';
// import RegistrationPage from './assets/Pages/RegistrationPage';
// import LoginPage from './assets/Pages/LoginPage';
// import ContactMePage from './assets/Pages/ContactMePage';
// import NotFoundPage from './assets/Pages/NotFoundPage';





// function App() {
//   return (
//     <>
//       <div>
     
//         <Navbar></Navbar>

//         <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<AboutMePage />} />
//         <Route path="/contact" element={<ContactMePage />} />

//       <Route element={<Authenticate expectedRole="ADMIN" />}>
//         <Route path="/book/create" element={<BookCreatePage />} />
//         <Route path="/book/update" element={<BookUpdatedPage />} />
//         <Route path="/users" element={<AllUsersPage />} />
//         <Route path="/book/deletedBook" element={<BookCartsListDeleted />} />

//         <Route path="/books" element={<AllBooksPage />} />
//         <Route path="/books/:bookId" element={<BookDetailsPage />} />
//         <Route path="/book/search" element={<BookSearchPage />} />
//         <Route path="/userDetails" element={<LoggedUserDetailsPage />} />
//       </Route>

//       <Route element={<Authenticate expectedRole="CUSTOMER" />}>
//         <Route path="/history" element={<UserHistoryPage />} />

//         <Route path="/books" element={<AllBooksPage />} />
//         <Route path="/books/:bookId" element={<BookDetailsPage />} />
//         <Route path="/book/search" element={<BookSearchPage />} />
//         <Route path="/userDetails" element={<LoggedUserDetailsPage />} />
//       </Route>  
       
//         <Route path="/register" element={<RegistrationPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="*" element={<NotFoundPage />} />
//         </Routes>
     
       
//         <Footer></Footer>

//         <ToastContainer />
//       </div>
//     </>
//   )
// }

// export default App
