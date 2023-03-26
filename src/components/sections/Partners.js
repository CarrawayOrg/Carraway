import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import "./Partners.css"
import Image from "../elements/Image"

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
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
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Our Partners',
    paragraph: 'The following are companies and non-profits we are partnered with'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
        
          <div className="grid">
            <div style = {{padding:"10px"}}>
                <Image
                    src={require('../../assets/images/rishi.jpeg')}
                    alt="Features split 02"
                    width={528}
                    height={396}
                    getUrl = "https://rishikumar.com/"
                     />
            </div>
            <div>
                <Image
                    src={require('../../assets/images/csd.jpeg')}
                    alt="Features split 02"
                    width={528}
                    height={396} 
                    getUrl = "http://cougarsupportden.com/"
                    />
            </div>
            <div>
            <Image
                    src={require('../../assets/images/bwc.jpeg')}
                    alt="Features split 02"
                    width={528}
                    height={528}
                    getUrl = "https://www.billwilsoncenter.org/"
                     />
            </div>
            <div>
                <Image
                    src={require('../../assets/images/shineon.jpg')}
                    alt="Features split 02"
                    width={528}
                    height={528}
                    getUrl = "https://www.buzzsprout.com/2006175"
                     />
            </div>
            <div>
                <Image
                    src={require('../../assets/images/simpleTutor.png')}
                    alt="Features split 02"
                    width={528}
                    height={528}
                    getUrl = "https://www.simpletutor.net/"
                     />
            </div>
            <div>
                <Image
                    src={require('../../assets/images/evhsRobotics.png')}
                    alt="Features split 02"
                    width={528}
                    height={528}
                    getUrl = "https://2854.vercel.app/Prototypes"
                     />
            </div>
            <div>
                <Image
                    src={require('../../assets/images/evhs.jpeg')}
                    alt="Features split 02"
                    width={528}
                    height={528}
                    getUrl = "https://evhsrobotics.github.io/#/home/landing"
                     />
            </div>
            {/* <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div> */}
        </div>
          {/* <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Simple Tutor is a great opportunity to learn more concepts . The teachers help all of their students learn every concept thoroughly. All the students doubts and questions will be cleared. Even though it is online, the teachers will focus on every student. thank you
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Sindhu</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Parent</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Simple Tutor during quarantine was a great experience for my son. It allowed him to stay focus in his studies over the summer even during a difficult time in the world. The volunteers are very dedicated and there are a variety of classes for every student. I would highly recommend this program over the summer.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Manju</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Parent</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Thank you to Simple Tutor for teaching my son during quarantine. It was perfect because the teachers focus on each student and if anything comes up, all the resources are posted online for the students to access and the teachers are available outside of class for any questions as well. My son will definitely be attending again.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Manisha</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Parent</a>
                  </span>
                </div>
              </div>
            </div>

  </div>*/}
        </div>
      </div> 
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;