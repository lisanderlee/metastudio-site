export default function CtaSection() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className=" mx-auto max-w-8xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            The 3D platform of choice for a wide spectrum of industries. <br />
            From e-commerce and architecture to metaverse initiatives,<br />
            gaming,healthcare, education,  and entertainment,  <br />
            tap into the boundless possibilities of 3D.
          </h2>
        </div>
      </div>
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
          fillOpacity="0.7"
        />
        {/* <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" />
          </radialGradient>
        </defs> */}
      </svg>
    </div>
  )
}
