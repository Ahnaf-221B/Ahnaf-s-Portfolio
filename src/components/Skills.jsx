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
	{
		icon: <FaHtml5 className="text-orange-500 text-4xl mb-3 mx-auto" />,
		label: "HTML",
	},
	{
		icon: <FaCss3Alt className="text-blue-500 text-4xl mb-3 mx-auto" />,
		label: "CSS",
	},
	{
		icon: <SiTailwindcss className="text-teal-500 text-4xl mb-3 mx-auto" />,
		label: "Tailwind CSS",
	},
	{
		icon: <BsStars className="text-purple-500 text-4xl mb-3 mx-auto" />,
		label: "DaisyUI",
	},
	{
		icon: <FaJs className="text-yellow-400 text-4xl mb-3 mx-auto" />,
		label: "JavaScript",
	},
	{
		icon: <FaReact className="text-cyan-500 text-4xl mb-3 mx-auto" />,
		label: "React",
	},
	{
		icon: <FaNodeJs className="text-green-600 text-4xl mb-3 mx-auto" />,
		label: "Node.js",
	},
	{
		icon: <SiExpress className="text-gray-700 text-4xl mb-3 mx-auto" />,
		label: "Express",
	},
	{
		icon: <SiMongodb className="text-green-500 text-4xl mb-3 mx-auto" />,
		label: "MongoDB",
	},
	{
		icon: <FaFire className="text-orange-600 text-4xl mb-3 mx-auto" />,
		label: "Firebase",
	},
	{
		icon: <FaCuttlefish className="text-black text-4xl mb-3 mx-auto" />,
		label: "C",
	},
	{
		icon: <SiCplusplus className="text-blue-800 text-4xl mb-3 mx-auto" />,
		label: "C++",
	},
	{
		icon: <FaPython className="text-yellow-600 text-4xl mb-3 mx-auto" />,
		label: "Python",
	},
	{
		icon: (
			<DiMsqlServer size={50} className="text-red-400 text-4xl mb-3 mx-auto" />
		),
		label: "Microsoft SQL",
	},
];

const containerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};
const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 100,
			damping: 12,
		},
	},
};

const Skills = () => {
	return (
		<section
			id="skills"
			className="py-20 bg-gradient-to-b from-gray-400 to-white"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
						Skills & Technologies
					</h2>
					<div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
				</div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center"
				>
					{skills.map((skill, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
						>
							{skill.icon}
							<h3 className="text-sm font-semibold text-gray-800">
								{skill.label}
							</h3>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Skills;
