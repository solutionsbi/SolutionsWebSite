/**
 * AnimatedNavLink Component
 *
 * This component extends the functionality of React Router's NavLink component
 * by adding an animated underline effect on hover and for active links.
 *
 * Features:
 * - Wraps the NavLink component from react-router-dom
 * - Adds a blue underline animation on hover
 * - Highlights active links with larger text and blue color
 * - Uses Tailwind CSS for styling
 *
 * Usage:
 * <AnimatedNavLink to="/path">Link Text</AnimatedNavLink>
 */

import React from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'

interface AnimatedNavLinkProps extends NavLinkProps {
    children: React.ReactNode
}

const AnimatedNavLink: React.FC<AnimatedNavLinkProps> = ({
    children,
    ...props
}) => {
    return (
        <div className="group relative overflow-hidden">
            <NavLink
                {...props}
                className={({ isActive }) =>
                    isActive ? 'text-lg text-brand-blue' : ''
                }
            >
                {children}
            </NavLink>
            <div className="bottom-line absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-brand-blue transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
        </div>
    )
}

export default AnimatedNavLink
