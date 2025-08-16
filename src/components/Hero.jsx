import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const Hero = () => {
	return (
		<section
			id="home"
			className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
					{/* Left Side - Text Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center md:text-left space-y-8"
					>
						<div className="space-y-6">
							<motion.h1
								className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight"
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.2 }}
							>
								Hi, I'm{" "}
								<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
									Mostafa Ahnaf Hossain
								</span>
							</motion.h1>

							<motion.h2
								className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-semibold h-8"
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.4 }}
							>
								A{" "}
								<span className="text-blue-600 dark:text-blue-400">
									<TypeAnimation
										sequence={[
											"MERN Stack Developer",
											1500,
											"Problem Solver",
											1500,
											"Tech Enthusiast",
											1500,
										]}
										wrapper="span"
										speed={50}
										repeat={Infinity}
									/>
								</span>
							</motion.h2>

							<motion.p
								className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0"
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.6 }}
							>
								A passionate advocate for modern web development, I excel at
								creating scalable and elegant code that transforms concepts into
								robust and intuitive web applications.
							</motion.p>

							<motion.div
								className="flex gap-4 justify-center md:justify-start flex-wrap"
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.8 }}
							>
								<a
									href="https://drive.google.com/file/d/1lG8dCxVDPYKGtfpkx53s1Ymt-31aA0uh/view?usp=sharing"
									target="_blank"
									rel="noopener noreferrer"
									className="px-6 py-3 text-md text-white rounded-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
								>
									<Download size={18} />
									View Resume
								</a>
								<a
									href="https://drive.google.com/file/d/1XPVXziKUJA_K3Zui1gXYhb02nYWeXhIo/view?usp=sharing"
									target="_blank"
									rel="noopener noreferrer"
									className="px-6 py-3 text-md text-white rounded-lg font-semibold bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
								>
									<Download size={18} />
									View CV
								</a>
							</motion.div>
						</div>

						{/* Social Icons */}
						<motion.div
							className="flex justify-center md:justify-start space-x-6"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1 }}
						>
							<a
								target="_blank"
								href="https://github.com/Ahnaf-221B"
								className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-transform hover:scale-110"
								aria-label="GitHub"
							>
								<FaGithub size={28} />
							</a>
							<a
								target="_blank"
								href="https://www.linkedin.com/in/mostafa-ahnaf-hossain/"
								className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-transform hover:scale-110"
								aria-label="LinkedIn"
							>
								<FaLinkedin size={28} />
							</a>
							<a
								target="_blank"
								href="https://twitter.com/yourusername"
								className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-transform hover:scale-110"
								aria-label="Twitter"
							>
								<FaTwitter size={28} />
							</a>
						</motion.div>
					</motion.div>

					{/* Right Side - Profile Image */}
					<motion.div
						className="flex justify-center md:justify-end"
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
					>
						<div className="relative group">
							<div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl hover:shadow-3xl transition-all duration-500 relative">
								<img
									src="https://i.postimg.cc/Pq8LbPSy/IMG-20250411-232603-173.jpg"
									alt="Profile"
									className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
							</div>
							<motion.div
								className="absolute bottom-6 right-6 bg-white dark:bg-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg text-blue-600 dark:text-blue-400"
								initial={{ scale: 0 }}
								animate={{ scale: 1 }}
								transition={{ delay: 1.2 }}
							>
								MERN Developer
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
