"use client"
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs"
import Image from "next/image"
import { useRouter } from "next/navigation"
import "../styles/navbar.css"

export default function Navbar() {
  const logo = "/assets/prepicked.png"
  const router = useRouter()
  return (
    <nav>
      <div>
        <Image
          alt="prepicks logo"
          className="nav-prepicks-logo"
          src={logo}
          width={120}
          height={60}
        />
      </div>
      <div>
        <button onClick={() => router.push("/page.tsx")}>click me</button>
      </div>
      <div>
        <h1 className="title-text">PrePicked</h1>
      </div>
      <SignedOut>
        <SignInButton>
          <button className="sign-in-button">
            Sign In
          </button>
        </SignInButton>
        <SignUpButton>
          <button className="sign-up-button">
            Sign Up
          </button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  )
}
