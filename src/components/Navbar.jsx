import React, { Component } from "react";
import { Download, Menu, X } from "lucide-react";

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isDropdownOpen: false,
			isMobileMenuOpen: false,
		};
	}

	toggleDropdown = () => {
		this.setState((prevState) => ({
			isDropdownOpen: !prevState.isDropdownOpen,
		}));
	};

	closeDropdown = () => {
		this.setState({ isDropdownOpen: false });
	};

	toggleMobileMenu = () => {
		this.setState((prevState) => ({
			isMobileMenuOpen: !prevState.isMobileMenuOpen,
		}));
	};

	render() {
		const { isDropdownOpen, isMobileMenuOpen } = this.state;

		return (
			<nav className="fixed top-0 w-full backdrop-blur-md border-b-2 border-gray-300 z-50 shadow-lg">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						{/* Logo */}
						<div>
							<h1 className="text-2xl font-extrabold text-white items-center flex bg-black rounded-full h-16 w-16 justify-center">
								MAH
							</h1>
						</div>

						{/* Desktop Navigation Links */}
						<div className="hidden md:block">
							<div className="ml-10 flex items-center space-x-6">
								{["home", "about", "skills", "projects", "contact"].map(
									(section) => (
										<a
											key={section}
											href={`#${section}`}
											className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
										>
											{section.charAt(0).toUpperCase() + section.slice(1)}
										</a>
									)
								)}
							</div>
						</div>

						{/* Resume Dropdown Button */}
						<div className="relative flex-shrink-0 hidden md:block">
							<button
								onClick={this.toggleDropdown}
								className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all"
							>
								<Download size={16} />
								Resume
							</button>

							{isDropdownOpen && (
								<div
									className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
									onMouseLeave={this.closeDropdown}
								>
									<a
										href="https://drive.google.com/file/d/1Vg_LycXiCLOf_wZo6HAfb5U-h3FrPbNX/view?usp=sharing"
										target="_blank"
										rel="noopener noreferrer"
										className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 rounded-t-lg font-semibold"
									>
										View Resume
									</a>
								</div>
							)}
						</div>

						{/* Mobile Menu Button */}
						<div className="md:hidden flex items-center">
							<button
								onClick={this.toggleMobileMenu}
								className="text-gray-700 hover:text-blue-600 focus:outline-none"
							>
								{isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
							</button>
						</div>
					</div>
				</div>

				{/* Mobile Navigation Links */}
				{isMobileMenuOpen && (
					<div className="md:hidden px-4 pb-4 pt-2 space-y-2 bg-white shadow-md">
						{["home", "about", "skills", "projects", "contact"].map(
							(section) => (
								<a
									key={section}
									href={`#${section}`}
									className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors duration-200"
									onClick={() => this.setState({ isMobileMenuOpen: false })}
								>
									{section.charAt(0).toUpperCase() + section.slice(1)}
								</a>
							)
						)}

						<a
							href="https://drive.google.com/file/d/1Vg_LycXiCLOf_wZo6HAfb5U-h3FrPbNX/view?usp=sharing"
							target="_blank"
							rel="noopener noreferrer"
							className="block text-blue-600 hover:underline font-semibold px-3 pt-2"
							onClick={() => this.setState({ isMobileMenuOpen: false })}
						>
							View Resume
						</a>
					</div>
				)}
			</nav>
		);
	}
}

export default Navbar;
