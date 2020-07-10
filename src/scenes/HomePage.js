import React from "react";
import Fade from "react-reveal/Fade";
import Header from "parts/Header";
import Section from "elements/Section";
import Cards from "elements/Cards";
import Lists from "elements/Lists";
import Button from "elements/Button";

import Clients from "parts/Clients";
import Feature from "parts/Feature";

import Hero from "assets/images/hero-image.png";
import Feature1 from "assets/images/feature-tile-icon-01.svg";
import Feature2 from "assets/images/feature-tile-icon-02.svg";
import Feature3 from "assets/images/feature-tile-icon-03.svg";

import Footer from "../parts/Footer";

function HomePage() {
  const features = [
    {
      imgSrc: Feature1,
      imgAlt: "Feature tile icon 01",
      title: "Join the system",
      description:
        "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
    },
    {
      imgSrc: Feature2,
      imgAlt: "Feature tile icon 02",
      title: "Join the system 02",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    },
    {
      imgSrc: Feature3,
      imgAlt: "Feature tile icon 03",
      title: "Join the system 03",
      description:
        "Odit cumque error ex commodi eligendi sapiente. Alias recusandae porro",
    },
  ];

  const listPricing = [
    {
      price: 27,
      currencySymbol: "$",
      description: "Lorem ipsum dolor sit amet.",
      features: [
        {
          isChecked: true,
          content: "Alias recusandae porro",
        },
        {
          isChecked: true,
          content: "Alias recusandae porro",
        },
        {
          isChecked: true,
          content: "Alias recusandae porro",
        },
        {
          isChecked: false,
          content: "Alias recusandae porro",
        },
        {
          isChecked: false,
          content: "Alias recusandae porro",
        },
      ],
    },
    {
      price: 55,
      currencySymbol: "$",
      description: "Lorem ipsum dolor sit amet.",
      features: [
        {
          isChecked: true,
          content: "Alias recusandae porro",
        },
        {
          isChecked: true,
          content: "Alias recusandae porro",
        },
        {
          isChecked: true,
          content: "Alias recusandae porro",
        },
        {
          isChecked: true,
          content: "Alias recusandae porro",
        },
        {
          isChecked: false,
          content: "Alias recusandae porro",
        },
      ],
    },
    {
      price: 67,
      currencySymbol: "$",
      description: "Lorem ipsum dolor sit amet.",
      features: [
        {
          isChecked: true,
          content: "Alias recusandae porro",
        },
        {
          isChecked: true,
          content: "Alias recusandae porro",
        },
        {
          isChecked: true,
          content: "Alias recusandae porro",
        },
        {
          isChecked: true,
          content: "Alias recusandae porro",
        },
        {
          isChecked: true,
          content: "Alias recusandae porro",
        },
      ],
    },
  ];

  return (
    <div classNameName="body-wrap">
      <Header />
      <main classNameName="site-content">
        <Section classNameName="hero illustration-section-01" isCenterContent>
          <div className="container-sm">
            <div className="hero-inner section-inner">
              <div className="hero-content">
                <Fade bottom delay={500}>
                  <h1 className="mt-0 mb-16">Landing template for startups</h1>
                </Fade>
                <div className="container-xs">
                  <Fade bottom delay={1000}>
                    <p className="mt-0 mb-32">
                      Our landing page template works on all devices, so you
                      only have to set it up once, and get beautiful results
                      forever.
                    </p>{" "}
                  </Fade>
                </div>
              </div>
              <div
                className="hero-figure illustration-element-01"
                data-reveal-value="20px"
              >
                <Fade bottom delay={1500}>
                  <img
                    className="has-shadow"
                    src={Hero}
                    alt="Hero "
                    width="896"
                    height="504"
                  />
                </Fade>
              </div>
            </div>
          </div>
        </Section>
        <Clients />
        <Section className="feature-tiles">
          <div className="container">
            <div className="features-tiles-inner section-inner">
              <div className="tiles-wrap">
                {features.map((feature, index) => (
                  <Feature
                    key={index}
                    delayInMs={(index = 500)}
                    data={feature}
                  />
                ))}
              </div>
            </div>
          </div>
        </Section>
        <Section className="pricing">
          <div className="container">
            <div className="pricing-inner section-inner has-top-divider">
              <div className="section-header center-content">
                <div className="container-xs">
                  <h2 className="mt-0 mb-16">Simple, transarent pricing</h2>
                  <p className="m-0">
                    Lorem ipsum is common placeholder text used to demonstrate
                    the graphic elements of a document or visual presentation.
                  </p>
                </div>
              </div>
              <div className="tiles-wrap">
                {listPricing.map((list, index) => (
                  <Cards hasShadow>
                    <div class="pricing-item-content">
                      <div class="pricing-item-header pb-24 mb-24">
                        <div class="pricing-item-price mb-4">
                          <span class="pricing-item-price-currency h2">
                            {list.currencySymbol}
                          </span>
                          <span
                            class="pricing-item-price-amount h1 pricing-switchable"
                            data-pricing-monthly="54"
                            data-pricing-yearly="47"
                          >
                            {list.price}
                          </span>
                        </div>
                        <div class="text-xs text-color-low">
                          {list.description}
                        </div>
                      </div>
                      <div class="pricing-item-features mb-40">
                        <div class="pricing-item-features-title h6 text-xs text-color-high mb-24">
                          What’s included
                        </div>
                        <Lists
                          data={list.features}
                          isSmall
                          className="pricing-item-features-list mb-32"
                        ></Lists>
                      </div>
                    </div>
                    <div class="pricing-item-cta mb-8">
                      <Button isPrimary isBlock>
                        Start free trial
                      </Button>
                    </div>
                  </Cards>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
