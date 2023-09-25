// import Image from 'next/image'

// import { Button } from '@/components/Button'
// import { Container } from '@/components/Container'
// import logoLaravel from '@/images/logos/laravel.svg'
// import logoMirage from '@/images/logos/mirage.svg'
// import logoStatamic from '@/images/logos/statamic.svg'
// import logoStaticKit from '@/images/logos/statickit.svg'
// import logoTransistor from '@/images/logos/transistor.svg'
// import logoTuple from '@/images/logos/tuple.svg'

// export function Hero() {
//   return (
//     <Container className="pb-16 pt-20 text-center lg:pt-32">
//       <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
//         Accounting{' '}
//         <span className="relative whitespace-nowrap text-blue-600">
//           <svg
//             aria-hidden="true"
//             viewBox="0 0 418 42"
//             className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
//             preserveAspectRatio="none"
//           >
//             <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
//           </svg>
//           <span className="relative">made simple</span>
//         </span>{' '}
//         for small businesses.
//       </h1>
//       <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
//         Most bookkeeping software is accurate, but hard to use. We make the
//         opposite trade-off, and hope you don’t get audited.
//       </p>
//       <div className="mt-10 flex justify-center gap-x-6">
//         <Button href="/register">Get 6 months free</Button>
//         <Button
//           href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
//           variant="outline"
//         >
//           <svg
//             aria-hidden="true"
//             className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
//           >
//             <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
//           </svg>
//           <span className="ml-3">Watch video</span>
//         </Button>
//       </div>
//       <div className="mt-36 lg:mt-44">
//         <p className="font-display text-base text-slate-900">
//           Trusted by these six companies so far
//         </p>
//         <ul
//           role="list"
//           className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
//         >
//           {[
//             [
//               { name: 'Transistor', logo: logoTransistor },
//               { name: 'Tuple', logo: logoTuple },
//               { name: 'StaticKit', logo: logoStaticKit },
//             ],
//             [
//               { name: 'Mirage', logo: logoMirage },
//               { name: 'Laravel', logo: logoLaravel },
//               { name: 'Statamic', logo: logoStatamic },
//             ],
//           ].map((group, groupIndex) => (
//             <li key={groupIndex}>
//               <ul
//                 role="list"
//                 className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
//               >
//                 {group.map((company) => (
//                   <li key={company.name} className="flex">
//                     <Image src={company.logo} alt={company.name} unoptimized />
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </Container>
//   )
// }




export function Hero() {
  return (
    
    <div className="relative isolate overflow-hidden bg-gray-900">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
      </svg>
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
        
          <div className="mt-24 sm:mt-32 lg:mt-16">
         
              <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
                New Realease
              </span>
            
           
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Amplify Your 3D Potential with Metastudio
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          Elevate your 3D experience with unmatched collaboration, asset management, and efficient deployment. Unlock the true potential of your 3D assets and maximize your ROI.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
         
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Watch the video <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="App screenshot"
              width={2432}
              height={1442}
              className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
