import React, {forwardRef} from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import * as _ from 'lodash';
import '../../../scss/components/components/home.scss'



export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
       }
    }


    onSlideChange(e) {
        console.log('Item`s position during a change: ', e.item);
        console.log('Slide`s position during a change: ', e.slide);
      }
    
    onSlideChanged(e) {
        console.log('Item`s position after changes: ', e.item);
        console.log('Slide`s position after changes: ', e.slide);
      }



    render() {
        const responsive = {
            600: {
              items: 5
            },
            1024: {
              items: 10
            }
          };
        return (
            <div class="home">

            <AliceCarousel
            duration={400}
            autoPlay={false}
            startIndex = {1}
            fadeOutAnimation={true}
            mouseDragEnabled={true}
            playButtonEnabled={false}
            responsive={responsive}
            autoPlayInterval={2000}
            autoPlayDirection="rtl"
            autoPlayActionDisabled={true}
            onSlideChange={this.onSlideChange}
            onSlideChanged={this.onSlideChanged}
            infinite={false}
            mouseTrackingEnabled={true}
          >
            <div className="yours-custom-class"><h2>1</h2></div>
            <div className="yours-custom-class"><h2>2</h2></div>
            <div className="yours-custom-class"><h2>3</h2></div>
            <div className="yours-custom-class"><h2>4</h2></div>
            <div className="yours-custom-class"><h2>5</h2></div>
            <div className="yours-custom-class"><h2>6</h2></div>
            <div className="yours-custom-class"><h2>7</h2></div>
            <div className="yours-custom-class"><h2>8</h2></div>
            <div className="yours-custom-class"><h2>9</h2></div>
            <div className="yours-custom-class"><h2>10</h2></div>
            <div className="yours-custom-class"><h2>11</h2></div>
            <div className="yours-custom-class"><h2>12</h2></div>
            <div className="yours-custom-class"><h2>13</h2></div>
            <div className="yours-custom-class"><h2>14</h2></div>
            <div className="yours-custom-class"><h2>15</h2></div>
          </AliceCarousel>
          </div>
        )
    }
}


