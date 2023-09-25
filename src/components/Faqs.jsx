// import Image from 'next/image'

// import { Container } from '@/components/Container'
// import backgroundImage from '@/images/background-faqs.jpg'

// const faqs = [
//   [
//     {
//       question: 'Does TaxPal handle VAT?',
//       answer:
//         'Well no, but if you move your company offshore you can probably ignore it.',
//     },
//     {
//       question: 'Can I pay for my subscription via purchase order?',
//       answer: 'Absolutely, we are happy to take your money in all forms.',
//     },
//     {
//       question: 'How do I apply for a job at TaxPal?',
//       answer:
//         'We only hire our customers, so subscribe for a minimum of 6 months and then let’s talk.',
//     },
//   ],
//   [
//     {
//       question: 'What was that testimonial about tax fraud all about?',
//       answer:
//         'TaxPal is just a software application, ultimately your books are your responsibility.',
//     },
//     {
//       question:
//         'TaxPal sounds horrible but why do I still feel compelled to purchase?',
//       answer:
//         'This is the power of excellent visual design. You just can’t resist it, no matter how poorly it actually functions.',
//     },
//     {
//       question:
//         'I found other companies called TaxPal, are you sure you can use this name?',
//       answer:
//         'Honestly not sure at all. We haven’t actually incorporated or anything, we just thought it sounded cool and made this website.',
//     },
//   ],
//   [
//     {
//       question: 'How do you generate reports?',
//       answer:
//         'You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.',
//     },
//     {
//       question: 'Can we expect more inventory features?',
//       answer: 'In life it’s really better to never expect anything at all.',
//     },
//     {
//       question: 'I lost my password, how do I get into my account?',
//       answer:
//         'Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.',
//     },
//   ],
// ]

// export function Faqs() {
//   return (
//     <section
//       id="faq"
//       aria-labelledby="faq-title"
//       className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
//     >
//       <Image
//         className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
//         src={backgroundImage}
//         alt=""
//         width={1558}
//         height={946}
//         unoptimized
//       />
//       <Container className="relative">
//         <div className="mx-auto max-w-2xl lg:mx-0">
//           <h2
//             id="faq-title"
//             className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
//           >
//             Frequently asked questions
//           </h2>
//           <p className="mt-4 text-lg tracking-tight text-slate-700">
//             If you can’t find what you’re looking for, email our support team
//             and if you’re lucky someone will get back to you.
//           </p>
//         </div>
//         <ul
//           role="list"
//           className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
//         >
//           {faqs.map((column, columnIndex) => (
//             <li key={columnIndex}>
//               <ul role="list" className="flex flex-col gap-y-8">
//                 {column.map((faq, faqIndex) => (
//                   <li key={faqIndex}>
//                     <h3 className="font-display text-lg leading-7 text-slate-900">
//                       {faq.question}
//                     </h3>
//                     <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       </Container>
//     </section>
//   )
// }
'use client'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'


const faqs = [
  {
    question: "What is Metastudio?",
    answer:
      "Metastudio is a cutting-edge platform designed to elevate your 3D experience. From seamless collaboration tools to advanced 3D model utilities and top-tier security, we offer a comprehensive suite to optimize your 3D projects and maximize ROI.",
  },
  {
    question: "Can I access Metastudio on any device?",
    answer:
      "Yes! Metastudio is designed for universal access, ensuring flawless 3D visuals on every device, from desktops to mobiles.",
  },
  {
    question: "How does the 3D Model Tools & Viewer work?",
    answer:
      "Our 3D Tools & Viewer allows you to immerse in your 3D assets. You can easily convert formats, optimize for peak performance, and with our customizable viewer, tailor your 3D experience to your liking.",
  },
  {
    question: "What files can I use?",
    answer:
      "we accepts all the major 3d files extensions. Like GLB, GLTF, OBJ, FBX and many others.",
  },
  {
    question: "Is my data secure with Metastudio?",
    answer:
      "Absolutely. We prioritize the security of your 3D assets. Metastudio employs enterprise-level security measures to ensure your data remains uncompromised.",
  },
  {
    question: "How can Metastudio benefit my e-commerce platform?",
    answer:
      "Metastudios 3D visuals can be seamlessly integrated into your online store, providing a richer, more interactive product understanding for customers, which can lead to increased sales conversions.",
  },
  {
    question: "How does Metastudio enhance team collaboration?",
    answer:
      "With features like intuitive feedback loops, streamlined asset approval, and version management, Metastudio fosters efficient team collaboration, speeding up time to market and enhancing project outcomes.",
  },
  {
    question: "How can Metastudio impact my ROI?",
    answer:
      "By optimizing your 3D projects, speeding up time to market, and providing tools for better collaboration and security, Metastudio is designed to positively impact your return on investment.",
  },
  // More questions...
]

export  function Faqs() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-300">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
