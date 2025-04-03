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
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const itemMotionDesktop = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 1, x: 0 },
};

const navLinks = [
  { name: "Home", href: "/", id: 1 },
  { name: "Blog", href: "/blog", id: 2 },
  { name: "Contact", href: "/contact", id: 3 },
];

const NavLinks = ({
  isMobile,
  className,
}: {
  isMobile: boolean;
  className: string;
}) => (
  <div className={className}>
    {navLinks.map(({ name, href, id }) => (
      <motion.a
        key={id}
        variants={isMobile ? itemMotion : itemMotionDesktop}
        href={href}
        className="text-xl font-bold"
      >
        {name}
      </motion.a>
    ))}
  </div>
);

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

      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -25 }}
        transition={{ delay: 0.35 }}
        className="flex gap-12"
      >
        <img src="/avatar.png" alt="Hua profile picture" />
        <motion.div className="hidden items-center gap-12 xl:flex">
          <img src="/dribble.png" alt="Dribble Account" />
          <img src="/twitter.png" alt="Twitter Account" />
          <img src="/youtube.png" alt="Youtube Channel" />
        </motion.div>
      </motion.div>

      {/* Title */}
      <h1 className="text-lg font-bold">
        <a href="/">Hua.</a>
      </h1>

      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 25 }}
        transition={{ delay: 0.35 }}
        className="hidden xl:flex xl:items-center xl:justify-center xl:gap-12 xl:text-lg"
      >
        <NavLinks className="flex gap-12" isMobile={false} />
      </motion.div>

      {/* Hamburger Toggle */}
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 25 }}
        transition={{ delay: 0.35 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`burger z-50 cursor-pointer space-y-1.5 xl:hidden`}
      >
        <motion.span
          animate={{ rotateZ: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
          className="line-1 bg-content block h-0.5 w-8"
        ></motion.span>

        <motion.span
          animate={{ width: isOpen ? 0 : 24 }}
          className="line-2 bg-content block h-0.5 w-6"
        ></motion.span>
        <motion.span
          animate={{
            rotateZ: isOpen ? -45 : 0,
            y: isOpen ? -8 : 0,
            width: isOpen ? 32 : 24,
          }}
          className="line-3 bg-content block h-0.5 w-4"
        ></motion.span>
      </motion.div>

      {/* Nav Items animating in  */}
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
            <motion.a variants={itemMotion} href="/blog">
              Blog
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
