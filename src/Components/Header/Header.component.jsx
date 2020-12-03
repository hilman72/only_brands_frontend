import React from "react";
import "./Header.style.scss";
import Grid from "@material-ui/core/Grid";

import SearchBar from "../../Components/SearchBar/SearchBar";

function Header() {
  return (
    <div>
      <div class="headerBorder">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item spacing={3}>
            (Logo)
          </Grid>
          <Grid item spacing={3}>
            <SearchBar />
          </Grid>
          <Grid item spacing={3}>
            <div>
              <button>Home</button>
              <button>My Coupons</button>
              <button>My Profile</button>
              <button>Logout</button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Header;
