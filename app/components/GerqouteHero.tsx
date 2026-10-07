import PageBanner from "@/app/components/PageBanner";
import { pageHeroes } from "@/app/data/site-data";

export default function Hero() {
  return <PageBanner content={pageHeroes.quote} />;
}