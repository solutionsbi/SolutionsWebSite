import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
    'inline-flex relative rounded-[5px] items-center justify-center whitespace-nowrap text-base 2xl:text-md  disabled:pointer-events-none disabled:opacity-50 ',
    {
        variants: {
            variant: {
                default: 'bg-brand-blue font-medium',
                outline: 'border-2 border-white/50 font-medium',
                link: 'border-none bg-transparent p-0 ',
                icon: 'hover:bg-white hover:text-brand-blue bg-brand-blue transition-colors duration-300 ease-in-out',
            },
            size: {
                default: 'px-6 py-3',
                sm: 'px-3 py-2',
                lg: 'px-8 py-4',
                custom: 'px-0 py-0',
                icon: 'p-2',
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
