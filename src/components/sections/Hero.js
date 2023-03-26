import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import Typing from "../elements/Typing"
import ImageGallery from 'react-image-gallery';
import "./Image.css"

const images = [
  {
    original: 'https://live.staticflickr.com/65535/52228061706_07614186c4_o.jpg',
    thumbnail: 'https://live.staticflickr.com/65535/52228061706_07614186c4_o.jpg',
    originalHeight: {__html: '300px'}
  },
  {
    original: 'https://live.staticflickr.com/65535/52228073548_47ac530b59_o.jpg',
    thumbnail: 'https://live.staticflickr.com/65535/52228073548_47ac530b59_o.jpg',
  },
  {
    original: 'https://live.staticflickr.com/65535/52228545440_fae9d12825_o.jpg',
    thumbnail: 'https://live.staticflickr.com/65535/52228545440_fae9d12825_o.jpg',
  },
  {
    original: 'https://live.staticflickr.com/65535/52228334199_7ed7571f1e_o.jpg',
    thumbnail: 'https://live.staticflickr.com/65535/52228334199_7ed7571f1e_o.jpg',
  },
  {
    original: 'https://live.staticflickr.com/65535/52032523206_6b90dd95cc_o.jpg',
    thumbnail: 'https://live.staticflickr.com/65535/52032523206_6b90dd95cc_o.jpg',
  },
];

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
          <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200" style = {{marginTop: "-30px"}}>
            Building <span className="text-color-primary"> <Typing /> </span> For Companies and NPOs
            </h1>
            <br></br>
            <ImageGallery items={images} showThumbnails={false} />
            <div className="container-m">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400" style = {{paddingTop: "50px"}}>
              At Carraway, we connect computer science and outreach in order to give back to our community. We make solutions for companies and non-profits such as websites, apps, and more. In return for making these solutions, we simply ask for an optional donation. These donations are then utilized to support our community through various outreach efforts such as school supplies drives, relief efforts, and more. Carraway wishes to expand to locations around the globe and make an everlasting positive impact to society.  
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="https://forms.gle/qvDocZdmjvtJm73w9">
                    Register
                    </Button>
                  <Button tag="a" color="dark" wideMobile href="/#about">
                    Our Team
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          {/* <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/video-placeholder.jpg')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div> */}
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe" />
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;