import { PortfolioComponent } from "@/components/portfolio";
import { SectionTitle } from "@/components/venture-point-landing";
import Header from "@/components/ui/header"
export default function Page() {
  return (
    <div className="bg-white flex justify-center">
      <main className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="w-full py-12 md:py-24 lg:py-32">
        <Header/>
          <PortfolioComponent />
          
        </section>
      </main>
    </div>
  );
}
