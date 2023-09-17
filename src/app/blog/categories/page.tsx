'use client'

import React, { Suspense, useState, useEffect } from 'react'

import { CategoryService } from '@/lib/api'
import { convertToCategoryList } from '@/utils/blogs'

import ResourceIndex from "@/layouts/ResourceIndex"

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
        headingTitle={`All Categories`}
        categories={categories}
        resources={categories}
      />
    </Suspense>
  )
}

export default Categories
