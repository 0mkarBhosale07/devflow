import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import RenderTags from "./RenderTags"


const hotQuestions = [
    {_id:1, title:"How can I use express as a custom server in NEXTJS?"},
    {_id:2, title:"Cascading deletes in SQLAlchemy?"},
    {_id:3, title:"How to perfectly center a div using tailwind css?"},
    {_id:4, title:"Redux tool kit not updating state as expected?"},
    {_id:5, title:"How to learn python in 2024?"},
    {_id:6, title:"How can I use user authentication using clerk in my nextjs app?"},
]

const popularTags = [
    {_id:1, name:"javascript", totalQuestions: 5},
    {_id:2, name:"nextjs", totalQuestions: 2},
    {_id:3, name:"python", totalQuestions: 15},
    {_id:4, name:"java", totalQuestions: 1},
]

const RightSidebar = () => {
  return (
    <section className='background-light900_dark200 light-border sticky right-0 top-0 flex h-screen flex-col  overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden w-[350px] custom-scrollbar'>
        <div>
            <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
            <div className="mt-7 flex w-full flex-col gap-[30px]">
                {hotQuestions.map((question)=>(
                    <Link href={`/questions/${question._id}`} key={question._id} className='flex cursor-pointer items-center justify-between gap-7'>
                        <p className='body-medium text-dark500_light700'>{question.title}</p>
                        <Image src="/assets/icons/chevron-right.svg" alt='chevron right' width={20} height={20} className='invert-colors' />
                    </Link>
                ))}
            </div>
        </div>
        <div className="mt-16">
                    <h3 className="h3-bold text-dark200_light900">Popular Tags</h3> 
                    {popularTags.map((tag)=>(
                        <RenderTags key={tag._id} _id={tag._id} name={tag.name} totalQuestions={tag.totalQuestions} showCount />

                    ))}
        </div>
    </section>
  )
}

export default RightSidebar