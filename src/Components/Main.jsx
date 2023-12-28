import Article from "./Article";

export default function Main() {
  return (
    <>
      <main className="flex justify-center items-center h-[720px]">
        <section className="bg-white inline-block p-4 border-black border-[1px] rounded-lg">
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
