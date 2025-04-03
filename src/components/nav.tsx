import { useState } from "react";
import { motion } from "motion/react";

const navMotion = {
	visible: {
		opacity: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.15,
		},
	},
	hidden: {
		opacity: 0,
	},
};

const itemMotion = {
	visible: {
		opacity: 1,
		x: 0,
	},
	hidden: {
		opacity: 0,
		x: -100,
	},
};

export const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="container relative mb-24 w-full flex items-center justify-between pt-12 pb-6 ">
			<svg
				width={250}
				height={4}
				viewBox="0 0 250 4"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="absolute bottom-0 left-1/2 -translate-x-1/2"
			>
				<path
					d="M2 2L428 2"
					strokeWidth={2}
					stroke="#282828"
					strokeLinecap="round"
				/>
			</svg>
			<div className="rounded-full overflow-hidden size-12">
				<img
					src="/avatar.png"
					alt="Profile picture of Hua"
					className="rounded-full object-cover size-full object-center"
				/>
			</div>

			<h1 className="text-lg font-bold">
				<a href="/">Hua.</a>
			</h1>

			<div className="hidden md:flex items-center gap-12">
				<a href="/">Home</a>
				<a href="/services">Services </a>
				<a href="/contact">Contact</a>
			</div>

			<div
				onClick={() => setIsOpen(!isOpen)}
				className="space-y-1.5 md:hidden cursor-pointer z-50"
			>
				<motion.span
					animate={{ rotateZ: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
					className="block h-0.5 w-8 bg-foreground"
				></motion.span>
				<motion.span
					animate={{
						width: isOpen ? 0 : 16,
					}}
					className="block h-0.5 w-4 bg-foreground"
				></motion.span>
				<motion.span
					animate={{
						rotateZ: isOpen ? -45 : 0,
						y: isOpen ? -8 : 0,
						width: isOpen ? 32 : 24,
					}}
					className="block h-0.5 w-6 bg-foreground"
				></motion.span>
			</div>

			{isOpen && (
				<motion.div
					animate={{ opacity: 1, x: 0 }}
					initial={{ opacity: 0, x: 25 }}
					className="md:hidden flex items-center fixed bg-background bottom-0 left-0 w-full h-screen justify-center"
				>
					<motion.div
						variants={navMotion}
						animate="visible"
						initial="hidden"
						className="flex flex-col gap-24 font-bold items-center text-lg"
					>
						<motion.a
							variants={itemMotion}
							href="/"
						>
							Home
						</motion.a>
						<motion.a
							variants={itemMotion}
							href="/services"
						>
							Services{" "}
						</motion.a>
						<motion.a
							variants={itemMotion}
							href="/contact"
						>
							Contact
						</motion.a>
					</motion.div>
				</motion.div>
			)}
		</nav>
	);
};
