import React, {forwardRef} from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import '../../../scss/components/components/category_items.scss'
import Gallery from "react-grid-gallery";



export default class CategoryItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          }
       this.onClickShowMore = this.onClickShowMore.bind(this)
       this.getStartIndex = this.getStartIndex.bind(this)
    }

    onClickShowMore(category_name){
        window.scrollTo(0, 0)
        this.setState({
          showCategory: false,
          category_name: category_name
        })
        this.props.onClickShowMore(category_name)
      }
    componentDidMount(){
        window.scrollTo(0, 0) 
        this.setState({
          })
    }

    getStartIndex(category_name){
      if (screen.width<=600){
        return this.props.categories[category_name]['horizontal'].length - 2;
      }
      if (600<screen.width){
        return this.props.categories[category_name]['horizontal'].length - 6;
      }

    }

    createVideoCategoryUI(){
      let content = [...this.props.categories['videos']['horizontal'], 'Show More']
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
      let content = [...this.props.categories['photos']['horizontal'], 'Show More']
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
            {/* <div>sub_category name</div> */}
            {/* <button>Explore</button> */}
          </div>
        </div>
      </div>
      })
    }

    // createAudioCategoryUI(){
    //   let content = [...this.state.categories['photos'], 'Show More']
    //   return content.map((item, i) =>{
    //      return (i==content.length - 1)?
    //      <div class='square-box'>
    //     <div class='square-content'>
    //     <div>
    //     <img src={item.src}/>
    //       <button onClick={() => this.onClickShowMore("Audios")}>{item}</button>
    //       </div>
    //     </div>
    //   </div>:<div class='square-box'>
    //     <div class='square-content'>
    //     <div>
    //         <img src={item.src}/>
    //         {/* <button>Explore</button> */}
    //       </div>
    //     </div>
    //   </div>
    //   })
    // }

    // createPDFCategoryUI(){
    //   let content = [...this.state.categories['photos'], 'Show More']
    //   return content.map((item, i) =>{
    //      return (i==content.length - 1)?
    //      <div class='square-box'>
    //     <div class='square-content'>
    //     <div>
    //     <img src={item.src}/>
    //       <button onClick={() => this.onClickShowMore("PDFs")}>{item}</button>
    //       </div>
    //     </div>
    //   </div>:<div class='square-box'>
    //     <div class='square-content'>
    //     <div>
    //         <img src={item.src}/>
    //         {/* <button>Explore</button> */}
    //       </div>
    //     </div>
    //   </div>
    //   })
    // }

    render() {
      const responsive = {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1024: {
          items: 7
        }
      };
        return (
            <div class="category_items">
                <div class="video-category">
                  <div class="category-name"><h1>Videos</h1></div>
                  <div class ="horozontal-categories">
                  <AliceCarousel
                  duration={0.0}
                  startIndex = {this.getStartIndex("videos")}
                //   startIndex = {1}
                  autoPlay={false}
                  fadeOutAnimation={true}
                  playButtonEnabled={false}
                  responsive={responsive}
                  autoPlayInterval={0}
                  autoPlayDirection="ltr"
                  autoPlayActionDisabled={false}
                  onSlideChange={this.onSlideChange}
                  onSlideChanged={this.onSlideChanged}
                  infinite={false}
                  dotsDisabled = {true}
                  buttonsDisabled = {false}
                  swipeDisabled = {false}
                  autoPlayActionDisabled = {false}
                  keysControlDisabled ={false}
                  touchTrackingEnabled={true}
                  mouseDragEnabled={true}
                  mouseTrackingEnabled={true}
                >
                  {this.createVideoCategoryUI()}
                </AliceCarousel>
                </div>
                </div>
                <div class="photo-category">
                  <div class="category-name"><h1>Photos</h1></div>
                  <div class ="horozontal-categories">

                  <AliceCarousel
                  duration={0.0}
                  startIndex = {this.getStartIndex("photos")}
                //   startIndex = {1}
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
                </div>
                {/* <div class="photo-category">
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
                </div> */}
                
            </div>

        )
    }
}


