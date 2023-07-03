"use client"

import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'

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

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

export default function Navbar({
	analytics,
	setAnalytics,
}: {
	analytics: boolean
	setAnalytics: Dispatch<SetStateAction<boolean>>
}) {
	const handleAnalyticsChange = () => {
		setAnalytics((analytics) => {
			localStorage.setItem('analytics', String(!analytics))
			if (analytics !== false) {
				window.location.reload()
			}
			return !analytics
		})
	}

	return (
		<>
			<div className='bg-gray-800'>
				<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
					<div className='relative flex h-16 items-center justify-between'>
						<div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
							<div className='flex flex-shrink-0 items-center'>
								<Link href='/'>
									<Image
										className='h-8 w-auto lg:block'
										src='/logo-light.png'
										alt='Vineel Sai'
										width={50}
										height={50}
									/>
								</Link>
							</div>
							<div className='hidden sm:ml-6 sm:block lg:block'>
								<div className='flex space-x-4'>
									{navigation.map((item: Navigation) => (
										<Link
											key={item.name}
											href={item.href}
											className={classNames(
												item.current
													? 'bg-gray-900 text-white'
													: 'text-gray-300 hover:bg-gray-700 hover:text-white',
												'rounded-md px-3 py-2 text-sm font-medium'
											)}
											aria-current={
												item.current
													? 'page'
													: undefined
											}
										>
											{item.name}
										</Link>
									))}
								</div>
							</div>
						</div>
						<div className='hidden lg:flex'>
							<label className='relative m-2 inline-flex cursor-pointer items-center'>
								<input
									type='checkbox'
									value=''
									className='peer sr-only'
									checked={analytics}
									onChange={handleAnalyticsChange}
								/>
								<div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800"></div>
								<span className='ml-3 text-sm font-medium text-gray-300'>
									Ads & Analytics
								</span>
							</label>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}