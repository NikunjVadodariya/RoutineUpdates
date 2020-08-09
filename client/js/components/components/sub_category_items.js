import React, {forwardRef} from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import '../../../scss/components/components/sub_categories.scss'
import Gallery from "react-grid-gallery";



export default class SubCategoryItems extends React.Component {
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

    onClickSubCategoryItems(category_name, sub_category_name){
        window.scrollTo(0, 0)
        this.setState({
          showCategory: false,
          category_name: category_name
        })
        this.props.onClickSubCategoryItems(category_name, sub_category_name)
      }

    getStartIndex(category_name){
      if (screen.width<=600){
        return this.state.categories[category_name].length - 4;
      }
      if (600<screen.width){
        return this.state.categories[category_name].length - 9;
      }

    }

    createSubCategoryUI(){
      let content = [...this.props.categories[this.props.category_name]['sub_categories'][this.props.sub_category_name]]
      console.log("content", content)

      return content.map((item, i) =>{
        return <article><div class='square-box' onClick={() => this.onClickSubCategoryItems(this.props.category_name, this.props.sub_category_name )}>
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
         return<artical><div class='square-box'>
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
                <h1>{this.props.category_name}({this.props.sub_category_name})</h1> 
            </div>
            
            <div class="sub_category">
                
        <main class="grid">

        {this.createSubCategoryUI()}

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


