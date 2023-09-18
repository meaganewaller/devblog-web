export default function loading(): JSX.Element {
  return (
    <div className='mt-16 animate-pulse sm:mt-32'>
      <div className='divide-gray-200 dark:divide-gray-700 flex flex-col items-start justify-start divide-y md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0'>
        <div className='space-x-2 pb-8 pt-6 md:space-y-5'>
          <div className='bg-gray-300 dark:bg-gray-600 h-8 w-32 rounded-full' />
        </div>
        <div className='flex max-w-lg flex-wrap'>
          {[...Array(8)].map((_, index) => (
            <div key={index} className='mb-2 mr-5 mt-2'>
              <div className='bg-gray-200 dark:bg-gray-700 h-4 w-32 rounded-full' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
