import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  src: string;
}

const Icon: React.FC<IconProps> = ({ src, ...props }) => {
  return (
    <svg {...props}>
      <use xlinkHref={`#${src}`} />
    </svg>
  );
};

export default Icon;
