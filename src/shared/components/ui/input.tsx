import * as React from "react"

import { cn } from "@/shared/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import { INPUT_HEIGHT } from "@/shared/constants/styles"

export const inputBaseClassName = cn(
  `${INPUT_HEIGHT.DEFAULT} w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`,
  "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
)

const inputVariants = cva(
  inputBaseClassName,
  {
    variants: {
      variant: {
        default: "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
      },
      size: {
        default: `${INPUT_HEIGHT.DEFAULT}`,
        sm: `${INPUT_HEIGHT.SM}`,
        lg: `${INPUT_HEIGHT.LG}`,
        xl: `${INPUT_HEIGHT.XL}`,
      }
    },
  }
)

export type InputProps = React.ComponentProps<"input"> & VariantProps<typeof inputVariants>

function Input({ className, type, size, variant, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        inputVariants({ size, variant }),
        className
      )}
      {...props}
    />
  )
}

export { Input }
