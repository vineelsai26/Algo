import { LoadingIndicator } from '@vstack/ui'

export default function Loader() {
	return (
		<LoadingIndicator
			className='justify-center'
			spinnerClassName='fill-blue-600 text-gray-200 dark:text-gray-600'
		/>
	)
}
