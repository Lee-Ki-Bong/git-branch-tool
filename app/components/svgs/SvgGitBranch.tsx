const SvgGitBranch = ({
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
      fill="none"
      viewBox="0 0 96 96"
      id="GitBranch"
      width={width}
      height={height}
      className={className}
    >
      <path
        filter=""
        fill="url(#paint0_linear_1208_8180)"
        fillRule="evenodd"
        d="M27.3261 76.1818C27.3261 72.1627 24.0298 68.8636 19.913 68.8636C15.7962 68.8636 12.5 72.1627 12.5 76.1818C12.5 80.2009 15.7962 83.5 19.913 83.5C24.0299 83.5 27.3261 80.2009 27.3261 76.1818ZM32.0315 73.5C30.9752 68.7733 27.1851 65.0834 22.413 64.1139V10C22.413 8.61929 21.2938 7.5 19.913 7.5C18.5323 7.5 17.413 8.61929 17.413 10V64.1139C11.7699 65.2604 7.5 70.211 7.5 76.1818C7.5 83.0076 13.0802 88.5 19.913 88.5C25.9522 88.5 31.0128 84.2095 32.107 78.5H42.9999C62.606 78.5 78.4999 62.6061 78.4999 43V31.8681C84.0999 30.6887 88.3261 25.7584 88.3261 19.8182C88.3261 12.9925 82.7459 7.5 75.913 7.5C69.0802 7.5 63.5 12.9925 63.5 19.8182C63.5 25.8197 67.8138 30.7904 73.4999 31.9034V43C73.4999 59.8447 59.8446 73.5 42.9999 73.5H32.0315ZM83.3261 19.8182C83.3261 15.7991 80.0298 12.5 75.913 12.5C71.7962 12.5 68.5 15.7991 68.5 19.8182C68.5 23.8374 71.7962 27.1364 75.913 27.1364C80.0299 27.1364 83.3261 23.8374 83.3261 19.8182Z"
        clipRule="evenodd"
        className={`fill-current ${className}`}
      />
      <defs>
        <linearGradient
          id="paint0_linear_1208_8180"
          x1={47.913}
          x2={47.913}
          y1={7.5}
          y2={88.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop className="stopColorff1f00 svgShape" />
          <stop offset={1} className="text-neonRed stopColorff8a00 svgShape" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default SvgGitBranch
