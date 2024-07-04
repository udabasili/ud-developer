import React, { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

const variants = {
    primary: 'bg-primary text-white ',
    inverse: 'bg-white text-blue-600',
    danger: 'bg-red-600 text-white',
};

const sizes = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-2 px-6 text-md',
    lg: 'py-3 px-8 text-lg',
};

type IconProps =
    | { startIcon: React.ReactElement; endIcon?: never }
    | { startIcon?: never; endIcon: React.ReactElement }
    | { startIcon?: undefined; endIcon?: undefined }


type ButtonProps = IconProps & {
    size: keyof typeof sizes;
    variant: keyof typeof variants;
    children: React.ReactNode;
    isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: ButtonProps) => {
    const { className, children, size, variant, startIcon, endIcon, isLoading, ...rest } = props;
    return (
        <button
            className={clsx(
                'flex justify-center items-center border border-gray-300 disabled:opacity-70 disabled:cursor-not-allowed rounded-md shadow-sm hover:opacity-80 font-title font-bold transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50',
                variants[variant],
                sizes[size],
                className
            )}
            {...rest}
        >
            {isLoading && <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white "></span>}
            {!isLoading && startIcon}
            <span className="mx-2">
                {children}
            </span>
            {!isLoading && endIcon}

        </button>
    )
}
