import "./styles/featuretile.css";

function FeatureTile({ Image, title, description }) {
  return (
    <div className="tiles-item">
      <div className="features-tiles-item-image">
        <Image />
      </div>

      <div className="features-tiles-item-content">
        <h4 className="title">{title}</h4>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default FeatureTile;
