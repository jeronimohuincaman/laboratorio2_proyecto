import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Router>
          <div className="App">
            <Routes>
              <Route exact path="/" Component={HomePage} />
              <Route exact path="/about" Component={AboutPage} />
              <Route path="*" Component={NotFoundPage} />
            </Routes>
          </div>
        </Router>
      </Box>
    </>
  );
}

export default App;