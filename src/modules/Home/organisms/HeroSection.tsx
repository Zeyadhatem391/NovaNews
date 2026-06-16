import { NotFound } from "@/assets/images/images";
import { NewsItem } from "@/modules/news/api/GetNewsCategory";
import CardImageHero from "../molecules/CardImageHero";

interface Props {
  data: NewsItem[];
}

export default function HeroSection({ data }: Props) {
  const topCards = data.slice(0, 3);
  const bottomCards = data.slice(3, 7);

  return (
    <div>
      <div className="mx-4 px-5 lg:px-0 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {topCards[0] && (
          <CardImageHero
            image={topCards[0].image_url || NotFound}
            text={topCards[0].title}
            className="h-96 md:col-span-2"
          />
        )}

        {topCards[1] && (
          <CardImageHero
            image={topCards[1].image_url || NotFound}
            text={topCards[1].title}
            className="h-96"
          />
        )}

        {topCards[2] && (
          <CardImageHero
            image={topCards[2].image_url || NotFound}
            text={topCards[2].title}
            className="h-96"
          />
        )}
      </div>

      <div className="mx-4 px-5 lg:px-0 my-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {bottomCards.map((item) => (
          <CardImageHero
            key={item.article_id}
            image={item.image_url || NotFound}
            text={item.title}
            className="h-60"
          />
        ))}
      </div>
    </div>
  );
}
