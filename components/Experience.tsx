import React from "react";
import { workExperience } from "@/data";
import Image from 'next/image';
import { Button } from "./ui/MovingBorders";
import { Timeline } from "@/components/ui/timeline";
import { BackgroundGradient } from "./ui/BgGradient";


const Experience = () => {
    const data = [
    {
      title: "2020-Present",
      content: (
        <div>
          <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-white dark:bg-black-100">
            <h1 className="heading text-center text-xl md:text-2xl font-bold">
              Frontend Development
            </h1>
            <p className="text-center text-white-100 mt-3 font-semibold">
              React.js, Next.js, Redux
            </p>
            <ul className="mt-6 space-y-4 text-white list-disc list-inside">
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-purple rounded-full mr-2"></span>
                  Expert in building dynamic, responsive web applications with React.js.
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-purple rounded-full mr-2"></span>
                  Skilled in Redux for efficient state management in large-scale applications.
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-purple rounded-full mr-2"></span>
                  Utilizing Next.js for server-side rendering and performance optimization.
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-purple rounded-full mr-2"></span>
                  Focused on delivering high-performance, maintainable code.
              </li>
            </ul>
          </BackgroundGradient>
        </div>
      ),
    },
    {
      title: "2020-Present",
      content: (
        <div>
          <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-white dark:bg-black-100">
            <h1 className="heading text-center text-xl md:text-2xl font-bold">
              UI Designing
            </h1>
            <p className="text-center text-white-100 mt-3 font-semibold">
              Material UI, Framer Motion, Tailwind CSS, SCSS
            </p>
            <ul className="mt-6 space-y-4 text-white list-disc list-inside">
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-purple rounded-full mr-2"></span>
                  Proficient in Material UI for designing modern, responsive user interfaces.
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-purple rounded-full mr-2"></span>
                  Expertise in Framer Motion for creating smooth, interactive animations.
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-purple rounded-full mr-2"></span>
                  Skillful use of Tailwind CSS to optimize and streamline UI styling with utility-first principles.
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-purple rounded-full mr-2"></span>
                  Strong ability to design responsive layouts for various screen sizes and devices.
              </li>
              <li className="flex items-center">
                <span className="w-2.5 h-2.5 bg-purple rounded-full mr-2"></span>
                  Committed to prioritizing user experience and usability in all UI design projects.
              </li>
            </ul>
         </BackgroundGradient>
        </div>
      ),
    },
    {
      title: "2022-Present",
       content: (
        <div>
      <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-white dark:bg-black-100">
        <h1 className="heading text-center text-xl md:text-2xl font-bold">
          Backend Development
        </h1>
        <p className="text-center text-white-100 mt-3 font-semibold">
          Node.js, Express.js, Mongoose, S3
        </p>
        <ul className="mt-6 space-y-4 text-white list-disc list-inside">
          <li className="flex items-center">
            <span className="w-2.5 h-2.5 bg-purple rounded-full mr-2"></span>
            Proficient in Node.js and Express.js for robust RESTful APIs and scalable server applications.
          </li>
          <li className="flex items-center">
            <span className="w-2.5 h-2.5 bg-purple rounded-full mr-2"></span>
            Skilled in MongoDB and Mongoose for efficient data modeling and indexing.
          </li>
          <li className="flex items-center">
            <span className="w-2.5 h-2.5 bg-purple rounded-full mr-2"></span>
            Integrated AWS S3 for secure file storage, enhancing application performance.
          </li>
          <li className="flex items-center">
            <span className="w-2.5 h-2.5 bg-purple rounded-full mr-2"></span>
            Familiar with Clean Architecture and MVC principles for maintainable code.
          </li>
          <li className="flex items-center">
            <span className="w-2.5 h-2.5 bg-purple rounded-full mr-2"></span>
            Expertise in API testing and documentation with Postman, ensuring effective error handling and security.
          </li>
        </ul>
      </BackgroundGradient>
    </div>
  ),
},
{
  title: "2023-Present",
  content: (
    <div>
      <BackgroundGradient className="rounded-[22px] w-full p-4 sm:p-10 bg-white dark:bg-black-100">
        <h1 className="heading text-center text-xl md:text-2xl font-bold">
          AWS and Other Technologies
        </h1>
        <p className="text-center text-white-100 mt-3 font-semibold">
          EC2, S3, IAM, Docker, Kubernetes, Mosquitto, DSA
        </p>
        <ul className="mt-6 space-y-4 text-white list-disc list-inside">
          <li className="flex items-center">
            <span className="w-2.5 h-2.5 bg-purple rounded-full mr-2"></span>
            Proficient in managing AWS EC2 instances for scalable cloud computing solutions.
          </li>
          <li className="flex items-center">
            <span className="w-2.5 h-2.5 bg-purple rounded-full mr-2"></span>
            Skilled in AWS S3 for secure and scalable object storage, optimizing data management.
          </li>
          <li className="flex items-center">
            <span className="w-2.5 h-2.5 bg-purple rounded-full mr-2"></span>
            Experienced in AWS IAM for effective user access control and resource management.
          </li>
          <li className="flex items-center">
            <span className="w-2.5 h-2.5 bg-purple rounded-full mr-2"></span>
            Solid grasp of data structures and algorithms for performance analysis. 
          </li>
          <li className="flex items-center">
            <span className="w-2.5 h-2.5 bg-purple rounded-full mr-2"></span>
            Proficient in Docker and Kubernetes for efficient containerization and orchestration.
          </li>
          <li className="flex items-center">
            <span className="w-2.5 h-2.5 bg-purple rounded-full mr-2"></span>
            Experience with Mosquitto for efficient message brokering in IoT applications.
          </li>
        </ul>
      </BackgroundGradient>
    </div>
  ),
}
  ];
  return (
    <div className="py-20 w-full" id="experience">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <div className="lg:w-32 md:w-20 w-16 h-auto">
              <Image
                src={card.thumbnail}
                alt={card.thumbnail}
                layout="responsive" // Ensures responsiveness
                    width={100} // These act as aspect ratios
                    height={100} // Aspect ratio, doesn't force fixed size
                    className="object-contain"
                
              />
              </div>
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>

      <div>
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default Experience;
