import React, {forwardRef} from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import '../../../scss/components/components/home.scss'
import Gallery from "react-grid-gallery";



export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          category_name: "Videos",
          showCategory: true,
          categories: {
            "photos" : [
              {
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                thumbnail:
                  "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
                thumbnailWidth: screen.length/5,
                thumbnailHeight: screen.length/5,
                caption: "After Rain (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                thumbnail:
                  "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                  thumbnailWidth: screen.length/5,
                  thumbnailHeight: screen.length/5,
                caption: "Boats (Jeshu John - designerspics.com)"
              },
            
              {
                src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                thumbnail:
                  "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
                  thumbnailWidth: screen.length/5,
                  thumbnailHeight: screen.length/5,
              },
              {
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                thumbnail:
                  "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
                thumbnailWidth: 100,
                thumbnailHeight: 100,
                caption: "After Rain (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                thumbnail:
                  "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                thumbnailWidth: 100,
                thumbnailHeight: 100,
                caption: "Boats (Jeshu John - designerspics.com)"
              },
            
              {
                src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                thumbnail:
                  "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
                thumbnailWidth: 100,
                thumbnailHeight: 100
              },
              {
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                thumbnail:
                  "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
                thumbnailWidth: 100,
                thumbnailHeight: 100,
                caption: "After Rain (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                thumbnail:
                  "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                thumbnailWidth: 100,
                thumbnailHeight: 100,
                caption: "Boats (Jeshu John - designerspics.com)"
              },
            
              {
                src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                thumbnail:
                  "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
                thumbnailWidth: 100,
                thumbnailHeight: 100
              },
              {
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                thumbnail:
                  "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
                thumbnailWidth: 100,
                thumbnailHeight: 100,
                caption: "After Rain (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                thumbnail:
                  "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                thumbnailWidth: 100,
                thumbnailHeight: 100,
                caption: "Boats (Jeshu John - designerspics.com)"
              },
            
              {
                src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                thumbnail:
                  "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
                thumbnailWidth: 100,
                thumbnailHeight: 100
              }
            ],
            "videos" : [
              {
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                thumbnail:
                  "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
                thumbnailWidth: 100,
                thumbnailHeight: 100,
                caption: "After Rain (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                thumbnail:
                  "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                thumbnailWidth: 100,
                thumbnailHeight: 100,
                caption: "Boats (Jeshu John - designerspics.com)"
              },
            
              {
                src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                thumbnail:
                  "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
                thumbnailWidth: 100,
                thumbnailHeight: 100
              },
              {
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                thumbnail:
                  "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
                thumbnailWidth: 100,
                thumbnailHeight: 100,
                caption: "After Rain (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                thumbnail:
                  "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                thumbnailWidth: 100,
                thumbnailHeight: 100,
                caption: "Boats (Jeshu John - designerspics.com)"
              },
            
              {
                src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                thumbnail:
                  "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
                thumbnailWidth: 100,
                thumbnailHeight: 100
              },
              {
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                thumbnail:
                  "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
                thumbnailWidth: 100,
                thumbnailHeight: 100,
                caption: "After Rain (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                thumbnail:
                  "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                thumbnailWidth: 100,
                thumbnailHeight: 100,
                caption: "Boats (Jeshu John - designerspics.com)"
              },
            
              {
                src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                thumbnail:
                  "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
                thumbnailWidth: 100,
                thumbnailHeight: 100
              },
              {
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                thumbnail:
                  "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
                thumbnailWidth: 100,
                thumbnailHeight: 100,
                caption: "After Rain (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                thumbnail:
                  "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                thumbnailWidth: 100,
                thumbnailHeight: 100,
                caption: "Boats (Jeshu John - designerspics.com)"
              },
            
              {
                src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                thumbnail:
                  "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
                thumbnailWidth: 100,
                thumbnailHeight: 100
              }
            ],
            "audios" : [
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
                caption: "Boats (Jeshu John - designerspics.com)"
              },
            
              {
                src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                thumbnail:
                  "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
                thumbnailWidth: 720,
                thumbnailHeight: 212
              }
            ],
            "pdfs" : [
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
      window.scrollTo(0, 0)
      this.setState({
        showCategory: false,
        category_name: category_name
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
      let content = [...this.state.categories['videos'], 'Show More']
      return content.map((item, i) =>{
        return (i==content.length - 1)?
        <div class='square-box'>
       <div class='square-content'>
       <div>
       <img src={item.src}/>
         <button class="button" onClick={() => this.onClickShowMore("Videos")}>{item}</button>
         </div>
       </div>
     </div>:<div class='square-box'>
       <div class='square-content'>
       <div>
           <img src={item.src}/>
           {/* <button>Explore</button> */}
         </div>
       </div>
     </div>
     })
   }

    createPhotoCategoryUI(){
      let content = [...this.state.categories['photos'], 'Show More']
      return content.map((item, i) =>{
         return (i==content.length - 1)?
         <div class='square-box'>
        <div class='square-content'>
        <div>
        <img src={item.src}/>
          <button onClick={() => this.onClickShowMore("Photos")}>{item}</button>
          </div>
        </div>
      </div>:<div class='square-box'>
        <div class='square-content'>
        <div>
            <img src={item.src}/>
            {/* <button>Explore</button> */}
          </div>
        </div>
      </div>
      })
    }

    createAudioCategoryUI(){
      let content = [...this.state.categories['photos'], 'Show More']
      return content.map((item, i) =>{
         return (i==content.length - 1)?
         <div class='square-box'>
        <div class='square-content'>
        <div>
        <img src={item.src}/>
          <button onClick={() => this.onClickShowMore("Audios")}>{item}</button>
          </div>
        </div>
      </div>:<div class='square-box'>
        <div class='square-content'>
        <div>
            <img src={item.src}/>
            {/* <button>Explore</button> */}
          </div>
        </div>
      </div>
      })
    }

    createPDFCategoryUI(){
      let content = [...this.state.categories['photos'], 'Show More']
      return content.map((item, i) =>{
         return (i==content.length - 1)?
         <div class='square-box'>
        <div class='square-content'>
        <div>
        <img src={item.src}/>
          <button onClick={() => this.onClickShowMore("PDFs")}>{item}</button>
          </div>
        </div>
      </div>:<div class='square-box'>
        <div class='square-content'>
        <div>
            <img src={item.src}/>
            {/* <button>Explore</button> */}
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
          items: 3
        },
        1024: {
          items: 10
        }
      };
        return (
            <div class="home">
              {this.state.showCategory?
              
              <div class="category" style={this.state.showCategory? {visibility: "visible"}: {visibility: "hidden", position: "absolute"}}>
                <div class="video-category">
                  <div class="category-name"><h1>Videos</h1></div>
                  
                  <AliceCarousel
                  duration={0.0}
                  startIndex = {this.getStartIndex("videos")}
                  autoPlay={false}
                  fadeOutAnimation={true}
                  mouseDragEnabled={true}
                  playButtonEnabled={false}
                  responsive={responsive}
                  autoPlayInterval={0}
                  autoPlayDirection="ltr"
                  autoPlayActionDisabled={true}
                  onSlideChange={this.onSlideChange}
                  onSlideChanged={this.onSlideChanged}
                  infinite={false}
                  mouseTrackingEnabled={true}
                  dotsDisabled = {true}
                  buttonsDisabled = {false}
                  onInitialized  = {this.onInitialized }
                  swipeDisabled = {true}
                  autoPlayActionDisabled = {true}
                  keysControlDisabled ={false}
                >
                  {this.createVideoCategoryUI()}
                </AliceCarousel>
                </div>


                
                
                <div class="photo-category">
                  <div class="category-name"><h1>Photos</h1></div>
                  
                  <AliceCarousel
                  duration={0.0}
                  startIndex = {this.getStartIndex("videos")}
                  autoPlay={false}
                  fadeOutAnimation={true}
                  mouseDragEnabled={true}
                  playButtonEnabled={false}
                  responsive={responsive}
                  autoPlayInterval={0}
                  autoPlayDirection="ltr"
                  autoPlayActionDisabled={true}
                  onSlideChange={this.onSlideChange}
                  onSlideChanged={this.onSlideChanged}
                  infinite={false}
                  mouseTrackingEnabled={true}
                  dotsDisabled = {true}
                  buttonsDisabled = {false}
                  onInitialized  = {this.onInitialized }
                  swipeDisabled = {true}
                  autoPlayActionDisabled = {true}
                  keysControlDisabled ={false}
                >
                  {this.createPhotoCategoryUI()}
                </AliceCarousel>
                </div>

                
                
                <div class="photo-category">
                  <div class="category-name"><h1>Audios</h1></div>
                  
                  <AliceCarousel
                  duration={0.0}
                  startIndex = {this.getStartIndex("audios")}
                  autoPlay={false}
                  fadeOutAnimation={true}
                  mouseDragEnabled={true}
                  playButtonEnabled={false}
                  responsive={responsive}
                  autoPlayInterval={0}
                  autoPlayDirection="ltr"
                  autoPlayActionDisabled={true}
                  onSlideChange={this.onSlideChange}
                  onSlideChanged={this.onSlideChanged}
                  infinite={false}
                  mouseTrackingEnabled={true}
                  dotsDisabled = {true}
                  buttonsDisabled = {false}
                  onInitialized  = {this.onInitialized }
                  swipeDisabled = {true}
                  autoPlayActionDisabled = {true}
                  keysControlDisabled ={false}
                >
                  {this.createAudioCategoryUI()}
                </AliceCarousel>
                </div>
                
                
                <div class="photo-category">
                  <div class="category-name"><h1>PDFs</h1></div>
                  
                  <AliceCarousel
                  duration={0.0}
                  startIndex = {this.getStartIndex("pdfs")}
                  autoPlay={false}
                  fadeOutAnimation={true}
                  mouseDragEnabled={true}
                  playButtonEnabled={false}
                  responsive={responsive}
                  autoPlayInterval={0}
                  autoPlayDirection="ltr"
                  autoPlayActionDisabled={true}
                  onSlideChange={this.onSlideChange}
                  onSlideChanged={this.onSlideChanged}
                  infinite={false}
                  mouseTrackingEnabled={true}
                  dotsDisabled = {true}
                  buttonsDisabled = {false}
                  onInitialized  = {this.onInitialized }
                  swipeDisabled = {true}
                  autoPlayActionDisabled = {true}
                  keysControlDisabled ={false}
                >
                  {this.createPDFCategoryUI()}
                </AliceCarousel>
                </div>
                
            </div>:
           <div class="show-more-category" style={!this.state.showCategory? {visibility: "visible"}: {visibility: "hidden", position: "absolute"}}>
        <div class="category-name"><h1>{this.state.category_name}</h1></div>
            
            <div class="sub_category">
              <Gallery
                images={this.state.categories.photos}
                enableLightbox={true}
                // maxRows={3}
                backdropClosesModal
                // currentImage={3}
                // isOpen={ true}
              />
              </div>
            </div>  
          }

          </div>
        )
    }
}


