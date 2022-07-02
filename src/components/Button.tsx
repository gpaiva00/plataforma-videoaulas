import classNames from "classnames";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  text: string;
  icon?: React.ReactNode;
}

export function Button(props: ButtonProps) {
  const { href, variant, disabled, text, icon } = props;

  return (
    <a href={href} className={
      classNames(
        'p-4 text-sm flex items-center rounded font-bold uppercase gap-2 justify-center transition-colors', {
        'button-primary': variant === "primary",
        'button-secondary': variant === "secondary",
        'button-tertiary': variant === "tertiary",
      })}>

      {icon && icon}
      {text}
    </a>
  )
}