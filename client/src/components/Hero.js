import React, { useState } from "react";
import classNames from "classnames";
import { Button, Stack, Typography } from "@mui/material";
import Image from "./Image";
import Modal from "./Modal";
import "./styles/hero.css";

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
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="hero-title">
              Introducing <span style={{ color: "royalblue" }}>lootle</span>
            </h1>
            <Stack direction="column">
              <p className="hero-subtitle">
                Lootle is a place where you can keep track of price of your
                favourite product or stock and when it drops under your desired
                value, you will be notified. You can even view the price history
                of the product.
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <div className="button-group">
                  <Button variant="contained" size="large">
                    Get started
                  </Button>
                  <Button variant="contained" size="large" color="success">
                    View on Github
                  </Button>
                </div>
              </div>
            </Stack>
          </div>
          <div
            className="hero-figure"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src="/static/video-placeholder.jpg"
                alt="Hero"
                width={896}
                height={504}
              />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://www.youtube.com/embed/tmfm2hZPnxw"
            videoTag="iframe"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
