import { SiteHeader } from '@vstack/ui'

interface Navigation {
	name: string
	href: string
	current: boolean
}

const navigation = [
	{ name: 'Home', href: '/', current: false },
	{ name: 'Sorting Algorithms', href: '/#sort', current: false },
	{ name: 'Search Algorithms', href: '/#search', current: false },
]

export default function Navbar() {
	return (
		<SiteHeader
			brandTitle='Algo'
			brandSubtitle='Visualizer'
			navItems={navigation.map((item: Navigation) => ({
				href: item.href,
				label: item.name,
				active: item.current,
			}))}
		/>
	)
}
