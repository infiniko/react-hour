import Link from "next/link";

function ContactPage() {
  return (
    <div>
      <h1 className="text-7xl">Contact</h1>
      <Link href="/" className="text-xl text-green-500">
        back to home
      </Link>
    </div>
  );
}

export default ContactPage;
