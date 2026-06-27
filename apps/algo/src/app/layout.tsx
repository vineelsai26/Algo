import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import '../styles/globals.css'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en' data-scroll-behavior='smooth'>
			<head>
				<link rel='icon' href='/logo-light.png' type='image/x-icon' />
			</head>
			<body className='vstack-app-shell vstack-grid-shell'>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
