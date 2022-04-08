import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "./Slider.module.css";
import React, { Component } from "react";
import Slider from "react-slick";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      className: s.slider_block,
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,

      arrows: false,

            autoplay: true,
      autoplaySpeed: 2000,
      rtl: true,

      customPaging: () => (
        <div className={s.item_switch}
          style={{
            marginTop: "20px",
            color: "blue",
            border: "2px #9eadb6 solid",
            borderRadius: "50%",
          }}
        >
        </div>
      )

    };
    return (
      <div className={s.wrapper_slider} >
        <h2 className={s.title_slider}> Отзывы наших посетителей</h2>
        <Slider {...settings} >
          <div className={s.item_slider}>
            <img className={s.foto_review} src="https://chromium.themes.zone/catalog/wp-content/uploads/sites/11/2018/05/member3-300x300.jpeg" alt="review" />
            <div className={s.staring}></div>
            <p className={s.paragraph_slider}>
              “Getting the coveted high-five in the hallway from
              an influence is impressive in its own right, but
              what’s really impressive—and where you ought to 
              focus your outreach efforts—is getting press
              from influencers in your market.”
            </p>
          </div>
          <div className={s.item_slider}>
          <img className={s.foto_review} src="https://chromium.themes.zone/catalog/wp-content/uploads/sites/11/2018/05/member1-150x150.jpeg" alt="review" />
            <div className={s.staring}></div>
            <p className={s.paragraph_slider}>
              “Getting the coveted high-five in the hallway from
              an influence is impressive in its own right, but
              what’s really impressive—and where you ought to 
              focus your outreach efforts—is getting press
              from influencers in your market.”
            </p>
          </div>
          <div className={s.item_slider}>
          <img className={s.foto_review} src="https://chromium.themes.zone/catalog/wp-content/uploads/sites/11/2018/05/member2-150x150.jpeg" alt="review" />
            <div className={s.staring}></div>
            <p className={s.paragraph_slider}>
            “Getting the coveted high-five in the hallway from an influence is impressive in its own right, but what’s really impressive—and where you ought to focus your outreach efforts—is getting press from influencers in your market.”
            </p>
          </div>
          <div className={s.item_slider}>
          <img className={s.foto_review} src="https://sandramartt.com/wp-content/uploads/2020/09/person-girl-woman-photography-flower-portrait-9586-pxhere.com-1-150x150-1.jpg" alt="review" />
            <div className={s.staring}></div>
            <p className={s.paragraph_slider}>
              “Getting the coveted high-five in the hallway from
              an influence is impressive in its own right, but
              what’s really impressive—and where you ought to 
              focus your outreach efforts—is getting press
              from influencers in your market.”
            </p>
          </div>
        </Slider>
      </div>
    );
  }
}
