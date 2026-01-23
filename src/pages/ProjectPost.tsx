import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, Tag, Layers } from "lucide-react";
import { projects } from "@/data/projectData";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";
import { SEO } from "@/components/SEO";
import { SmartImage } from "@/components/ui/SmartImage";
import { WoodyPost } from "@/content/projects/woody.tsx";
import { AudiencePost } from "@/content/projects/audience.tsx";
import { BukPost } from "@/content/projects/buk.tsx";
import { RikoHDPost } from "@/content/projects/rikohd.tsx";
import { AmandelPost } from "@/content/projects/amandel.tsx";
import { VenomPost } from "@/content/projects/venom.tsx";
import { SnePost } from "@/content/projects/sne.tsx";
import { ExonPost } from "@/content/projects/exon.tsx";
import { BookPost } from "@/content/projects/book.tsx";
import { YaoPost } from "@/content/projects/yao.tsx";
import { CoronaPost } from "@/content/projects/corona.tsx";
import { BelialPost } from "@/content/projects/belial.tsx";

// Map project IDs to their component implementations
const PROJECT_COMPONENTS: Record<string, React.ComponentType> = {
  "1": WoodyPost, // Woody FoodTruck
  "2": AudiencePost, // Audience
  "3": BukPost, // Buk
  "4": RikoHDPost, // RikoHD
  "6": AmandelPost, // Amandel
  "7": VenomPost, // Venom
  "8": ExonPost, // Exon
  "9": SnePost, // Sne
  "10": BookPost, //Book
  "11": YaoPost, // Yao
  "12": CoronaPost, // Corona
  "13": BelialPost, // Belial

  // Add more project components here as they're created
};

export function ProjectPost() {
  const { t } = useLanguage();
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen pt-32 px-6 text-center">
        <h1 className="text-3xl text-white mb-4">{t.projects.notFound}</h1>
        <Link to="/projects">
          <Button variant="outline">{t.projects.back}</Button>
        </Link>
      </div>
    );
  }

  const translated = (t.data.projects as any)[project.id] || {};
  const title = translated.title || project.title;

  // Get the component for this project if it exists
  const ProjectComponent = PROJECT_COMPONENTS[project.id];

  return (
    <article className="min-h-screen pt-24 pb-20">
      <SEO
        title={title}
        description={translated.content || project.content?.substring(0, 150)} // Simple fallback for description
        image={project.coverImage}
        type="article"
      />
      {/* Hero Header */}
      <div className="relative h-[60vh] w-full overflow-hidden mb-12">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <SmartImage
          src={project.coverImage}
          alt={title}
          width={1600}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <span className="inline-block px-4 py-2 bg-amber-500 text-black font-bold rounded-full mb-6 uppercase tracking-wider text-sm">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
                {title}
              </h1>
              <div className="flex flex-wrap justify-center gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-amber-500" />
                  <span>{project.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-amber-500" />
                  {project.images && (
                    <span>
                      {project.images.length + 1} {t.projects.images}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl">
        <Link
          to="/projects"
          className="inline-flex items-center text-amber-500 hover:text-amber-400 mb-8 transition-colors"
        >
          <Button
            variant="outline"
            className="mb-8 text-gray-400 hover:text-amber-500"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.projects.back}
          </Button>
        </Link>

        {/* Content */}
        {ProjectComponent ? (
          <div className="prose prose-invert prose-lg max-w-none mb-16">
            <ProjectComponent />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-white mb-6">
                  {t.projects.about}
                </h2>
                <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                  <p className="whitespace-pre-line">
                    {translated.content || project.content}
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Tag className="w-4 h-4 text-amber-500" />
                    {t.projects.tags}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm bg-black/50 text-gray-300 px-3 py-1 rounded-full border border-white/10"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">
                {t.projects.gallery}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.images &&
                  project.images.map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`rounded-xl overflow-hidden border border-white/10`}
                    >
                      <SmartImage
                        src={img}
                        alt={`${title} detail ${index + 1}`}
                        width={1200}
                        className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
                      />
                    </motion.div>
                  ))}
              </div>
            </div>
          </>
        )}
        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-white/10 mt-16">
          {(() => {
            const currentIndex = projects.findIndex((p) => p.id === project.id);
            const prevProject =
              currentIndex > 0 ? projects[currentIndex - 1] : null;
            const nextProject =
              currentIndex < projects.length - 1
                ? projects[currentIndex + 1]
                : null;

            return (
              <div className="grid grid-cols-3 gap-6 items-center w-full ">
                <div className="w-full">
                  {prevProject ? (
                    <Link
                      to={`/projects/${prevProject.id}`}
                      className="group flex flex-col gap-1 border dark:border-neutral-800 rounded-lg px-6 py-4 w-full dark:bg-neutral-900 dark:hover:bg-neutral-800"
                    >
                      <span className="text-sm text-muted-foreground group-hover:text-amber-500 transition-colors flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" /> Previous
                      </span>
                      <span className="text-foreground font-medium truncate max-w-[200px] hidden md:block">
                        {((t.data.projects as any)[prevProject.id] || {})
                          .title || prevProject.title}
                      </span>
                    </Link>
                  ) : (
                    <div className="invisible">Previous</div>
                  )}
                </div>

                <Link to="/projects" className="w-full h-full">
                  <Button
                    variant="outline"
                    className="px-6 dark:border-white/20 dark:hover:bg-white/10 w-full h-full"
                  >
                    {t.projects.back}
                  </Button>
                </Link>

                <div className="w-full">
                  {nextProject ? (
                    <Link
                      to={`/projects/${nextProject.id}`}
                      className="group flex flex-col gap-1 items-end border dark:border-neutral-800 rounded-lg px-6 py-4 w-full dark:bg-neutral-900 dark:hover:bg-neutral-800"
                    >
                      <span className="text-sm text-muted-foreground group-hover:text-amber-500 transition-colors flex items-center gap-2">
                        Next <ArrowLeft className="w-4 h-4 rotate-180" />
                      </span>
                      <span className="text-foreground font-medium truncate max-w-[200px] hidden md:block">
                        {((t.data.projects as any)[nextProject.id] || {})
                          .title || nextProject.title}
                      </span>
                    </Link>
                  ) : (
                    <div className="invisible">Next</div>
                  )}
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </article>
  );
}
