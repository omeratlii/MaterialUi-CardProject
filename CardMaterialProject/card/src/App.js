import "./App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Brands from "./Brands";
import Mercedes from "./images/mercedes.jpg";
import Audi from "./images/audi.jpg";
import Maserati from "./images/maserati.jpg";
import Porsche from "./images/porsche.jpg";
function App() {
  return (
    <div>
      <AppBar>
        <Toolbar sx={{ fontSize: 24 }}>Dream Garage</Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ marginTop: 10 }}>
          <Grid item xs={12} md={6} lg={3}>
            <Brands
              image={Mercedes}
              title="Mercedes"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugiat commodi placeat saepe necessitatibus dolor sed unde voluptate atque nisi suscipit tenetur, dolores quod non. Minus exercitationem nisi doloribus cupiditate."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Brands
              image={Audi}
              title="Audi"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugiat commodi placeat saepe necessitatibus dolor sed unde voluptate atque nisi suscipit tenetur, dolores quod non. Minus exercitationem nisi doloribus cupiditate."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Brands
              image={Maserati}
              title="Maserati"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugiat commodi placeat saepe necessitatibus dolor sed unde voluptate atque nisi suscipit tenetur, dolores quod non. Minus exercitationem nisi doloribus cupiditate."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Brands
              image={Porsche}
              title="Porsche"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugiat commodi placeat saepe necessitatibus dolor sed unde voluptate atque nisi suscipit tenetur, dolores quod non. Minus exercitationem nisi doloribus cupiditate."
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
