'use client'

import React, { Suspense, useEffect, useState } from 'react'

import { CategoryService } from '@/lib/api'

import ResourceIndex from '@/layouts/ResourceIndex'
import { convertToCategoryList } from '@/utils/blogs'

function Categories() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    CategoryService.getAll().then((data: any) => {
      setCategories(convertToCategoryList(data).categories)
    })
  }, [])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResourceIndex
        headingTitle={'All Categories'}
        categories={categories}
        resources={categories}
      />
    </Suspense>
  )
}

export default Categories
