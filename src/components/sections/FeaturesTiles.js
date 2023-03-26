import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import ImageGallery from 'react-image-gallery';
import "./Image.css"


const images = [
  {
    original: 'https://live.staticflickr.com/65535/52032523206_6b90dd95cc_o.jpg',
    thumbnail: 'https://live.staticflickr.com/65535/52032523206_6b90dd95cc_o.jpg',
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
];

const sockImages = [
  {
    original: 'https://live.staticflickr.com/65535/52773073568_422a12666a_o.jpg',
    thumbnail: 'https://live.staticflickr.com/65535/52773073568_422a12666a_o.jpg',
    originalHeight: {__html: '300px'}
  },
  {
    original: 'https://live.staticflickr.com/65535/52772589566_11196c733b_o.jpg',
    thumbnail: 'https://live.staticflickr.com/65535/52772589566_11196c733b_o.jpg',
  },
  {
    original: 'https://live.staticflickr.com/65535/52772057972_0080df1ea6_o.jpg',
    thumbnail: 'https://live.staticflickr.com/65535/52772057972_0080df1ea6_o.jpg',
  },
];

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Community Outreach',
    paragraph: 'View Our Community Outreach Efforts Below'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <br/>
          <br/>
          <SectionHeader data={sectionHeader} className="center-content" id = "about"/>

          <div className="split-item">
              <div className = "center-content">
                {/* <Image
                  src={require('./../../assets/images/kshitij.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} /> */}
                <ImageGallery items={images} showThumbnails={false} />
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <br/>
                <h3 className="mt-0 mb-12">
                  School Supplies Drive
                  </h3>
                <p className="m-0">
                Carrawy ran a continous school supplies drive from November - June raising over $2000 and $5000+ worth of items. Item collection was ran at Tom Matsumoto Elemntary School, Evergreen Valley High School, and Carolyn Clark Elementary School. Additionally, a go-fund-me was created and advertised to all locals, to give them a chance to participate. We were able to donate all supplies to the Bill Willson Center.
                  </p>
              </div>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
              </div>
            </div>
            <br/>
            <br/>
            <div className="split-item">
              <div className = "center-content">
                {/* <Image
                  src={require('./../../assets/images/kshitij.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} /> */}
                <ImageGallery items={sockImages} showThumbnails={false} />
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <br/>
                <h3 className="mt-0 mb-12">
                  Socks Drive
                  </h3>
                <p className="m-0">
                After collecting more than 500+ pairs of socks, Carraway donated them to The Bill Wilson Center for teenagers and families in need. These socks were raised through websites that Carraway has developed for local businesses. Additionally, Carraway held drives in local schools such as Carolyn Clark Elementary School, Evergreen Valley High School, Tom Matsumoto Elementary School, and more. Special thank you to Mr. Diaz and Ms. Fierro for their continued support of the drive.
                  </p>
              </div>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
              </div>
            </div>

        </div>
      </div>
      {/* <div className="container">
        <div className={innerClasses}>
          <br></br>
          <br></br>
          <SectionHeader data={sectionHeader} className="center-content" style = {{marginTop: 50}}/>
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom"> 
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    {/* <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={64}
                      height={64} /> */}
                      {/* <ImageGallery items={images} /> */}
                  {/* </div>
                </div>
                <div className="features-tiles-item">
                  <h4 className="mt-0 mb-8">
                    School Supplies Drive
                    </h4>
                  <p className="m-0 text-sm">
                      Carrawy ran a continous school supplies drive from November - June raising over $2000 and $5000+ worth of items. Item collection was ran at Tom Matsumoto Elemntary School, Evergreen Valley High School, and Carolyn Clark Elementary School. Additionally, a go-fund-me was created and advertised to all locals, to give them a chance to participate. We were able to donate all supplies to the Bill Willson Center.
                    </p>
                </div>
              </div>
            </div> */}

            {/* <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 02"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Socks Drive
                    </h4>
                  <p className="m-0 text-sm">
                  Carrawy is currently running a socks drive collecting items again for the Bill Willson Center. 
                    </p>
                </div>
              </div>
            </div>   */}

            {/* <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-03.svg')}
                      alt="Features tile icon 03"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Biology
                    </h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div>
              </div>
            </div> */}

            {/* <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-04.svg')}
                      alt="Features tile icon 04"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    AMC 8
                    </h4>
                  <p className="m-0 text-sm">
                  This course is designed to prepare students taking the AMC 8 exam. Using many skills, students will go over multiple practice exams with detailed instruction on every problem. We will cover math topics, tips, and tricks on how to tackle this difficult exam. This is taught by a former student who scored 22 out of 25 on the exam. This course is intended for students in <b>middle school</b>. 
                    </p>
                </div>
              </div>
            </div> */}

            {/* <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-05.svg')}
                      alt="Features tile icon 05"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Robust Workflow
                    </h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-06.svg')}
                      alt="Features tile icon 06"
                      width={64}
                      height={64} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Robust Workflow
                    </h4>
                  <p className="m-0 text-sm">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                    </p>
                </div>
              </div>
            </div> */}

          {/* </div>
        </div>
      </div> */}
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;