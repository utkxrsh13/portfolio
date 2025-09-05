import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
    proficiency: "Expert",
    progress: 95
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
    proficiency: "Expert",
    progress: 90
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
    proficiency: "Advanced",
    progress: 85
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
    proficiency: "Intermediate",
    progress: 75
  },
  {
    skill: "ReactJS",
    icon: FaReact,
    proficiency: "Advanced",
    progress: 88
  },
  {
    skill: "Redux",
    icon: SiRedux,
    proficiency: "Intermediate",
    progress: 70
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
    proficiency: "Expert",
    progress: 92
  },
  {
    skill: "Nodejs",
    icon: FaNode,
    proficiency: "Advanced",
    progress: 82
  },
  {
    skill: "Expressjs",
    icon: SiExpress,
    proficiency: "Advanced",
    progress: 78
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
    proficiency: "Intermediate",
    progress: 72
  },
  {
    skill: "JAVA",
    icon: FaJava,
    proficiency: "Beginner",
    progress: 60
  },
];

const AllSkills = () => {
  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 my-12 px-4 max-w-6xl mx-auto">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", index * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
          >
            <SingleSkill
              key={index}
              text={item.skill}
              imgSvg={<item.icon />}
              proficiency={item.proficiency}
              progress={item.progress}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkills;
