'use client'
import { useEffect } from 'react'
import { useDetailStore } from '@/store/project.store'
import ProjectDetail from './ProjectDetail'
import { useFetchProjectDetail } from '../../../_hooks/useFetchProjectDetail'

interface ProjectDetailProps {
  params: {
    slug: string
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailProps) {
  const { slug } = params
  const { data, isLoading } = useFetchProjectDetail(slug)
  const { setProject } = useDetailStore()
  useEffect(() => {
    setProject(data)
  }, [setProject, data])

  return <>{isLoading ? <p>Client side fetching..</p> : <ProjectDetail />}</>
}
