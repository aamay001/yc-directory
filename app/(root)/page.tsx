import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";

interface HomePageProps {
  searchParams: Promise<{ query?: string }>;
}

export default async function Home({ searchParams }: HomePageProps) {
  const query = (await searchParams).query;

  const posts: StartupTypeCard[] = [
    {
      _createdAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: 'Adrian'
      },
      _id: 1,
      description: "This is a description",
      image:
        "https://javascript-mastery.s3.amazonaws.com/assets/content/links/1742199988374/icon/Next.js%2015%20Crash%20Course%20%7C%20Build%20and%20Deploy%20a%20Production-Ready%20Full%20Stack%20App.png",
      category: "robots",
      title: "WeRobots",
    },
  ];

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
