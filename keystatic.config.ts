import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: {
      owner: "Abdullah12912",
      name: "portoclaude",
    },
  },

  ui: {
    brand: {
      name: "Rifqi Portfolio",
    },
  },

  singletons: {
    now: singleton({
      label: "Now Page",
      path: "content/now/",
      schema: {
        focus: fields.text({ label: "Current Focus" }),
        reading: fields.text({ label: "Sedang Membaca" }),
        building: fields.text({ label: "Sedang Membangun" }),
        learning: fields.text({ label: "Sedang Belajar" }),
        listening: fields.text({ label: "Sedang Mendengarkan" }),
        location: fields.text({ label: "Lokasi" }),
        updatedAt: fields.text({ label: "Terakhir Diperbarui", description: "Contoh: Juni 2026" }),
      },
    }),
  },

  collections: {
    albums: collection({
      label: "Gallery — Albums",
      slugField: "title",
      path: "content/albums/*",
      format: { data: "json" },
      schema: {
        title: fields.slug({ name: { label: "Judul Album" } }),
        category: fields.select({
          label: "Kategori",
          options: [
            { label: "Pesantren", value: "Pesantren" },
            { label: "Kampus", value: "Kampus" },
            { label: "Documentary", value: "Documentary" },
            { label: "Street", value: "Street" },
            { label: "Portrait", value: "Portrait" },
          ],
          defaultValue: "Documentary",
        }),
        location: fields.text({ label: "Lokasi", description: "Contoh: Yogyakarta" }),
        date: fields.text({ label: "Tanggal", description: "Contoh: Juni 2026" }),
        coverAspect: fields.select({
          label: "Rasio Cover",
          options: [
            { label: "Wide (16:9) — album featured", value: "wide" },
            { label: "Normal (4:3)", value: "normal" },
          ],
          defaultValue: "normal",
        }),
        narasi: fields.text({ label: "Narasi Album", multiline: true }),
        photos: fields.array(
          fields.object({
            id: fields.text({ label: "ID Foto", description: "Contoh: 01, 02, 03" }),
            src: fields.image({
              label: "File Foto",
              directory: "public/photos",
              publicPath: "/photos",
            }),
            alt: fields.text({ label: "Alt Text" }),
            caption: fields.text({ label: "Caption", multiline: true }),
            place: fields.text({ label: "Lokasi Foto (opsional)" }),
            date: fields.text({ label: "Tanggal Foto (opsional)" }),
            aspectRatio: fields.select({
              label: "Rasio Foto",
              options: [
                { label: "Landscape (4:3)", value: "landscape" },
                { label: "Portrait (3:4)", value: "portrait" },
                { label: "Wide (16:9)", value: "wide" },
              ],
              defaultValue: "landscape",
            }),
          }),
          {
            label: "Foto",
            itemLabel: (props) => props.fields.alt.value || "Foto",
          }
        ),
      },
    }),

    notes: collection({
      label: "Notes",
      slugField: "title",
      path: "content/notes/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Judul" } }),
        category: fields.select({
          label: "Kategori",
          options: [
            { label: "Programming", value: "Programming" },
            { label: "AI", value: "AI" },
            { label: "Economics", value: "Economics" },
            { label: "Frameworks", value: "Frameworks" },
            { label: "Systems", value: "Systems" },
            { label: "Leadership", value: "Leadership" },
            { label: "Islam", value: "Islam" },
            { label: "English", value: "English" },
            { label: "Ideas", value: "Ideas" },
            { label: "Education", value: "Education" },
          ],
          defaultValue: "Ideas",
        }),
        tags: fields.array(fields.text({ label: "Tag" }), { label: "Tags" }),
        date: fields.date({ label: "Tanggal" }),
        summary: fields.text({ label: "Ringkasan", multiline: true }),
        content: fields.mdx({ label: "Konten" }),
      },
    }),

    thinking: collection({
      label: "Thinking (Artikel)",
      slugField: "title",
      path: "content/thinking/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Judul" } }),
        date: fields.date({ label: "Tanggal Publish" }),
        tags: fields.array(fields.text({ label: "Tag" }), { label: "Tags" }),
        summary: fields.text({ label: "Ringkasan", multiline: true }),
        content: fields.mdx({ label: "Konten" }),
      },
    }),

    projects: collection({
      label: "Projects",
      slugField: "title",
      path: "content/projects/*",
      format: { data: "json" },
      schema: {
        title: fields.slug({ name: { label: "Nama Project" } }),
        description: fields.text({ label: "Deskripsi", multiline: true }),
        status: fields.select({
          label: "Status",
          options: [
            { label: "🟢 Active", value: "active" },
            { label: "🟡 Planning", value: "planning" },
            { label: "⏸️ Paused", value: "paused" },
            { label: "✅ Completed", value: "completed" },
          ],
          defaultValue: "planning",
        }),
        progress: fields.number({
          label: "Progress (%)",
          validation: { isRequired: true, min: 0, max: 100 },
        }),
        github: fields.url({ label: "GitHub URL", validation: { isRequired: false } }),
        website: fields.url({ label: "Website URL", validation: { isRequired: false } }),
        tech: fields.array(fields.text({ label: "Teknologi" }), { label: "Tech Stack" }),
        date: fields.date({ label: "Tanggal Mulai" }),
      },
    }),

    journey: collection({
      label: "Journey (Timeline)",
      slugField: "title",
      path: "content/journey/*",
      format: { data: "json" },
      schema: {
        title: fields.slug({ name: { label: "Judul Event" } }),
        year: fields.number({ label: "Tahun", validation: { isRequired: true } }),
        month: fields.number({ label: "Bulan (1–12, opsional)", validation: { isRequired: false, min: 1, max: 12 } }),
        description: fields.text({ label: "Deskripsi", multiline: true }),
        category: fields.select({
          label: "Kategori",
          options: [
            { label: "Pendidikan", value: "education" },
            { label: "Pekerjaan", value: "work" },
            { label: "Pencapaian", value: "achievement" },
            { label: "Personal", value: "personal" },
            { label: "Project", value: "project" },
          ],
          defaultValue: "education",
        }),
        highlight: fields.checkbox({
          label: "Highlight di timeline",
          defaultValue: false,
        }),
      },
    }),
  },
});
