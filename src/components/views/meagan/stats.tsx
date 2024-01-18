interface CardProps {
  title: string
  value: string | number
}

function Card({ title, value }: CardProps) {
  return (
    <div className='border-neutral-600 bg-neutral-800 flex flex-col rounded border p-3'>
      <small className='text-ellipsis'>{title}</small>
      <div className='flex items-center justify-between'>
        <span className='text-xl font-semibold'>{value}</span>
      </div>
    </div>
  )
}

interface StatsProps {
  wakatime?: string
  dailyAvg?: string
  topLang?: string
  otherLang?: string
}

export function Stats({ wakatime, dailyAvg, topLang, otherLang }: StatsProps) {
  return (
    <div className='grid grid-cols-2 gap-3 md:grid-cols-4'>
      <Card title='Coding' value={wakatime ?? '--'} />
      <Card title='Daily Average' value={dailyAvg ?? '--'} />
      <Card title='Top Language' value={topLang ?? '--'} />
      <Card title='Other Language' value={otherLang ?? '--'} />
    </div>
  )
}
