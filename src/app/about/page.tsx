import Link from "next/link";

const experiences = [
  {
    title: "Senior Software Developer",
    company: "Tech Company",
    period: "2024 - Present",
    description: "Leading frontend development and creating design systems.",
  },
  {
    title: "Fullstack Developer",
    company: "Startup Inc",
    period: "2022 - 2024",
    description: "Built scalable web applications using React and Node.js.",
  },
  {
    title: "UI/UX Designer",
    company: "Design Studio",
    period: "2020 - 2022",
    description: "Designed user interfaces and crafted user experiences.",
  },
];

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "UI/UX Design", level: 88 },
  { name: "Tailwind CSS", level: 95 },
  { name: "PostgreSQL / MongoDB", level: 80 },
];

const interests = [
  { icon: "🎨", label: "Design" },
  { icon: "💻", label: "Coding" },
  { icon: "📚", label: "Reading" },
  { icon: "🎮", label: "Gaming" },
  { icon: "🎵", label: "Music" },
  { icon: "✈️", label: "Travel" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen relative">
      {/* Background gradient blobs - Fixed position behind everything */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-125 h-125 bg-orange-400/20 dark:bg-orange-500/15 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-300/30 dark:bg-pink-300/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-125 h-125 bg-cyan-400/20 dark:bg-cyan-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-400/25 dark:bg-violet-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-pink-400/20 dark:bg-pink-400/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-8 lg:px-16 py-8 md:py-12">
        {/* Hero Section */}
        <section>
          {/* Header */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              About Me
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
              Get to know more about me, my journey, and what drives my passion for creating digital experiences.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-4 md:gap-6">
            {/* Left Column - Bio */}
            <div className="space-y-4 md:space-y-6">
              {/* Profile Card */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-800 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/5 hover:border-violet-400/30">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                  {/* Avatar */}
                  <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-violet-300 dark:border-violet-500 shadow-lg shrink-0">
                    <div className="w-full h-full bg-linear-to-br from-violet-200 to-violet-300 dark:from-violet-800 dark:to-violet-900 flex items-center justify-center">
                      <svg className="w-16 h-16 text-violet-400 dark:text-violet-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  </div>

                  <div className="text-center sm:text-left">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      Aakanksha Garg
                    </h2>
                    <p className="text-violet-600 dark:text-violet-400 font-medium mb-2">
                      Fullstack Developer & Designer
                    </p>
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                      <span>📍</span>
                      <span>Based in India</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p>
                    Hello! I&apos;m a passionate <span className="font-semibold text-gray-900 dark:text-white">fullstack developer</span> with a strong foundation in <span className="font-semibold text-gray-900 dark:text-white">design</span>. I love creating seamless digital experiences that are both beautiful and functional.
                  </p>
                  <p>
                    With expertise spanning from UI/UX design to backend development, I bring ideas to life through clean code and thoughtful design. I believe that great software is not just about functionality—it&apos;s about crafting experiences that users love.
                  </p>
                  <p>
                    When I&apos;m not coding, you&apos;ll find me exploring new design trends, contributing to open-source projects, or enjoying a good cup of coffee while reading about the latest in tech.
                  </p>
                </div>
              </div>

              {/* Interests */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/5 hover:border-violet-400/30">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Interests & Hobbies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {interests.map((interest) => (
                    <span
                      key={interest.label}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 text-sm font-medium"
                    >
                      <span>{interest.icon}</span>
                      {interest.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Skills & Experience */}
            <div className="space-y-4 md:space-y-6">
              {/* Skills */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-800 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/5 hover:border-violet-400/30">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Skills & Expertise
                </h3>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-linear-to-r from-violet-500 to-pink-500 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Timeline */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-800 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/5 hover:border-violet-400/30">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Experience
                </h3>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-1.75 top-2 bottom-2 w-0.5 bg-gray-200 dark:bg-gray-700" />

                  <div className="space-y-6">
                    {experiences.map((exp, index) => (
                      <div key={index} className="relative pl-6">
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-violet-500 border-2 border-white dark:border-gray-900" />

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {exp.title}
                          </h4>
                          <p className="text-violet-600 dark:text-violet-400 text-sm font-medium">
                            {exp.company}
                          </p>
                          <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">
                            {exp.period}
                          </p>
                          <p className="text-gray-600 dark:text-gray-300 text-sm">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fun Facts Section */}
        <section className="py-12 md:py-16 -mx-4 md:-mx-8 lg:-mx-16 px-4 md:px-8 lg:px-16 mt-12 bg-gray-50/80 dark:bg-gray-900/70 backdrop-blur-sm border-y border-gray-200 dark:border-gray-800">
          <div className="">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Quick Facts
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/5 hover:-translate-y-1">
              <div className="text-3xl md:text-4xl font-bold text-violet-500 mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Years Experience</div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/5 hover:-translate-y-1">
              <div className="text-3xl md:text-4xl font-bold text-pink-500 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5 hover:-translate-y-1">
              <div className="text-3xl md:text-4xl font-bold text-cyan-500 mb-2">30+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Happy Clients</div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 text-center border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5 hover:-translate-y-1">
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">∞</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Cups of Coffee</div>
            </div>
          </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
          {/* Chat bubble icon */}
          <div className="relative mb-6 inline-block">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              className="drop-shadow-lg"
            >
              <path
                d="M10 35C10 20 22 10 40 10C58 10 70 20 70 35C70 50 58 55 40 55C38 55 30 55 25 60C23 62 20 60 20 57V52C14 48 10 42 10 35Z"
                className="fill-violet-300 dark:fill-violet-400"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              <circle cx="30" cy="32" r="3" fill="currentColor" />
              <circle cx="50" cy="32" r="3" fill="currentColor" />
              <path
                d="M32 42C32 42 36 48 40 48C44 48 48 42 48 42"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let&apos;s Create Something Amazing Together!
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-violet-500 hover:bg-violet-600 text-white font-medium transition-colors"
            >
              <svg
                className="w-5 h-5 rotate-90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
              Get In Touch
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              View Projects
            </Link>
          </div>
        </div>
        </section>
      </div>
    </main>
  );
}
