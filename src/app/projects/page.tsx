import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  size: "large" | "medium" | "small";
}

const projects: Project[] = [
  {
    id: 1,
    title: "EduConnect",
    description: "Connect With Your Kids Teachers - Keep contact with teachers and help them to ensure your children's successful education journey.",
    image: "/projects/placeholder-1.jpg",
    tags: ["React Native", "Firebase", "TypeScript"],
    size: "large",
  },
  {
    id: 2,
    title: "Bookmarks Manager",
    description: "A Google Chrome extension to manage bookmarks with collections, search, and organization features.",
    image: "/projects/placeholder-2.jpg",
    tags: ["React", "TypeScript", "IndexedDB", "Chrome API"],
    size: "medium",
  },
  {
    id: 3,
    title: "Smokie",
    description: "A designer who's comfortable with code - Fluent brings the fundamentals of principled design, innovation in technology, and customer needs together as one.",
    image: "/projects/placeholder-3.jpg",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    size: "medium",
  },
  {
    id: 4,
    title: "Kanari",
    description: "Cloud storage solution with file management, statistics, and organization features for seamless file handling.",
    image: "/projects/placeholder-4.jpg",
    tags: ["React", "Node.js", "PostgreSQL", "AWS S3"],
    size: "medium",
  },
  {
    id: 5,
    title: "GameHost",
    description: "Host your favourite games, hassle free! Supercharge your game hosting experience with power across multiple games.",
    image: "/projects/placeholder-5.jpg",
    tags: ["Next.js", "Docker", "Kubernetes"],
    size: "medium",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const sizeClasses = {
    large: "md:col-span-2 md:row-span-2",
    medium: "md:col-span-1 md:row-span-1",
    small: "md:col-span-1 md:row-span-1",
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10 hover:border-violet-400/50 ${sizeClasses[project.size]}`}
    >
      {/* Image Container */}
      <div className="relative w-full h-64 md:h-full min-h-62.5 overflow-hidden">
        {/* Placeholder gradient background */}
        <div className="absolute inset-0 bg-linear-to-br from-violet-500/20 via-pink-500/20 to-cyan-500/20 dark:from-violet-900/40 dark:via-pink-900/40 dark:to-cyan-900/40" />
        
        {/* Placeholder pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(139,92,246,0.1)_25%,rgba(139,92,246,0.1)_50%,transparent_50%,transparent_75%,rgba(139,92,246,0.1)_75%)] bg-size-[20px_20px]" />
        </div>

        {/* Placeholder icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-2xl bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-gray-400 dark:text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>

        {/* Uncomment this when you have actual images */}
        {/* <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        /> */}
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-linear-to-t from-black/90 via-black/60 to-transparent">
        <h3 className="text-lg md:text-xl font-bold text-white mb-1">
          {project.title}
        </h3>
        <p className="text-sm text-gray-300 mb-3 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-violet-500/20 text-violet-200 border border-violet-500/30 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-4 md:px-8 lg:px-16 py-8 md:py-12">
      {/* Header Section */}
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
          Projects
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
          Here you will find a selection of projects I have worked on.
        </p>
      </div>

      {/* Projects Grid - Bento Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(280px,auto)]">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

        {/* Let's Work Together Card */}
        <div className="flex flex-col items-center justify-center rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 p-8 text-center">
          {/* Chat Bubble Icon */}
          <div className="relative mb-6">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              className="drop-shadow-lg"
            >
              {/* Main bubble */}
              <path
                d="M10 35C10 20 22 10 40 10C58 10 70 20 70 35C70 50 58 55 40 55C38 55 30 55 25 60C23 62 20 60 20 57V52C14 48 10 42 10 35Z"
                fill="#C4B5FD"
                stroke="#1f2937"
                strokeWidth="2.5"
              />
              {/* Left eye */}
              <circle cx="30" cy="32" r="3" fill="#1f2937" />
              {/* Right eye */}
              <circle cx="50" cy="32" r="3" fill="#1f2937" />
              {/* Smile */}
              <path
                d="M32 42C32 42 36 48 40 48C44 48 48 42 48 42"
                stroke="#1f2937"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Let&apos;s Work Together!
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Have a project in mind? Let&apos;s talk about it.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <svg
              className="w-4 h-4 rotate-90"
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
            Contact Me
          </Link>
        </div>
      </div>
    </main>
  );
}
