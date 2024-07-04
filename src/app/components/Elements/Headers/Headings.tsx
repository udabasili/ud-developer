import clsx from 'clsx';

type Props = {
	children: React.ReactNode;
	className?: string;
};

export const Header1 = ({ children, className }: Props) => (
	<h1 className={clsx([' font-bold text-[2rem] lg:text-[2.986rem] font-title ', className])}>{children}</h1>
);

export const Header2 = ({ children, className }: Props) => (
	<h2 className={clsx(['text-[1.8rem] lg:text-[2.486rem] font-bold uppercase font-title ', className])}>
		{children}
	</h2>
);

export const Header3 = ({ children, className }: Props) => (
	<h3 className={clsx(['font-semibold leading-tight text-[1.5rem] lg:text-[2.086rem] font-title', className])}>{children}</h3>
);

export const Header4 = ({ children, className }: Props) => (
	<h4 className={clsx([' font-medium leading-tight text-[1.3rem] lg:text-[1.786rem] font-title', className])}>
		{children}
	</h4>
);

export const Header5 = ({ children, className }: Props) => (
	<h5 className={clsx(['font-medium leading-tight text-[1.1rem] lg:text-[1.486rem] font-title', className])}>{children}</h5>
);


export const Header6 = ({ children, className }: Props) => (
	<h6 className={clsx(['font-medium leading-tight text-[1.2rem] font-title text-primary', className])}>{children}</h6>
);