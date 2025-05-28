import { defineQuery } from "next-sanity"
import {sanityFetch} from '../live'
import { Projects } from "@/sanity.types" 


export const getAllProjects = async()=>{
   console.log("function is being runned")
    const ALL_PROJECTS_QUERY = defineQuery(`*[
    _type == 'projects'
   ] | order(created_at asc)`)

   try {
    const projects = await sanityFetch({
        query: ALL_PROJECTS_QUERY
    });
    console.log(projects)
    console.log(ALL_PROJECTS_QUERY)
    return projects.data || []
    
   } catch (error) {
     console.log("error occurred while fetching projects",error)
     return []
   }

}