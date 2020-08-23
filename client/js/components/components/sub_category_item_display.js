import React, {forwardRef} from 'react';
import '../../../scss/components/components/sub_category_item_display.scss'
import 'react-responsive-modal/styles.css';
import YouTube from 'react-youtube';

export default class SubCategoryItemDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
       }
       this.toggleModal=this.toggleModal.bind(this);
       this.windowOnClick=this.windowOnClick.bind(this);
       this.render_image=this.render_image.bind(this);
       this.render_youtube_video=this.render_youtube_video.bind(this);
       this.onEnd=this.onEnd.bind(this);
    }

    vwTOpx(value) {
        var w = window,
          d = document,
          e = d.documentElement,
          g = d.getElementsByTagName('body')[0],
          x = w.innerWidth || e.clientWidth || g.clientWidth,
          y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    
        var result = (x*value)/100;
        return result;
      }
    
    vhTOpx(value) {
        var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            x = w.innerWidth || e.clientWidth || g.clientWidth,
            y = w.innerHeight|| e.clientHeight|| g.clientHeight;

        var result = (y*value)/100;
        return result;
        }

    toggleModal() {
        document.querySelector(".modal").classList.toggle("show-modal");
        this.props.onClickSubCategoryItemDisplay()
    }

    windowOnClick(event) {
        if (event.target === document.querySelector(".modal")) {
            this.toggleModal();
        }
    }
    componentDidMount(){
        window.addEventListener("click", this.windowOnClick);
    }

    render_image(){
    return <img class="content" src={this.props.categories[this.props.category_name]['sub_categories'][0]['items'][this.props.sub_category_item_index].src}/>
    }

    onEnd(event) {
        event.target.playVideo();
    }

    render_youtube_video(){
        const opts = {
            height: "100%",
            width: "100%",
            host: "https://www.youtube-nocookie.com",
            playerVars: {
            autoplay: 1,
            loop: 1,
            modestbranding: 1,
            showinfo: 0,
            rel: 0
            },
        };

        return <YouTube containerClassName="youtube_content" videoId="GWE9ay9H7uU" opts={opts} onEnd={this.onEnd} />;
        //  return   <div class="youtube_content"><iframe src="https://www.youtube-nocookie.com/embed/QH2-TGUlwu4?autoplay=1&loop=1&modestbranding=1&showinfo=0&rel=0" width="100%" height="100%" frameborder="0" allowFullScreen></iframe></div>
    }  

    render() {
        return (
            <div class = "sub-category-item-display">
                <div class="modal show-modal">
                    <div class="modal-content">
                        <span class="close-button" onClick={() => this.toggleModal()}>&times;</span>
                        {this.props.category_name=="photos"?this.render_image():null}
                        {this.props.category_name=="videos"?this.render_youtube_video():null}
                        <div class="content-control-lower">
                            <a href="/images/myw3schoolsimage.jpg" download>
                                <button class="download">Download</button>
                            </a>
                            <div class="social-media-share">
                                <a href="whatsapp://send?text=GFG Example for whatsapp sharing" data-action="share/whatsapp/share" target="_blank">
                                    <img class="share" src="/static/images/whatsapp_icon.png"/>
                                </a>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


