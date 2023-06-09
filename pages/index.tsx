import Head from "next/head";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>CoverMe</title>
        <meta name="description" content="Create Cover Letters Faster." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </>
  );
}
