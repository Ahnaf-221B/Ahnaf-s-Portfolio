import React, { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const sections = ["home", "about", "skills", "projects", "contact"];
	const docLink1 =
		"https://drive.google.com/file/d/1lG8dCxVDPYKGtfpkx53s1Ymt-31aA0uh/view?usp=sharing";
	const docLink2 =
		"https://drive.google.com/file/d/1XPVXziKUJA_K3Zui1gXYhb02nYWeXhIo/view?usp=sharing";

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	// Animation variants
	const navItem = {
		hidden: { opacity: 0, y: -20 },
		visible: (i) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.1,
			},
		}),
	};

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ type: "spring", stiffness: 300, damping: 20 }}
			className="fixed top-0 w-full backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700 z-50 shadow-sm"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center justify-between h-20">
					{/* Logo with animation */}
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="flex-shrink-0"
					>
						<a href="#home" className="flex items-center">
							<div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-0.5">
								<div className="h-full w-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
									<span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
										MAH
									</span>
								</div>
							</div>
						</a>
					</motion.div>

					{/* Navigation Links */}
					<div className="flex-grow flex justify-center space-x-1">
						{sections.map((section, i) => (
							<motion.a
								key={section}
								custom={i}
								initial="hidden"
								animate="visible"
								variants={navItem}
								href={`#${section}`}
								className="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
							>
								{section.charAt(0).toUpperCase() + section.slice(1)}
								<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
							</motion.a>
						))}
					</div>

					{/* Resume Buttons */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5 }}
						className="flex-shrink-0 flex items-center space-x-3"
					>
						<a
							href={docLink1}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
						>
							<Download size={16} />
							Resume
						</a>
						<a
							href={docLink2}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
						>
							<Download size={16} />
							CV
						</a>
					</motion.div>
				</div>

				{/* Mobile Navigation */}
				<div className="md:hidden flex justify-between items-center h-20">
					{/* Mobile Logo */}
					<motion.div
						whileTap={{ scale: 0.9 }}
						className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-0.5"
					>
						<div className="h-full w-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
							<span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
								MAH
							</span>
						</div>
					</motion.div>

					{/* Mobile Menu Button */}
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						onClick={toggleMobileMenu}
						className="text-gray-700 dark:text-gray-300 focus:outline-none"
						aria-label="Toggle menu"
					>
						{isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
					</motion.button>
				</div>
			</div>

			{/* Mobile Menu Dropdown */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg"
					>
						<div className="px-4 pt-2 pb-6 space-y-4">
							{sections.map((section) => (
								<motion.a
									key={section}
									initial={{ x: -20, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ type: "spring" }}
									href={`#${section}`}
									className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-base font-medium transition-all rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									{section.charAt(0).toUpperCase() + section.slice(1)}
								</motion.a>
							))}
							<div className="pt-2 space-y-3 border-t border-gray-200 dark:border-gray-700">
								<a
									href={docLink1}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-lg text-base font-medium transition-all"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									<Download size={18} />
									Download Resume
								</a>
								<a
									href={docLink2}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center justify-center gap-2 w-full bg-gray-900 dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-700 text-white px-4 py-3 rounded-lg text-base font-medium transition-all"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									<Download size={18} />
									Download CV
								</a>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
};

export default Navbar;
