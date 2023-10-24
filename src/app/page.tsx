import Link from 'next/link'

export const metadata = {
	title: 'Algo',
	description: 'Algorithm Visualizer',
}

export const revalidate = 3600
export const runtime = 'edge'

export default function Home() {
	return (
		<div>
			<h1 id='sorting' className='text-center p-6 dark:text-white text-2xl' >Sorting Algorithms</h1>
			<div className='m-auto w-3/5 h-auto grid grid-cols-3' >
				<Link className='relative w-1/2 m-auto my-4 text-center rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-white bg-blue-500 duration-300 hover:border-transparent hover:bg-blue-700 hover:text-white' href={'/sort/bubble'} >Bubble Sort</Link>
				<Link className='relative w-1/2 m-auto my-4 text-center rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-white bg-blue-500 duration-300 hover:border-transparent hover:bg-blue-700 hover:text-white' href={'/sort/selection'}>Selection Sort</Link>
				<Link className='relative w-1/2 m-auto my-4 text-center rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-white bg-blue-500 duration-300 hover:border-transparent hover:bg-blue-700 hover:text-white' href={'/sort/merge'}>Merge Sort</Link>
				<Link className='relative w-1/2 m-auto my-4 text-center rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-white bg-blue-500 duration-300 hover:border-transparent hover:bg-blue-700 hover:text-white' href={'/sort/insertion'}>Insertion Sort</Link>
				<Link className='relative w-1/2 m-auto my-4 text-center rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-white bg-blue-500 duration-300 hover:border-transparent hover:bg-blue-700 hover:text-white' href={'/sort/quick'}>Quick Sort</Link>
				<Link className='relative w-1/2 m-auto my-4 text-center rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-white bg-blue-500 duration-300 hover:border-transparent hover:bg-blue-700 hover:text-white' href={'/sort/heap'}>Heap Sort</Link>
			</div>
		</div>
	)
}
