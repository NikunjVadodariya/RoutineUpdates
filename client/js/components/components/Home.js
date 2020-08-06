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
        0: {
          items: 1
        },
        600: {
          items: 8
        },
        1024: {
          items: 4
        }
      };
        return (
            <div class="home">
              <br/>
              <br/>
              <div class="category-name"><h2>videos</h2></div>
              <br/>
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
            <div class='square-box'>
              <div class='square-content'>
		             <div>
                 <span>1</span>
	            	</div>
        	</div>
      </div>
      <div class='square-box'>
              <div class='square-content'>
		             <div>
                 <span>2</span>
	            	</div>
        	</div>
      </div>
      <div class='square-box'>
              <div class='square-content'>
		             <div>
                 <span>3</span>
	            	</div>
        	</div>
      </div>
      <div class='square-box'>
              <div class='square-content'>
		             <div>
                 <span>4</span>
	            	</div>
        	</div>
      </div>
      <div class='square-box'>
              <div class='square-content'>
		             <div>
                 <span>5</span>
	            	</div>
        	</div>
      </div>
      <div class='square-box'>
              <div class='square-content'>
		             <div>
                 <span>6</span>
	            	</div>
        	</div>
      </div>
      <div class='square-box'>
              <div class='square-content'>
		             <div>
                 <span>7</span>
	            	</div>
        	</div>
      </div>
      <div class='square-box'>
              <div class='square-content'>
		             <div>
                 <span>8</span>
	            	</div>
        	</div>
      </div>
      <div class='square-box'>
              <div class='square-content'>
		             <div>
                 <span>9</span>
	            	</div>
        	</div>
      </div>
      <div class='square-box'>
              <div class='square-content'>
		             <div>
                 <span>10</span>
	            	</div>
        	</div>
      </div>
      <div class='square-box'>
              <div class='square-content'>
		             <div>
                 <span>11</span>
	            	</div>
        	</div>
      </div>
      <div class='square-box'>
              <div class='square-content'>
		             <div>
                 <span>12</span>
	            	</div>
        	</div>
      </div>

          </AliceCarousel>
          </div>
        )
    }
}


