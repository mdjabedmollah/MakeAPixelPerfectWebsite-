const BellShape = ({ x, y, width, height, fill }) => {
  const top = y;
  const bottom = y + height;

  return (
    <path
      d={`
        M ${x + width / 2} ${top}
        C ${x + width * 0.15} ${top + height * 0.35},
          ${x + width * 0.1} ${bottom},
          ${x + width / 2} ${bottom}
        C ${x + width * 0.9} ${bottom},
          ${x + width * 0.85} ${top + height * 0.35},
          ${x + width / 2} ${top}
        Z
      `}
      fill={fill}
    />
  );
};

export default BellShape;
