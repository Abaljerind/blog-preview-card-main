import Footer from "./Footer";

export default function Article() {
  return (
    <>
      <p className="text-black bg-yellow py-1 px-3 mt-5 inline-block font-semibold rounded-md text-base">
        Learning
      </p>
      <p className="text-base font-semibold mt-3 mb-3">Published 21 Dec 2023</p>

      <h2 className="text-xl font-extrabold mb-3 hover:text-yellow hover:cursor-pointer hover:duration-500">
        HTML & CSS foundations
      </h2>
      <p className="text-gray-400 text-base">
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
      <Footer />
    </>
  );
}
