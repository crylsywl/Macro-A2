import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductPage from "./Pages/ProductPage"
import { UserProvider } from "./Utils/UserContext"
import ProductDetail from "./Pages/Productdetails"
import HookForm from "./Pages/HookForm"
import ReactForm from "./Pages/ReactForm"
import PostApp from "./Pages/PostApp"
import EditProfilePage from "./Pages/EditProfilePage"
import RiwayatPage from "./Pages/RiwayatPage"
import Homepage from "./Pages/Homepage"
import Elearning from "./Pages/Elearning"
import Mentoring from "./Pages/Mentoring"
import Artikel from "./Pages/Artikel"
import Artikel1 from "./Pages/Artikel1"
import Artikel2 from "./Pages/Artikel2"
import Menu from "./Pages/Menu/Menu"
import ReviewCV from "./Pages/ReviewCV/ReviewCV"
import Review_porto from "./Pages/Review_porto"

function App() {
  
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Homepage />}/>  
            <Route path="/editprofile" element={<EditProfilePage />}/>
            <Route path="/riwayat" element={<RiwayatPage />}/>
            <Route path="/elearning" element={<Elearning />}/>
            <Route path="/mentoring" element={<Mentoring />}/>
            <Route path="/artikel" element={<Artikel />}/>
            <Route path="/artikel1" element={<Artikel1 />}/>
            <Route path="/artikel2" element={<Artikel2 />}/>
            <Route path="/menu" element={ <Menu />}/>
            <Route path="/reviewcv" element={<ReviewCV />}/>
            <Route path="/reviewporto" element={<Review_porto />}/>
          </Routes>  
        </UserProvider>      
      </BrowserRouter>
    </>
  )
}

// function App () {
//   return (
//     <>
//       <BrowserRouter>
//         <UserProvider>
//           <Routes>
//             <Route path="/"  element={<Profile1 />}/>
                          {/* <Route path="/"  element={<ProductPage />}/>
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="*" element={<h1 className="flex w-full h-full text-center items-center justify-center text-4xl text-pink-600">NOT FOUND PAGE.</h1>} />
            <Route path="/hookform" element={<HookForm />}/>
            <Route path="/reactform" element={<ReactForm />}/>
            <Route path="/postapp" element={<PostApp />}/> */}
//           </Routes>  
//         </UserProvider>      
//       </BrowserRouter>
//     </>
//   )
// }



export default App
