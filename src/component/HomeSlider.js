import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default class AsNavFor extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div className="home-slider container-fluid p-0">			
        		
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <div className="slide-item">
            <img src="https://picsum.photos/1920/900?random=1"/>
            <div className="event-content">
            <h2>Mission Statement Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</h2>
            <h2>Slider Syncing (AsNavFor)</h2>
            <h4>First Slider</h4>
            </div>
          </div>
          <div className="slide-item">
          <h2>Mission Statement Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</h2>
          <img src="https://picsum.photos/1920/900?random=2"/>
          <div className="event-content">
          <h2>Slider Syncing (AsNavFor)</h2>
          <h4>First Slider</h4>
        </div>
          </div>
          <div className="slide-item">
          <img  src="https://picsum.photos/1920/900?random=3"/>
          <div className="event-content">
          <h2>Mission Statement Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</h2>
          <h2>Slider Syncing (AsNavFor)</h2>
          <h4>First Slider</h4>
        </div>
          </div>
          <div className="slide-item">
          <img  src="https://picsum.photos/1920/900?random=4"/>
          <div className="event-content">
          <h2>Mission Statement Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</h2>
          <h2>Slider Syncing (AsNavFor)</h2>
          <h4>First Slider</h4>
        </div>
          </div>
          <div className="slide-item">
          <img  src="https://picsum.photos/1920/900?random=5"/>
          <div className="event-content">
          <h2>Mission Statement Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</h2>
          <h2>Slider Syncing (AsNavFor)</h2>
          <h4>First Slider</h4>
        </div>
          </div>
          <div className="slide-item">
          <img  src="https://picsum.photos/1920/900?random=6"/>
          <div className="event-content">
          <h2>Mission Statement Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</h2>
          <h2>Slider Syncing (AsNavFor)</h2>
          <h4>First Slider</h4>
        </div>
          </div>
        </Slider>
        <div className="thumb-nav">
        <h4>Second Slider</h4>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          vertical={true}
          verticalSwiping={true}
        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        </div>
      </div>
    );
  }
}
