'use client'

import React from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CustomHeader, ImageContainer } from './index.style';
import Image from 'next/image';
import { Header1 } from './Headings';


type CustomPageHeaderProps = {
	title: string;
	link?: string;
	path?: string;
};

export function CustomPageHeader({ title, link, path }: CustomPageHeaderProps) {

	// Split the URL string into an array of breadcrumb segments
	const currentUrl = usePathname()
	console.log(currentUrl);

	// Parse the URL string to extract breadcrumbs
	const breadcrumbs = currentUrl.split('/').filter((crumb) => crumb.trim() !== '');
	const fullPath = currentUrl.split('/').filter((crumb) => crumb.trim() !== '');
	// Add 'Home' as the first breadcrumb
	fullPath.unshift('Home');

	return (
		<CustomHeader>
			<div className="content">
				<Header1 className=" font-title text-black text-left uppercase title">{title}</Header1>
				<ol className="list">
					{fullPath.map((breadcrumb, index) => {

						return (
							<li key={index} className="item">
								<Link href={`/${breadcrumbs.slice(0, index).join('/')}`}
									className={`${currentUrl === `/${breadcrumbs.slice(0, index).join('/')}` ? 'active' : ''} link`}
								>
									{decodeURIComponent(breadcrumb)}
								</Link>
							</li>
						)
					}

					)}
				</ol>
				{/* <ul className="list">
					<li className="item">
						<Link href="/" className="link ">
							Home
						</Link>
					</li>
					{link &&
						link.split('*').map((d, index) => {
							console.log(d);
							console.log(path);
							return (
								<li className="item" key={index}>
									<Link
										href={`/${path}`}
										className={`${pathname === `/${path}` ? 'active' : ''} link`}
									>
										{d}
									</Link>
								</li>
							)
						}
						)}
				</ul> */}
			</div>
		</CustomHeader>
	);
}
