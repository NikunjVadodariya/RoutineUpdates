import React, {forwardRef} from 'react';
import '../../../scss/components/components/home.scss'
import SubCategories from "./sub_categories";
import CategoryItems from "./category_items";
import SubCategoryItems from "./sub_category_items";
import SubCategoryItemDisplay from "./sub_category_item_display";
import {Route, withRouter, Switch, Link} from "react-router-dom";


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          sub_category_index: 0,
          sub_category_item_index: 0,
          show_category : "categories",
          category_name: "videos",
          position: "horizontal",
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
            ],
            "sub_categories":
            [
                {
                "name": "sub_category_name",
                "items": [
                  {
                    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                    caption: "After Rain (Jeshu John - designerspics.com)",
                    name: "sub_category_name"
                  },
                  {
                    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                    caption: "Boats (Jeshu John - designerspics.com)",
                    name: "sub_category_name"
                  },
                
                  {
                    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                    caption: "Boats (Jeshu John - designerspics.com)",
                    name: "sub_category_name"
    
                  },
                  {
                    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                    caption: "After Rain (Jeshu John - designerspics.com)",
                    name: "sub_category_name"
                  },
                  {
                    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                    caption: "Boats (Jeshu John - designerspics.com)",
                    name: "sub_category_name"
                  },
                  {
                    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                    caption: "Boats (Jeshu John - designerspics.com)",
                    name: "sub_category_name"
                  },
                  {
                    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                    caption: "Boats (Jeshu John - designerspics.com)",
                    name: "sub_category_name"
                  },
                  {
                    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                    caption: "After Rain (Jeshu John - designerspics.com)",
                    name: "sub_category_name"
                  },
                  {
                    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                    caption: "Boats (Jeshu John - designerspics.com)",
                    name: "sub_category_name"
                  },
                
                  {
                    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                    caption: "Boats (Jeshu John - designerspics.com)",
                    name: "sub_category_name"
    
                  },
                  {
                    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                    caption: "After Rain (Jeshu John - designerspics.com)",
                    name: "sub_category_name"
                  },
                  {
                    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                    caption: "Boats (Jeshu John - designerspics.com)",
                    name: "sub_category_name"
                  },
                  {
                    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                    caption: "Boats (Jeshu John - designerspics.com)",
                    name: "sub_category_name"
                  },
                  {
                    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                    caption: "Boats (Jeshu John - designerspics.com)",
                    name: "sub_category_name"
                  },
                  {
                    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                    caption: "After Rain (Jeshu John - designerspics.com)",
                    name: "sub_category_name"
                  },
                  {
                    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                    caption: "Boats (Jeshu John - designerspics.com)",
                    name: "sub_category_name"
                  },
                
                  {
                    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                    caption: "Boats (Jeshu John - designerspics.com)",
                    name: "sub_category_name"
    
                  },
                  {
                    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                    caption: "After Rain (Jeshu John - designerspics.com)",
                    name: "sub_category_name"
                  },
                  {
                    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                    caption: "Boats (Jeshu John - designerspics.com)",
                    name: "sub_category_name"
                  },
                  {
                    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                    caption: "Boats (Jeshu John - designerspics.com)",
                    name: "sub_category_name"
                  },
                  {
                    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                    caption: "Boats (Jeshu John - designerspics.com)",
                    name: "sub_category_name"
                  }
                ]
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
            ],
            "sub_categories":
              [
                  {
                    "name": "sub_category_name",
                    "items": [
                      {
                        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                        caption: "After Rain (Jeshu John - designerspics.com)",
                        name: "sub_category_name"
                      },
                      {
                        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                        caption: "Boats (Jeshu John - designerspics.com)",
                        name: "sub_category_name"
                      },
                    
                      {
                        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                        caption: "Boats (Jeshu John - designerspics.com)",
                        name: "sub_category_name"
        
                      },
                      {
                        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                        caption: "After Rain (Jeshu John - designerspics.com)",
                        name: "sub_category_name"
                      },
                      {
                        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                        caption: "Boats (Jeshu John - designerspics.com)",
                        name: "sub_category_name"
                      },
                      {
                        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                        caption: "Boats (Jeshu John - designerspics.com)",
                        name: "sub_category_name"
                      },
                      {
                        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                        caption: "Boats (Jeshu John - designerspics.com)",
                        name: "sub_category_name"
                      },
                      {
                        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                        caption: "After Rain (Jeshu John - designerspics.com)",
                        name: "sub_category_name"
                      },
                      {
                        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                        caption: "Boats (Jeshu John - designerspics.com)",
                        name: "sub_category_name"
                      },
                    
                      {
                        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                        caption: "Boats (Jeshu John - designerspics.com)",
                        name: "sub_category_name"
        
                      },
                      {
                        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                        caption: "After Rain (Jeshu John - designerspics.com)",
                        name: "sub_category_name"
                      },
                      {
                        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                        caption: "Boats (Jeshu John - designerspics.com)",
                        name: "sub_category_name"
                      },
                      {
                        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                        caption: "Boats (Jeshu John - designerspics.com)",
                        name: "sub_category_name"
                      },
                      {
                        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                        caption: "Boats (Jeshu John - designerspics.com)",
                        name: "sub_category_name"
                      },
                      {
                        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                        caption: "After Rain (Jeshu John - designerspics.com)",
                        name: "sub_category_name"
                      },
                      {
                        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                        caption: "Boats (Jeshu John - designerspics.com)",
                        name: "sub_category_name"
                      },
                    
                      {
                        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
                        caption: "Boats (Jeshu John - designerspics.com)",
                        name: "sub_category_name"
        
                      },
                      {
                        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
                        caption: "After Rain (Jeshu John - designerspics.com)",
                        name: "sub_category_name"
                      },
                      {
                        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                        caption: "Boats (Jeshu John - designerspics.com)",
                        name: "sub_category_name"
                      },
                      {
                        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                        caption: "Boats (Jeshu John - designerspics.com)",
                        name: "sub_category_name"
                      },
                      {
                        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                        caption: "Boats (Jeshu John - designerspics.com)",
                        name: "sub_category_name"
                      }
                    ]
                    }
              ]
          },
          
        }
       }
       this.onClickShowMore = this.onClickShowMore.bind(this)
       this.onClickSubCategory = this.onClickSubCategory.bind(this)
       this.onClickSubCategoryItems = this.onClickSubCategoryItems.bind(this)
       this.onClickSubCategoryItemDisplay = this.onClickSubCategoryItemDisplay.bind(this)
       this.goBack = this.goBack.bind(this)
    }

    onClickShowMore(category_name){
      window.scrollTo(0, 0)
      this.setState({
        show_category: "vertical_categories",
        category_name: category_name
      }, () =>{
        this.props.history.push("/" + category_name + "/vertical")
      })
    }

    onClickSubCategory(category_name, index, position){
      window.scrollTo(0, 0)
      this.setState({
        show_category: "sub_category_items",
        category_name: category_name,
        sub_category_index: 0,
        position: position
      },() =>{
        this.props.history.push("/" + category_name + "/" +  this.state.categories[category_name]['sub_categories'][0]['name'])
      })
    }

    onClickSubCategoryItems(category_name, sub_category_index, index){
      window.scrollTo(0, 0)
      this.setState({
        sub_category_index: sub_category_index,
        sub_category_item_index: index,
        show_category: "sub_category_item_display",
        category_name: category_name
      }, () =>{
        this.props.history.push("/" + category_name + "/" +  this.state.categories[category_name]['sub_categories'][0]['name'] + "/" + index)
      })
    }

    onClickSubCategoryItemDisplay(){
      window.scrollTo(0, 0)
      this.setState({
        show_category: "sub_category_items"
      },() => {
        this.props.history.push("/" + this.state.category_name + "/" +  this.state.categories[this.state.category_name]['sub_categories'][0]['name'])
      })
    }

    goBack(route) {
      console.log("back callled")
      this.props.history.push(route);
    }

    render() {
        return (
            <div class="home">
              <Switch>
                  <Route  path="/:category_name/vertical" render={(props) => (<SubCategories {...props} position={this.state.position} goBack={this.goBack} categories={this.state.categories} category_name= {this.state.category_name} onClickSubCategory ={this.onClickSubCategory}/>)} />  
                  <Route  path="/:category_name/:sub_category_name/:index" render={(props) => (<SubCategoryItemDisplay {...props}  categories={this.state.categories} sub_category_item_index= {this.state.sub_category_item_index} sub_category_index={this.state.sub_category_index} category_name= {this.state.category_name} onClickSubCategoryItemDisplay ={this.onClickSubCategoryItemDisplay}/>)} />
                  <Route  path="/:category_name/:sub_category_name" render={(props) => (<SubCategoryItems {...props} position={this.state.position} goBack={this.goBack} categories={this.state.categories}  sub_category_index= {this.state.sub_category_index} category_name= {this.state.category_name} onClickSubCategoryItems ={this.onClickSubCategoryItems}/>)} />
                  <Route path="/" render={(props) => (<CategoryItems {...props} categories={this.state.categories} categories={this.state.categories} onClickShowMore={this.onClickShowMore} onClickSubCategory={this.onClickSubCategory}/>)} />
            </Switch>
            </div>  
          

        )
    }
}

export default Home;
