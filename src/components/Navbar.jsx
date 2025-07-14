import React, { useState } from "react";
import { Download, Menu, X } from "lucide-react";

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

	return (
		<nav className="fixed top-0 w-full backdrop-blur-md border-b-2 border-gray-300 z-50 shadow-lg ">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="hidden md:flex items-center justify-between h-16 w-full">
					{/* Logo */}
					<div className="flex-shrink-0">
						<h1 className="text-2xl font-extrabold text-white items-center flex bg-black rounded-full h-16 w-16 justify-center">
							MAH
						</h1>
					</div>

					{/* Centered Navigation Sections */}
					<div className="flex-grow flex justify-center space-x-6">
						{sections.map((section) => (
							<a
								key={section}
								href={`#${section}`}
								className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all"
							>
								{section.charAt(0).toUpperCase() + section.slice(1)}
							</a>
						))}
					</div>

					{/* Resume & CV Buttons */}
					<div className="flex-shrink-0 flex items-center space-x-3">
						<a
							href={docLink1}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2"
						>
							<Download size={16} />
							Resume
						</a>
						<a
							href={docLink2}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2"
						>
							<Download size={16} />
							CV
						</a>
					</div>
				</div>

				{/* Mobile Header */}
				<div className="md:hidden flex justify-between items-center h-16">
					{/* Logo */}
					<h1 className="text-2xl font-extrabold text-white items-center flex bg-black rounded-full h-16 w-16 justify-center">
						MAH
					</h1>

					{/* Menu Button */}
					<button
						onClick={toggleMobileMenu}
						className="text-gray-700 hover:text-blue-600 focus:outline-none"
					>
						{isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>
			</div>

			{/* Mobile Navigation Menu */}
			{isMobileMenuOpen && (
				<div className="md:hidden px-4 pb-4 pt-2 space-y-2 bg-white shadow-md">
					{sections.map((section) => (
						<a
							key={section}
							href={`#${section}`}
							className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium transition-all"
							onClick={() => setIsMobileMenuOpen(false)}
						>
							{section.charAt(0).toUpperCase() + section.slice(1)}
						</a>
					))}
					<a
						href={docLink1}
						target="_blank"
						rel="noopener noreferrer"
						className="block text-blue-600 hover:underline font-semibold px-3 pt-2"
						onClick={() => setIsMobileMenuOpen(false)}
					>
						Resume
					</a>
					<a
						href={docLink2}
						target="_blank"
						rel="noopener noreferrer"
						className="block text-blue-600 hover:underline font-semibold px-3 pt-2"
						onClick={() => setIsMobileMenuOpen(false)}
					>
						CV
					</a>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
