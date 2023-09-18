import { clsx } from 'clsx'

type ColorChip = {
  name: string
  pantone: string
  cmyk: string
  rgb: string
  hex: string
}
const ColorChip = (props: ColorChip) => {
  const { name, pantone, cmyk, rgb, hex } = props
  return (
    <>
      <div className='border-gray-400 flex flex-col space-y-2 rounded-md border p-4'>
        <h3 className='font-bold'>{name}</h3>
        <div
          className={clsx('inline-block h-24 w-full', {
            'bg-background': name === 'Background',
            'bg-accent': name === 'Accent',
            'bg-gray': name === 'Gray',
            'bg-white': name === 'White',
          })}
        />
        <dl className='flex flex-col text-xs'>
          <div className='flex'>
            <dt className='w-[4em] font-bold'>Pantone</dt>
            <dd>{pantone}</dd>
          </div>
          <div className='flex'>
            <dt className='w-[4em] font-bold'>CMYK</dt>
            <dd>{cmyk}</dd>
          </div>
          <div className='flex'>
            <dt className='w-[4em] font-bold'>RGB</dt>
            <dd>{rgb}</dd>
          </div>
          <div className='flex'>
            <dt className='w-[4em] font-bold'>Hex</dt>
            <dd>{hex}</dd>
          </div>
        </dl>
      </div>
    </>
  )
}

export default ColorChip
