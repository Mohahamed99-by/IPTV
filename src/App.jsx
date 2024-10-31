
import { DarkModeProvider } from "./IPTVServicesTemplate/DarkModeContext.jsx";
import IPTVRouter from "./IPTVServicesTemplate/IPTVRouter.jsx";
import React from 'react';
function App() {


  return (
    <>
   <DarkModeProvider >
    <IPTVRouter basename="/IPTV"/>
     
   </DarkModeProvider>
      
      
    </>
  )
}

export default App
