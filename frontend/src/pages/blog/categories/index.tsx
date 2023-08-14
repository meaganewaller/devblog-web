import CategoryService from "@/services/CategoryService";
import CategoryCard from "@/components/CategoryCard";
import Layout from '@/components/layout/Layout';
import { convertToCategoryList } from "@/lib/utils/blog";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
interface Category {
  title: string;
  description: string;
  slug: string;
}

export default function Categories(props: { categories: Category[] }): JSX.Element {
  return (
    <Layout>
      <div className="container mx-auto p-2 sm:p-4 md:p-8 lg:p-10 bg-primary-50 mt-5 sm:mt-20 md:mt-32 rounded-lg border-2 border-solid border-primary-200">
        <div className="w-[80%] p-4 mb-3">
          <h1 className="text-[4em] font-venice text-primary-300">Categories</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {props.categories.map((category: Category, index: number) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </Layout>

  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const categoriesData = await CategoryService.getAll();
    const { categories } = convertToCategoryList(categoriesData)

    return {
      props: {
        categories,
      },
      revalidate: 30,
    }
  } catch (error) {
    return {
      props: {
        categories: [],
      }
    }
  }
}
