import React from 'react'
import styled from './style.module.css';

const ServicesSection = () => {
  return (
    <div className={styled.servicesSectionMain} >
    <div className="container">
      <section className={styled.servicesSection}>
        <div className={styled.servicesSection_header}>
          <p>What we do</p>
          <h1>Services that we offer</h1>
        </div>
        <div className={styled.servicesSection_services}>
          <div className={styled.servicesSection_services_row}>
            <div className={styled.servicesSection_services_service}>
              <img
                src='/images/ui ux development.svg'
                alt="icon-5.svg"
              />
              <h3>UI UX Design</h3>
              <p>
                Creating intuitive user interfaces and user experiences that are
                easy to navigate and interact with.
              </p>
            </div>
            <div className={styled.servicesSection_services_service}>
              <img
                src="/images/web development.svg"
                alt="icon-5.svg"
              />
              <h3>Web Development</h3>
              <p>
                Creating visually appealing and user-friendly websites that meet
                your clients' specific needs and goals.
              </p>
            </div>
            <div className={styled.servicesSection_services_service}>
              <img
                src="/images/mobileDevelopment.svg"
                alt="icon-5.svg"
              />
              <h3>Mobile Development</h3>
              <p>
                Developing mobile applications for iOS and Android platforms
                that provide seamless user experiences.
              </p>
            </div>
            <div className={styled.servicesSection_services_service}>
              <img src="/images/mvp builder.svg" alt="icon-5.svg" />
              <h3>MVP Builder</h3>
              <p>
                Building and launching simplified version of a product or
                service with essential features, aimed at validating the concept
                and gathering user feedback.
              </p>
            </div>
            <div className={styled.servicesSection_services_service}>
              <img
                src="/images/software documentation.svg"
                alt="icon-5.svg"
              />
              <h3>Software Documentation</h3>
              <p>
                Creating clear and concise documentation for software
                applications to help users understand how to use the software
                and troubleshoot issues.
              </p>
            </div>
            <div className={styled.servicesSection_services_service}>
              <img src="/images/qa.png" alt="icon-5.svg" />
              <h3>Quality Assurance</h3>
              <p>
                Testing software products to ensure that products or services
                meet specified quality standards, enhancing their reliability
                and usability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

    </div>
  )
}

export default ServicesSection