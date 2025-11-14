// components/DestinationLink.js
export default function DestinationLink({ name, href }) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#fff86d] text-black px-4 py-2 rounded hover:bg-yellow-300 transition"
      >
        {name}
      </a>
    </li>
  );
}

// data/destinations.js
export const destinations = [
  {
    name: "Uluwatu temple",
    href: "https://en.wikipedia.org/wiki/Uluwatu_Temple",
  },
  { name: "Kecak Dance", href: "https://en.wikipedia.org/wiki/Kecak" },
  { name: "Tanah Lot", href: "https://en.wikipedia.org/wiki/Tanah_Lot" },
  {
    name: "Mount Batur (sunrise trekking)",
    href: "https://en.wikipedia.org/wiki/Mount_Batur",
  },
  {
    name: "Ubud Monkey Forest",
    href: "https://en.wikipedia.org/wiki/Ubud_Monkey_Forest",
  },
  {
    name: "Ulun Danu",
    href: "https://en.wikipedia.org/wiki/Pura_Ulun_Danu_Bratan",
  },
  { name: "Tirta Empul", href: "https://en.wikipedia.org/wiki/Tirta_Empul" },
  {
    name: "Kintamani, coffee plantation",
    href: "https://en.wikipedia.org/wiki/Kintamani,_Bali",
  },
  { name: "Jatiluwih", href: "https://en.wikipedia.org/wiki/Jatiluwih" },
  {
    name: "Sekumpul Waterfall",
    href: "https://en.wikipedia.org/wiki/Sekumpul_Waterfall",
  },
  {
    name: "Tegenungan Waterfall",
    href: "https://en.wikipedia.org/wiki/Tegenungan_Waterfall",
  },
  {
    name: "Besakih temple",
    href: "https://en.wikipedia.org/wiki/Besakih_Temple",
  },
  { name: "Goa Gajah", href: "https://en.wikipedia.org/wiki/Goa_Gajah" },
  {
    name: "Handara Gate",
    href: "https://www.thebalipackage.com/bali-handara-gate/",
  },
  { name: "Trunyan", href: "https://en.wikipedia.org/wiki/Trunyan" },
  { name: "Amed", href: "https://en.wikipedia.org/wiki/Amed_(Bali)" },
  { name: "Nuanu creative city", href: "https://nuanu.com/" },
  {
    name: "Glass bridge",
    href: "https://www.balidiscovery.com/bali-glass-bridge-open-to-the-public/",
  },
  {
    name: "Pura Luhur Batukaru",
    href: "https://bali.com/places/luhur-batukaru-temple/",
  },
  { name: "Ubud palace", href: "https://en.wikipedia.org/wiki/Ubud_Palace" },
  { name: "Lahagan Sweet", href: "https://www.lahangansweet.com/" },
  {
    name: "Tanjung Benoa",
    href: "https://en.wikipedia.org/wiki/Tanjung_Benoa",
  },
  { name: "Chocolate factory", href: "https://www.junglegoldbali.com/" },
];
