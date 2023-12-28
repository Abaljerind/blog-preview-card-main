export default function Footer() {
  return (
    <footer className="mt-3 relative">
      <img
        className="w-10"
        src={require("../image-avatar.webp")}
        alt="Greg Hooper"
      />
      <p className="absolute top-2 left-12 font-extrabold text-base">
        Greg Hooper
      </p>
    </footer>
  );
}
