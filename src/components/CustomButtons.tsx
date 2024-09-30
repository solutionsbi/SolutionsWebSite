import React from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import { HiMiniArrowDownRight } from 'react-icons/hi2'
import { Button, ButtonProps } from '@/components/ui/button'
import { cn } from '@/lib/utils'
interface ExtendedButtonProps extends ButtonProps {
    to?: string
    href?: string
    children: React.ReactNode
}

export const LearnMoreButton: React.FC<ExtendedButtonProps> = ({
    variant = 'outline',
    children,
    to,
    className = '',
    size = 'lg',
    ...props
}) => (
    <Button
        className={`gap-3 ${className}`}
        asChild
        size={size}
        {...props}
        variant={variant}
    >
        <Link to={to || '#'}>
            <span className="">{children}</span>
            <HiMiniArrowDownRight className="h-auto w-7 transition-all duration-500 ease-in-out group-hover:rotate-45" />
        </Link>
    </Button>
)

export const WhatsappButton: React.FC<ExtendedButtonProps> = ({
    children,
    href,
    className = '',
    size = 'lg',
    ...props
}) => {
    const handleClick = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        if (href) {
            e.preventDefault()
            const confirmed = window.confirm(
                'Você será redirecionado para o WhatsApp da Solutions BI. Deseja continuar?'
            )
            if (confirmed) {
                window.location.href = href
            }
        }
    }

    return (
        <Button
            className={cn('gap-3 border-neutral-800', className)}
            size={size}
            asChild
            {...props}
        >
            <a href={href} onClick={handleClick} target="_blank" className="">
                <span className="drop-shadow-md">{children}</span>
                <FaWhatsapp className="h-auto w-7 transition-all duration-500 ease-in-out group-hover:scale-105" />
            </a>
        </Button>
    )
}
