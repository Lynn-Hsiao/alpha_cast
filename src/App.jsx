import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, MainPage, FavoritePage } from "./pages"; 

const basename = process.env.PUBLIC_URL;

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="*" element={ <HomePage /> }/>
          <Route path="login" element={ <LoginPage /> }/>
          <Route path="main" element={ <MainPage /> }/>
          <Route path="favorite" element={ <FavoritePage /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
