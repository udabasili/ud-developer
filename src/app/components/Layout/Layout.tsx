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

    const ref = React.useRef<HTMLDivElement>(null)

    return (
        <Container >
            <Head>
                <meta name="google-site-verification" content="Q6I2zunH3fIN02cU3FO8xbiBQqxBAdsSN8vlrXcSwNs" />
            </Head>
            <MainNavigation ref={ref} />
            <Main>{children}</Main>
            <Footer />
        </Container>
    )
}
