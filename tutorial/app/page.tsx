import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1 className="text-7xl">homepage</h1>
      <Link href="/about" className="text-xl text-green-500">
        about page
      </Link>
    </div>
  );
}

export default HomePage;
