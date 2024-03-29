'use client'

import { Roboto } from 'next/font/google'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import '../styles/globals.css'

const roboto = Roboto({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const [faviconHref, setFaviconHref] = useState('/logo-light.png')

	useEffect(() => {
		const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')

		darkThemeMq.addEventListener('change', (e) => {
			if (e.matches) {
				setFaviconHref('/logo-light.png')
			} else {
				setFaviconHref('/logo-dark.png')
			}
		})

		if (darkThemeMq.matches) {
			setFaviconHref('/logo-light.png')
		} else {
			setFaviconHref('/logo-dark.png')
		}
	}, [])

	return (
		<html lang='en'>
			<head>
				<link rel='icon' href={faviconHref} type='image/x-icon' />
			</head>
			<body
				className={`${roboto.className} bg-slate-200 dark:bg-gray-600`}
			>
				<div className='sticky top-0 z-50 w-full'>
					<Navbar />
				</div>
				<div>{children}</div>
				<Footer />
			</body>
		</html>
	)
}
