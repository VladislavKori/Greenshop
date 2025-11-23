// Libs
import React, { CSSProperties } from 'react';

// Styles
import './shortBlog.css';

// Images
import {
  ArrowRightIcon,
  PreviewImg1,
  PreviewImg2,
  PreviewImg3,
  PreviewImg4,
} from '@ui/assets/shortblog/imports';

function ShortBlog({ style }: { style: CSSProperties }) {
  return (
    <div className="shortblog" style={style}>
      <h1 className="shortblog__title">Our Blog Posts</h1>
      <p className="shortblog__subtitle">
        We are an online plant shop offering a wide range of cheap and trendy
        plants.
      </p>

      <ul className="shortblog__list">
        {/* <!-- Post --> */}
        <li className="shortblog__item">
          <div className="shortblog__post-preview">
            <img
              className="shortblog__post-preview-img"
              src={PreviewImg1}
              alt="preview"
            />
          </div>

          <div className="shortblog__post">
            <p className="shortblog__post-timeinfo">
              September 12 I Read in 6 minutes
            </p>
            <h1 className="shortblog__post-title">
              Cactus & Succulent Care Tips
            </h1>
            <p className="shortblog__post-description">
              Cacti are succulents are easy care plants for any home or patio.{' '}
            </p>

            <a className="shortblog__post-link" href="/">
              <p className="shortblog__post-link-text">Read More</p>
              <img
                className="shortblog__post-link-arrow"
                src={ArrowRightIcon}
                alt="arrow-right"
              />
            </a>
          </div>
        </li>
        {/* <!-- End Post --> */}

        {/* <!-- Post --> */}
        <li className="shortblog__item">
          <div className="shortblog__post-preview">
            <img
              className="shortblog__post-preview-img"
              src={PreviewImg2}
              alt="preview"
            />
          </div>

          <div className="shortblog__post">
            <p className="shortblog__post-timeinfo">
              September 12 I Read in 6 minutes
            </p>
            <h1 className="shortblog__post-title">
              Cactus & Succulent Care Tips
            </h1>
            <p className="shortblog__post-description">
              Cacti are succulents are easy care plants for any home or patio.{' '}
            </p>

            <a className="shortblog__post-link" href="/">
              <p className="shortblog__post-link-text">Read More</p>
              <img
                className="shortblog__post-link-arrow"
                src={ArrowRightIcon}
                alt="arrow-right"
              />
            </a>
          </div>
        </li>
        {/* <!-- End Post --> */}

        {/* <!-- Post --> */}
        <li className="shortblog__item">
          <div className="shortblog__post-preview">
            <img
              className="shortblog__post-preview-img"
              src={PreviewImg3}
              alt="preview"
            />
          </div>

          <div className="shortblog__post">
            <p className="shortblog__post-timeinfo">
              September 12 I Read in 6 minutes
            </p>
            <h1 className="shortblog__post-title">
              Cactus & Succulent Care Tips
            </h1>
            <p className="shortblog__post-description">
              Cacti are succulents are easy care plants for any home or patio.{' '}
            </p>

            <a className="shortblog__post-link" href="/">
              <p className="shortblog__post-link-text">Read More</p>
              <img
                className="shortblog__post-link-arrow"
                src={ArrowRightIcon}
                alt="arrow-right"
              />
            </a>
          </div>
        </li>
        {/* <!-- End Post --> */}

        {/* <!-- Post --> */}
        <li className="shortblog__item">
          <div className="shortblog__post-preview">
            <img
              className="shortblog__post-preview-img"
              src={PreviewImg4}
              alt="preview"
            />
          </div>

          <div className="shortblog__post">
            <p className="shortblog__post-timeinfo">
              September 12 I Read in 6 minutes
            </p>
            <h1 className="shortblog__post-title">
              Cactus & Succulent Care Tips
            </h1>
            <p className="shortblog__post-description">
              Cacti are succulents are easy care plants for any home or patio.{' '}
            </p>

            <a className="shortblog__post-link" href="/">
              <p className="shortblog__post-link-text">Read More</p>
              <img
                className="shortblog__post-link-arrow"
                src={ArrowRightIcon}
                alt="arrow-right"
              />
            </a>
          </div>
        </li>
        {/* <!-- End Post --> */}
      </ul>
    </div>
  );
}

export default ShortBlog;
