import React, {forwardRef} from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import '../../../scss/components/components/sub_categories.scss'
import Gallery from "react-grid-gallery";



export default class SubCategories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

       }
       this.onClickShowMore = this.onClickShowMore.bind(this)
       this.onClickSubCategoryItems = this.onClickSubCategoryItems.bind(this)
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
    
    onClickSubCategoryItems(category_name){
        window.scrollTo(0, 0)
        this.setState({
          showCategory: false,
          category_name: category_name
        })
        this.props.onClickSubCategoryItems(category_name, "category_1")
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
      let content = [...this.props.categories['videos']['vertical']]
      return content.map((item, i) =>{
        return <article><div class='square-box' id="category_1" onClick={() => this.onClickSubCategoryItems("videos", "category_1")}>
       <div class='square-content'>
       <div>
           <img src={item.src}/>
           {/* <button>Explore</button> */}
         </div>
       </div>
     </div></article>
     })
   }

    createPhotoCategoryUI(){
        console.log("in photo")
      let content = [...this.props.categories['photos']['vertical']]
      return content.map((item, i) =>{
         return<artical><div class='square-box' id="category_1" onClick={() => this.onClickSubCategoryItems("photos", "category_1")}>
        <div class='square-content'>
        <div>
            <img src={item.src}/>
            {/* <button>Explore</button> */}
          </div>
        </div>
      </div></artical>
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
        <div class="show-more-category">
            <div class="category-name">
                <h1>{this.props.category_name}</h1>
            </div>
            
            <div class="sub_category">
                
        <main class="grid">
            {this.props.category_name == "videos"?
        this.createVideoCategoryUI(): null}
                    {this.props.category_name == "photos"?
        this.createPhotoCategoryUI(): null}
          {/* <article>
          <div class='square-box'>
        <div class='square-content'>
        <div>
        <img src="https://source.unsplash.com/random/300x200"/>
          </div>
        </div>
      </div>
          </article>

          <article>
          <div class='square-box'>
        <div class='square-content'>
        <div>
        <img src="https://source.unsplash.com/random/300x200"/>
          </div>
        </div>
      </div>
          </article>
          <article>
          <div class='square-box'>
        <div class='square-content'>
        <div>
        <img src="https://source.unsplash.com/random/300x200"/>
          </div>
        </div>
      </div>
          </article> */}
        </main>
            </div>
          

        </div>
        )
    }
}


