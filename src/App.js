import React, { Component } from "react";
import "./App.css";
import Heade from "./Header/Heade";
import RecipeReviewCard from "./cart";
import foto3 from "./img/03dVtlFrjH9iqKh5rmYQ2NU-5..1569492552.jpg";
import foto2 from "./img/d6d73f59594301.Y3JvcCwxMTk4LDkzOCw0MjksMTUw.jpg";
import foto from "./img/sport.jpg";

export default class App extends Component {
  state = {
    stateCount: 0,
  };

  AddProduct = () => {
    this.setState({
      stateCount: this.state.stateCount + 1,
    });
  };

  render() {
    return (
      <div className="App">
        <Heade stateCount={this.state.stateCount} />
        <div className="RecipeReviewCard">
          <RecipeReviewCard foto={foto3} addProduct={this.AddProduct} />
          <RecipeReviewCard foto={foto2} addProduct={this.AddProduct} />
          <RecipeReviewCard foto={foto} addProduct={this.AddProduct} />
        </div>
      </div>
    );
  }

  // render() {
  //   const  { arr } = this.state;
  //   return (
  //     <div className="App">
  //         <Header stateCount={this.state.stateCount}/>
  //       <div className="RecipeReviewCard"/>
  //       {stateCount.map(item=>{
  //       return(
  //         <RecipeReviewCard {...item} addProduct={this.AddProduct}/>
  //       );
  //     })}
  //         {/* <RecipeReviewCard foto={foto3} addProduct={this.AddProduct} />
  //         <RecipeReviewCard foto={foto} />
  //         <RecipeReviewCard foto={foto2} /> */}
  //       </div>
  //       </div>
  //   );
  // }
}
