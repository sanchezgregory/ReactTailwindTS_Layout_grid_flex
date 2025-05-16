import { cva, type VariantProps } from "class-variance-authority"
import type { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<'button'>
    
export const buttonStyles = cva(["transition-colors"], {
    variants: {
        variant: {
            default: ["bg-gray-200", "hover:bg-gray-300"],
            ghost: ["hover:bg-gray-100"],
            dark: ["bg-black", "hover:bg-gray-800", "text-white"],
        },
        size: {
            default: ["rounded", "p-2"],
            icon: ["rounded-full", "w-10", "h-10", "flex", "items-center", "justify-center", "p-2.5"]
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})

const Button = ({ variant, size, className, ...props }: ButtonProps) => {
  return (
    <button {...props} className={twMerge(buttonStyles({ variant, size }), "cursor-pointer", className)} />
  )
}

export default Button