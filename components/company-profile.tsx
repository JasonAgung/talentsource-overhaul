import Image from 'next/image';

export default function CompanyProfilePage() {
  // Daftar negara untuk dropdown, bisa diperbanyak atau diambil dari API
  const countries = [
    "Afghanistan",
    "Indonesia",
    "Malaysia",
    "Singapore",
    "United States",
    "United Kingdom",
  ];

  return (
    <main>
      {/* === Title Bar Section === */}
      <section className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-wider">
            COMPANY PROFILE
          </h1>
          {/* <div className="text-sm">
            <span>Home</span> / <span className="font-semibold">Company Profile</span>
          </div> */}
        </div>
      </section>

      {/* === Main Content Section === */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            
            <div className="space-y-6">
              <div className="aspect-video overflow-hidden rounded-lg shadow-md">
                <Image
                  src="/company-profile.jpg" 
                  alt="Company event at Telkomsel"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-600 leading-relaxed">
                TalentSource is truly Indonesian Consulting and Solution company which
                comprises the Indonesian experienced and highly knowledgeable
                partners with hands-on experience and most recent techniques, ready to
                help companies/organizations in Indonesia in their digital
                transformation journey.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Get the TS Company Profile
              </h2>
              <form className="space-y-5">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                    First name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="work-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Work email
                  </label>
                  <input
                    type="email"
                    id="work-email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Select Country
                  </label>
                  <select
                    id="country"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    {countries.map((country) => (
                      <option key={country}>{country}</option>
                    ))}
                  </select>
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-8 rounded-md transition-colors"
                  >
                    Download
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}