'use client'

import Link from "next/link";
import { Button } from "../ui/button"

interface BackButtonProps{
  href: string;
  label: string;
}

export const BackButton = ({
  href,
  label,
}:BackButtonProps) => {
  return(
    <Button 
      variant='link'
      className="font-normal w-full bg-gray-900 text-gray-400"
      size='sm'
      asChild>
      <Link 
        href={href}
        >
          {label}
        </Link>
    </Button>
  )
}