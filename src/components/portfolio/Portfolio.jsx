import React from "react";
import "./portfolio.css";
import ME from "../../assets/img/me.png";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ME} alt="me" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="http://project.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="http://project.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ME} alt="me" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="http://project.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="http://project.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ME} alt="me" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="http://project.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="http://project.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ME} alt="me" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="http://project.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="http://project.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ME} alt="me" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="http://project.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="http://project.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ME} alt="me" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a
              href="http://project.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="http://project.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
