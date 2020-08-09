import React, {forwardRef} from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import '../../../scss/components/components/home.scss'
import Gallery from "react-grid-gallery";
import SubCategories from "./sub_categories";
import CategoryItems from "./category_items";



export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          show_category : "categories",
          category_name: "videos",
          showCategory: true,
          categories: {
            "photos" :{ 
            "horizontal":
            [
              {
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                caption: "After Rain (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"
              },
            
              {
                src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"

              },
              {
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                caption: "After Rain (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"
              }
            ],
            "vertical":
            [
              {
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                caption: "After Rain (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"
              },
            
              {
                src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"

              },
              {
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                caption: "After Rain (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                caption: "After Rain (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"
              },
            
              {
                src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"

              },
              {
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                caption: "After Rain (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                caption: "After Rain (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"
              },
            
              {
                src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"

              },
              {
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                caption: "After Rain (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"
              }
            ]
          },
          "videos" :{ 
            "horizontal":
            [
              {
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                caption: "After Rain (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"
              },
            
              {
                src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"

              },
              {
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                caption: "After Rain (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"
              }
            ],
            "vertical":
            [
              {
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                caption: "After Rain (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"
              },
            
              {
                src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"

              },
              {
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                caption: "After Rain (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                caption: "After Rain (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"
              },
            
              {
                src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"

              },
              {
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                caption: "After Rain (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                caption: "After Rain (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"
              },
            
              {
                src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"

              },
              {
                src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                caption: "After Rain (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"
              },
              {
                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                caption: "Boats (Jeshu John - designerspics.com)"
              }
            ]
          },
          
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

    onClickShowMore(category_name){
      console.log("c_name", category_name);
      window.scrollTo(0, 0)
      this.setState({
        show_category: "vertical_categories",
        category_name: category_name
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
              {(this.state.show_category=="categories")?
              <CategoryItems  categories={this.state.categories} onClickShowMore={this.onClickShowMore}/>: null}

              {(this.state.show_category=="vertical_categories")?
              <SubCategories  category_name= {this.state.category_name} categories={this.state.categories} onClickShowMore={this.onClickShowMore}/>: null}
                  
            </div>  
          

        )
    }
}


