import Footer from "../components/Footer"
import Header from "../components/Header"

export default function Home() {
  return (
    <section className="root--container container flex flex-col gap-8">
      <div className="glass sub-padding flex max-xl:flex-col xl:gap-28">
        <Header />
      </div>

      <div className="glass sub-padding terminal flex-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        quas, hic, quaerat incidunt natus ea totam tenetur laborum tempora sequi
        nisi possimus cum magni eaque earum laudantium, amet autem ipsum.
      </div>

      <div className="glass sub-padding svg--center flex flex-row gap-4">
        <Footer />
      </div>
    </section>
  )
}
