import { NotFound } from "@/assets/images/images";
import CardNewsSmall from "@/shared/components/molecules/CardNewsSmall";
import CardImageHero from "../molecules/CardImageHero";
import HeadingLink from "@/shared/components/molecules/HeadingLink";

interface NewsItem {
  article_id: string;
  title: string;
  image_url: string;
}

interface CategoriesSectionProps {
  title: string;
  news: NewsItem[];
  hasHero?: boolean;
}

export default function CategoriesSection({
  title,
  news,
  hasHero = true,
}: CategoriesSectionProps) {
  return (
    <div>
      <HeadingLink text={title} />

      <div className="flex flex-col gap-2 mt-5">
        {hasHero ? (
          <>
            {news.slice(0, 1).map((item) => (
              <CardImageHero
                key={item.article_id}
                image={item.image_url || NotFound}
                text={item.title}
                className="h-60"
              />
            ))}

            {news.slice(1, 5).map((item) => (
              <CardNewsSmall
                key={item.article_id}
                image={item.image_url || NotFound}
                text={item.title}
              />
            ))}
          </>
        ) : (
          news.slice(0, 6).map((item) => (
            <CardNewsSmall
              key={item.article_id}
              image={item.image_url || NotFound}
              text={item.title}
            />
          ))
        )}
      </div>
    </div>
  );
}