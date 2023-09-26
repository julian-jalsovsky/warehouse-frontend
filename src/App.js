import './App.css';
import {AppBar, Toolbar, Typography} from "@mui/material";
import Itemlist from "./components/ItemList";

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
          <Itemlist />
      </div>
  );
}

export default App;
