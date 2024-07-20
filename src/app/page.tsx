import Header from "@/components/Header";
import Banner from "@/components/Banner";
import FetchData from "@/components/FetchData";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <main className=" w-full h-full px-[12rem]">
        <FetchData />
      </main>
    </>
  );
}
