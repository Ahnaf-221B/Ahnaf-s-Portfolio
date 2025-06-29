// import { useRef, useState } from "react";
// import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
// import emailjs from "emailjs-com";

// const Contact = () => {
// 	const form = useRef();
// 	const [isSent, setIsSent] = useState(false);
// 	const [error, setError] = useState(false);

// 	const sendEmail = (e) => {
// 		e.preventDefault();
// 		setIsSent(false);
// 		setError(false);

// 		emailjs
// 			.sendForm(
// 				"service_vgjraje",
// 				"template_e2cxdvr",
// 				form.current,
// 				"wFfTiserbG4fE8X1m"
// 			)
// 			.then(
// 				() => {
// 					setIsSent(true);
// 					form.current.reset();
// 				},
// 				() => {
// 					setError(true);
// 				}
// 			);
// 	};

// 	return (
// 		<section id="contact" className="py-20">
// 			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// 				<div className="text-center mb-16">
// 					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
// 						Get In Touch
// 					</h2>
// 					<div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
// 					<p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
// 						I&apos;m always open to discussing new opportunities and exciting
// 						projects. Drop a message and I&apos;ll get back to you shortly!
// 					</p>
// 				</div>

// 				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
// 					{/* Contact Info */}
// 					<div className="space-y-8">
// 						<ContactInfo
// 							icon={<FaEnvelope className="text-white" size={20} />}
// 							title="Email"
// 							value="mostafaahnafhossain@gmail.com"
// 						/>

// 						<ContactInfo
// 							icon={<FaPhoneAlt className="text-white" size={20} />}
// 							title="Phone/WhatsApp"
// 							value="+880-1979656855"
// 						/>

// 						<ContactInfo
// 							icon={<FaMapMarkerAlt className="text-white" size={20} />}
// 							title="Location"
// 							value="Chittagong, Bangladesh"
// 						/>
// 					</div>

// 					{/* Contact Form */}
// 					<form ref={form} onSubmit={sendEmail} className="space-y-6">
// 						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
// 							<Input
// 								label="Name"
// 								name="name"
// 								type="text"
// 								placeholder="Your Name"
								
// 							/>
// 							<Input
// 								label="Email"
// 								name="email"
// 								type="email"
// 								placeholder="your.email@example.com"
// 							/>
// 						</div>

// 						<Input
// 							label="Subject"
// 							name="subject"
// 							type="text"
// 							placeholder="Project Discussion"
//                             className= "bg-white"
// 						/>

// 						<div>
// 							<label
// 								htmlFor="message"
// 								className="block text-sm font-medium text-gray-700 mb-2"
// 							>
// 								Message
// 							</label>
// 							<textarea
// 								id="message"
// 								name="message"
// 								rows={6}
// 								className="w-full px-4 py-3 border bg-white border-gray-300 rounded-lg focus:ring-2  focus:border-transparent"
// 								placeholder="Tell me about your project..."
// 							></textarea>
// 						</div>

// 						<button
// 							type="submit"
// 							className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
// 						>
// 							Send Message
// 						</button>

// 						{/* Message Feedback */}
// 						{isSent && (
// 							<p className="text-green-600 font-medium mt-2">
// 								Message sent successfully!
// 							</p>
// 						)}
// 						{error && (
// 							<p className="text-red-600 font-medium mt-2">
// 								Something went wrong. Please try again.
// 							</p>
// 						)}
// 					</form>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Contact;

// // Reusable Input component
// const Input = ({ label, name, type, placeholder }) => (
// 	<div>
// 		<label
// 			htmlFor={name}
// 			className="block text-sm font-medium text-gray-700 mb-2"
// 		>
// 			{label}
// 		</label>
// 		<input
// 			type={type}
// 			id={name}
// 			name={name}
// 			required
// 			className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent"
// 			placeholder={placeholder}
// 		/>
// 	</div>
// );

// // Reusable ContactInfo component
// const ContactInfo = ({ icon, title, value }) => (
// 	<div className="flex items-center space-x-4">
// 		<div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
// 			{icon}
// 		</div>
// 		<div>
// 			<h3 className="text-lg font-semibold text-gray-900">{title}</h3>
// 			<p className="text-gray-600">{value}</p>
// 		</div>
// 	</div>
// );
