import './App.css';
import {AppBar, Toolbar, Typography} from "@mui/material";

function App() {
  return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5">
              Warehouse
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
  );
}

export default App;
