import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

export default function Projects() {
	const [selectedProject, setSelectedProject] = useState(null);

	const projects = [
		{
			id: 1,
			title: "The Sentinal Times - Newspaper Website",
			description:
				"The Sentinal Times is a modern newspaper website that provides up-to-date news coverage on various topics. It features a user-friendly interface with easy navigation and a clean design. The platform offers a wide range of articles, including news, opinion, business, technology, and more. Users can access the latest news, read articles in detail, and stay informed about current events.",
			image: "https://i.postimg.cc/t4MF51SK/Screenshot-2025-08-04-232659.png",
			technologies: [
				"React",
				"Tailwind",
				"NodeJs",
				"ExpressJs",
				"MongoDB",
				"Firebase",
				"JWT",
			],
			liveUrl: "https://thesentinaltimes.web.app/",
			githubUrl:
				"https://github.com/Ahnaf-221B/The-Sentinal-Times-Newspaper-Website-Client",
			challenges:
				"In The Sentinal Times newspaper project, the main challenge was managing the state of bills, payment status, and user sessions across multiple components, particularly while ensuring real-time updates without data inconsistencies.",
			futureWork:
				"Add a personalized news recommendation system using AI that learns from users' reading habits and preferences to suggest relevant articles",
		},
		{
			id: 2,
			title: "BookFlow-Library Management System",
			description:
				"BookFlow is a comprehensive library management system designed to streamline daily operations. It offers intuitive features for organizing book inventories, tracking availability, and managing user borrowing and returns. With a clean interface and real-time updates, BookFlow reduces administrative workload and enhances the overall efficiency of library workflows.",
			image: "https://i.postimg.cc/9fhHmYxy/image.png",
			technologies: [
				"React",
				"Node.js",
				"MongoDB",
				"Express",
				"Tailwind CSS",
				"Firebase",
				"JWT",
			],
			liveUrl: "https://bookflow-library-mangement.web.app/",
			githubUrl:
				"https://github.com/Ahnaf-221B/BookFlow-Library-Management-System",
			challenges:
				"Implementing JWT authentication for the first time was a bit challenging, especially in understanding the token flow and securing protected routes. However, it gave me valuable hands-on experience in managing authentication and authorization in a full-stack application.",
			futureWork:
				"Add online borrowing, adding bookmarks, and analytics dashboard.",
		},
		{
			id: 3,
			title: "RecipeBook-Recipe Management System",
			description:
				"RecipeBook is a full-featured recipe management platform designed for food enthusiasts to easily organize, share, and discover culinary creations. Users can create personal recipe collections, edit or delete existing entries, and explore a community-driven repository of diverse dishes. The platform supports user authentication, recipe likes, and categorization, making it simple to interact with others, gain inspiration, and build a personalized cookbook. With an intuitive interface and real-time updates, RecipeBook turns casual cooking into a connected culinary experience.",
			image: "https://i.postimg.cc/rm7T52Vt/image.png",
			technologies: [
				"React",
				"Node.js",
				"MongoDB",
				"Express",
				"Firebase",
				"Tailwind CSS",
				"DaisyUI",
			],
			liveUrl: "https://recipebook-65258.web.app/",
			githubUrl:
				"https://github.com/Ahnaf-221B/RecipeBook-Recipe-Management-System-Client",
			challenges:
				"Implementing real-time likes and user-based filtering, along with integrating Node.js and MongoDB for the first time, was initially challenging. It required a solid understanding of backend routing, database schema design, and asynchronous data handling. However, it significantly enhanced my full-stack development skills. ",
			futureWork: "Allow meal planning and integration with shopping lists.",
		},
		{
			id: 4,
			title: "Marigold-Bill Management System",
			description:
				"Marigold is a modern web application designed to simplify bill management for users. It provides a clean, intuitive interface where users can view, track, and settle their outstanding bills with ease. The platform ensures transparency by displaying detailed bill summaries, due dates, and payment statuses. With a focus on usability and real-time updates, Marigold reduces the complexity of financial tracking and encourages timely payments, making it an ideal solution for individuals or organizations managing multiple bills.",
			image: "https://i.postimg.cc/43LPLJhn/image.png",
			technologies: ["React", "Tailwind", "DaisyUI", "Firebase"],
			liveUrl: "https://mariigold.netlify.app/",
			githubUrl:
				"https://github.com/Ahnaf-221B/MariGold-Bill-Management-System",
			challenges:
				"Managing the state of bills, payment status, and user sessions across multiple components became complex, especially while ensuring real-time updates without data inconsistencies.",
			futureWork:
				"Add auto-reminders and recurring bill automation.Also add the payment method",
		},
	];

	return (
		<section id="projects" className="py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
						Featured Projects
					</h2>
					<div className="w-20 h-1 bg-blue-600 mx-auto"></div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
					{projects.map((project) => (
						<div
							key={project.id}
							className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full "
						>
							{/* Image */}
							<div className="h-48 overflow-hidden">
								<img
									src={project.image || "/placeholder.svg"}
									alt={project.title}
									className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
								/>
							</div>

							{/* Card Content */}
							<div className="p-6 flex flex-col justify-between flex-grow space-y-6">
								<div className="space-y-4">
									<h3 className="text-xl font-bold text-gray-900">
										{project.title}
									</h3>
									<p className="text-gray-600 line-clamp-3">
										{project.description}
									</p>
								</div>

								{/* Technologies */}
								<div className="flex flex-wrap gap-4">
									{project.technologies.map((tech, index) => (
										<span
											key={index}
											className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
										>
											{tech}
										</span>
									))}
								</div>

								{/* Buttons */}
								<div className="space-y-4">
									<div className="flex space-x-10">
										<a
											href={project.liveUrl}
											className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium text-sm"
											target="_blank"
											rel="noopener noreferrer"
										>
											<ExternalLink size={25} /> Live
										</a>
										<a
											href={project.githubUrl}
											className="flex items-center gap-1 text-gray-600 hover:text-gray-800 font-medium text-sm"
											target="_blank"
											rel="noopener noreferrer"
										>
											<Github size={25} /> Code
										</a>
									</div>

									<button
										onClick={() => setSelectedProject(project)}
										className="w-full px-4 py-2 bg-indigo-600 text-white rounded  text-sm font-medium"
									>
										View Details
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Modal */}
			{selectedProject && (
				<div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-lg">
					<div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-6 relative max-h-[90vh] overflow-y-auto">
						<button
							className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-4xl font-bold"
							onClick={() => setSelectedProject(null)}
						>
							×
						</button>

						<img
							src={selectedProject.image}
							alt={selectedProject.title}
							className="rounded mb-4 w-full h-64 object-cover"
						/>
						<h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
						<p className="text-gray-700 mb-4">{selectedProject.description}</p>

						<div className="mb-6">
							<h4 className="font-semibold mb-4 text-lg">Technologies Used:</h4>
							<div className="flex flex-wrap gap-4">
								{selectedProject.technologies.map((tech, index) => (
									<span
										key={index}
										className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
									>
										{tech}
									</span>
								))}
							</div>
						</div>

						<div className="mb-4">
							<h4 className="font-semibold text-lg">Challenges:</h4>
							<p className="text-gray-600">{selectedProject.challenges}</p>
						</div>

						<div className="mb-8">
							<h4 className="font-semibold text-lg">Future Work:</h4>
							<p className="text-gray-600">{selectedProject.futureWork}</p>
						</div>

						<div className="flex space-x-8 mt-4">
							<a
								href={selectedProject.liveUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium text-sm"
							>
								<ExternalLink size={25} /> Live Site
							</a>
							<a
								href={selectedProject.githubUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-1 text-gray-600 hover:text-gray-800 font-medium text-sm"
							>
								<Github size={25} /> GitHub
							</a>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}
