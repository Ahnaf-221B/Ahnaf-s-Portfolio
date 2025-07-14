import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
	return (
		<section
			id="home"
			className="pt-20 min-h-screen flex items-center bg-gradient-to-r from-gray-300 to-gray-500"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
					{/* Left Side - Text Content */}
					<div className="text-center md:text-left space-y-8">
						<div className="space-y-4">
							<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
								Hi, I'm{" "}
								<span className="text-indigo-600">Mostafa Ahnaf Hossain</span>
							</h1>

							<h2 className="text-xl sm:text-2xl text-gray-700 font-semibold h-8">
								A{" "}
								<span className="text-indigo-600">
									<Typewriter
										words={[
											"MERN Stack Developer",
											"Problem Solver",
											"Tech Enthusiast",
										]}
										loop={0}
										cursor
										cursorStyle="|"
										typeSpeed={70}
										deleteSpeed={50}
										delaySpeed={1500}
									/>
								</span>
							</h2>

							<p className="text-lg text-gray-700 max-w-xl mx-auto md:mx-0 mb-8">
								A passionate advocate for modern web development, I excel at
								creating scalable and elegant code that transforms concepts into
								robust and intuitive web applications. My focus is on delivering
								high-quality, performant solutions that not only meet but exceed
								expectations, bringing innovative ideas to the digital
								forefront.
							</p>

							<div className="flex gap-4 justify-center md:justify-start">
								<a
									href="https://drive.google.com/file/d/1lG8dCxVDPYKGtfpkx53s1Ymt-31aA0uh/view?usp=sharing"
									target="_blank"
									rel="noopener noreferrer"
									className="px-4 py-2 text-md text-white rounded-t-lg font-semibold bg-blue-600"
								>
									View Resume
								</a>
								<a
									href="https://drive.google.com/file/d/1XPVXziKUJA_K3Zui1gXYhb02nYWeXhIo/view?usp=sharing"
									target="_blank"
									rel="noopener noreferrer"
									className="px-4 py-2 text-md text-white rounded-t-lg font-semibold bg-blue-600"
								>
									View CV
								</a>
							</div>
						</div>

						{/* Social Icons */}
						<div className="flex justify-center md:justify-start space-x-6">
							<a
								target="_blank"
								href="https://github.com/Ahnaf-221B"
								className="text-gray-600 hover:text-indigo-600 transition-transform transform hover:scale-110"
								aria-label="GitHub"
							>
								<FaGithub size={30} />
							</a>
							<a
								target="_blank"
								href="https://www.linkedin.com/in/mostafa-ahnaf-hossain/"
								className="text-gray-600 hover:text-indigo-600 transition-transform transform hover:scale-110"
								aria-label="LinkedIn"
							>
								<FaLinkedin size={30} />
							</a>
						</div>
					</div>

					{/* Right Side - Profile Image */}
					<div className="flex justify-center md:justify-end">
						<div className="relative group">
							<div className="w-72 h-72 md:w-95 md:h-100 rounded-full overflow-hidden border-8 border-white shadow-xl hover:shadow-2xl transition-all duration-500">
								<img
									src="https://i.postimg.cc/Pq8LbPSy/IMG-20250411-232603-173.jpg"
									alt="Profile"
									className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
								/>
							</div>
							<div className="absolute bottom-4 right-4 bg-white px-4 py-1 rounded-full text-sm font-medium shadow-md text-indigo-600 sm:block">
								MERN Developer
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
