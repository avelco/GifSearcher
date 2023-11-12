import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function GifItem({ title, url }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 2000); // Hide the tooltip after 2 seconds
  };

  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
      <button onClick={handleCopy}>Copy URL</button>
      {showTooltip && <div className="tooltip">URL Copied!</div>}
    </div>
  );
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};