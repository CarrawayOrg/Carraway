import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import ImageGallery from 'react-image-gallery';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const CurrentDrives = ({
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
    bottomDivider && 'has-bottom-divider',
    'container'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Refurbishment Drive',
    paragraph: 'Carraway is currently hosting an electronics drive. Please fill out the following form to let us know if you have any devices or technologies that you may not be using. These technological products will then be refurbished by our team and donated to those in need. Thank you.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className={innerClasses}>
        <div className={innerClasses} class = "center-content">
          <br/>
          <br/>
          <SectionHeader data={sectionHeader} className="center-content" id = "about"/>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdRRXkrsb8fw7-1xTG3DfFdGrqNSNcF_39uVXqAmI9LPN9GaA/viewform?embedded=true" width = "100%" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          <a href = "https://tinyurl.com/refurbDrive" target = "_blank">Form Link</a>
        <br/>
            <br/>
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

CurrentDrives.propTypes = propTypes;
CurrentDrives.defaultProps = defaultProps;

export default CurrentDrives;