import { motion } from "framer-motion";

const About = () => {
	return (
		<section id="about" className="py-24 bg-gray-50 dark:bg-gray-900">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Heading with subtle animation */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
						About Me
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
				</motion.div>

				{/* About Content - Only animating the container */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="max-w-7xl mx-auto"
				>
					<div className="bg-white dark:bg-gray-800 shadow-lg rounded-3xl p-8 sm:p-10 lg:p-14 transition-all duration-300 hover:shadow-xl">
						<p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
							I'm a passionate{" "}
							<span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
								MERN Stack Developer
							</span>{" "}
							with a strong foundation in modern web technologies. I specialize
							in building scalable and user-friendly applications using{" "}
							<strong className="text-blue-600 dark:text-blue-400">
								MongoDB
							</strong>
							,{" "}
							<strong className="text-blue-600 dark:text-blue-400">
								Express.js
							</strong>
							,{" "}
							<strong className="text-blue-600 dark:text-blue-400">
								React
							</strong>
							, and{" "}
							<strong className="text-blue-600 dark:text-blue-400">
								Node.js
							</strong>
							.
						</p>

						<p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
							My journey has equipped me with diverse skills across both
							frontend and backend development, and I'm proficient in{" "}
							<strong className="text-blue-600 dark:text-blue-400">
								JavaScript
							</strong>
							,{" "}
							<strong className="text-blue-600 dark:text-blue-400">
								Python
							</strong>
							, <strong className="text-blue-600 dark:text-blue-400">C</strong>,
							and{" "}
							<strong className="text-blue-600 dark:text-blue-400">C++</strong>.
							I'm particularly enthusiastic about building responsive,
							accessible web applications that deliver smooth user experiences.
						</p>

						<p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
							Beyond coding, I enjoy staying current with emerging technologies,
							contributing to open-source, and exploring new frameworks and
							tools to push my capabilities forward.
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
