import {
  SignUpButton,
} from "@clerk/nextjs"

export default function Home() {
  return (
    <main className="home">
      {/* Hero / Welcome section */}
      <section className="hero">
        <h1>Welcome to PrePicked</h1>
        <p>Lock in your season picks for Football, Basketball and Baseball</p>
        <button>Get Started Now</button>
      </section>

      {/* Feature Highlights */}
      <section className="features">
        <h2></h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>For Dan and Tom</h3>
            <p>Enter current weeks betting slip for fast and easy point calcualtion</p>
            <button>check picks</button>
          </div>
        </div>
      </section>
      <section className="cta">
        <h2>Join the Community</h2>
        <p>Sign up to unlock your own PrePicked experience.</p>
        <SignUpButton>
          <button className="sign-up-button">
            Sign Up
          </button>
        </SignUpButton>
      </section>
    </main>
  )
}
