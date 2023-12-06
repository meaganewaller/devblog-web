import Pagination from '@/components/Layout/Pagination'
import { ProjectResponse } from '@/types'
import tw, { styled  } from 'twin.macro'
import Image from 'next/image'
import Link from 'next/link'


export interface ProjectListProps {
  projects: ProjectResponse[]
  page?: number
  totalPages?: number
  url: string
  previousProjectUrl: string
  pagination: string[]
}

const StyledCorkboard = styled.div`
  width: 750px;
  margin: auto;
  border: 30px solid;
  border-top-color: #e8c295;
  border-right-color: #d4a977;
  border-bottom-color: #bf9d75;
  border-left-color: #e4ba89;
  outline: 1px solid #9a5d0f;
  box-shadow: inset 6px 6px 14px 0px rgb(53 31 3 / 70%);
`

const Corkboard = tw(StyledCorkboard)`
  min-h-[750px] relative bg-cork
`

const StyledCorkInner = styled.div`
  width: 750px;
  min-height: 500px;
  position: relative;
`

const StyledProject = styled.div`
  z-index: 1;
  padding: 15px 10px 0 10px;
  display: inline-block;
  background: #fff;
  box-shadow: 2px 2px 4px 0px rgb(0 0 0 / 26%);

  > h1 {
    margin: 0;
    font-family: 'basiic';
    font-size: 1.15rem;
    text-align: center;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -4px;
  }

  &:before {
    content: '';
    width: 20px;
    height: 10px;
    background: rgb(var(--color-sky-blue));
    display: block;
    position: absolute;
    top: -7px;
    left: calc(50% - 15px);
    border-radius: 50%;
    box-shadow:
      0px 11px 3px -2px rgb(37 37 37 / 30%),
      0px 11px 0px 0px rgb(var(--color-sky-blue)),
      inset 0px -1px 4px 1px rgb(37 37 37 / 30%);
  }

  &:after {
    content: '';
    display: block;
    background: rgb(var(--color-sky-blue));
    width: 10px;
    height: 6px;
    position: absolute;
    top: 2px;
    left: calc(50% - 9.5px);
    clip-path: polygon(10% 0, 90% 0, 100% 100%, 0% 100%);
    box-shadow: inset -3px 2px 4px 0px rgb(37 37 37 / 30%);
  }
`

const projectCoords = [
  {
    x: '50px',
    y: '180px',
  },
  {
    x: '400px',
    y: '80px',
  },
  {
    x: '150px',
    y: '250px',
  },
  {
    x: '400px',
    y: '250px',
  },
  {
    x: '150px',
    y: '420px',
  },
  {
    x: '400px',
    y: '420px',
  },
]

export const ProjectsList = ({
  projects,
  page = 1,
  totalPages = 1,
  url,
  previousProjectUrl,
  pagination,
}: ProjectListProps) => {
  return (
    <div>
      <Corkboard>
        <StyledCorkInner>
          {projects.length > 0 && projects.map((project: ProjectResponse, index: number) => (
            <Link
              key={project.slug}
              className="relative hover:cursor-pointer inline-block h-full w-full"
              href={`/projects/${project.slug}`}
            >
              <StyledProject
                className={`absolute top-[${projectCoords[index].y}] left-[${projectCoords[index].x}] rotate-[${index % 2 === 0 ? -5 : 5}deg]`}
              >
                <Image
                  src={project.cover_image}
                  alt={project.title}
                  width={200}
                  height={200}
                />
                <h1>{project.title}</h1>

                </StyledProject>
              </Link>))}
        </StyledCorkInner>
      </Corkboard>

      {page && totalPages && (
        <Pagination
          series={pagination}
          page={page}
          totalPages={totalPages}
          url={url}
          previousPostUrl={previousProjectUrl}
        />
      )}
    </div>
  )
}

//   totalPages = 1,
//         {projects.length === 0 && <p>No Projects Found :(</p>}
//         {projects.length > 0 && (
//           <>
//             {projects.slice(0, 6).map((project: ProjectResponse, index: number) => (
//
//               <Link
//                 key={project.slug}
//                 className="hover:cursor-pointer"
//                 href={`/projects/${project.slug}`}
//               >
//                 <StyledProject className={`top-[${index * 60 + 40}px] ${ index % 2 === 0 ? 'left-[30px]' : 'right-[100px]' } rotate-[${index % 2 === 0 ? -5 : 5}deg]`} >
//                   <Image
//                     src={project.cover_image}
//                     alt={project.title}
//                     width={250}
//                     height={250}
//                   />
//                   <h1>{project.title}</h1>
//                 </StyledProject>
//               </Link>
//             ))}
//             {page && totalPages && (
//               <Pagination series={pagination} page={page} totalPages={totalPages} url={url} previousProjectUrl={previousProjectUrl} />
//             )}
//           </>
//         )}
//       </StyledCorkInner>
//     </Corkboard>
//   )
// }
