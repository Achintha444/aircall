import { createRoot } from "react-dom/client";

import Header from './Header';
import AllCalls from './page/app/pages/AllCalls';

const App = () => {
  return (
    <>
      <Header/>
      {/* <AllCalls/> */}
      <div className="container-view">Some activities should be here</div>

      asdads
    </>
  );
};

createRoot(document.getElementById("app")!).render(
  <App />
);

export default App;
