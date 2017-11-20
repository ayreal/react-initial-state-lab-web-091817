import React from "react";

class ImageSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      currentSlideIndex: 0
    };
  }
  render() {
    return `I am on slide ${this.state.currentSlideIndex}`;
    // It should only render out the text 'I am on slide <CURRENT_SLIDE>', where <CURRENT_SLIDE> is the value of this.state.currentSlideIndex.
  }
}

export default ImageSlider;
