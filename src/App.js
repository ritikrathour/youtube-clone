import { Route, Routes } from "react-router-dom"
import Header from "./YouTubeClone/layout/header/Header"
import Footer from "./YouTubeClone/layout/footer/Footer";
import { useState } from "react"
import { Suspense, lazy } from "react"
const Feed = lazy(() => import("./YouTubeClone/pages/Feed"));
const SearchResult = lazy(() => import("./YouTubeClone/pages/SerachResult"));
const VideoDetails = lazy(() => import("./YouTubeClone/pages/VideoDetails"));

const App = () => {
  const [toggle, setToggle] = useState(true)
  const sideBarToggle = () => {
    setToggle(!toggle)
  };
  return (
    <>
      <Header action={sideBarToggle} />
      <main className="px-5 ">
        <Suspense fallback={<div>...Loading</div>}>
          <Routes>
            <Route path="/" element={<Feed state={toggle} />} />
            <Route path="/video/:id" element={<VideoDetails />} />
            <Route path="/serachResult/:searchQuery" element={<SearchResult state={toggle} />} />
          </Routes>
        </Suspense>

      </main>
      <Footer />
    </>
  )
}
export default App

// import Footer from "./NikeStore/layouts/Footer";
// import NavBar from "./NikeStore/layouts/NavBar";
// import Home from "./NikeStore/pages/Home";
// import { footerAPI } from "./NikeStore/constents/Constents"

// const App = () => {
//   return (
//     <>
//       <div className="">
//         <header className="container relative z-20">
//           <NavBar />
//         </header>
//         <main className="container flex flex-col gap-4 overflow-hidden">
//           <Home />
//         </main>
//         <footer className="w-full border mt-5 border-red-700 bg-gradient-to-b from-blue-900 to-blue-400 flex justify-around">
//           <Footer data={footerAPI}/>
//         </footer>
//       </div>
//     </>
//   )
// }
// export default App

