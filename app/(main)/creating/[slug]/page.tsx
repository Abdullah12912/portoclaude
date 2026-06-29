"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { albums } from "@/lib/data";
import { AlbumPhoto } from "@/lib/types";

export default function AlbumPage({ params }: { params: { slug: string } }) {
  const idx = albums.findIndex((a) => a.slug === params.slug);
  if (idx === -1) notFound();

  const album = albums[idx];
  const prev = albums[idx - 1] ?? null;
  const next = albums[idx + 1] ?? null;

  const [selected, setSelected] = useState<AlbumPhoto>(album.photos[0]);
  const selectedIdx = album.photos.findIndex((p) => p.id === selected.id);

  return (
    <div className="max-w-[1200px] mx-auto px-10 pb-20">
      <Nav />

      {/* Back */}
      <Link
        href="/creating"
        className="inline-flex items-center gap-2 font-mono text-[11px] text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors tracking-[0.05em] uppercase mt-8 mb-7"
      >
        ← Gallery
      </Link>

      {/* Header */}
      <div className="mb-7">
        <p className="font-mono text-[11px] text-[var(--color-gold-dim)] tracking-[0.08em] uppercase mb-2">
          {album.category} · {album.date} · {album.location}
        </p>
        <h1 className="text-[28px] font-light tracking-[-0.02em] text-[var(--color-text)]">
          {album.title}
        </h1>
      </div>

      {/* Main layout */}
      <div className="grid grid-cols-[1fr_280px] gap-5 items-start">

        {/* LEFT — foto grid */}
        <div>
          <div className="grid grid-cols-2 gap-[3px]">
            {album.photos.map((photo, i) => {
              const isWide = photo.aspectRatio === "wide";
              const isPortrait = photo.aspectRatio === "portrait";
              const isSelected = photo.id === selected.id;

              return (
                <button
                  key={photo.id}
                  onClick={() => setSelected(photo)}
                  className={`relative overflow-hidden bg-[var(--color-surface2)] text-left block w-full ${
                    isWide ? "col-span-2" : ""
                  }`}
                  style={{ aspectRatio: isWide ? "16/9" : isPortrait ? "3/4" : "4/3" }}
                >
                  {/* Placeholder bg — swap for next/image */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `hsl(${(i * 47) % 360}, 12%, ${10 + (i % 3) * 3}%)`,
                    }}
                  />
                  {/* Selected border */}
                  {isSelected && (
                    <div className="absolute inset-0 border-2 border-[var(--color-gold)] z-10 pointer-events-none" />
                  )}
                  {/* Hover border */}
                  {!isSelected && (
                    <div className="absolute inset-0 border-2 border-transparent hover:border-[rgba(200,169,126,0.35)] z-10 pointer-events-none transition-all" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Album nav */}
          <div className="flex justify-between border-t border-[var(--color-faint)] pt-6 mt-10">
            {prev ? (
              <Link href={`/creating/${prev.slug}`} className="group">
                <div className="font-mono text-[10px] text-[var(--color-muted)] tracking-[0.06em] uppercase mb-1.5">
                  ← Sebelumnya
                </div>
                <div className="text-[14px] text-[var(--color-text)] group-hover:text-[var(--color-gold)] transition-colors">
                  {prev.title}
                </div>
              </Link>
            ) : <div />}
            {next ? (
              <Link href={`/creating/${next.slug}`} className="group text-right">
                <div className="font-mono text-[10px] text-[var(--color-muted)] tracking-[0.06em] uppercase mb-1.5">
                  Berikutnya →
                </div>
                <div className="text-[14px] text-[var(--color-text)] group-hover:text-[var(--color-gold)] transition-colors">
                  {next.title}
                </div>
              </Link>
            ) : <div />}
          </div>
        </div>

        {/* RIGHT — caption sticky */}
        <div className="sticky top-5 flex flex-col gap-3">

          {/* Caption box */}
          <div className="bg-[var(--color-surface)] border border-[var(--color-faint)] rounded-lg p-5">
            <div className="font-mono text-[10px] text-[var(--color-gold-dim)] tracking-[0.08em] uppercase mb-3">
              Caption
            </div>
            {/* Number */}
            <div className="font-mono text-[28px] font-medium text-[var(--color-faint)] leading-none mb-4">
              <span className="text-[var(--color-text)]">
                {String(selectedIdx + 1).padStart(2, "0")}
              </span>
              {" / "}
              {String(album.photos.length).padStart(2, "0")}
            </div>
            {/* Caption text */}
            <p className="text-[13px] text-[var(--color-muted)] leading-[1.7] min-h-[80px]">
              {selected.caption}
            </p>
            <div className="h-px bg-[var(--color-faint)] my-4" />
            <div className="font-mono text-[11px] text-[var(--color-muted)]">
              📍 {selected.place ?? album.location}
            </div>
            <div className="font-mono text-[11px] text-[var(--color-muted)] mt-1">
              🕐 {selected.date ?? album.date}
            </div>
          </div>

          {/* Narasi album */}
          <div className="bg-[var(--color-surface)] border border-[var(--color-faint)] rounded-lg p-5">
            <div className="font-mono text-[10px] text-[var(--color-gold-dim)] tracking-[0.08em] uppercase mb-3">
              Tentang album ini
            </div>
            <p className="text-[13px] text-[var(--color-muted)] leading-[1.75]">
              {album.narasi}
            </p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
