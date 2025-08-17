import React from "react";
import { motion } from "framer-motion";

const Education = () => {
	const educationData = {
		university: "International Islamic University Chittagong",
		degree: "B.Sc. in Computer Science & Engineering",
		duration: "2023 – Present",
		logo: "https://i.postimg.cc/vTRT7NbD/image.png",
	};

	return (
		<section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12"
				>
					<h2 className="text-4xl font-bold text-gray-800 dark:text-white">
						🎓 Education
					</h2>
					<p className="text-gray-600 dark:text-gray-300 mt-2">
						My academic background
					</p>
					<div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4 rounded-full" />
				</motion.div>

				{/* Education Card */}
				<motion.div
					whileHover={{ y: -5 }}
					className="flex flex-col sm:flex-row items-center bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 max-w-4xl mx-auto"
				>
					<div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 mb-6 sm:mb-0 sm:mr-8">
						<img
							src={educationData.logo}
							alt={educationData.university}
							className="w-full h-full object-contain rounded-full border-2 border-gray-200 dark:border-gray-700 p-1"
						/>
					</div>

					<div className="text-center sm:text-left">
						<h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white">
							{educationData.university}
						</h3>
						<p className="text-lg sm:text-xl font-medium mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
							{educationData.degree}
						</p>
						<p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">
							{educationData.duration}
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Education;
