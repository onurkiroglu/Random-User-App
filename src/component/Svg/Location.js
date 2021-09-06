import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      height="50px"
      viewBox="0 0 128 128"
      width="50px"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M107.427 84.289H77.272A182.929 182.929 0 0164 102.66a182.929 182.929 0 01-13.272-18.371H20.573L6.306 121.694h115.388z"
        fill="#dfeef4"
      />
      <path
        d="M64 6.31a30.711 30.711 0 00-30.71 30.71C33.11 66.32 64 102.66 64 102.66s30.89-36.34 30.71-65.64A30.711 30.711 0 0064 6.31zm0 43.74a13.03 13.03 0 1113.03-13.03A13.025 13.025 0 0164 50.05z"
        fill="#f45858"
      />
      <path
        d="M110.74 92.96l-57.58 20.48-22.44-29.15h20.01A182.752 182.752 0 0064 102.66a182.752 182.752 0 0013.27-18.37h30.16z"
        fill="#f2da30"
      />
      <path d="M29.96 121.694l56.996-20.274 15.604 20.274z" fill="#3ea2e5" />
      <path d="M88.737 21.946a1.75 1.75 0 002.987-1.824 32.661 32.661 0 00-3.1-4.256 1.75 1.75 0 00-2.654 2.281 29.264 29.264 0 012.767 3.799zM49.223 37.021A14.777 14.777 0 1064 22.242a14.794 14.794 0 00-14.777 14.779zm26.054 0A11.277 11.277 0 1164 25.742a11.289 11.289 0 0111.277 11.279zM11.137 109.027a1.747 1.747 0 002.259-1.01l1.6-4.2a1.75 1.75 0 00-3.269-1.248l-1.6 4.2a1.748 1.748 0 001.01 2.258z" />
      <path d="M123.328 121.069l-14.266-37.4a1.751 1.751 0 00-1.635-1.126h-27c.165-.269.329-.53.494-.8 10.389-17.2 15.617-32.246 15.542-44.714a32.464 32.464 0 00-1.371-9.362 1.75 1.75 0 00-3.352 1.008 28.973 28.973 0 011.223 8.364C93.114 61.889 69.874 92.548 64 99.9c-5.874-7.349-29.115-38-28.964-62.879a28.968 28.968 0 0145.606-23.709 1.75 1.75 0 002.013-2.864A32.469 32.469 0 0031.536 37.01c-.075 12.479 5.153 27.527 15.542 44.725.165.273.329.534.494.8h-27a1.751 1.751 0 00-1.635 1.126l-4.1 10.762a1.75 1.75 0 003.27 1.248l3.674-9.636h8.08L50.3 112.6l-20.643 7.342H8.847l1.618-4.245a1.75 1.75 0 00-3.27-1.246l-2.523 6.619a1.748 1.748 0 001.635 2.373h115.386a1.748 1.748 0 001.635-2.374zM34.275 86.038h15.49a185.716 185.716 0 0012.9 17.759 1.75 1.75 0 002.666 0 185.716 185.716 0 0012.9-17.759h27.987l2.24 5.875-54.689 19.454zM53.708 115.1h.01l32.627-11.6L99 119.943H40.1zm49.713 4.84l-13.609-17.679 19.9-7.077 9.443 24.759z" />
    </svg>
  )
}

export default SvgComponent