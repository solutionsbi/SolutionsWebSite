import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap  text-base 3xl:text-lg font-medium transition-colors  disabled:pointer-events-none disabled:opacity-50 ',
    {
        variants: {
            variant: {
                default:
                    'bg-white text-brand-blue hover:bg-brand-blue hover:text-white rounded-[8px]',
                destructive:
                    'bg-red-500 text-neutral-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90',
                outline:
                    'border relative before:absolute before:inset-0 before:-z-10 before:backdrop-blur-lg overflow-hidden rounded-lg border-white/50 hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50',
                secondary:
                    'bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80',
                ghost: 'border-none bg-transparent',
                link: 'text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50',
                blue: 'bg-brand-blue rounded-[5px] border border-brand-blue',
                new: 'bg-gradient-to-r from-brand-blue rounded-[8px] hover:from-neutral-darkest/0 hover:to-brand-blue transition-all duration-1000 to to-neutral-darkest/0 border-l-2 relative before:absolute before:inset-0 before:-z-10 before:backdrop-blur before:backdrop:hue-rotate-30 py-5 border-brand-blue font-medium',
            },
            size: {
                default: 'px-6 py-3 3xl:px-8 3xl:py-4',
                sm: 'h-9 rounded-md px-3',
                lg: 'h-11 rounded-md px-8',
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
