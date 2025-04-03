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
    <nav className="relative container mb-24 flex w-full items-center justify-between pt-12 pb-6">
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
      <div className="size-12 overflow-hidden rounded-full">
        <img
          src="/avatar.png"
          alt="Profile picture of Hua"
          className="size-full rounded-full object-cover object-center"
        />
      </div>

      <h1 className="text-lg font-bold">
        <a href="/">Hua.</a>
      </h1>

      <div className="hidden items-center gap-12 md:flex">
        <a href="/">Home</a>
        <a href="/services">Services </a>
        <a href="/contact">Contact</a>
      </div>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className="z-50 cursor-pointer space-y-1.5 md:hidden"
      >
        <motion.span
          animate={{ rotateZ: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
          className="bg-foreground block h-0.5 w-8"
        ></motion.span>
        <motion.span
          animate={{
            width: isOpen ? 0 : 16,
          }}
          className="bg-foreground block h-0.5 w-4"
        ></motion.span>
        <motion.span
          animate={{
            rotateZ: isOpen ? -45 : 0,
            y: isOpen ? -8 : 0,
            width: isOpen ? 32 : 24,
          }}
          className="bg-foreground block h-0.5 w-6"
        ></motion.span>
      </div>

      {isOpen && (
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 25 }}
          className="bg-background fixed bottom-0 left-0 flex h-screen w-full items-center justify-center md:hidden"
        >
          <motion.div
            variants={navMotion}
            animate="visible"
            initial="hidden"
            className="flex flex-col items-center gap-24 text-lg font-bold"
          >
            <motion.a variants={itemMotion} href="/">
              Home
            </motion.a>
            <motion.a variants={itemMotion} href="/services">
              Services{" "}
            </motion.a>
            <motion.a variants={itemMotion} href="/contact">
              Contact
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
};
