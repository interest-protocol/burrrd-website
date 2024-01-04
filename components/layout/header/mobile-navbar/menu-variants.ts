export const menuVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.07,
      delayChildren: 0.2,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
  closed: {
    opacity: 0,
    x: '100%',
    transition: {
      duration: 0.3,
      staggerChildren: 0.05,
      staggerDirection: -1,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};
