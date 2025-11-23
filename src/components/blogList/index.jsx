// Libs
import React from 'react';

// Styles
import './style.css'

// Img
import {
  ArrowRightIcon,
  PreviewImg1,
  PreviewImg2,
  PreviewImg3,
  PreviewImg4,
} from '../../assets/shortblog/imports';

import ArrowDown from '../../assets/blog/ArrowDown.svg?react';

function BlogList() {
  return (
    <div className="bloglist">
      <h1 className="bloglist__title">Our Blog Posts</h1>

      <div className="bloglist__list-title">
        <p className="bloglist__list-title-text">Most Popular</p>
      </div>

      <ul className="bloglist__list">

        <li className="bloglist__item">
          <div className="bloglist__preview">
            <img src={PreviewImg1} alt="post-preview" />
          </div>
          <div className="bloglist__post-info">
            <p className="bloglist__post-timeinfo">September 12 I Read in 6 minutes</p>
            <h1 className="bloglist__post-title">Cactus & Succulent Care Tips</h1>
            <p className="bloglist__post-description">Cacti are succulents are easy care plants for any home or patio.Cacti are succulents are easy care plants for any home or patio.Cacti are succulents are easy care plants for any home or patio.Cacti are succulents are easy care plants for any home or patio.</p>
            <a className="bloglist__post-read">
              Read Post
            </a>
          </div>
        </li>

      </ul>

      <div className="bloglist__more">
        <p className="bloglist__more-text">See More <ArrowDown /> </p>
      </div>

      <div className="bloglist__list-title">
        <p className="bloglist__list-title-text">All Posts</p>
      </div>

      <ul className="bloglist__list">

        <li className="bloglist__item">
          <div className="bloglist__preview">
            <img src={PreviewImg1} alt="post-preview" />
          </div>
          <div className="bloglist__post-info">
            <p className="bloglist__post-timeinfo">September 12 I Read in 6 minutes</p>
            <h1 className="bloglist__post-title">Cactus & Succulent Care Tips</h1>
            <p className="bloglist__post-description">Cacti are succulents are easy care plants for any home or patio.Cacti are succulents are easy care plants for any home or patio.Cacti are succulents are easy care plants for any home or patio.Cacti are succulents are easy care plants for any home or patio.</p>
            <a className="bloglist__post-read">
              Read Post
            </a>
          </div>
        </li>

      </ul>

      <div className="bloglist__more">
        <p className="bloglist__more-text">See More <ArrowDown /> </p>
      </div>

    </div>
  )
}

export default BlogList;
