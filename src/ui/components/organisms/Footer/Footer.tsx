import React from 'react';
import { Link } from 'react-router-dom'

// Styles
import './footer.css';

// Icons
import LogoIcon from '@ui/assets/logo.svg?react';

import {
  LocationIcon,
  CallIcon,
  MessageIcon,
} from '@ui/assets/footer-icons/contact/imports';

import {
  NewsLetterImg1,
  NewsLetterImg2,
  NewsLetterImg3,
} from '@ui/assets/footer-icons/newsletter/imports';

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from '@ui/assets/footer-icons/social/imports';

import {
  AmericanExpressIcon,
  MasterCardIcon,
  PaypalIcon,
  VisaIcon,
} from '@ui/assets/footer-icons/accept/imports';

function Footer() {
  return (
    <footer className="footer">
      {/* --- NEWSLETTER --- */}
      <div className="footer__newsletter">
        <ul className="footer__newsletter-list">
          <li className="footer__newsletter-item">
            <div className="footer__newsletter-img-container">
              <img
                className="footer__newsletter-img"
                src={NewsLetterImg1}
                alt="icon"
              />
            </div>
            <h1 className="footer__newsletter-title">Garden Care</h1>
            <p className="footer__newsletter-description">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </li>
          <li className="footer__newsletter-item">
            <div className="footer__newsletter-img-container">
              <img
                className="footer__newsletter-img"
                src={NewsLetterImg2}
                alt="icon"
              />
            </div>
            <h1 className="footer__newsletter-title">Garden Care</h1>
            <p className="footer__newsletter-description">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </li>
          <li className="footer__newsletter-item">
            <div className="footer__newsletter-img-container">
              <img
                className="footer__newsletter-img"
                src={NewsLetterImg3}
                alt="icon"
              />
            </div>
            <h1 className="footer__newsletter-title">Garden Care</h1>
            <p className="footer__newsletter-description">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </li>
        </ul>
        <div className="footer__newsletter-join">
          <h1 className="footer__newsletter-title">
            Would you like to join newsletters?
          </h1>
          <form className="footer__newsletter-form">
            <input
              className="footer__newsletter-input"
              type="email"
              placeholder="enter your email address..."
              required
            />
            <input
              className="footer__newsletter-btn"
              type="button"
              value="Join"
            />
          </form>
          <p className="footer__newsletter-description">
            We usually post offers and challenges in newsletter. We’re your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!
          </p>
        </div>
      </div>

      {/* --- CONTACT --- */}
      <div className="footer__contact">
        <div className="footer__contact-logo logo">
          <a className="logo__link" href="/">
            <LogoIcon className="logo__img" />
          </a>
        </div>

        <div className="footer__contact-item">
          <img className="footer__contact-icon" src={LocationIcon} alt="icon" />
          <a
            className="footer__contact-text"
            href="https://www.google.com/maps/@59.4301074,62.3492112,16.58z"
          >
            70 West Buckingham Ave. Farmingdale, NY 11735
          </a>
        </div>

        <div className="footer__contact-item">
          <img className="footer__contact-icon" src={MessageIcon} alt="icon" />
          <a
            className="footer__contact-text"
            href="mailto:contact@greenshop.com"
          >
            contact@greenshop.com
          </a>
        </div>

        <div className="footer__contact-item">
          <img className="footer__contact-icon" src={CallIcon} alt="icon" />
          <a className="footer__contact-text" href="tel:+88-01911-717-490">
            +88 01911 717 490
          </a>
        </div>
      </div>

      {/* --- MENU --- */}
      <div className="footer__menu">
        <ul className="footer__menu-list">
          <li className="footer__menu-title">My Account</li>
          <li className="footer__menu-item">
            <a className="footer__menu-link" href="/">
              My Account
            </a>
          </li>
          <li className="footer__menu-item">
            <a className="footer__menu-link" href="/">
              Our stores
            </a>
          </li>
          <li className="footer__menu-item">
            <a className="footer__menu-link" href="/">
              Contact us
            </a>
          </li>
          <li className="footer__menu-item">
            <a className="footer__menu-link" href="/">
              Career
            </a>
          </li>
          <li className="footer__menu-item">
            <a className="footer__menu-link" href="/">
              Specials
            </a>
          </li>
        </ul>
        <ul className="footer__menu-list">
          <li className="footer__menu-title">Help & Guide</li>
          <li className="footer__menu-item">
            <a className="footer__menu-link" href="/">
              Help Center
            </a>
          </li>
          <li className="footer__menu-item">
            <a className="footer__menu-link" href="/">
              How to Buy
            </a>
          </li>
          <li className="footer__menu-item">
            <Link className="footer__menu-link" to="/shops">
              Shipping & Delivery
            </Link>
          </li>
          <li className="footer__menu-item">
            <a className="footer__menu-link" href="/">
              Product Policy
            </a>
          </li>
          <li className="footer__menu-item">
            <a className="footer__menu-link" href="/">
              How to Return
            </a>
          </li>
        </ul>
        <ul className="footer__menu-list">
          <li className="footer__menu-title">Categories</li>
          <li className="footer__menu-item">
            <a className="footer__menu-link" href="/">
              House Plants
            </a>
          </li>
          <li className="footer__menu-item">
            <a className="footer__menu-link" href="/">
              Potter Plants
            </a>
          </li>
          <li className="footer__menu-item">
            <a className="footer__menu-link" href="/">
              Seeds
            </a>
          </li>
          <li className="footer__menu-item">
            <a className="footer__menu-link" href="/">
              Small Plants
            </a>
          </li>
          <li className="footer__menu-item">
            <a className="footer__menu-link" href="/">
              Accessories
            </a>
          </li>
        </ul>

        <div className="footer__menu-links">
          <div className="footer__menu-social">
            <h1 className="footer__menu-title">Social Media</h1>
            <ul className="footer__menu-social-links">
              <li className="footer__menu-social-item">
                <a className="footer__menu-social-link" href="/">
                  <img
                    className="footer__menu-social-img"
                    src={FacebookIcon}
                    alt="facebok"
                  />
                </a>
              </li>
              <li className="footer__menu-social-item">
                <a className="footer__menu-social-link" href="/">
                  <img
                    className="footer__menu-social-img"
                    src={InstagramIcon}
                    alt="instagram"
                  />
                </a>
              </li>
              <li className="footer__menu-social-item">
                <a className="footer__menu-social-link" href="/">
                  <img
                    className="footer__menu-social-img"
                    src={TwitterIcon}
                    alt="twiter"
                  />
                </a>
              </li>
              <li className="footer__menu-social-item">
                <a className="footer__menu-social-link" href="/">
                  <img
                    className="footer__menu-social-img"
                    src={LinkedinIcon}
                    alt="linkedin"
                  />
                </a>
              </li>
              <li className="footer__menu-social-item">
                <a className="footer__menu-social-link" href="/">
                  <img
                    className="footer__menu-social-img"
                    src={YoutubeIcon}
                    alt="youtube"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__menu-we-accept">
            <h1 className="footer__menu-title">We accept</h1>
            <ul className="footer__menu-accept-links">
              <li className="footer__menu-accept-item">
                <a className="footer__menu-accept-link" href="/">
                  <img
                    className="footer__menu-accept-img"
                    src={PaypalIcon}
                    alt="paypal"
                  />
                </a>
              </li>
              <li className="footer__menu-accept-item">
                <a className="footer__menu-accept-link" href="/">
                  <img
                    className="footer__menu-accept-img"
                    src={MasterCardIcon}
                    alt="mastercard"
                  />
                </a>
              </li>
              <li className="footer__menu-accept-item">
                <a className="footer__menu-accept-link" href="/">
                  <img
                    className="footer__menu-accept-img"
                    src={VisaIcon}
                    alt="visa"
                  />
                </a>
              </li>
              <li className="footer__menu-accept-item">
                <a className="footer__menu-accept-link" href="/">
                  <img
                    className="footer__menu-accept-img"
                    src={AmericanExpressIcon}
                    alt="american-express"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* --- ALLRIGHT --- */}
      <section className="footer__allright">
        <p className="footer__allright-text">
          © 2021 GreenShop. All Rights Reserved.
        </p>
      </section>
    </footer>
  );
}

export default Footer;
