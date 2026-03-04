import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-navy-900 text-cream-50 hover:bg-navy-800 active:bg-navy-950 border border-transparent",
  secondary:
    "bg-copper-500 text-white hover:bg-copper-600 active:bg-copper-700 border border-transparent",
  outline:
    "bg-transparent text-navy-900 border border-navy-900 hover:bg-navy-900 hover:text-cream-50",
  ghost:
    "bg-transparent text-navy-900 hover:bg-navy-50 border border-transparent",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-body-sm",
  md: "px-7 py-3.5 text-body-md",
  lg: "px-9 py-4.5 text-body-md",
};

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  href,
  ...rest
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 ease-out-expo cursor-pointer select-none";

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
