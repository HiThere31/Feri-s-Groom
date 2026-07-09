"use client";

import "@/styles/components/ui/button.css";
import { motion, type HTMLMotionProps } from "framer-motion";

type ButtonVariant = "primary" | "secondary";

type ButtonAsButtonProps = HTMLMotionProps<"button"> & {
  variant?: ButtonVariant;
  href?: undefined;
};

type ButtonAsAnchorProps = HTMLMotionProps<"a"> & {
  variant?: ButtonVariant;
  href: string;
};

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

const BUTTON_MOTION_PROPS = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
  transition: { duration: 0.15 },
} as const;

export function Button({
  variant = "primary",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = `button button--${variant} px-6 py-3 ${className ?? ""}`;
  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        {...BUTTON_MOTION_PROPS}
        {...(props as HTMLMotionProps<"a">)}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      className={classes}
      {...BUTTON_MOTION_PROPS}
      {...(props as HTMLMotionProps<"button">)}
    >
      {children}
    </motion.button>
  );
}
