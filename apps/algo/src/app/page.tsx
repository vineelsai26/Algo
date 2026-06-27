import Link from 'next/link'
import { Card, SectionHeader } from '@vstack/ui'

export const metadata = {
	title: 'Algo',
	description: 'Algorithm Visualizer',
}

export const revalidate = 3600

export default function Home() {
	const sortingAlgorithms = [
		{ href: '/sort/bubble', name: 'Bubble Sort' },
		{ href: '/sort/selection', name: 'Selection Sort' },
		{ href: '/sort/merge', name: 'Merge Sort' },
		{ href: '/sort/insertion', name: 'Insertion Sort' },
		{ href: '/sort/quick', name: 'Quick Sort' },
		{ href: '/sort/heap', name: 'Heap Sort' },
	]

	return (
		<div className='vstack-container vstack-section'>
			<SectionHeader
				eyebrow='Interactive Lab'
				title='Sorting Algorithms'
				description='Pick an algorithm, tune the array size, and watch the sorting path unfold in the shared VStack interface.'
			/>
			<div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
				{sortingAlgorithms.map((algorithm) => (
					<Card className='p-6' key={algorithm.href}>
						<Link
							className='vstack-button w-full'
							href={algorithm.href}
						>
							{algorithm.name}
						</Link>
					</Card>
				))}
			</div>
		</div>
	)
}
