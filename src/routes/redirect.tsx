import { useEffect } from "react"
import { NavLink } from "react-router-dom"

export function RedirectPage() {

  useEffect(() => {
    <NavLink to="/dashboard" replace={true} />
  }, [])
  
  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  )
}   