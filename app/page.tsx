import Image from "next/image"

export default function Home() {
  return (
    <section className="container flex flex-col gap-8 py-20">
      <div className="glass p-8">
        <h1 className="text--neon--normal h1">404</h1>
        <h2 className="text--neon--normal h3">Page Not Found</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
          exercitationem optio, provident ab earum labore tempora laborum
          officia laboriosam ratione, voluptatem praesentium saepe et? Placeat
          eaque aliquid sapiente iusto cumque!
        </p>
      </div>
      <div className="glass flex-auto p-8">
        <h1 className="text--neon--purple h1">404</h1>
        <h2 className="text--neon--purple h3">Page Not Found</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          perspiciatis nihil autem ullam qui odit sequi sed quia, unde fugiat
          rem impedit obcaecati voluptates, iusto, iste facilis! Eum, vitae
          quasi!
        </p>
      </div>
    </section>
  )
}
