import { ArrowUpRight, Github } from "lucide-react"
import { AnimatedBorderButton } from "../components/AnimatedBorderButton"

type ProjectsType = {
  title: string,
  description: string,
  image: string,
  tags: string[],
  link: string,
  github: string,
}
const projects: ProjectsType[] = [
  {
    title: 'FinTech Dashboard',
    description: 'A comprehensive financial analytics platform with real-time data visualization, portfolio management, and Al-powered insights.',
    image: '/project-pic.jpeg',
    tags: ['React', 'TypeScript', 'Node.js'],
    link: '#',
    github: '#'
  },
  {
    title: 'E-Commerce Platform',
    description: 'A comprehensive financial analytics platform with real-time data visualization, portfolio management, and Al-powered insights.',
    image: '/project-pic.jpeg',
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    link: '#',
    github: '#'
  },
  {
    title: 'FinTech Dashboard',
    description: 'A comprehensive financial analytics platform with real-time data visualization, portfolio management, and Al-powered insights.',
    image: '/project-pic.jpeg',
    tags: ["React", "OpenAI", "Python", "FastAPI"],
    link: '#',
    github: '#'
  },
  {
    title: 'FinTech Dashboard',
    description: 'A comprehensive financial analytics platform with real-time data visualization, portfolio management, and Al-powered insights.',
    image: '/project-pic.jpeg',
    tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    link: '#',
    github: '#'
  },
]
export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-pimary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-hightlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
        <div className="mx-auto text-center max-w-3xl mb-16">
          <span className="text-secondary-fore ground text-sm font-medium tracking-wider uppercase animate-fade-in">featured work</span>
          <h2 className="text-4xl md:text-5xl font-bold  mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground ">
            Projects that
            <span className="font-serif italic font-normal text-white" >
              {" "}
              Make an Impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">A selection of my recent work, from complex web applications to innovative tools that solve real-world problems.</p>
        </div>

        {/* projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div 
              key={i}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{animationDelay: `${(i + 1) * 100}ms`}}
            >
              {/* image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"></div>
                {/* overlay links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground">
                    <ArrowUpRight className="w-5 h-5" /> 
                  </a>
                  <a 
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              {/* content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-tiranslate-y-1 transition-all"/> 
                </div>
                <p className="text-muted-foreground text-xs">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* view all cta */}
        <div className="text-center mt-12 animate-fade-in animation-dealy-500">
          <AnimatedBorderButton>
            View All
            <ArrowUpRight />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>

  )
}