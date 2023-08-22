import { Intro } from '@/components/views/home/intro';
import { Skills } from '@/components/views/home/skills';
import { Projects } from '@/components/views/projects/projects';
import { Window } from '@/components/core/window';


export default function Home() {
  return (
    <>
      <Window heading="About me">
        <div>Hi</div>
      </Window>
      <Intro />
      <Skills />
      <Projects />
    </>
  )
}
