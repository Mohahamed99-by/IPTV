
import { DarkModeProvider } from "./IPTVServicesTemplate/DarkModeContext.jsx";
import IPTVRouter from "./IPTVServicesTemplate/IPTVRouter.jsx";
import React from 'react';
function App() {


  return (
    <>
   <DarkModeProvider >
    <IPTVRouter />
   </DarkModeProvider>
      
      
    </>
  )
}

export default App
