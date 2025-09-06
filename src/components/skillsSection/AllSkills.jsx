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
    color: "text-orange-500",
    bgColor: "from-orange-500/20 to-red-500/20",
    proficiency: "Expert",
    progress: 99
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
    color: "text-blue-500",
    bgColor: "from-blue-500/20 to-cyan-500/20",
    proficiency: "Expert",
    progress: 80
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
    color: "text-yellow-400",
    bgColor: "from-yellow-400/20 to-orange-400/20",
    proficiency: "Intermediate",
    progress: 85
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-400",
    bgColor: "from-blue-400/20 to-blue-600/20",
    proficiency: "Beginner",
    progress: 50
  },
  {
    skill: "ReactJS",
    icon: FaReact,
    color: "text-cyan-400",
    bgColor: "from-cyan-400/20 to-blue-400/20",
    proficiency: "Advanced",
    progress: 100
  },
  {
    skill: "Redux",
    icon: SiRedux,
    color: "text-purple-500",
    bgColor: "from-purple-500/20 to-pink-500/20",
    proficiency: "Intermediate",
    progress: 70
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
    color: "text-cyan-400",
    bgColor: "from-cyan-400/20 to-teal-400/20",
    proficiency: "Expert",
    progress: 92
  },
  {
    skill: "Node.js",
    icon: FaNode,
    color: "text-green-500",
    bgColor: "from-green-500/20 to-emerald-500/20",
    proficiency: "Intermediate",
    progress: 80
  },
  {
    skill: "Express.js",
    icon: SiExpress,
    color: "text-gray-300",
    bgColor: "from-gray-300/20 to-gray-500/20",
    proficiency: "Intermediate",
    progress: 70
  },
  {
    skill: "MongoDB",
    icon: SiMongodb,
    color: "text-green-400",
    bgColor: "from-green-400/20 to-green-600/20",
    proficiency: "Intermediate",
    progress: 72
  },
  {
    skill: "Java",
    icon: FaJava,
    color: "text-red-500",
    bgColor: "from-red-500/20 to-orange-600/20",
    proficiency: "Expert",
    progress: 90
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
