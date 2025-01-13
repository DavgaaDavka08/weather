export const FakeMoon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={128}
      height={128}
      viewBox="0 0 128 128"
      fill="none"
      {...props}
    >
      <circle cx={64} cy={64} r={64} fill="#6E72C9" />
      <circle
        cx={64}
        cy={64}
        r={64}
        fill="url(#paint0_radial_202_285)"
        fillOpacity={0.35}
        style={{
          mixBlendMode: "overlay",
        }}
      />
      <defs>
        <radialGradient
          id="paint0_radial_202_285"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(64 64) rotate(90) scale(64)"
        >
          <stop stopColor="white" />
          <stop offset={1} stopColor="white" stopOpacity={0} />
        </radialGradient>
      </defs>
    </svg>
  );
};
