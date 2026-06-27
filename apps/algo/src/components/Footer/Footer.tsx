import { SiteFooter } from '@vstack/ui'

export default function Footer() {
	return (
		<SiteFooter
			title='Vineel Sai'
			subtitle='Algorithm Visualizer'
			copyright='© 2022 Vineel Sai. All Rights Reserved.'
			links={[
				{ href: 'https://github.com/vineelsai26/Blog', label: 'GitHub' },
				{ href: '/#contact', label: 'Contact' },
			]}
		/>
	)
}
