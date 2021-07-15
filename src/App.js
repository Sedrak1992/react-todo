import React, { Component } from "react";
import "./App.css";
import Heade from "./Header/Heade";
import RecipeReviewCard from "./cart";
import SwipeableTemporaryDrawer from "./temporary drawer/Temporary_drawer";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import foto3 from "./img/03dVtlFrjH9iqKh5rmYQ2NU-5..1569492552.jpg";
import foto2 from "./img/d6d73f59594301.Y3JvcCwxMTk4LDkzOCw0MjksMTUw.jpg";
import foto from "./img/sport.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  list: {
    width: 350,
    zIndex:-1,
  },
  fullList: {
    width: "auto",
  },
});

function App() {
  const [stateCount, setStateCount] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  function addProduct() {
    setStateCount(stateCount + 1);
  }

  const toggleDrawer = (v) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(v);
  };
  return (
    <div className="App">
      <Heade stateCount={stateCount} toggleDrawer={toggleDrawer} />
      <div className="RecipeReviewCard">
        <RecipeReviewCard
          foto={foto3}
          addProduct={addProduct}
          toggleDrawer={toggleDrawer}
        />
        <RecipeReviewCard
          foto={foto2}
          addProduct={addProduct}
          toggleDrawer={toggleDrawer}
        />
        <RecipeReviewCard
          foto={foto}
          addProduct={addProduct}
          toggleDrawer={toggleDrawer}
        />
      </div>
      <SwipeableDrawer
        anchor={"left"}
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <h1>tfyguhtuy</h1>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
export default App;

// export default class App extends Component {
//   state = {
//     stateCount: 0,
//   };

//   AddProduct = () => {
//     this.setState({
//       stateCount: this.state.stateCount + 1,
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <Heade stateCount={this.state.stateCount} />
//         <div className="RecipeReviewCard">
//           <RecipeReviewCard foto={foto3} addProduct={this.AddProduct} />
//           <RecipeReviewCard foto={foto2} addProduct={this.AddProduct} />
//           <RecipeReviewCard foto={foto} addProduct={this.AddProduct} />
//         </div>
//       </div>
//     );
//   }
// }
