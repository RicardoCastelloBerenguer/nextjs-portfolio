// app/page.js
import SectionContainer from "../components/SectionContainer";
import SocialPill from "../components/SocialPill";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import AboutMe from "../components/Icons/Aboutme.jsx";
import Linkedin from "../components/Icons/Linkedin";
import Github from "../components/Icons/Github";
import Email from "../components/Icons/Email";
import Badge from "../components/Badge";

export default function HomePage() {
  return (
    <main className="px-5 pt-14 md:pt-40">
      <SectionContainer className="w-full lg:w-[740px] mx-auto flex flex-col gap-5">
        <header className="flex items-center gap-5 relative">
          <img
            src="/profilePhoto.jpeg"
            alt="Ricardo photo"
            className="block md:hidden rounded-lg size-24"
          />
          <img
            src="/profilePhoto.jpeg"
            alt=""
            className="hidden md:block rounded-sm md:absolute size-96 bg-white right-28 -top-40 z-[-1]"
          />
          <div className="hidden md:block size-96 border-gray-400 rounded-sm border-2 absolute right-20 -top-32 z-[-2]"></div>
          <a
            className="flex items-center justify-center"
            rel="noopener"
            href="https://www.linkedin.com/in/ricardocastello/"
            target="_blank"
          >
            <Badge>Open to work!</Badge>
          </a>
        </header>
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-5xl text-white font-bold flex flex-row gap-x-4 pb-6">
            Ricardo Castelló
          </h1>
          <h2 className="text-lg lg:text-xl opacity-90 max-w-[600px] text-pretty">
            <span>2 Years of experience.</span>
            <span className="text-yellow-300 bg-[#00091d] rounded py-0.5 pr-1">
              Full Stack Software engineer
            </span>
            <br />
            with proven track record building high quality web applications.
          </h2>
        </div>

        <nav className="flex items-center gap-5 text-sm lg:text-base flex-wrap">
          <SocialPill href="https://www.linkedin.com/in/ricardocastello">
            <Linkedin className="size-5 md:size-10 group-hover:stroke-black" />
            <span className="text-xs sm:text-sm md:text-base">Linkedin</span>
          </SocialPill>
          <SocialPill
            href="https://github.com/RicardoCastelloBerenguer/"
            className="socialIcon hover:stroke-black"
          >
            <Github className="size-5 md:size-10 group-hover:stroke-black" />
            <span className="text-xs sm:text-sm md:text-base">Github</span>
          </SocialPill>
          <SocialPill href="mailto:ricardocastellob@gmail.com?Subject=Work%20Together">
            <Email className="size-5 md:size-10 group-hover:stroke-black" />
            <span className="text-xs sm:text-sm md:text-base">Email</span>
          </SocialPill>
        </nav>
      </SectionContainer>

      <SectionContainer id="experience">
        <header className="flex items-center gap-5 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-briefcase"
            width="33"
            height="33"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
            <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
            <path d="M12 12l0 .01"></path>
            <path d="M3 13a20 20 0 0 0 18 0"></path>
          </svg>
          <h2 className="font-bold text-lg md:text-xl lg:text-2xl">
            Professional Experience
          </h2>
        </header>
        <Experience />
      </SectionContainer>

      <SectionContainer id="projects">
        <header className="flex items-center gap-5 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-code"
            width="33"
            height="33"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M7 8l-4 4l4 4"></path>
            <path d="M17 8l4 4l-4 4"></path>
            <path d="M14 4l-4 16"></path>
          </svg>
          <h2 className="font-bold text-lg md:text-xl lg:text-2xl">Projects</h2>
        </header>
        <Projects />
      </SectionContainer>

      <SectionContainer id="skills">
        <header className="flex flex-col items-center justify-center gap-5 mb-2 border-gray-400 opacity-80">
          <div className="flex items-center justify-center gap-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brain"
              width="33"
              height="33"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8"></path>
              <path d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8"></path>
              <path d="M17.5 16a3.5 3.5 0 0 0 0 -7h-.5"></path>
              <path d="M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0"></path>
              <path d="M6.5 16a3.5 3.5 0 0 1 0 -7h.5"></path>
              <path d="M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10"></path>
            </svg>
            <h2 className="font-bold text-lg md:text-xl lg:text-2xl">Skills</h2>
          </div>
        </header>
        <Skills />
      </SectionContainer>

      <SectionContainer id="contact">
        <header className="group flex flex-col items-center gap-3">
          <div className="flex items-center gap-x-3">
            <AboutMe />
            <h2 className="font-bold text-lg md:text-xl lg:text-2xl">
              Contact me!
            </h2>
          </div>
          <p className="font-thin opacity-80 w-2/3 group-hover:opacity-100 mb-2">
            Do you want us to work together? I would love to learn more about
            your needs and how I can help you achieve your goals.
          </p>
          <span className="text-yellow-300">Contact me using :</span>
        </header>
        <main className="flex items-center justify-center w-full">
          <ul>
            <li className="flex items-center justify-between gap-x-4">
              <SocialPill href="https://www.linkedin.com/in/ricardocastello">
                <Linkedin className="size-5 md:size-10 group-hover:stroke-black" />
                <span className="text-xs sm:text-sm md:text-base">
                  Linkedin
                </span>
              </SocialPill>
              <SocialPill href="https://github.com/RicardoCastelloBerenguer/">
                <Github className="size-5 md:size-10 group-hover:stroke-black" />
                <span className="text-xs sm:text-sm md:text-base">Github</span>
              </SocialPill>
              <SocialPill href="mailto:ricardocastellob@gmail.com?Subject=Work%20Together">
                <Email className="size-5 md:size-10 group-hover:stroke-black" />
                <span className="text-xs sm:text-sm md:text-base">Email</span>
              </SocialPill>
            </li>
          </ul>
        </main>
      </SectionContainer>
    </main>
  );
}
