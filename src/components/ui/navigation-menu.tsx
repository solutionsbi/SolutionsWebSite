import * as React from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { cva } from 'class-variance-authority'
import { ChevronDown } from 'lucide-react'

import { cn } from '@/lib/utils'

/**
 * Navigation Menu Components
 *
 * This file exports a set of components for creating accessible and customizable navigation menus.
 * These components are built on top of Radix UI's NavigationMenu primitives and styled using Tailwind CSS.
 *
 * Usage:
 * 1. Import the necessary components:
 *    import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu"
 *
 * 2. Construct your navigation menu:
 *    <NavigationMenu>
 *      <NavigationMenuList>
 *        <NavigationMenuItem>
 *          <NavigationMenuTrigger>Item 1</NavigationMenuTrigger>
 *          <NavigationMenuContent>
 *            <NavigationMenuLink href="/item1">Subitem 1</NavigationMenuLink>
 *          </NavigationMenuContent>
 *        </NavigationMenuItem>
 *      </NavigationMenuList>
 *    </NavigationMenu>
 *
 * 3. Customize styles using the provided className props or by modifying the cva functions.
 */

// NavigationMenu is the root component that wraps the entire navigation structure.
// It provides context for all child components and handles the overall positioning.
const NavigationMenu = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Root
        ref={ref}
        className={cn(
            'relative z-10 flex w-full items-center justify-end',
            className
        )}
        {...props}
    >
        {children}
        <NavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

// NavigationMenuList is a container for NavigationMenuItem components.
// It handles the layout and spacing of menu items.
const NavigationMenuList = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.List
        ref={ref}
        className={cn(
            'group flex w-full flex-1 list-none items-center justify-center gap-10 space-x-1',
            className
        )}
        {...props}
    />
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

// NavigationMenuItem is a wrapper for individual menu items.
// It doesn't apply any styling by default but can be used for semantic structure.
const NavigationMenuItem = NavigationMenuPrimitive.Item

// navigationMenuTriggerStyle is a function that generates classes for the NavigationMenuTrigger.
// It uses cva (class-variance-authority) to create a set of classes that can be easily customized.
const navigationMenuTriggerStyle = cva(
    'group inline-flex w-max items-center justify-center transition-colors hover:text-blue-500 focus:text-blue-500 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:text-blue-500 data-[state=open]:text-blue-500'
)

// NavigationMenuTrigger is the clickable element that toggles the visibility of NavigationMenuContent.
// It includes a ChevronDown icon that rotates when the menu is open.
const NavigationMenuTrigger = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Trigger
        ref={ref}
        className={cn(navigationMenuTriggerStyle(), 'group', className)}
        {...props}
    >
        {children}
        {''}
        <ChevronDown
            className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
            aria-hidden="true"
        />
    </NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

// NavigationMenuContent is the container for the dropdown content that appears when a trigger is activated.
// It includes animations for entering and exiting the viewport.
const NavigationMenuContent = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Content
        ref={ref}
        className={cn(
            'right-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto',
            className
        )}
        {...props}
    />
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

// NavigationMenuLink is a component for creating links within the navigation menu.
// It's a simple wrapper around the Radix UI Link primitive.
const NavigationMenuLink = NavigationMenuPrimitive.Link

// NavigationMenuViewport is the container that holds all the visible navigation menu content.
// It handles the sizing and positioning of the dropdown menus.
const NavigationMenuViewport = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
    <div className={cn('absolute right-0 top-full flex justify-end')}>
        <NavigationMenuPrimitive.Viewport
            className={cn(
                'relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-top-right overflow-hidden rounded-md border border-neutral-200/10 bg-neutral-darkest/70 shadow-lg backdrop-blur data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 md:w-[var(--radix-navigation-menu-viewport-width)]',
                className
            )}
            ref={ref}
            {...props}
        />
    </div>
))
NavigationMenuViewport.displayName =
    NavigationMenuPrimitive.Viewport.displayName

// NavigationMenuIndicator is a visual indicator that shows which menu item is currently active.
// It appears as a small arrow pointing to the active item.
const NavigationMenuIndicator = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Indicator
        ref={ref}
        className={cn(
            'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
            className
        )}
        {...props}
    >
        <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-neutral-200 shadow-md dark:bg-neutral-800" />
    </NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
    NavigationMenuPrimitive.Indicator.displayName

export {
    navigationMenuTriggerStyle,
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuContent,
    NavigationMenuTrigger,
    NavigationMenuLink,
    NavigationMenuIndicator,
    NavigationMenuViewport,
}
