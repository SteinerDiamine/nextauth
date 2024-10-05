

const AuthLayout= ({children}:{children:React.ReactNode}) => {
  return (
    <div className="h-full flex  justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-400 to-blue-800  items-center">
      {children}
    </div>
  )
}

export default AuthLayout