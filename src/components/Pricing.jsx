// import clsx from 'clsx'

// import { Button } from '@/components/Button'
// import { Container } from '@/components/Container'

// function SwirlyDoodle(props) {
//   return (
//     <svg
//       aria-hidden="true"
//       viewBox="0 0 281 40"
//       preserveAspectRatio="none"
//       {...props}
//     >
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
//       />
//     </svg>
//   )
// }

// function CheckIcon({ className, ...props }) {
//   return (
//     <svg
//       aria-hidden="true"
//       className={clsx(
//         'h-6 w-6 flex-none fill-current stroke-current',
//         className,
//       )}
//       {...props}
//     >
//       <path
//         d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
//         strokeWidth={0}
//       />
//       <circle
//         cx={12}
//         cy={12}
//         r={8.25}
//         fill="none"
//         strokeWidth={1.5}
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   )
// }

// function Plan({ name, price, description, href, features, featured = false }) {
//   return (
//     <section
//       className={clsx(
//         'flex flex-col rounded-3xl px-6 sm:px-8',
//         featured ? 'order-first bg-blue-600 py-8 lg:order-none' : 'lg:py-8',
//       )}
//     >
//       <h3 className="mt-5 font-display text-lg text-white">{name}</h3>
//       <p
//         className={clsx(
//           'mt-2 text-base',
//           featured ? 'text-white' : 'text-slate-400',
//         )}
//       >
//         {description}
//       </p>
//       <p className="order-first font-display text-5xl font-light tracking-tight text-white">
//         {price}
//       </p>
//       <ul
//         role="list"
//         className={clsx(
//           'order-last mt-10 flex flex-col gap-y-3 text-sm',
//           featured ? 'text-white' : 'text-slate-200',
//         )}
//       >
//         {features.map((feature) => (
//           <li key={feature} className="flex">
//             <CheckIcon className={featured ? 'text-white' : 'text-slate-400'} />
//             <span className="ml-4">{feature}</span>
//           </li>
//         ))}
//       </ul>
//       <Button
//         href={href}
//         variant={featured ? 'solid' : 'outline'}
//         color="white"
//         className="mt-8"
//         aria-label={`Get started with the ${name} plan for ${price}`}
//       >
//         Get started
//       </Button>
//     </section>
//   )
// }

// export function Pricing() {
//   return (
//     <section
//       id="pricing"
//       aria-label="Pricing"
//       className="bg-slate-900 py-20 sm:py-32"
//     >
//       <Container>
//         <div className="md:text-center">
//           <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
//             <span className="relative whitespace-nowrap">
//               <SwirlyDoodle className="absolute left-0 top-1/2 h-[1em] w-full fill-blue-400" />
//               <span className="relative">Simple pricing,</span>
//             </span>{' '}
//             for everyone.
//           </h2>
//           <p className="mt-4 text-lg text-slate-400">
//             It doesn’t matter what size your business is, our software won’t
//             work well for you.
//           </p>
//         </div>
//         <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
//           <Plan
//             name="Starter"
//             price="$9"
//             description="Good for anyone who is self-employed and just getting started."
//             href="/register"
//             features={[
//               'Send 10 quotes and invoices',
//               'Connect up to 2 bank accounts',
//               'Track up to 15 expenses per month',
//               'Manual payroll support',
//               'Export up to 3 reports',
//             ]}
//           />
//           <Plan
//             featured
//             name="Small business"
//             price="$15"
//             description="Perfect for small / medium sized businesses."
//             href="/register"
//             features={[
//               'Send 25 quotes and invoices',
//               'Connect up to 5 bank accounts',
//               'Track up to 50 expenses per month',
//               'Automated payroll support',
//               'Export up to 12 reports',
//               'Bulk reconcile transactions',
//               'Track in multiple currencies',
//             ]}
//           />
//           <Plan
//             name="Enterprise"
//             price="$39"
//             description="For even the biggest enterprise companies."
//             href="/register"
//             features={[
//               'Send unlimited quotes and invoices',
//               'Connect up to 15 bank accounts',
//               'Track up to 200 expenses per month',
//               'Automated payroll support',
//               'Export up to 25 reports, including TPS',
//             ]}
//           />
//         </div>
//       </Container>
//     </section>
//   )
// }


import { Fragment } from 'react'
import { CheckIcon, MinusIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Basic',
    id: 'tier-basic',
    href: '#',
    priceMonthly: '$9',
    description: 'Quis suspendisse ut fermentum neque vivamus non tellus.',
    mostPopular: false,
  },
  {
    name: 'Essential',
    id: 'tier-essential',
    href: '#',
    priceMonthly: '$29',
    description: 'Quis eleifend a tincidunt pellentesque. A tempor in sed.',
    mostPopular: true,
  },
  {
    name: 'Premium',
    id: 'tier-premium',
    href: '#',
    priceMonthly: '$59',
    description: 'Orci volutpat ut sed sed neque, dui eget. Quis tristique non.',
    mostPopular: false,
  },
]
const sections = [
  {
    name: 'Features',
    features: [
      { name: 'Integrations', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: 'Shared links', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: 'Importing and exporting', tiers: { Essential: true, Premium: true } },
      { name: 'Team members', tiers: { Essential: 'Up to 20 users', Premium: 'Up to 50 users' } },
    ],
  },
  {
    name: 'Reporting',
    features: [
      { name: 'Advanced analytics', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: 'Basic reports', tiers: { Essential: true, Premium: true } },
      { name: 'Professional reports', tiers: { Premium: true } },
      { name: 'Custom report builder', tiers: { Premium: true } },
    ],
  },
  {
    name: 'Support',
    features: [
      { name: '24/7 online support', tiers: { Basic: true, Essential: true, Premium: true } },
      { name: 'Quarterly product workshops', tiers: { Essential: true, Premium: true } },
      { name: 'Priority phone support', tiers: { Essential: true, Premium: true } },
      { name: '1:1 onboarding tour', tiers: { Premium: true } },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export  function Pricing() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Plans for teams of&nbsp;all&nbsp;sizes
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
          Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in.
          Explicabo id ut laborum.
        </p>

        {/* xs to lg */}
        <div className="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden">
          {tiers.map((tier) => (
            <section
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'rounded-xl bg-white/5 ring-1 ring-inset ring-white/10' : '',
                'p-8'
              )}
            >
              <h3 id={tier.id} className="text-sm font-semibold leading-6 text-white">
                {tier.name}
              </h3>
              <p className="mt-2 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold text-white">{tier.priceMonthly}</span>
                <span className="text-sm font-semibold text-gray-300">/month</span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-indigo-500 text-white hover:bg-indigo-400 focus-visible:outline-indigo-500'
                    : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                  'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                )}
              >
                Buy plan
              </a>
              <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-white">
                {sections.map((section) => (
                  <li key={section.name}>
                    <ul role="list" className="space-y-4">
                      {section.features.map((feature) =>
                        feature.tiers[tier.name] ? (
                          <li key={feature.name} className="flex gap-x-3">
                            <CheckIcon className="h-6 w-5 flex-none text-indigo-400" aria-hidden="true" />
                            <span>
                              {feature.name}{' '}
                              {typeof feature.tiers[tier.name] === 'string' ? (
                                <span className="text-sm leading-6 text-gray-400">({feature.tiers[tier.name]})</span>
                              ) : null}
                            </span>
                          </li>
                        ) : null
                      )}
                    </ul>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* lg+ */}
        <div className="isolate mt-20 hidden lg:block">
          <div className="relative -mx-8">
            {tiers.some((tier) => tier.mostPopular) ? (
              <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
                <div
                  className="flex w-1/4 px-4"
                  aria-hidden="true"
                  style={{ marginLeft: `${(tiers.findIndex((tier) => tier.mostPopular) + 1) * 25}%` }}
                >
                  <div className="w-full rounded-t-xl border-x border-t border-white/10 bg-white/5" />
                </div>
              </div>
            ) : null}
            <table className="w-full table-fixed border-separate border-spacing-x-8 text-left">
              <caption className="sr-only">Pricing plan comparison</caption>
              <colgroup>
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
                <col className="w-1/4" />
              </colgroup>
              <thead>
                <tr>
                  <td />
                  {tiers.map((tier) => (
                    <th key={tier.id} scope="col" className="px-6 pt-6 xl:px-8 xl:pt-8">
                      <div className="text-sm font-semibold leading-7 text-white">{tier.name}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <span className="sr-only">Price</span>
                  </th>
                  {tiers.map((tier) => (
                    <td key={tier.id} className="px-6 pt-2 xl:px-8">
                      <div className="flex items-baseline gap-x-1 text-white">
                        <span className="text-4xl font-bold">{tier.priceMonthly}</span>
                        <span className="text-sm font-semibold leading-6">/month</span>
                      </div>
                      <a
                        href={tier.href}
                        className={classNames(
                          tier.mostPopular
                            ? 'bg-indigo-500 hover:bg-indigo-400 focus-visible:outline-indigo-600'
                            : 'bg-white/10 hover:bg-white/20 focus-visible:outline-white',
                          'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                        )}
                      >
                        Buy plan
                      </a>
                    </td>
                  ))}
                </tr>
                {sections.map((section, sectionIdx) => (
                  <Fragment key={section.name}>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={4}
                        className={classNames(
                          sectionIdx === 0 ? 'pt-8' : 'pt-16',
                          'pb-4 text-sm font-semibold leading-6 text-white'
                        )}
                      >
                        {section.name}
                        <div className="absolute inset-x-8 mt-4 h-px bg-white/10" />
                      </th>
                    </tr>
                    {section.features.map((feature) => (
                      <tr key={feature.name}>
                        <th scope="row" className="py-4 text-sm font-normal leading-6 text-white">
                          {feature.name}
                          <div className="absolute inset-x-8 mt-4 h-px bg-white/5" />
                        </th>
                        {tiers.map((tier) => (
                          <td key={tier.id} className="px-6 py-4 xl:px-8">
                            {typeof feature.tiers[tier.name] === 'string' ? (
                              <div className="text-center text-sm leading-6 text-gray-300">
                                {feature.tiers[tier.name]}
                              </div>
                            ) : (
                              <>
                                {feature.tiers[tier.name] === true ? (
                                  <CheckIcon className="mx-auto h-5 w-5 text-indigo-400" aria-hidden="true" />
                                ) : (
                                  <MinusIcon className="mx-auto h-5 w-5 text-gray-500" aria-hidden="true" />
                                )}

                                <span className="sr-only">
                                  {feature.tiers[tier.name] === true ? 'Included' : 'Not included'} in {tier.name}
                                </span>
                              </>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
