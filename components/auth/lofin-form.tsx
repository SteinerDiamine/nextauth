import { CardWrapper } from "./card-wrapper"

export const  LoginForm = () => {
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