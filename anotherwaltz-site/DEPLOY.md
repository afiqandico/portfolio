# Deploy Another Waltz

This site is built as a static Astro site. Three deployment options below.

---

## Option A — Vercel Dashboard (recommended, ~5 menit)

1. Buka https://vercel.com/new
2. Sign in pakai GitHub
3. Click **"Import Git Repository"**
4. Pilih `anotherwaltz/anotherwaltz-site`
5. Framework preset: **Astro** (auto-detected)
6. Build command: `npm run build`
7. Output directory: `dist`
8. Click **Deploy**

**Cost**: Free tier cukup.

---

## Option B — Vercel CLI

```bash
npm install -g vercel          # (kalau belum)
cd "C:\Users\Afiq Andico\Projects\anotherwaltz-site"
vercel login
vercel --prod
```

---

## Option C — Netlify

`netlify.toml` sudah include. Tinggal:
1. https://app.netlify.com/start
2. Connect ke `anotherwaltz/anotherwaltz-site`
3. Build cmd: `npm run build`, publish dir: `dist`

---

## Custom Domain (anotherwaltz.id)

1. Beli `anotherwaltz.id` di Namecheap / Cloudflare / Porkbun (~Rp 250K/tahun)
2. Di Vercel → Settings → Domains → add `anotherwaltz.id`
3. Copy DNS records ke registrar
4. SSL auto-issue oleh Vercel

---

## Form Kontak (Formspree)

1. Daftar di https://formspree.io
2. Create form baru
3. Set `FORMSPREE_ID` env di Vercel
4. Update `src/pages/contact.astro` — ganti `your-form-id`
