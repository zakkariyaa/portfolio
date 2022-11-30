const PortfolioItem = ({ title, img, githubLink, liveLink }) => {
  return (
    <article className="portfolio__item">
      <div className="portfolio__item-image">
        <img src={img} alt="project preview" />
      </div>
      <h3>{title}</h3>
      <div className="portfolio__item-cta">
        <a className="btn" href={githubLink}>
          Github
        </a>
        <a className="btn btn-primary" href={liveLink}>
          Live Demo
        </a>
      </div>
    </article>
  );
};

export default PortfolioItem;
