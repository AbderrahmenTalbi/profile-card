import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/AbderrahmenTalbi" },
    {
      name: "Frontend Mentor",
      url: "https://www.frontendmentor.io/profile/AbderrahmenTalbi",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abderrahmen-talbi-49b687281/",
    },
    { name: "Instagram", url: "https://www.instagram.com/_at___21_/" },
    {
      name: "Facebook",
      url: "https://web.facebook.com/abderahmane.talbi.nova?_rdc=1&_rdr",
    },
  ];

  return (
    <div className="w-full max-w-sm mx-auto bg-[#1f1f1f] rounded-xl p-10 text-center shadow-xl">
      <div className="w-24 h-24 mx-auto mb-6">
        <Image
          src="/images/nova.jpg"
          alt="Jessica Randall"
          width={160}
          height={160}
          className="object-cover rounded-full"
          priority
        />
      </div>

      <h1 className="text-2xl font-bold text-white mb-2">Talbi Abderrahmen</h1>
      <p className="text-sm text-[#c5f82a] font-semibold mb-6">
        Chlef, Algeria
      </p>
      <p className="text-sm text-white mb-8">"Front-end developer"</p>

      <div className="space-y-4">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            className="block w-full bg-[#333333] text-white py-3 px-4 rounded-lg hover:bg-[#c5f82a] hover:text-black transition-colors duration-200 font-semibold text-sm"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
