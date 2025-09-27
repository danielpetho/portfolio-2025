import ScrambleCombined from "@/components/scramble-combined";
import ScrambleIn from "@/components/scramble-in";
import ScrambleCombinedPair from "@/components/scramble-combined-pair";
import { experiences, projects, socials } from "@/data/content";
import Newsletter from "@/components/newsletter";
import {
  getAnimationDuration,
  ROW_DELAY,
  SCRAMBLE_SPEED,
  SCRAMBLED_LETTER_COUNT,
} from "@/lib/utils";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fefefe] text-black pl-4 lr-0 pt-10 pb-10 sm:px-4 sm:pt-10 sm:pb-10 md:pt-10 md:pb-10 lg:pt-12 lg:pb-12 md:p-10 lg:p-12 font-normal text-[4.9vw] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight sm:leading-tight">
      <div>
        <div className="relative max-w-screen-2xl mx-auto flex flex-col gap-16 sm:gap-18 md:gap-20 lg:gap-28">
          {/* Header - Row 1 */}
          <div className="flex flex-col sm:flex-row mb-4 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20">
            <div className="w-full mb-[2vw] sm:mb-0 sm:text-right sm:pr-6 md:pr-8 lg:pr-12 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-[22%]">
              <h1>
                <ScrambleCombined
                  delay={0}
                  scrambledLetterCount={SCRAMBLED_LETTER_COUNT}
                  scrambleSpeed={SCRAMBLE_SPEED}
                  className="font-bold"
                >
                  daniel petho
                </ScrambleCombined>
              </h1>
            </div>
            <div className="">
              <h1 className="pb-0.5 md:pb-0.5 lg>pb-1">
                <ScrambleIn
                  delay={getAnimationDuration("daniel petho")}
                  scrambledLetterCount={SCRAMBLED_LETTER_COUNT}
                  scrambleSpeed={SCRAMBLE_SPEED}
                >
                  design ✺&#xfe0e; tech ∿&#xfe0e; build ◳&#xfe0e;
                </ScrambleIn>
              </h1>
              <a
                href="https://krea.ai"
                target="_blank"
                className="cursor-pointer border-b-2 border-transparent md:hover:border-foreground"
              >
                <ScrambleCombined
                  delay={getAnimationDuration("daniel petho") + ROW_DELAY}
                  scrambledLetterCount={SCRAMBLED_LETTER_COUNT}
                  scrambleSpeed={SCRAMBLE_SPEED}
                  className="whitespace-pre"
                >
                  <span className="w-full whitespace-pre">
                    design engineer @ krea{" "}
                    <span className="md:hidden text-[3vw] sm:text-sm pb-1 -ml-0.5 font-medium">
                      ↗
                    </span>
                  </span>
                </ScrambleCombined>
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col sm:flex-row">
            <h2 className="w-full mb-[2vw] sm:mb-0 sm:text-right pr-4 sm:pr-6 md:pr-8 lg:pr-12 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-[22%]">
              <ScrambleIn
                delay={ROW_DELAY * 3 + getAnimationDuration("daniel petho")}
                scrambledLetterCount={SCRAMBLED_LETTER_COUNT}
                scrambleSpeed={SCRAMBLE_SPEED}
                className="font-bold"
              >
                newsletter
              </ScrambleIn>
            </h2>
            <Newsletter
              delay={ROW_DELAY * 4 + getAnimationDuration("daniel petho")}
            />
          </div>

          {/* Previous Experience */}
          <div className="flex sm:flex-row flex-col">
            <h2 className="w-full sm:text-right mb-[2vw] sm:mb-0 sm:pr-6 md:pr-8 lg:pr-12 sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-[22%]">
              <ScrambleIn
                delay={ROW_DELAY * 3}
                scrambledLetterCount={SCRAMBLED_LETTER_COUNT}
                scrambleSpeed={SCRAMBLE_SPEED}
                className="font-bold"
              >
                previous
              </ScrambleIn>
            </h2>
            <div className="flex-1 w-full">
              {experiences.map((exp, index) => (
                <a
                  href={exp.links}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <ScrambleCombinedPair
                    key={index}
                    leftText={
                      <span className="w-full whitespace-pre">
                        {exp.title}{" "}
                        <span className="md:hidden text-[3vw] sm:text-sm pb-1 -ml-0.5 font-medium">
                          ↗
                        </span>
                      </span>
                    }
                    leftTextString={exp.title}
                    rightText={exp.year}
                    delay={
                      ROW_DELAY * 3 +
                      getAnimationDuration("daniel petho") +
                      ROW_DELAY * index
                    }
                    scrambledLetterCount={SCRAMBLED_LETTER_COUNT}
                    scrambleSpeed={SCRAMBLE_SPEED}
                    containerClassName="group justify-between border-b-2 md:hover:border-foreground border-b-transparent cursor-pointer pb-0.5 md:pb-0.5 lg:pb-1"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="flex flex-col sm:flex-row">
            <h2 className="w-full mb-[2vw] sm:mb-0 sm:text-right pr-4 sm:pr-6 md:pr-8 lg:pr-12  sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-[22%]">
              <ScrambleIn
                delay={ROW_DELAY * 7}
                scrambledLetterCount={SCRAMBLED_LETTER_COUNT}
                scrambleSpeed={SCRAMBLE_SPEED}
                className="font-bold"
              >
                projects
              </ScrambleIn>
            </h2>
            <ul className="flex-1">
              {projects.map((project, index) => (
                <li key={index}>
                  <a
                    href={project.links}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ScrambleCombinedPair
                      key={index}
                      leftTextString={project.title}
                      leftText={
                        <span className="w-full whitespace-pre">
                          {project.title}{" "}
                          <span className="md:hidden text-[3vw] sm:text-sm pb-1 -ml-0.5 font-medium">
                            ↗
                          </span>
                        </span>
                      }
                      rightText={project.year}
                      delay={
                        ROW_DELAY * 7 +
                        getAnimationDuration("daniel petho") +
                        ROW_DELAY * index
                      }
                      img={project.img}
                      imgAlt={`${project.title} project thumbnail`}
                      showImage={true}
                      scrambledLetterCount={SCRAMBLED_LETTER_COUNT}
                      scrambleSpeed={SCRAMBLE_SPEED}
                      containerClassName="group justify-between border-b-2 md:hover:border-foreground border-b-transparent cursor-pointer pb-0.5 md:pb-0.5 lg:pb-1"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row">
            <h2 className="w-full mb-[2vw] sm:mb-0 sm:text-right pr-4 sm:pr-6 md:pr-8 lg:pr-12  sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-[22%]">
              <ScrambleIn
                delay={ROW_DELAY * 15}
                scrambledLetterCount={SCRAMBLED_LETTER_COUNT}
                scrambleSpeed={SCRAMBLE_SPEED}
                className="font-bold"
              >
                contact
              </ScrambleIn>
            </h2>
            <ul>
              <li>
                <ScrambleIn
                  delay={ROW_DELAY * 15 + getAnimationDuration("daniel petho")}
                  scrambledLetterCount={SCRAMBLED_LETTER_COUNT}
                  scrambleSpeed={SCRAMBLE_SPEED}
                >
                  hi@danielpetho.com
                </ScrambleIn>
              </li>
              <br />
              {socials.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.links}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer border-b-2 border-b-transparent md:hover:border-foreground pb-0.5 md:pb-0.5 lg:pb-1 inline-block"
                  >
                    <ScrambleCombined
                      delay={
                        ROW_DELAY * 17 +
                        getAnimationDuration("daniel petho") +
                        ROW_DELAY * index
                      }
                      scrambledLetterCount={SCRAMBLED_LETTER_COUNT}
                      scrambleSpeed={SCRAMBLE_SPEED}
                    >
                      {social.name}{" "}
                      <span className="md:hidden text-[3vw] sm:text-sm pb-1 -ml-0.5 font-medium">
                        ↗
                      </span>
                    </ScrambleCombined>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
