import Article from "./Article";

export default function Main() {
  return (
    <>
      <main className="flex justify-center items-center h-[720px]">
        <section className="w-[360px] bg-white inline-block p-4 border-black border-2 rounded-2xl">
          <img
            className="rounded-lg"
            src={require("../illustration-article.svg").default}
            alt="illustration article"
          />
          <Article />
        </section>
      </main>
    </>
  );
}
