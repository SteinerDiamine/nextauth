'use client'
import { CardWrapper } from "./card-wrapper"
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';
import { LoginSchema } from "@/schemas";

import {
  Form , FormControl, FormField, FormItem,FormLabel,FormMessage
} from '@/components/ui/form'
import { Input } from "../ui/input";
import { Button } from "../ui/button";




export const  LoginForm = () => {

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues:{
      email: '',
      password:'',
    }
  })

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
      console.log(values);
      
  }
  return(
    <CardWrapper 
       headerLabel="Welcome back"
       backButtonHref="Don't have an account"
      backButtonLabel= "Don't have an account" 
      showSocial
      >
      <Form {...form}>
          <form 
           onSubmit={form.handleSubmit(onSubmit)}
           className="space-y-6"> 
           <div className="space-y-4">
            <FormField 
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email
                  </FormLabel>

                  <FormControl>
                    <Input
                      {...field}
                      placeholder="diamine123@gmail.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )} 
              />


          <FormField 
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Password
                  </FormLabel>

                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your password"
                      type="password"
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )} 
              />


           </div>
           <Button type="submit"
           className="w-full bg-gray-900">
            Login
           </Button>

          </form>
      </Form>
    </CardWrapper>
  )
}