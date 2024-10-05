'use client'
import { CardWrapper } from "./card-wrapper"
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';
import { LoginSchema } from "@/schemas";

import {
  Form , FormControl, FormField, FormItem,FormLabel,FormMessage
} from '@/components/ui/form'



export const  LoginForm = () => {

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues:{
      email: '',
      password:'',
    }
  })
  return(
    <CardWrapper 
       headerLabel="Welcome back"
       backButtonHref="Don't have an account"
      backButtonLabel= "Don't have an account" 
      showSocial
      >
      Login form
    </CardWrapper>
  )
}