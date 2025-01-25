import Header from "@/components/header";
import { lazyImport } from "@/components/lazyImport";
const PageHeroTopSection = lazyImport(
  () => import("@/components/pages/hero/top-section")
);
const PageHeroAnimateBrands = lazyImport(
  () => import("@/components/pages/hero/animateBrands")
);
const PageHeroFeaturesSection = lazyImport(
  () => import("@/components/pages/hero/features-section")
);

export default async function Home() {
  return (
    <>
      <Header />
      <div>
        <PageHeroTopSection />
        <PageHeroAnimateBrands />
        <PageHeroFeaturesSection />
      </div>
    </>
  );
}
