const SvgList = ({
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
      viewBox="0 0 21 15"
      id="List"
      width={width}
      height={height}
      className={`fill-current ${className}`}
    >
      <path
        fillRule="evenodd"
        d="M1.575 12C.705 12 0 12.672 0 13.5S.706 15 1.575 15c.87 0 1.575-.672 1.575-1.5S2.444 12 1.575 12zm3.675 3H21v-2H5.25v2zM1.575 6C.705 6 0 6.672 0 7.5S.706 9 1.575 9c.87 0 1.575-.672 1.575-1.5S2.444 6 1.575 6zM5.25 9H21V7H5.25v2zM1.575 0C.705 0 0 .672 0 1.5S.706 3 1.575 3c.87 0 1.575-.672 1.575-1.5S2.444 0 1.575 0zM5.25 3H21V1H5.25v2z"
      />
    </svg>
  )
}

export default SvgList
