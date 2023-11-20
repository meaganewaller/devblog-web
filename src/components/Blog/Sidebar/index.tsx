import Featuring from './Featuring'
import Projects from './Projects'
import Search from './Search'

const Sidebar = () => (
  <div className='col-span-12 hidden max-w-[300px] space-y-8 p-2 md:col-span-3 md:mt-2 md:block md:p-2 xl:col-span-2'>
    <Search />
    <Featuring />
    <Projects />
  </div>
)

export default Sidebar
