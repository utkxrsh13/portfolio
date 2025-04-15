import "react";
import "./text.css";

const UtkarshPattern = () => {
  return (
    <div className="patterns">
      <svg width="100%" height="100%">
        <defs>
          {/* Google Fonts cannot be directly imported like this in SVG inside JSX,
              so load the font in the CSS instead */}
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)" />
        <text x="50%" y="60%" textAnchor="middle">
          UTKARSH
        </text>
      </svg>
    </div>
  );
};

export default UtkarshPattern;
