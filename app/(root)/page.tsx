import SearchForm from "@/components/SearchForm";

interface HomePageProps {
  searchParams: Promise<{ query ?: string }>
}

export default async function Home(
  { searchParams } : HomePageProps
) {
  const query = (await searchParams).query;

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
    </div>
  );
}
