"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <motion.div
      className="mb-20"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <p className="font-mono text-[11px] text-[var(--color-teal)] tracking-[0.08em] uppercase mb-5">
        ● Open to collaboration
      </p>

      <h1 className="text-[clamp(36px,7vw,56px)] font-light leading-[1.1] tracking-[-0.02em] text-[var(--color-text)] mb-7">
        Student.
        <br />
        <strong className="font-medium">Builder. Thinker.</strong>
      </h1>

      <p className="font-mono text-[13px] text-[var(--color-muted)] mb-2">
        {"// currently building → "}
        <span className="text-[var(--color-gold)]">Living Portfolio</span>
        <span className="inline-block w-[7px] h-[13px] bg-[var(--color-gold)] ml-[2px] align-[-2px] animate-[blink_1.1s_step-end_infinite]" />
      </p>

      <p className="text-[16px] text-[var(--color-muted)] leading-[1.7] max-w-[520px] mt-6">
        Mahasiswa{" "}
        <a
          href="https://fapet.ugm.ac.id"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-text)] underline decoration-[var(--color-faint)] underline-offset-[3px] hover:decoration-[var(--color-gold)] transition-all"
        >
          Ilmu dan Industri Peternakan UGM
        </a>
        , Musyrif di PPQIT Al Mahir, dan seseorang yang percaya bahwa
        membangun sistem yang baik — dari kandang ternak hingga kebiasaan
        belajar — adalah satu jenis pekerjaan yang sama.
      </p>

      <div className="flex gap-3 mt-9 flex-wrap">
        <Link
          href="/building"
          className="text-[13px] font-medium px-[18px] py-[9px] rounded-md bg-[var(--color-gold)] text-[#0A0A0A] hover:bg-[#dbbe94] transition-colors"
        >
          Lihat Projects →
        </Link>
        <a
          href="/cv.pdf"
          className="text-[13px] font-medium px-[18px] py-[9px] rounded-md border border-[var(--color-faint)] text-[var(--color-muted)] hover:text-[var(--color-text)] hover:border-[#555] transition-colors"
        >
          Download CV
        </a>
      </div>
    </motion.div>
  );
}
