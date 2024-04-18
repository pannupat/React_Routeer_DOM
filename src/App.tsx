// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Pack from '@components/ReactPacking';
// import Naru from '@pages/memberpage';
// import Runa from '@pages/todolist' ;
// import Workshop from '@workshop_assignment/workshop';
// import Test from '@workshop_assignment/test';
// import Assignment2 from '@workshop_assignment/assignment2';
import { Route, RouterProvider, Routes, useRoutes } from 'react-router-dom';
// import Homepage from '../reactrouterdom/HomePage';
// import Mainpage from '../reactrouterdom/MainPage';
// import Allnew from '../reactrouterdom/AllNew';
// import Detailnew from '../reactrouterdom/DetailNew';
// import Notfound from '../reactrouterdom/NotFound';
import routers from "./function/router";


function App() {
  return(
    <RouterProvider router={routers}/>  
  )

  // return (

  //   <Routes>
  //     <Route path='/' element={<Homee />} />
  //     <Route path=' ' element={<Nopagee />} />

  //     <Route path='/home' element={<Layoutt />} >
  //     <Route index element={<Homee/>}/>
  //     <Route path='about' element={<Aboutt />} />
  //     <Route path='contact' element={<Contactt />} />

  //   </Route>
    
  // </Routes >

  // )

//   const router = useRoutes([
//     {
//       path:"/",
//       element:<Homee/>
//     },
//     {
//       path:"/about",
//       element:<Aboutt/>
//     },
//     {
//       path:"/contact",
//       element:<Contactt/>
//     },
//     {
//       path:"*",
//       element:<Nopagee/>
//     },
//     {
//       path:"/home",
//       element:<Layoutt/>,
//       children:[
//         {
//           index:true,
//           element:<Homee/>
//         },
//         {
//         path:"about",
//         element:<Aboutt/>
//       },{
//         path:"contact",
//         element:<Contactt/>
//       }
//     ]
//     }

    
//   ])

//   return router 

}

export default App;
