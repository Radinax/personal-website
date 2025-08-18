import {
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  ExternalLink,
} from "lucide-react";

const blogArticles = [
  {
    title:
      "Professional Frontend Deployment Pipelines: From Code to Production",
    excerpt:
      "A deep dive into modern frontend deployment workflows, including CI/CD, artifact management, static vs. dynamic hosting, and zero-downtime strategies for enterprise applications.",
    readTime: "8 min read",
    date: "August 12, 2025",
    category: "Concept",
    tags: ["Devops", "CI/CD", "Deployment"],
    link: "https://adrian-beria-blog.netlify.app/blog/106_ci-cd-pipelines",
  },
  {
    title:
      "Mastering Data Transformation in Node.js: Sorting, Deduplication & Cleaning",
    excerpt:
      "Learn how to fetch, sort, deduplicate, and clean JSON data in Node.js with deep dives into object manipulation, case-insensitive sorting, and structural integrity preservation.",
    readTime: "12 min read",
    date: "August 6, 2025",
    category: "Backend",
    tags: ["Node", "Algorithms"],
    link: "https://adrian-beria-blog.netlify.app/blog/103_nodejs-excercise",
  },
  {
    title: "Live coding with React 19 and Next 15",
    excerpt:
      "This is an article showing an example of a live coding interview for a Senior Frontend Developer position with heavy focus on async operations and how to fetch with React Query and parse with Zod.",
    readTime: "10 min read",
    date: "June 23, 2025, 2024",
    category: "Frontend",
    tags: ["React", "Next", "Node", "Zod"],
    link: "https://adrian-beria-blog.netlify.app/blog/98_react-19-and-next-15-interview/",
  },
  {
    title: "Leading Cross-Functional Teams: A Developer's Guide",
    excerpt:
      "Essential strategies for technical leaders to effectively collaborate with design, product, and business stakeholders.",
    readTime: "6 min read",
    date: "March 5, 2025",
    category: "Leadership",
    tags: ["Leadership", "Team Management", "Communication", "Strategy"],
    link: "https://adrian-beria-blog.netlify.app/blog/94_how-to-become-a-lead/",
  },
];

const BlogArticles = () => {
  return (
    <section id="articles" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Articles
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-100 max-w-2xl mx-auto">
            Sharing insights on modern development practices, team leadership,
            and technical innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogArticles.map((article, index) => (
            <article
              key={index}
              className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-white bg-red-600 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <Clock size={14} />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {article.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button className="flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors duration-300 cursor-pointer">
                    <span>Read Article</span>
                    <ExternalLink
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://adrian-beria-blog.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            <BookOpen size={20} />
            <span>View All Articles</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogArticles;
