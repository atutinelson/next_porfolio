import { defineType, defineField } from "sanity";


export const projectTypes = defineType({
    name:"projects",
    type:'document',
    title:"projects",
    fields:[
        defineField({
            name:"title",
            title:"Title",
            type:"string",
            validation:(rule)=>rule.required()
        }),
        defineField({
            name:"description",
            title:"Description",
            type:"text",
            validation:(rule)=>rule.required()
        }),
        defineField({
            name:"image",
            title:"Image",
            type:"image",

        }),
        defineField({
            name:"created_at",
            title:"Created At",
            type:'date'
        })
        
    ],
    preview:{
        select:{
            title:"title",
            subtitle:"created_at",
            media:"image"
            
        },
        prepare({title, subtitle, media}){
            return{
                title:title,
                subtitle:subtitle,
                media:media
            }
        }
    }
})