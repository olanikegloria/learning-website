import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "solid"
  className?: string
}

const Button: React.FC<ButtonProps> = ({ variant = "solid", className = "", children, ...props }) => {
  const baseStyles = "py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2"
  const solidStyles = "bg-orange-500 text-white hover:bg-orange-600"
  const outlineStyles = "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"

  const styles = variant === "solid" ? solidStyles : outlineStyles

  return (
    <button className={`${baseStyles} ${styles} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button