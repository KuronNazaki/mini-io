export const GradientHero = () => {
  return (
    <div className="gradient fixed">
      <svg
        aria-hidden="true"
        width="678"
        height="634"
        viewBox="0 0 678 634"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {' '}
        <circle
          cx="240"
          cy="394"
          r="240"
          fill="url(#piphoneill_paint0_radial)"
          fill-opacity=".4"
        ></circle>{' '}
        <circle
          cx="438"
          cy="240"
          r="240"
          fill="url(#piphoneill_paint1_radial)"
          fill-opacity=".6"
        ></circle>{' '}
        <defs>
          {' '}
          <radialGradient
            id="piphoneill_paint0_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(90 -77 317) scale(189.054)"
          >
            {' '}
            <stop stop-color="#667EEA"></stop>{' '}
            <stop offset="1" stop-color="#667EEA" stop-opacity=".01"></stop>{' '}
          </radialGradient>{' '}
          <radialGradient
            id="piphoneill_paint1_radial"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(90 99 339) scale(189.054)"
          >
            {' '}
            <stop stop-color="#9F7AEA"></stop>{' '}
            <stop offset="1" stop-color="#9F7AEA" stop-opacity=".01"></stop>{' '}
          </radialGradient>{' '}
        </defs>{' '}
      </svg>
    </div>
  )
}
