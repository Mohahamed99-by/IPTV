import React from 'react';
// import ReactHookForm from './LibraryAddForm/React-Hook-Form';
import IPTVRouter from './IPTVServicesTemplate/IPTVRouter';
// import Counter from './Recoil/count';
import { RecoilRoot } from 'recoil';
import RegistrForm from './Recoil/Form';

const App = () => {
  return (
    // <IPTVServicesTemplate basename="/IPTV" />
    <IPTVRouter basename="/IPTV" />
  //  <ReactHookForm />
  // <RecoilRoot > 
  //   {/* <Counter /> */}
  //   <RegistrForm />
    // </RecoilRoot>
    
 
  );
};

export default App;
