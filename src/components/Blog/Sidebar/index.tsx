import Featuring from './Featuring'
import Search from "./Search"
// import Tags from './Tags'
// import Categories from './Categories'
import Projects from './Projects'
// import Workspaces from './Workspaces'

const Sidebar = () => (
  <div className='col-span-12 hidden max-w-[300px] space-y-8 p-2 md:col-span-3 md:mt-2 md:block md:p-2 xl:col-span-2'>
    <Search />
    <Featuring />
    <Projects />
    {/* <Categories /> */}
    {/* <Workspaces /> */}
    {/* <Tags /> */}
  </div>
)

export default Sidebar
