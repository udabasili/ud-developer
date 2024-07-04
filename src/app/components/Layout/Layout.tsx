"use client"
import React, { useEffect, useState } from 'react'
import { Container, Main } from './Layout.styled'
import { MainNavigation } from '../Navigation'
import { Footer } from '../Footer'
import { usePathname } from 'next/navigation'
import Head from 'next/head';


type LayoutProps = {
    children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {

    const [sticky, setSticky] = useState(false)
    const ref = React.useRef<HTMLDivElement>(null)
    const path = usePathname();
    const canonicalUrl = `https://www.udabasili.online${path}`;



    useEffect(() => {
        if (window !== undefined && ref.current !== null) {
            const windowHeight = window.scrollY;

            if (sticky) {
                ref.current.classList.add('sticky')
            } else {
                ref.current.classList.remove('sticky')
            }
        }
    }, [sticky])


    useEffect(() => {
        const handleScroll = () => {
            // if desktop screen and scroll more than 100px
            // if (window.scrollY > 300) {
            //     setSticky(true)
            // } else {
            //     setSticky(false)
            // }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <Container >
            <Head>
                <link rel="canonical" href={canonicalUrl} />
            </Head>
            <MainNavigation ref={ref} />
            <Main>{children}</Main>
            <Footer />
        </Container>
    )
}
