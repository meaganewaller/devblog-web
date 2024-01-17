import Search from './Search'
import Taxonomy from './Taxonomy'

const Sidebar = () => (
  <div className='col-span-12 hidden w-full max-w-[300px] space-y-8 p-2 md:col-span-3 md:mt-2 md:block md:p-2 xl:col-span-2'>
    <Search />
    <Taxonomy />
  </div>
)

export default Sidebar
