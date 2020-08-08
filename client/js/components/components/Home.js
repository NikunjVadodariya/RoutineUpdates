import React, {forwardRef} from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import * as _ from 'lodash';
import '../../../scss/components/components/home.scss'
import { max } from 'lodash';



export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          categories : {
            "videos": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            "photos": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
          }
       }
    }


    onSlideChange(e) {
        // console.log('Item`s position during a change: ', e.item);
        // console.log('Slide`s position during a change: ', e.slide);
      }
    
    onSlideChanged(e) {
        // console.log('Item`s position after changes: ', e.item);
        // console.log('Slide`s position after changes: ', e.slide);
      }
    onInitialized(e){
      console.log('Item`s intialized: ', e)
    } 

    createVideoCategoryUI(){
      let content = [...this.state.categories['videos'], <button>Show More</button>]
      return content.map((item, i) =>{
         return <div class='square-box'>
        <div class='square-content'>
          <div>
            {console.log(item)}
            <span>{item}</span>
          </div>
        </div>
      </div>
      })
    }

    createPhotoCategoryUI(){
      let content = [...this.state.categories['photos'], <button>Show More</button>]
      return content.map((item, i) =>{
         return <div class='square-box'>
        <div class='square-content'>
          <div>
            {console.log(item)}
            <span>{item}</span>
          </div>
        </div>
      </div>
      })
    }

    render() {
      const responsive = {
        0: {
          items: 1
        },
        600: {
          items: 5
        },
        1024: {
          items: 10
        }
      };
        return (
            <div class="home">
              <br/>
              <br/>
              <div class="category-name"><h1>Videos</h1></div>
              <br/>
              <AliceCarousel
              duration={0}
              autoPlay={true}
              fadeOutAnimation={true}
              mouseDragEnabled={false}
              playButtonEnabled={false}
              responsive={responsive}
              autoPlayInterval={0}
              autoPlayDirection="ltr"
              autoPlayActionDisabled={true}
              onSlideChange={this.onSlideChange}
              onSlideChanged={this.onSlideChanged}
              infinite={false}
              mouseTrackingEnabled={false}
              dotsDisabled = {true}
              buttonsDisabled = {true}
              slideToIndex = {0}
              onInitialized  = {this.onInitialized }
              swipeDisabled = {true}
              autoPlayActionDisabled = {true}
              keysControlDisabled ={true}
            >
              {this.createVideoCategoryUI()}
            </AliceCarousel>

            <br/>
              <br/>
              <div class="category-name"><h1>Photos</h1></div>
              <br/>
              <AliceCarousel
              duration={0}
              autoPlay={true}
              fadeOutAnimation={true}
              mouseDragEnabled={false}
              playButtonEnabled={false}
              responsive={responsive}
              autoPlayInterval={0}
              autoPlayDirection="ltr"
              autoPlayActionDisabled={true}
              onSlideChange={this.onSlideChange}
              onSlideChanged={this.onSlideChanged}
              infinite={false}
              mouseTrackingEnabled={false}
              dotsDisabled = {true}
              buttonsDisabled = {true}
              slideToIndex = {0}
              onInitialized  = {this.onInitialized }
              swipeDisabled = {true}
              autoPlayActionDisabled = {true}
              keysControlDisabled ={true}
            >
              {this.createPhotoCategoryUI()}
            </AliceCarousel>
          </div>
        )
    }
}


