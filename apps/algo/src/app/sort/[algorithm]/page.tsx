'use client'

import { use, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button, Card, SectionHeader } from '@vstack/ui'

import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import {
	bubbleSort,
	insertionSort,
	heapSort,
	mergeSort,
	quickSort,
	selectionSort,
} from './algorithms'

const algorithmNames: Record<string, string> = {
	bubble: 'Bubble Sort',
	heap: 'Heap Sort',
	insertion: 'Insertion Sort',
	merge: 'Merge Sort',
	quick: 'Quick Sort',
	selection: 'Selection Sort',
}

const initialBarCount = 10

function generateInitialBarHeights(count: number) {
	return Array.from(
		{ length: count },
		(_, index) => 40 + ((index * 73) % 260)
	)
}

function generateBarHeights(count: number) {
	return Array.from({ length: count }, () => Math.floor(Math.random() * 300))
}

export default function Sort({
	params,
}: {
	params: Promise<{ algorithm: string }>
}) {
	const router = useRouter()
	const { algorithm } = use(params)
	const algorithmName = algorithmNames[algorithm] ?? algorithm
	const [barHeights, setBarHeights] = useState(() =>
		generateInitialBarHeights(initialBarCount)
	)

	useEffect(() => {
		if (!algorithmNames[algorithm]) {
			router.replace('/')
			return
		}

		document.title = `${algorithmName} | Sorting Algorithms`
	}, [algorithm, algorithmName, router])

	const bars = []
	for (let i = 0; i < barHeights.length; i++) {
		bars.push(
			<div
				id={i.toString()}
				key={i}
				style={{
					height: barHeights[i],
					width: `${100 / barHeights.length}%`,
				}}
				className='bar algo-bar'
			></div>
		)
	}

	if (!algorithmNames[algorithm]) {
		return null
	}

	return (
		<div className='vstack-container vstack-section algo-stage'>
			<SectionHeader
				eyebrow='Sorting Lab'
				title={algorithmName}
				description='Adjust the bar count, then start the visualizer to see each comparison and swap animate across the shared VStack stage.'
			/>
			<Card className='p-6'>
				<div className='algo-bars'>{bars}</div>
				<div className='mt-8 grid gap-6'>
					<Slider
						min={5}
						max={100}
						step={1}
						keyboard={true}
						styles={{
							handle: {
								backgroundColor: 'var(--vstack-accent)',
								borderColor: 'var(--vstack-accent)',
							},
							track: {
								backgroundColor: 'var(--vstack-accent)',
							},
							rail: {
								backgroundColor: 'var(--vstack-text-muted)',
							},
						}}
						defaultValue={barHeights.length}
						onChange={(value) => {
							setBarHeights(generateBarHeights(value as number))
						}}
					/>
					<Button
						className='vstack-button justify-self-center'
						onClick={() => {
							sort(algorithm)
						}}
					>
						Start
					</Button>
				</div>
			</Card>
		</div>
	)
}

function sort(algorithm: string) {
	const bars = document.getElementsByClassName(
		'bar'
	) as HTMLCollectionOf<HTMLElement>

	if (algorithm === 'bubble') {
		bubbleSort(bars)
	} else if (algorithm === 'insertion') {
		insertionSort(bars)
	} else if (algorithm === 'selection') {
		selectionSort(bars)
	} else if (algorithm === 'merge') {
		mergeSort(bars, 0, bars.length - 1)
	} else if (algorithm === 'quick') {
		quickSort(bars, 0, bars.length - 1)
	} else if (algorithm === 'heap') {
		heapSort(bars)
	}
}
