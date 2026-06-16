"use client";
import {
  NotFound,
  Poster1,
  Poster2,
  SquerPoster1,
} from "@/assets/images/images";
import CategoriesSection from "@/modules/Home/organisms/CategoriesSection";
import HeroSection from "@/modules/Home/organisms/HeroSection";
import LatestNewsSection from "@/modules/Home/organisms/LatestNewsSection";
import useGetNews from "@/modules/news/hooks/useGetNews";
import useGetNewsCategory from "@/modules/news/hooks/useGetNewsCategory";
import PublicLayout from "@/shared/components/layout/PublicLayout";
import BlockCardNews from "@/shared/components/molecules/BlockCardNews";
import CardNews from "@/shared/components/molecules/CardNews";
import CardNewsSmall from "@/shared/components/molecules/CardNewsSmall";
import HeadingLink from "@/shared/components/molecules/HeadingLink";
import Poster from "@/shared/components/molecules/Poster";
import SquarePoster from "@/shared/components/molecules/SquarePoster";

export default function Home() {
  const { data } = useGetNews();

  const hero1 = data?.results.slice(0, 7) ?? [];

  {
    /*  ======================= categories ======================= */
  }

  const { data: sportsData } = useGetNewsCategory("sports");
  const { data: techData } = useGetNewsCategory("technology");
  const { data: politicsData } = useGetNewsCategory("politics");
  const { data: worldData } = useGetNewsCategory("world");

  const { data: scienceData } = useGetNewsCategory("science");
  const { data: tourismData } = useGetNewsCategory("tourism");
  const { data: entertainmentData } = useGetNewsCategory("entertainment");
  const { data: healthData } = useGetNewsCategory("health");

  const { data: topData } = useGetNewsCategory("top");

  const { data: foodData } = useGetNewsCategory("food");
  const { data: businessData } = useGetNewsCategory("business");
  const { data: environmentData } = useGetNewsCategory("environment");

  {
    /*  ======================= categories ======================= */
  }

  return (
    <PublicLayout>
      <HeroSection data={hero1} />
      <Poster image={Poster1} />

      <LatestNewsSection>
        <div>
          <HeadingLink text="Latest News" />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2  mt-5">
            {topData?.results.slice(0, 6).map((item) => (
              <CardNews
                key={item.article_id}
                image={item.image_url || NotFound}
                text={item.title}
                type="Sport"
                time="5"
              />
            ))}
          </div>
        </div>

        {/* Sidebar News */}
        <div>
          <HeadingLink text="Latest News" />

          <div className="flex flex-col gap-1 mt-5">
            {topData?.results.slice(7, 9).map((item) => (
              <CardNewsSmall
                key={item.article_id}
                image={item.image_url || NotFound}
                text={item.title}
              />
            ))}
          </div>

          <SquarePoster image={SquerPoster1} />
        </div>
      </LatestNewsSection>

      <Poster image={Poster2} />
      <Poster image={Poster1} />

      <BlockCardNews color="bg-black">
        <HeadingLink text="Most Important News" color="text-white" />
        <div className="flex justify-between flex-col lg:flex-row gap-3 mt-5">
          {businessData?.results.slice(0, 4).map((item) => (
            <CardNews
              key={item.article_id}
              image={item.image_url || NotFound}
              text={item.title}
              isType={false}
              isTime={false}
              color="text-white"
            />
          ))}
        </div>
      </BlockCardNews>

      {/*  ======================= categories ======================= */}
      <div className="mx-4 mt-8 grid grid-cols-1 lg:grid-cols-4 gap-2">
        <CategoriesSection title="Food" news={foodData?.results ?? []} />

        <CategoriesSection title="Technology" news={techData?.results ?? []} />

        <CategoriesSection
          title="Environment"
          news={environmentData?.results ?? []}
        />

        <CategoriesSection
          title="World"
          news={worldData?.results ?? []}
          hasHero={false}
        />
      </div>

      <div className="mx-4 mt-8 grid grid-cols-1 lg:grid-cols-4 gap-2">
        <CategoriesSection title="Science" news={scienceData?.results ?? []} />

        <CategoriesSection title="Tourism" news={tourismData?.results ?? []} />

        <CategoriesSection
          title="Entertainment"
          news={entertainmentData?.results ?? []}
        />

        <CategoriesSection
          title="Health"
          news={healthData?.results ?? []}
          hasHero={false}
        />
      </div>
      {/*  ======================= categories ======================= */}

      <BlockCardNews color="bg-blue-950">
        <HeadingLink text="Business" color="text-white" />
        <div className="flex justify-between flex-col lg:flex-row gap-3 mt-5">
          {businessData?.results.slice(6, 10).map((item) => (
            <CardNews
              key={item.article_id}
              image={item.image_url || NotFound}
              text={item.title}
              isType={false}
              isTime={false}
              color="text-white"
            />
          ))}
        </div>
      </BlockCardNews>

      <LatestNewsSection>
        <div>
          <HeadingLink text="Sports" />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2  mt-5">
            {sportsData?.results.slice(0, 6).map((item) => (
              <CardNews
                key={item.article_id}
                image={item.image_url || NotFound}
                text={item.title}
                type="Sport"
                time="5"
              />
            ))}
          </div>
        </div>

        {/* Sidebar News */}
        <div>
          <HeadingLink text="Latest News" />

          <div className="flex flex-col gap-1 mt-5">
            {sportsData?.results.slice(7, 9).map((item) => (
              <CardNewsSmall
                key={item.article_id}
                image={item.image_url || NotFound}
                text={item.title}
              />
            ))}
          </div>

          <SquarePoster image={SquerPoster1} />
        </div>
      </LatestNewsSection>
      <LatestNewsSection>
        <div>
          <HeadingLink text="Politics" />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2  mt-5">
            {politicsData?.results.slice(0, 6).map((item) => (
              <CardNews
                key={item.article_id}
                image={item.image_url || NotFound}
                text={item.title}
                type="Sport"
                time="5"
              />
            ))}
          </div>
        </div>

        {/* Sidebar News */}
        <div>
          <HeadingLink text="Latest News" />

          <div className="flex flex-col gap-1 mt-5">
            {politicsData?.results.slice(7, 12).map((item) => (
              <CardNewsSmall
                key={item.article_id}
                image={item.image_url || NotFound}
                text={item.title}
              />
            ))}
          </div>

        </div>
      </LatestNewsSection>
    </PublicLayout>
  );
}
