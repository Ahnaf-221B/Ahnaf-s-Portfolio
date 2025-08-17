import {
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaReact,
	FaNodeJs,
	FaPython,
	FaFire,
	FaCuttlefish,
} from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import {
	SiTailwindcss,
	SiMongodb,
	SiCplusplus,
	SiExpress,
} from "react-icons/si";
import { BsStars } from "react-icons/bs";
import { motion } from "framer-motion";

const skills = [
	{ icon: <FaHtml5 />, label: "HTML", color: "text-orange-500" },
	{ icon: <FaCss3Alt />, label: "CSS", color: "text-blue-500" },
	{ icon: <SiTailwindcss />, label: "Tailwind CSS", color: "text-teal-500" },
	{ icon: <BsStars />, label: "DaisyUI", color: "text-purple-500" },
	{ icon: <FaJs />, label: "JavaScript", color: "text-yellow-400" },
	{ icon: <FaReact />, label: "React", color: "text-cyan-500" },
	{ icon: <FaNodeJs />, label: "Node.js", color: "text-green-600" },
	{ icon: <SiExpress />, label: "Express", color: "text-gray-700" },
	{ icon: <SiMongodb />, label: "MongoDB", color: "text-green-500" },
	{ icon: <FaFire />, label: "Firebase", color: "text-orange-600" },
	{ icon: <FaCuttlefish />, label: "C", color: "text-black" },
	{ icon: <SiCplusplus />, label: "C++", color: "text-blue-800" },
	{ icon: <FaPython />, label: "Python", color: "text-yellow-600" },
	{
		icon: <DiMsqlServer size={24} />,
		label: "Microsoft SQL",
		color: "text-red-400",
	},
];

const Skills = () => {
	return (
		<section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
						Skills & Technologies
					</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
				</motion.div>

				{/* Skills Grid */}
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
					{skills.map((skill, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true, margin: "0px 0px -100px 0px" }}
							transition={{
								duration: 0.4,
								delay: index * 0.05,
								type: "spring",
								stiffness: 200,
								damping: 15,
							}}
							whileHover={{ y: -5 }}
							className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-center"
						>
							<div className={`${skill.color} text-4xl mb-3`}>{skill.icon}</div>
							<h3 className="text-sm sm:text-base font-medium text-gray-800 dark:text-gray-200 text-center">
								{skill.label}
							</h3>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
