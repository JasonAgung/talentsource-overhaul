import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export function CorporatePartners() {
  const partnershipCriteria = [
    "can complement TS in order to achieve its vision statement",
    "Located in Indonesia, most preferably in Bandung",
    "Young and vibrant company or startup",
    "Believe and fully aligned to TS mission statement",
  ];

  return (
    <>
      <section className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-wider">
            CORPORATE PARTNERS
          </h1>
          {/* <div className="text-sm">
            <span>Home</span> / <span className="font-semibold">Corporate Partners</span>
          </div> */}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800">
                TS has standing partnership agreement with company which:
              </h2>
              <ul className="space-y-4">
                {partnershipCriteria.map((criteria, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center mr-3 mt-1">
                      <ChevronRight className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-600 leading-relaxed">{criteria}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-center">
              <div className="flex justify-center mb-6">
                <Image
                  src="/corporate-partners.png" 
                  alt="corporate-partners"
                  width={300}
                  height={100}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-700 leading-relaxed text-left">
                In December 2019, TS sealed-in a strategic long-term
                partnership agreement with a vibrant high performing digital
                service start-up in Bandung which strategically combine
                the complementing resources of the two companies
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}