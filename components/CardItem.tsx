"use client"
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
 interface CardItemProps {
  title:string,
  description:string,
  icon:React.ReactNode
 }
const CardItem = ({title, description, icon}:CardItemProps) => {
  return (
    <Card className='transition-shadow shadow-white shadow-lg'>
  <CardHeader>
    <CardTitle>{title}</CardTitle>
    <CardDescription></CardDescription>
  </CardHeader>
  <CardContent className='text-sm'>
    <p className='leading-loose tetx-sm'>{description}</p>
  </CardContent>
  <CardFooter>
    <p className='text-xs text-gray-400 flex gap-2 items-center'>Read More <FaArrowRight/></p>
  </CardFooter>
</Card>
  )
}

export default CardItem