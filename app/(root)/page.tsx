import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

interface HomePageProps {
  searchParams: Promise<{ query?: string }>;
}

export default async function Home({ searchParams }: HomePageProps) {
  const query = (await searchParams).query;

  const posts = await client.fetch(STARTUPS_QUERY);

  console.log(posts, null, 2);

  return (
    <div>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Founders!
        </h1>
        <p className="sub-heading !max-w-exl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Vitural Components!
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => {
              return <StartupCard key={post?._id} post={post} />;
            })
          ) : (
            <p className="no-results">No startups found!</p>
          )}
        </ul>
      </section>
    </div>
  );
}
