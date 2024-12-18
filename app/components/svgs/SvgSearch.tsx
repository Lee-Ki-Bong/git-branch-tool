const SvgSearch = ({
  width,
  height,
  className
}: {
  width: string
  height: string
  className?: string | undefined
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      id="Search"
      width={width}
      height={height}
      className={`stroke-current ${className}`}
    >
      <circle
        cx={22.01}
        cy={22}
        r={20.02}
        fill="none"
        strokeMiterlimit={10}
        strokeWidth={4}
        className={`stroke-current`}
      />
      <path
        fill="none"
        strokeMiterlimit={10}
        strokeWidth={4}
        d="M35.94,36Q49,49,62,62"
        className={`stroke-current`}
      />
    </svg>
  )
}

export default SvgSearch
