import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { useState } from "react";
import PropTypes from "prop-types";

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
		skill: "NextJS",
		icon: SiNextdotjs,
		color: "text-white",
		bgColor: "from-gray-700/20 to-gray-900/20",
		proficiency: "Beginner",
		progress: 30
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

const SkillCard = ({ skill, icon: Icon, color, bgColor, proficiency, progress, index }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<motion.div
			variants={fadeIn("up", index * 0.1)}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.7 }}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			whileHover={{ y: -10, scale: 1.05 }}
			className="group relative cursor-pointer"
		>
			{/* Glowing background effect */}
			<div
				className={`absolute inset-0 bg-gradient-to-br ${bgColor} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
			></div>

			{/* Main card */}
			<div className="relative bg-gray-900/70 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-green/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-green/10">
				{/* Tech icon */}
				<div className="flex flex-col items-center space-y-4">
					<div className="relative">
						<motion.div
							animate={
								isHovered
									? { rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }
									: {}
							}
							transition={{ duration: 0.5 }}
							className={`text-6xl ${color} group-hover:drop-shadow-lg transition-all duration-300`}
						>
							<Icon />
						</motion.div>

						{/* Floating particles */}
						<div className="absolute -top-1 -right-1 w-2 h-2 bg-green/50 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
						<div
							className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-cyan/50 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"
							style={{ animationDelay: "0.5s" }}
						></div>
					</div>

					{/* Skill name */}
					<h3 className="text-center text-white font-bold text-lg group-hover:text-green transition-colors duration-300">
						{skill}
					</h3>

					{/* Progress bar */}
					<div className="w-full bg-gray-700/50 rounded-full h-1.5">
						<motion.div
							className="bg-gradient-to-r from-green to-cyan h-1.5 rounded-full"
							initial={{ width: 0 }}
							animate={isHovered ? { width: `${progress}%` } : { width: 0 }}
							transition={{ duration: 1, delay: 0.2 }}
						/>
					</div>

					{/* Proficiency indicator */}
					<span className="text-xs text-gray-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						{proficiency}
					</span>
				</div>

				{/* Code decoration */}
				<div className="absolute top-2 right-2 text-green/20 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
					&lt;/&gt;
				</div>

				{/* Bottom scanning line */}
				<div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
			</div>
		</motion.div>
	);
};

SkillCard.propTypes = {
	skill: PropTypes.string.isRequired,
	icon: PropTypes.elementType.isRequired,
	color: PropTypes.string.isRequired,
	bgColor: PropTypes.string.isRequired,
	proficiency: PropTypes.string.isRequired,
	progress: PropTypes.number.isRequired,
	index: PropTypes.number.isRequired,
};

const AllSkillsSM = () => {
	return (
		<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 my-12 px-4 max-w-6xl mx-auto">
			{skills.map((item, index) => (
				<SkillCard
					key={index}
					skill={item.skill}
					icon={item.icon}
					color={item.color}
					bgColor={item.bgColor}
					proficiency={item.proficiency}
					progress={item.progress}
					index={index}
				/>
			))}
		</div>
	);
};

export default AllSkillsSM;
