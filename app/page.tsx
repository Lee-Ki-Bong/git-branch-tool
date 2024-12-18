import SVGUser from "./components/svgs/SvgUser"

export default function Home() {
  return (
    <section className="container flex flex-col gap-8 py-20">
      <div className="glass p-8">
        <h1 className="text--neon--white h1">404</h1>
        <h2 className="text--neon--white h3">Page Not Found</h2>
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
      <div className="glass p-8">
        <h1 className="text--neon--orange h1">404</h1>
        <h2 className="text--neon--orange h3">
          Page Not Found{" "}
          <SVGUser width="20" height="20" className="text-neonOrange" />
        </h2>
      </div>
    </section>
  )
}
