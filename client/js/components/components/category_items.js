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
       this.onClickSubCategory = this.onClickSubCategory.bind(this)
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

    onClickSubCategory(category_name, index){
        window.scrollTo(0, 0)
        this.setState({
          showCategory: false,
          category_name: category_name
        })
        this.props.onClickSubCategory(category_name, index, "horizontal")
      }

    componentDidMount(){
        window.scrollTo(0, 0) 
        this.setState({
          })
    }

    getStartIndex(category_name){
      if (screen.width<=959){
        return this.props.categories[category_name]['horizontal'].length - 2;
      }
      if (600<screen.width){
        return this.props.categories[category_name]['horizontal'].length - 4;
      }

    }

    createCategoryUI(category_name){
      let content = [...this.props.categories[category_name]['horizontal'], 'Show More']
      return content.map((item, i) =>{
        return (i==content.length - 1)?
          <div class='square-box'>
            <div class='square-content'>
              <div>
                <img src={item.src}/>
                <button class="button" onClick={() => this.onClickShowMore(category_name)}>{item}</button>
              </div>
            </div>
          </div>
          :
          <div class='square-box' id="category_1" onClick={() => this.onClickSubCategory(category_name, i)}>
            <div class='square-content'>
              <div>
                <img src={item.src}/>
              </div>
            </div>
          </div>
     })
   }

    render() {
      const responsive = {
        0: {
          items: 3
        },
        959: {
          items: 5
        }
      };
        return (
            <div class="category_items">
                <div class="video-category">
                  <div class="category-name"><h1>Videos</h1></div>
                  <div class ="horozontal-categories">
                    <AliceCarousel
                      startIndex = {this.getStartIndex("videos")}
                      fadeOutAnimation={true}
                      playButtonEnabled={false}
                      responsive={responsive}
                      autoPlayDirection="ltr"
                      infinite={false}
                      dotsDisabled = {true}
                      buttonsDisabled = {false}
                      swipeDisabled = {false}
                      autoPlayActionDisabled = {false}
                      keysControlDisabled ={true}
                      mouseDragEnabled={true}
                      buttonsDisabled={false}
                    >
                      {this.createCategoryUI('videos')}
                    </AliceCarousel>
                  </div>
                </div>
                <div class="photo-category">
                  <div class="category-name"><h1>Photos</h1></div>
                  <div class ="horozontal-categories">
                    <AliceCarousel
                      startIndex = {this.getStartIndex("photos")}
                      fadeOutAnimation={true}
                      playButtonEnabled={false}
                      responsive={responsive}
                      autoPlayDirection="ltr"
                      infinite={false}
                      dotsDisabled = {true}
                      buttonsDisabled = {false}
                      swipeDisabled = {false}
                      autoPlayActionDisabled = {false}
                      keysControlDisabled ={true}
                      mouseDragEnabled={true}
                      buttonsDisabled={false}
                    >
                      {this.createCategoryUI('photos')}
                    </AliceCarousel>
                  </div>
                </div>
            </div>

        )
    }
}


