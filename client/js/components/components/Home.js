import React, {forwardRef} from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import '../../../scss/components/components/home.scss'
import Gallery from "react-grid-gallery";



export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          categories : {
            "videos": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10","11", "12", "13", "14", "15", "16", "17", "18", "19", "20","21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
            "photos": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10","11", "12", "13", "14", "15", "16", "17", "18", "19", "20","21", "22", "23", "24", "25", "26", "27", "28", "29", "30"]
          },
          showCategory: true,
          images : [
            {
              src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
              thumbnail:
                "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
              thumbnailWidth: 320,
              thumbnailHeight: 174,
              caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
              src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
              thumbnail:
                "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
              thumbnailWidth: 320,
              thumbnailHeight: 212,
              tags: [
                { value: "Ocean", title: "Ocean" },
                { value: "People", title: "People" }
              ],
              caption: "Boats (Jeshu John - designerspics.com)"
            },
          
            {
              src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
              thumbnail:
                "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
              thumbnailWidth: 320,
              thumbnailHeight: 212
            },
            {
              src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
              thumbnail:
                "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
              thumbnailWidth: 320,
              thumbnailHeight: 174,
              caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
              src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
              thumbnail:
                "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
              thumbnailWidth: 320,
              thumbnailHeight: 212,
              tags: [
                { value: "Ocean", title: "Ocean" },
                { value: "People", title: "People" }
              ],
              caption: "Boats (Jeshu John - designerspics.com)"
            },
          
            {
              src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
              thumbnail:
                "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
              thumbnailWidth: 320,
              thumbnailHeight: 212
            },
            {
              src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
              thumbnail:
                "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
              thumbnailWidth: 320,
              thumbnailHeight: 174,
              caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
              src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
              thumbnail:
                "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
              thumbnailWidth: 320,
              thumbnailHeight: 212,
              tags: [
                { value: "Ocean", title: "Ocean" },
                { value: "People", title: "People" }
              ],
              caption: "Boats (Jeshu John - designerspics.com)"
            },
          
            {
              src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
              thumbnail:
                "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
              thumbnailWidth: 320,
              thumbnailHeight: 212
            },
            {
              src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
              thumbnail:
                "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
              thumbnailWidth: 320,
              thumbnailHeight: 174,
              caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
              src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
              thumbnail:
                "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
              thumbnailWidth: 320,
              thumbnailHeight: 212,
              tags: [
                { value: "Ocean", title: "Ocean" },
                { value: "People", title: "People" }
              ],
              caption: "Boats (Jeshu John - designerspics.com)"
            },
          
            {
              src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
              thumbnail:
                "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
              thumbnailWidth: 720,
              thumbnailHeight: 212
            }
          ]
       }
       this.onClickShowMore = this.onClickShowMore.bind(this)
       this.getStartIndex = this.getStartIndex.bind(this)
    }


    onSlideChange(e) {
        // console.log('Item`s position during a change: ', e.item);
        // console.log('Slide`s position during a change: ', e.slide);
      }
    
    onSlideChanged(e) {
        // console.log('Item`s position after changes: ', e.item);
        // console.log('Slide`s position after changes: ', e.slide);
      }

    onClickShowMore(category_name){
      console.log(window.innerWidth)
      this.setState({
        showCategory: false
      })
    }

    getStartIndex(category_name){
      if (screen.width<=600){
        return this.state.categories[category_name].length - 4;
      }
      if (600<screen.width){
        return this.state.categories[category_name].length - 9;
      }

    }

    createVideoCategoryUI(){
      let content = [...this.state.categories['videos'], <button onClick={() => this.onClickShowMore("video")}>Show More</button>]
      return content.map((item, i) =>{
         return <div class='square-box'>
        <div class='square-content'>
          <div>
            <span>{item}</span>
          </div>
        </div>
      </div>
      })
    }

    createPhotoCategoryUI(){
      let content = [...this.state.categories['photos'], <button onClick={() => this.onClickShowMore("photos")}>Show More</button>]
      return content.map((item, i) =>{
         return <div class='square-box'>
        <div class='square-content'>
          <div>
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
              <div class="category" style={this.state.showCategory? {visibility: "visible"}: {visibility: "hidden", position: "absolute"}}>
                <div class="video-category">
                  <div class="category-name"><h1>Videos</h1></div>
                  <br/>
                  <AliceCarousel
                  duration={0.0}
                  startIndex = {this.getStartIndex("videos")}
                  autoPlay={false}
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
                  onInitialized  = {this.onInitialized }
                  swipeDisabled = {true}
                  autoPlayActionDisabled = {true}
                  keysControlDisabled ={true}
                >
                  {this.createVideoCategoryUI()}
                </AliceCarousel>
                </div>


                <br/>
                <br/>
                <div class="photo-category">
                  <div class="category-name"><h1>Photos</h1></div>
                  <br/>
                  <AliceCarousel
                  duration={0}
                  autoPlay={false}
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
                  onInitialized  = {this.onInitialized }
                  swipeDisabled = {true}
                  autoPlayActionDisabled = {true}
                  keysControlDisabled ={true}
                  startIndex = {this.getStartIndex("photos")}
                >
                  {this.createPhotoCategoryUI()}
                </AliceCarousel>
                </div>

                <br/>
                <br/>
                <div class="photo-category">
                  <div class="category-name"><h1>Photos</h1></div>
                  <br/>
                  <AliceCarousel
                  duration={0}
                  autoPlay={false}
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
                  onInitialized  = {this.onInitialized }
                  swipeDisabled = {true}
                  autoPlayActionDisabled = {true}
                  keysControlDisabled ={true}
                  startIndex = {this.getStartIndex("photos")}
                >
                  {this.createPhotoCategoryUI()}
                </AliceCarousel>
                </div>
                <br/>
                <br/>
                <div class="photo-category">
                  <div class="category-name"><h1>Photos</h1></div>
                  <br/>
                  <AliceCarousel
                  duration={0}
                  autoPlay={false}
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
                  onInitialized  = {this.onInitialized }
                  swipeDisabled = {true}
                  autoPlayActionDisabled = {true}
                  keysControlDisabled ={true}
                  startIndex = {this.getStartIndex("photos")}
                >
                  {this.createPhotoCategoryUI()}
                </AliceCarousel>
                </div>
                
            </div>
            <div class="show-more-category" style={!this.state.showCategory? {visibility: "visible"}: {visibility: "hidden", position: "absolute"}}>
            <div class="category-name"><h1>Photos</h1></div>
              <Gallery class="galary"
                images={this.state.images}
                enableLightbox={true}
                // maxRows={3}
                backdropClosesModal
                // currentImage={3}
                // isOpen={ true}
              />
            </div>
          </div>
        )
    }
}


