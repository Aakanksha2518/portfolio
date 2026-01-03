import Link from "next/link";

export default function Page() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden border-b border-gray-200 dark:border-gray-800">
        {/* Grid pattern overlay - Both themes */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(120,120,120,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(120,120,120,0.3) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Gradient blobs - Same for both themes */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-400/20 dark:bg-orange-500/15 rounded-full blur-3xl" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-300/40 dark:bg-pink-300/10 rounded-full blur-3xl" />
          <div className="absolute top-1/3 left-1/2 w-80 h-80 bg-red-300/30 dark:bg-red-300/10 rounded-full blur-3xl" />
          <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-cyan-400/25 dark:bg-cyan-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-300/30 dark:bg-cyan-300/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-pink-400/20 dark:bg-pink-400/10 rounded-full blur-3xl" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
            {/* Avatar and Title Row */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              {/* Avatar */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-violet-300 dark:border-violet-500 shadow-lg flex-shrink-0">
                <div className="w-full h-full bg-gradient-to-br from-violet-200 to-violet-300 dark:from-violet-800 dark:to-violet-900 flex items-center justify-center">
                  {/* Placeholder avatar - replace with actual image */}
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 text-violet-400 dark:text-violet-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>

              {/* Title */}
              <div className="text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
                  <span className="text-gray-900 dark:text-white">Hey, I&apos;m </span>
                  <span className="text-gray-900 dark:text-violet-400">Aakanksha Garg</span>
                  <span className="ml-1 sm:ml-2">✨</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold italic">
                  <span className="text-gray-900 dark:text-white">A </span>
                  <span className="text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-violet-400 dark:to-pink-400">Software Developer</span>
                </h2>
              </div>
            </div>

            {/* Description */}
            <div className="max-w-2xl text-center mt-2 sm:mt-4 px-2">
              <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg">
                A <span className="font-bold">fullstack developer</span> with solid foundations in <span className="font-bold">design.</span>
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg">
                passionate about crafting seamless user experiences I thrive at the intersection of creativity and functionality.
              </p>
            </div>

            {/* Buttons and Social Icons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
              {/* Contact Me Button */}
              <Link
                href="/contact"
                className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                Contact Me
              </Link>

              {/* View Projects Button */}
              <Link
                href="/projects"
                className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                View Projects
              </Link>

              {/* Divider */}
              <div className="hidden sm:block w-px h-8 bg-gray-300 dark:bg-gray-600 mx-2" />

              {/* Social Icons */}
              <div className="flex items-center gap-2 sm:gap-3">
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Link>
                <Link
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  aria-label="Dribbble"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-7.210.452-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z" />
                  </svg>
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Building Digital Experiences Section */}
      <section className="relative py-20 px-6 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
        <div className="relative z-10 container mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Building Digital Experiences
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl">
              I specialize in creating stunning user interfaces and developing high-quality applications that stand out.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* What I can do Card */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-6">
                What I can do
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                I can help develop solutions that will help you grow your business:
              </p>
              <ul className="space-y-2 text-gray-900 dark:text-white">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full" />
                  UI/UX Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full" />
                  Fullstack Web Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full" />
                  Mobile App Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full" />
                  Database Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full" />
                  API Integration
                </li>
              </ul>
            </div>

            {/* Tools I Use Card */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-6">
                Tools I Use
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                I use the latest tools and technologies to build functional and scalable products:
              </p>
              <ul className="space-y-3 text-gray-900 dark:text-white">
                <li>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full" />
                    <span className="font-semibold">Frontend:</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm ml-4">Tailwind CSS, React, TypeScript</p>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full" />
                    <span className="font-semibold">Backend:</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm ml-4">Node.js, Fastify, MongoDB, PostgreSQL</p>
                </li>
                <li>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full" />
                    <span className="font-semibold">Design:</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm ml-4">Figma, Framer, Photoshop</p>
                </li>
              </ul>
            </div>

            {/* UI/UX Design Card */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-6">
                UI/UX Design
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                I am a designer first, developer second. I can help design clean and modern interfaces:
              </p>
              <ul className="space-y-2 text-gray-900 dark:text-white">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full" />
                  User-Centered Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full" />
                  Modern & Clean UI
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full" />
                  Responsive Layouts
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full" />
                  Wireframes & Prototypes
                </li>
              </ul>
            </div>
          </div>

          {/* View My Projects Button */}
          <div className="flex justify-end">
            <Link
              href="/projects"
              className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              View My Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <div className="py-12 px-4">
        {/* Contact Form Section */}
        <section className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
          {/* Background - Light mode gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-pink-50 to-blue-50 dark:hidden" />

          {/* Background - Dark mode */}
          <div className="absolute inset-0 hidden dark:block bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-950" />

          {/* Wave pattern - Light mode (pink/purple waves) */}
          <svg
            className="absolute bottom-0 left-0 w-full h-80 dark:hidden"
            viewBox="0 0 1200 300"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="waveGradientLight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f9a8d4" />
                <stop offset="50%" stopColor="#c4b5fd" />
                <stop offset="100%" stopColor="#93c5fd" />
              </linearGradient>
            </defs>
            {[...Array(20)].map((_, i) => (
              <path
                key={i}
                d={`M0,${120 + i * 8} Q200,${80 + i * 6} 400,${120 + i * 8} T800,${120 + i * 8} T1200,${120 + i * 8}`}
                fill="none"
                stroke="url(#waveGradientLight)"
                strokeWidth="1.5"
                opacity={0.5 - i * 0.02}
              />
            ))}
          </svg>

          {/* Wave pattern - Dark mode (cyan/purple waves) */}
          <svg
            className="absolute bottom-0 left-0 w-full h-80 hidden dark:block"
            viewBox="0 0 1200 300"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="waveGradientDark" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            {[...Array(20)].map((_, i) => (
              <path
                key={i}
                d={`M0,${120 + i * 8} Q200,${80 + i * 6} 400,${120 + i * 8} T800,${120 + i * 8} T1200,${120 + i * 8}`}
                fill="none"
                stroke="url(#waveGradientDark)"
                strokeWidth="1.5"
                opacity={0.5 - i * 0.02}
              />
            ))}
          </svg>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 p-8 md:p-12 lg:p-16">
            {/* Left side - Text content */}
            <div className="flex-1 max-w-xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-violet-400 leading-tight mb-4">
                Bringing your ideas to life. Let&apos;s turn your vision into reality
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Have a project in mind or just want to chat? Let&apos;s connect!
              </p>
            </div>

            {/* Right side - Form */}
            <div className="w-full lg:w-auto">
              <form className="bg-white dark:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 w-full lg:w-80">
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-900 dark:text-gray-200 mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-900 dark:text-gray-200 mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="contact@example.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-900 dark:text-gray-200 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Your message here..."
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors resize-none"
                    />
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-white transition-colors"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}