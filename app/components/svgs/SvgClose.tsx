const SVGClose = ({
  width,
  height,
  className
}: {
  width: string
  height: string
  className?: string | undefined
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    id="close"
    width={width}
    height={height}
    className={`fill-current ${className}`}
  >
    <g>
      <path d="m13.41 12 4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
    </g>
  </svg>
)
export default SVGClose
