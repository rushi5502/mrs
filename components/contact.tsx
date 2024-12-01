"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"
import { AnimatedGrid } from "./magicUi/AnimatedGrid"
 

const FormSchema = z.object({
  name: z.string().min(1, {
    message: "required.",
  }),
  phone:z.string().min(10,{message:"invalid phone"}).max(10,{message:"invalid phone number"}),
  email:z.string().email({message:"inavlid Email "}),
  subject: z
  .string().min(1,{
     message: "Please select Subject.",
  }),
  description: z
    .string()
    .min(10, {
      message: "Discription must be at least 10 characters.",
    })
    .max(400, {
      message: "Discription must not be longer than 30 characters.",
    }),
  
})

export function Contact() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email:"",
      phone:"",
      subject:"",
      description:""
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    
  }

  return (
    <section  className=" w-full"> 
      <div className=" flex items-center justify-center gap-2 text-center flex-col">
        <h2>Get In Touch.
          <p>Lorem ipsum dolor sit amet.</p>
        </h2>
      </div>
    <div className="  grid md:grid-cols-2  gap-5 w-full p-5  justify-center items-center">
<div>
<AnimatedGrid/>
</div>
      <div className=" w-full flex flex-col items-center justify-center">
      <Form {...form }>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" w-3/4 space-y-6">
        <div className=" flex items-center gap-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className=" w-full">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Name" {...field} />
              </FormControl>  
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className=" w-full">
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="Phone number" {...field} />
              </FormControl> 
              
            </FormItem>
          )}
        />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your mail" {...field} />
              </FormControl> 
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl  >
                  <SelectTrigger>
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent >
                  <SelectItem value="Connect With Us">Connect With Us</SelectItem>
                  <SelectItem value="Suggestion">Suggestion</SelectItem>
                  <SelectItem value="Complaint">Complaint</SelectItem>
                </SelectContent>
              </Select> 
       <FormMessage/>
            </FormItem>
          )}
        />

           <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
              <Textarea
                  placeholder="Write a Description.."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
           
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit">Submit</Button>
      </form>
    </Form>
      </div>
    </div>
    </section>
  )
}

export default Contact;