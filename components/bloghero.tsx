import PageBanner from "@/components/PageBanner";
import { pageHeroes } from "@/data/site-data";

export default function Hero() {
  return <PageBanner content={pageHeroes.blogs} />;
}