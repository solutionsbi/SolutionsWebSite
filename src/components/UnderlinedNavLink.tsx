import React from 'react'
import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface UnderlinedNavLinkProps {
    to?: string
    children: React.ReactNode
}

const UnderlinedNavLink: React.FC<UnderlinedNavLinkProps> = ({
    to,
    children,
}) => {
    const Content = ({ isActive }: { isActive?: boolean }) => (
        <>
            <span className="relative z-10">{children}</span>
            <span
                className={cn(
                    'absolute bottom-0 left-0 h-0.5 bg-brand-blue transition-all duration-300 ease-in-out group-hover/underline:w-full',
                    isActive ? 'w-full' : 'w-0'
                )}
            />
        </>
    )

    return to ? (
        <NavLink
            to={to}
            className={({ isActive }) =>
                cn('group/underline relative py-1', isActive ? '' : '')
            }
        >
            {({ isActive }) => <Content isActive={isActive} />}
        </NavLink>
    ) : (
        <div className="group/underline relative py-1">
            <Content />
        </div>
    )
}

export default UnderlinedNavLink
