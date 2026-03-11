import Navbar from "./components/global/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen flex items-center justify-center">
        <img 
          src="https://res.cloudinary.com/dicrvjstp/image/upload/v1773250810/rbr_lfofek.png" 
          alt="RBR - Software Engineer"
          className="max-w-4xl w-full h-auto"
        />
      </section>
    </>
  )
}

export default App
