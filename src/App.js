import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import PageList from "./components/PageList";

function App() {
  return (
    <>
      <Router>
        <PageList />
      </Router>
    </>
  );
}

export default App;
