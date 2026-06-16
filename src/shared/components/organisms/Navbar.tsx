import Link from "next/link";
import { RadioTower, Search, TvMinimalPlay } from "@/assets/icons/icons";
import Badge from "../molecules/Badge";

export default function Navbar() {
  return (
    <header className="relative overflow-hidden bg-[#050816] border-b border-white/10">
      {/* Glow Effects */}
      <div className="absolute -top-20 left-1/4 w-96 h-96 bg-slate-500/20 blur-[120px] rounded-full" />
      <div className="absolute -top-20 right-1/4 w-96 h-96 bg-slate-700/20 blur-[120px] rounded-full" />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 py-8">
          {/* Logo */}
          <h1 className="text-3xl font-bold tracking-wide flex items-center text-white">
            Nova
            <span className="mx-2 px-4 py-1 bg-red-700 rounded-lg shadow-[0_0_15px_rgba(255,0,0,0.8)]">
              News
            </span>
          </h1>

          {/* Search */}
          <div className="w-full max-w-md bg-white flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 shadow-lg">
            <Search className="text-gray-500" size={18} />

            <input
              type="text"
              placeholder="Search news..."
              className="flex-1 outline-none text-black bg-transparent"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col xl:flex-row justify-between gap-6 py-5 border-t border-white/10">
          {/* Navigation */}
          <nav className="">
            <ul className="flex gap-8 min-w-max text-white font-medium capitalize">
              <li>
                <Link href="/" className="hover:text-red-500 transition-colors">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/politics"
                  className="hover:text-red-500 transition-colors"
                >
                  Politics
                </Link>
              </li>

              <li>
                <Link
                  href="/sports"
                  className="hover:text-red-500 transition-colors"
                >
                  Sports
                </Link>
              </li>

              <li>
                <Link
                  href="/technology"
                  className="hover:text-red-500 transition-colors"
                >
                  Technology
                </Link>
              </li>

            </ul>
          </nav>

          {/* Badges */}
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-sky-950 border-l-4 border-sky-700">
              <Badge.Icon>
                <RadioTower size={18} />
              </Badge.Icon>

              <Badge.Text>Radio</Badge.Text>
            </Badge>

            <Badge className="bg-red-900 border-l-4 border-red-700">
              <Badge.Icon>
                <TvMinimalPlay size={18} />
              </Badge.Icon>

              <Badge.Text>Live</Badge.Text>
            </Badge>

            <Badge className="bg-yellow-900 border-l-4 border-yellow-700">
              <Badge.Text>Urgent</Badge.Text>
            </Badge>

            <Badge className="bg-green-900 border-l-4 border-green-700">
              <Badge.Text>Sport</Badge.Text>
            </Badge>
          </div>
        </div>
      </div>
    </header>
  );
}
