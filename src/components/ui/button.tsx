import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
    'inline-flex relative before:absolute before:inset-0 rounded-[5px] before:-z-10 items-center justify-center whitespace-nowrap  text-base 3xl:text-lg font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 ',
    {
        variants: {
            variant: {
                default:
                    'bg-brand-blue text-white hover:bg-white hover:text-brand-blue',
                outline:
                    'border overflow-hiddenborder-white/50 hover:bg-neutral-100 hover:text-neutral-900',
                link: 'border-none bg-transparent hover:text-brand-blue',
            },
            size: {
                default: 'px-6 py-3',
                sm: 'px-3 py-2',
                lg: 'px-8 py-4',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button'
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
