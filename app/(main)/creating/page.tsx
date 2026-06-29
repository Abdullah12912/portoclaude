import { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { albums, albumsByCategory, categories } from "@/lib/data";

export const metadata: Metadata = {
  title: "Creating",
  description: "Gallery foto — dokumentasi visual dari perjalanan dan momen.",
};

export default function CreatingPage() {
  const catList = categories.filter((c) => c !== "Semua");

  return (
    <div className="max-w-[1100px] mx-auto px-10 pb-20">
      <Nav />

      <div className="pt-14 pb-10">
        <p className="font-mono text-[11px] text-[var(--color-gold-dim)] tracking-[0.1em] uppercase mb-3">
          Creating / Photography
        </p>
        <h1 className="text-[38px] font-light tracking-[-0.02em] mb-3">Gallery</h1>
        <p className="text-[14px] text-[var(--color-muted)] max-w-[480px] leading-relaxed">
          Dokumentasi visual dari perjalanan dan momen. Setiap album punya ceritanya sendiri.
        </p>
      </div>

      {/* Filter — client-side handled via URL hash or just visual for now */}
      <div className="flex gap-2 pb-7 border-b border-[var(--color-faint)] mb-10 flex-wrap">
        {categories.map((cat) => (
          <span
            key={cat}
            className={`font-mono text-[11px] px-3 py-1.5 rounded border cursor-pointer tracking-[0.05em] uppercase transition-all ${
              cat === "Semua"
                ? "bg-[var(--color-gold)] text-[#0A0A0A] border-[var(--color-gold)]"
                : "border-[var(--color-faint)] text-[var(--color-muted)] hover:text-[var(--color-text)] hover:border-[#555]"
            }`}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Albums per category */}
      {catList.map((cat) => {
        const catAlbums = albumsByCategory[cat] ?? [];
        if (catAlbums.length === 0) return null;
        return (
          <div key={cat} className="mb-12">
            {/* Category label */}
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[11px] text-[var(--color-gold-dim)] tracking-[0.1em] uppercase whitespace-nowrap">
                {cat}
              </span>
              <div className="flex-1 h-px bg-[var(--color-faint)]" />
            </div>

            {/* Album grid */}
            <div
              className={`grid gap-[2px] ${
                catAlbums.length === 1
                  ? "grid-cols-1"
                  : catAlbums.length === 2
                  ? "grid-cols-2"
                  : "grid-cols-3"
              }`}
            >
              {catAlbums.map((album, i) => {
                // First album in Pesantren spans 2 cols if there are more
                const isWide = album.coverAspect === "wide" && catAlbums.length > 1 && i === 0;
                return (
                  <Link
                    key={album.slug}
                    href={`/creating/${album.slug}`}
                    className={`group relative overflow-hidden bg-[var(--color-surface2)] block ${
                      isWide ? "col-span-2" : ""
                    }`}
                    style={{ aspectRatio: isWide ? "16/9" : "4/3" }}
                  >
                    {/* Placeholder — replace with next/image in prod */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#141a14] to-[#2a3020] opacity-80" />

                    {/* Hover arrow */}
                    <span className="absolute top-3 right-3 text-[16px] text-transparent group-hover:text-[rgba(255,255,255,0.6)] transition-all duration-200 translate-x-0 -translate-y-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>

                    {/* Info bar */}
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-[rgba(0,0,0,0.75)] to-transparent group-hover:from-[rgba(0,0,0,0.88)] transition-all duration-200">
                      <div className="text-[13px] font-medium text-white mb-1 leading-snug">
                        {album.title}
                      </div>
                      <div className="font-mono text-[10px] text-[rgba(255,255,255,0.42)] tracking-[0.04em]">
                        {album.date} · {album.location}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}

      <Footer />
    </div>
  );
}
