const SVGUser = ({
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
    viewBox="0 0 32 32"
    id="User"
    width={width}
    height={height}
    className={className}
  >
    <path
      d="M16 14a6 6 0 1 0-6-6A6 6 0 0 0 16 14zM16 4a4 4 0 1 1-4 4A4 4 0 0 1 16 4zM16 16A10 10 0 0 0 6 26v3a1 1 0 0 0 2 0V26a8 8 0 0 1 16 0v3a1 1 0 0 0 2 0V26A10 10 0 0 0 16 16z"
      className="fill-current"
    />
  </svg>
)
export default SVGUser
