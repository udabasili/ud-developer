import React from 'react'
import { AppLogo, Container, Nav, NavLink } from './MainNavigation.styled'
import Link from 'next/link'
import { navData } from './navigationContent'
import { usePathname } from 'next/navigation'
import { MobileNavigation } from './MobileNavigation'
import Image from "next/image";


type MainNavigationProps = {
    ref: React.RefObject<HTMLDivElement>
}

export const MainNavigation = React.forwardRef<HTMLDivElement, MainNavigationProps>(
    (
        {

            ...props
        },
        ref
    ) => {
        const pathName = usePathname()
        return (
            <Container ref={ref}>
                <AppLogo>
                    <Image
                        src="/logo.png"
                        alt="Website Logo"
                        width={100}
                        height={100}
                        priority
                    />
                </AppLogo>
                <MobileNavigation />
                <Nav className="nav">
                    <>
                        {navData.map((navInfo) => (
                            <Link href={navInfo.href} passHref legacyBehavior key={navInfo.name}>
                                <NavLink className={pathName === navInfo.href ? 'active' : ''}>{navInfo.name}</NavLink>
                            </Link>
                        ))}
                        {/* <Link href='/contact'>
                            <Button variant='primary' size='lg'>Hire me</Button>
                        </Link> */}
                    </>

                </Nav>
            </Container>
        )
    });

MainNavigation.displayName = 'MainNavigation';



