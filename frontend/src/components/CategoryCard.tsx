import React from 'react'

interface Category {
  title: string
  description: string
  slug: string
}

const CategoryCard = ({ title, description, slug }: Category) => {
  return (
    <div className="font-extra bg-primary-50 p-4 shadow-[0_0_8px] shadow-primary-300/70 border-solid border-2 border-primary-200 rounded-md flex flex-col justify-between">
      <h2 className="text-lg font-semibold mb-2 text-primary-400">{title}</h2>
      <p className="text-primary-800">{description}</p>
      <button className="mt-3.5 bg-secondary-200 hover:bg-secondary-200/80 text-secondary-500 hover:text-secondary-600 py-2 px-4 rounded">
        View Posts
      </button>
    </div>
  )
}

export default CategoryCard
