import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Linkedin from "@/components/linkedin";

const testimonials = [
  {
    name: "Valentin Torres",
    role: "Software Engineer",
    company: "OpenGov",
    content:
      "I had the pleasure of working with Adrian on a number of projects and was consistently impressed by his ability to deliver high quality work in a timely manner. Not only was he efficient in his tasks, but he was also a valuable resource for newer developers on the team. His technical expertise and willingness to help others made him a valuable asset to the team. I highly recommend Adrian for any project, as I know he will consistently deliver results and be a valuable resource to any team",
    linkedinUrl: "https://linkedin.com/in/example1",
  },
  {
    name: "Pedro Freitas, CFA",
    role: "ML Engineer",
    company: "Reddit",
    content: (
      <>
        I had the pleasure of working with Adrian on a few projects, even though
        we were on separate teams. Adrian proved to be a dedicated and reliable
        teammate, consistently showing great ability in solving problems and
        implementing requirements.
        <br />
        <br />
        In addition to his technical skills, he also demonstrated strong
        leadership abilities, effectively guiding and motivating the team to
        achieve our project goals. Adrian is a skilled web developer with a
        strong attention to detail and a passion for delivering high-quality
        work.
        <br />
        <br />
        It was a pleasure to work with Adrian and I would highly recommend him
        for any team looking for a dedicated, talented, and leadership-focused
        web developer.
      </>
    ),
    linkedinUrl: "https://linkedin.com/in/example2",
  },
  {
    name: "Matias Feld",
    role: "Computer Engineer",
    company: "Tech Startup in Tel Aviv",
    content: (
      <>
        Adrian has a lot of experience with React. He knows everything that
        needs to be known and all of the catchiest things. He always tried to
        make the code better and find better ways to do things.
        <br />
        <br />
        But beyond his technical skills, what really stood out to me was his
        concern for the team. He was always willing to lend a helping hand to
        anyone who needed it and was always looking out for the best interests
        of the team as a whole. He always tried to help with team organization
        and make things easier for the other developers.
      </>
    ),

    linkedinUrl: "https://linkedin.com/in/example3",
  },
  {
    name: "Vinicius Monteiro",
    role: "Software Engineer",
    company: "TurboTenant",
    content:
      "Adrian is a brilliant and gifted senior engineer who really understands how to help his teammates while doing his job with mastery. In the few months I have been working with him I could see that he has the ability to deal with conflicting priorities in high-pressure situations. I highly recommend Adrian if you are looking for a great Senior Frontend Engineer.",
    linkedinUrl: "https://linkedin.com/in/example4",
  },
  {
    name: "Gabriel Vaquer",
    role: "Senior Full-Stack Developer",
    company: "Akurey",
    content:
      "I interviewed him and I recommended my company to hire him and, oh boy I was right. Adrian was the best developer I had the pleasure to work with. His ethics and sense of organization makes him go beyond being a simple developer that gets the job done. He is well suited to manage a team of people and provide valuable input from the product itself to choosing the right tool to organize a team to choosing the right approach to develop entire features. If you're tempted to include him in your team, do it. You're not going to regret it. I would work with him again and again until AI destroy us all.",
    linkedinUrl: "https://linkedin.com/in/example5",
  },
  {
    name: "Marko A. Michinaux Mogollon",
    role: "Web Developer (React, Typescript, NodeJs, Python, Go)",
    company: "Tech Agency in Venezuela",
    content: (
      <>
        Adrian was quickly promoted to Capnote's Front End Tech lead after
        showing his senior tier knowledge in React, work ethics, high drive and
        commitment to take a leadership's role.
        <br />
        <br />
        He delivered plenty of complex features intended for the Capnote
        dashboard in schedule, meeting all the client's requirements. I also
        believe his experience as an engineer teaching a physics's course at the
        local college allowed him to properly mentor junior devs teammates, as
        they increasingly improved and started contributing on their own.
        <br />
        <br />
        Regardless Adrian's mainly focused on Front End, He owns the talent and
        perseverance to produce quality work on any field in web development, if
        not, software engineering in general. I have no qualms in asking him for
        guidance in regards of webdev tech stacks.
      </>
    ),
    linkedinUrl: "https://linkedin.com/in/example6",
  },
  {
    name: "Miguel Chiquin",
    role: "Software Engineer",
    company: "Space Plan Wizard",
    content: (
      <>
        Adrian has a great talent for software development, and problem solving,
        showing great skills to build complex UI functionalities, and always
        caring about code quality. Besides he has showed a great level of
        commitment towards the project, working even many extra hours to get the
        work done and keep the clients satisfied.
        <br />
        <br />
        He has also shown great leadership in the front end team and the
        capacity to know when to delegate a task to the ideal teammate.
        Proactivity is one of its greatest values, He's always participating and
        collaborating with all the parties involved in the project to make sure
        that the client is getting the product they need. Proposing ideas,
        defining and assigning tasks among many others, are the things he's
        usually doing besides his front-end lead role.
      </>
    ),
    linkedinUrl: "https://linkedin.com/in/example6",
  },
  {
    name: "Jose Salas",
    role: "Software Engineer",
    company: "Tech Agency in Panama",
    content: (
      <>
        Since I have the opportunity to work with Adrian, I can excel his
        leadership into the developer team, always showing a path to follow and
        he has the important attribute to listen any suggestions.
        <br />
        <br />
        In the other hand, he has strong tech knowledge in Front End
        Technologies like React.Js, Redux Toolkit & Typescript. With him I've
        taking the opportunity to get more experience as a Developer and
        Professional, he always has a good way to delivery any rich advices, for
        that reason I feel really comfortable to work with him and pretty sure
        all the developer team feels same.
      </>
    ),
    linkedinUrl: "https://linkedin.com/in/example6",
  },
  {
    name: "Roger Gomez",
    role: "Software Engineer",
    company: "Vascar Solutions",
    content: (
      <>
        As of this writing, Adrian and I have been working together for three
        months. Adrián has been an excellent mentor and leader, he has helped me
        improve my skills. Has a great ability to solve problems and extensive
        knowledge in web development. It will be a key piece in any work team.
      </>
    ),
    linkedinUrl: "https://linkedin.com/in/example6",
  },
  {
    name: "Jose Canache",
    role: "Full-stack Developer",
    company: "Circular",
    content: (
      <>
        Adrian is a person who loves programming. He has the ability to quickly
        learn new technologies and easily adapt to every situation. He always
        tries to help the team in everything. He is also very good at problem
        solving and coming up with new ideas.
      </>
    ),
    linkedinUrl: "https://linkedin.com/in/example6",
  },
  {
    name: "Lino Francisco Bossio Pittini",
    role: "Backend Developer",
    company: "Tech Agency in Gothenburg",
    content: (
      <>
        Adrian in the guy you always want on your team. He is a masterming
        solving complex problems to which he always finds clever solutions. Is
        always planing ahead and helping the team to complete in time the
        assignments. Couldn't recommend him more.
      </>
    ),
    linkedinUrl: "https://linkedin.com/in/example6",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    const newIndex =
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex =
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  const getVisibleTestimonials = () => {
    const extendedTestimonials = [
      ...testimonials,
      ...testimonials,
      ...testimonials,
    ];
    const startIndex = currentIndex + testimonials.length;
    return extendedTestimonials.slice(startIndex, startIndex + 3);
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            What Colleagues Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Testimonials from industry professionals who have worked with me
          </p>
        </div>

        {/* Carousel Container - Hidden on mobile */}
        <div className="hidden md:block relative group">
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 bg-white/80 backdrop-blur-sm shadow-lg rounded-full p-3 hover:bg-white transition-all duration-300 group-hover:opacity-100 opacity-0 focus:opacity-100 group-hover:-translate-x-4 focus:-translate-x-4 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-slate-700" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 bg-white/80 backdrop-blur-sm shadow-lg rounded-full p-3 hover:bg-white transition-all duration-300 group-hover:opacity-100 opacity-0 focus:opacity-100 group-hover:translate-x-4 focus:translate-x-4 cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-slate-700" />
          </button>

          <div className="overflow-hidden rounded-3xl">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              {getVisibleTestimonials().map((testimonial, index) => (
                <div
                  key={`${currentIndex}-${index}`}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform border border-slate-100 relative overflow-hidden animate-fade-in"
                >
                  {/* Content */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-500 rounded-full opacity-5"></div>
                  <div className="absolute top-6 right-6 text-blue-500 opacity-10">
                    <Quote size={48} />
                  </div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex-1">
                      <p className="text-slate-700 mb-6 leading-relaxed italic text-sm md:text-base">
                        "{testimonial.content}"
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-slate-600">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 ml-14">
                      <span className="inline-block bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">
                        @{testimonial.company}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-10 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? "bg-blue-600 w-8"
                    : "bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden overflow-x-auto snap-x snap-mandatory flex gap-6 pb-6 scrollbar-hide">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="snap-start flex-shrink-0 w-[90vw] bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="flex-1">
                <p className="text-slate-700 mb-6 leading-relaxed italic text-sm">
                  "{testimonial.content}"
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <span className="inline-block bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">
                  @{testimonial.company}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://www.linkedin.com/in/adrianberia2013/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            <Linkedin
              className="w-6 h-6 group-hover:text-white transition-colors duration-300"
              style={{ fill: "currentColor" }}
            />
            View All Recommendations on LinkedIn
            <ArrowRight
              size={18}
              className="text-blue-600 group-hover:text-white transition-colors duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
