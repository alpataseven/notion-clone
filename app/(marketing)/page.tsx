import { Footer } from "./_components/footer";
import Headings from "./_components/heading";
import Heroes from "./_components/heroes";

export default function MarketingPage() {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center 
      md:justify-start text-center gap-y-8 flex-1 px-6 pb-6">
        <Headings />
        <Heroes />
        <Footer />
      </div>
    </div>
  );
}
