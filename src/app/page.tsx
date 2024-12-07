import NavBar from "@/components/NavBar/NavBar";
import SideInformation from "@/components/SideInformation/SideInformation";
import type { Metadata } from "next";
import { nunito } from "../components/fonts";

export const metadata: Metadata = {
  title: "Portfolio Marcelo Mastroiani",
  description: "Generated by create next app",
};
export default function Home() {
  return (
    <main className="main-container">
      <div className="relative top-0 left-0 w-[25%] h-full">
        <SideInformation />
      </div>

      <article
        className={`${nunito.className} article-container animate-fadeIn`}
      >
        <NavBar />

        {/* About me */}
        <section className="section-about-me">
          <div className="div-about-me">
            <h1>Portfolio Marcelo Mastroiani</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
              iste quisquam corrupti, consequatur veniam autem consequuntur
              iusto veritatis odio adipisci! Magni ducimus harum tempore illum
              delectus animi temporibus minima dolores ipsum iusto. Est rem
              neque ipsa culpa quo hic possimus obcaecati praesentium,
              asperiores nostrum. Totam voluptatum deserunt similique nesciunt!
              Harum fugiat corrupti quisquam, nobis consequatur expedita numquam
              velit voluptate eligendi ab optio placeat ducimus earum dolorem
              porro reprehenderit officia soluta exercitationem ea quibusdam
              itaque commodi blanditiis eos id? Amet, blanditiis est labore
              aliquid voluptas ut tempora tempore corporis. Ea numquam
              accusantium ipsum porro laborum repellat provident ducimus vitae
              ullam quidem, nesciunt in cupiditate non reiciendis sit!
              Temporibus libero facilis harum magnam praesentium amet aperiam,
              corporis, similique autem quidem vel sunt? Reprehenderit vero
              eaque architecto! Iure beatae alias quam reiciendis officia vel
              quos nisi dolores amet perspiciatis quibusdam nemo cum sapiente
              expedita assumenda sit, optio excepturi eum deserunt? Recusandae
              error nobis, consectetur aspernatur libero quaerat ex vero itaque
              sunt. Ad praesentium natus, maxime hic enim aperiam suscipit
              impedit, aspernatur vitae non esse culpa odio harum, minus
              corporis consequatur dignissimos doloremque totam rerum est
              nostrum voluptatibus excepturi! Nesciunt aspernatur nisi
              accusantium unde repellat sit sapiente laudantium dolorum, dolores
              ipsa suscipit! Molestias, assumenda?
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
