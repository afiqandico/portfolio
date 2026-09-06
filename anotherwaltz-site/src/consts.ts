// Site-wide constants — single source of truth.
// Brand: Another Waltz — art collective from Bali.

export const SITE = {
  name: 'Another Waltz',
  brandShort: 'AW',
  brandTag: 'anotherwaltz.id',
  tagline: 'Collection of souls who sailed the ark of peace.',
  description:
    'Another Waltz — kolektif seni kecil dari Bali. Musik, lukis, foto, tulisan. Sebuah langkah lain dari seni.',
  url: 'https://anotherwaltz.id',
  locale: 'id_ID',
  ogImage: '/og-default.svg',
  author: 'Ruby Rubhin',
  fullName: 'Afiq Andico Pangimpian',
  founderAlias: 'Ruby Rubhin',
  livePlace: 'Canggu, Bali',
  email: 'afiqandico13@gmail.com',
  whatsapp: '08990308936',
  founded: 2019,
  motto: 'Waltz di sini adalah irama — tiga ketukan yang harus diisi dengan sesuatu yang hidup.',
} as const;

export const SOCIAL = [
  { name: 'Instagram — Another Waltz',     handle: '@anotherwaltz',     url: 'https://instagram.com/anotherwaltz' },
  { name: 'Instagram — Pilgrim\u2019s Records', handle: '@pilgrims.records', url: 'https://instagram.com/pilgrims.records' },
  { name: 'Instagram — AFuckingCo',         handle: '@afuckingco',      url: 'https://instagram.com/afuckingco' },
  { name: 'Linktree',                       handle: 'linktr.ee/anotherwaltz', url: 'https://linktr.ee/anotherwaltz' },
  { name: 'note.com',                       handle: '@anotherwaltz',     url: 'https://note.com/anotherwaltz' },
  { name: 'WhatsApp',                       handle: '+62 899 0308 936',  url: 'https://wa.me/628990308936' },
  { name: 'Email',                          handle: 'afiqandico13@gmail.com', url: 'mailto:afiqandico13@gmail.com' },
] as const;

export const NAV = [
  { href: '/',           label: 'Beranda' },
  { href: '/works/',     label: 'Karya' },
  { href: '/art/',       label: 'Lukisan' },
  { href: '/blog/',      label: 'Catatan' },
  { href: '/about/',     label: 'Tentang' },
  { href: '/contact/',   label: 'Kontak' },
] as const;

// Timeline — kegiatan kolektif
export const TIMELINE = [
  { year: '2026', event: 'Pameran Tunggal — Nuanu Creative City, Bali', tag: 'Pameran' },
  { year: '2024', event: 'Pilgrimage Worldwide Tour — Jepang, LA, Taiwan', tag: 'Tur' },
  { year: '2023', event: '"Already Dead & Livin Rockstar" — CD Album (18 seniman)', tag: 'Musik' },
  { year: '2022', event: '"A Palette of Cultures" — Buku dokumentasi lukisan', tag: 'Tulisan' },
  { year: '2021', event: '"Jimmy Flaeur" — Album kolaborasi (10+ musisi)', tag: 'Musik' },
  { year: '2019', event: 'Another Waltz didirikan di Bali', tag: 'Awal' },
] as const;
