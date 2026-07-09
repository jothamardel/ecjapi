export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  eventId: string;
  eventTitle: string;
  date: string;
  year: number;
  location: string;
  aspectRatio: 'portrait' | 'landscape';
}

export interface GalleryEvent {
  id: string;
  title: string;
  date: string;
  year: number;
  location: string;
  description: string;
}

export const galleryEvents: GalleryEvent[] = [
  {
    id: 'menstrual-hygiene-hope-high-2026',
    title: 'Menstrual Hygiene Day - Hope High',
    date: 'June 9, 2026',
    year: 2026,
    location: 'Hope High Academy, Zawan',
    description: 'Outreach and distribution session focused on biological health education and sanitary pads distribution at Hope High Academy.'
  },
  {
    id: 'tcnn-partnership-2026',
    title: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    description: 'Launch of the official partnership and advocacy collaboration between ECJAPI and the Theological College of Northern Nigeria (TCNN) in Bukuru.'
  },
  {
    id: 'first-time-lunch-stable-hands-2026',
    title: 'First Time Lunch - Female Stable Hands',
    date: 'July 8, 2026',
    year: 2026,
    location: 'Plateau State, Nigeria',
    description: 'Special luncheon, counseling, and reproductive wellness mentorship session organized for female stable hands.'
  },
  {
    id: 'padded-girl-campaign-2026',
    title: 'De-Stigmatizing Menstrual Development, Dismantles Rape Culture Campaign',
    date: 'May 28, 2026',
    year: 2026,
    location: 'Schools across Bukuru & Zawan',
    description: 'Signature week-long awareness program led by Jennifer Nikurai Maton (Founder, ECJAPI) and Felicia Samson (TVAII).'
  },
  {
    id: 'how-the-story-began-2024',
    title: 'How the Story Began',
    date: 'May 2024',
    year: 2024,
    location: 'Bukuru, Plateau State',
    description: 'Tracing the initial community workshops, group meetings, and grassroots advocacy circles that started ECJAPI.'
  }
];

export const galleryImages: GalleryImage[] = [
  // 1. Menstrual Hygiene Day - Hope High (2026) - WeTransfer Previews
  {
    id: 'stlkcl5wpnb4p6b0w20260609143909',
    src: 'https://preview-eu.wetransfer.net/collect/shgo68lwx9ffg8rwq20260609143841/stlkcl5wpnb4p6b0w20260609143909/default/preview.webp?Expires=1783573301&Key-Pair-Id=K2SVF85QSYV5SB&Signature=fWMLyD22ySQQtpSd88B977F9TwHlfszclxojZbMWC7ld-KTpaw6E4KAfOv~97T9ulclpy--v~wgUo~hgu94~wJF-r9O7M4NSXJGdRaxjZpG~jWJLpHjx6-HvCqaskc67g-lMJ43PYhAYnDgl0WQXVKlTDVesid-nsBaaapjdg3J3N7jDgdqQNFHY0IXostFWT8oIDn9oLjNT2ICFQTQZiiVatBTse7MIBfZk2od5u0p-i7fv0lWhaJ18ScvVP-L~Gcp2WP9j2~PYJu2yLY5knDgGSp9LihNsSAiNUH49gi2taqibCOYLi8pzmEixiXF01ZH9rYnhZSyXEmLpfHEvsQ__',
    alt: 'Students assembling for the seminar presentation - School H-24',
    eventId: 'menstrual-hygiene-hope-high-2026',
    eventTitle: 'Menstrual Hygiene Day - Hope High',
    date: 'June 9, 2026',
    year: 2026,
    location: 'Hope High Academy, Zawan',
    aspectRatio: 'landscape'
  },
  {
    id: 's3l8hp8hxmqswevdt20260609143905',
    src: 'https://preview-eu.wetransfer.net/collect/shgo68lwx9ffg8rwq20260609143841/s3l8hp8hxmqswevdt20260609143905/default/preview.webp?Expires=1783573301&Key-Pair-Id=K2SVF85QSYV5SB&Signature=QppRzA4jw0fti0cEfoGY2BtzInUQTNUypVITGSkjNOZ57pYFPN4QZXvAEZPdd2en6-~K6I8wlLYw9BSyp3KBXpXt-ptZWyJdsHN8BZttYWy0WJQ5d-koksbdtEwSJ6YQwVsZXo4ZeesMVatkS3RosvUCHdrAa-ecbn0KFUceYBD85XadxDWHSas-vP2pCkVURXba~NaCrxtAuTSYruSdmiIv0qsVy6~oMb5jZVQhVdMCAPKk9MylyNCgyUM-v72~ddnkEEAONRE~2CP0nIxy3HNQX7AQHcUjLE0oz8C-z68XBk2lps2Gagrxda3LT02etRG20k6fSwjqfey0NXnNBQ__',
    alt: 'Hope High Academy students engaging during the Q&A session - School H-25',
    eventId: 'menstrual-hygiene-hope-high-2026',
    eventTitle: 'Menstrual Hygiene Day - Hope High',
    date: 'June 9, 2026',
    year: 2026,
    location: 'Hope High Academy, Zawan',
    aspectRatio: 'landscape'
  },
  {
    id: 'sck5ejziyk1wi6h2b20260609143905',
    src: 'https://preview-eu.wetransfer.net/collect/shgo68lwx9ffg8rwq20260609143841/sck5ejziyk1wi6h2b20260609143905/default/preview.webp?Expires=1783573301&Key-Pair-Id=K2SVF85QSYV5SB&Signature=btrCtL~oTxuGR6pD9oB3jpjHzjx~6El7qUlES9yVJ35iJN7DIW6Q3EQ~XcmqJS3znPXVA2BUzgP2KVku0iXeDTgiX36qKJmjQTNS-1PqCPYZ~jBXZBPadC8GIGSB3RywVfb8F6UQdxWpxTa~XX-DFk-WljA5DHmN3szwIjDVTAMRmMFGe8TgGPZ5aDJ4SCDU8KBOfhXcsaw~zO2WCB6AZyOCgbfS2JlFIsTQ5n~BKN4AAskGbLOOWDuO1Bq~bG5N5d7ZYzTJmyeN6kvyD06xTmZYjZhv2wB95jvea8FCHNREo4MCcJPYnRdAERdlH3~kVbJPNSJuc8rCI8OJpmjL-w__',
    alt: 'Educational biological chart showing female reproductive development - School H-26',
    eventId: 'menstrual-hygiene-hope-high-2026',
    eventTitle: 'Menstrual Hygiene Day - Hope High',
    date: 'June 9, 2026',
    year: 2026,
    location: 'Hope High Academy, Zawan',
    aspectRatio: 'landscape'
  },
  {
    id: 'siwra1edh900fj4ku20260609143905',
    src: 'https://preview-eu.wetransfer.net/collect/shgo68lwx9ffg8rwq20260609143841/siwra1edh900fj4ku20260609143905/default/preview.webp?Expires=1783573301&Key-Pair-Id=K2SVF85QSYV5SB&Signature=XBTcYIBmsDZ-8zJpiSTV3l2khmsQKHBGe5TyTi3qnMLQNcpiVcI2eB-ooANmBsZ9AjzjHPnnNne14O-Lrnmsq1lBjiQqGAcZF7GKiCWnNkib7HBJJlUq5GjtM5pTL-AP-kEmaCkfjrWJPyVss6NF3YJbEiC4665rlzRw9BoGcqyK7pLU1mFhtoZa4JEwyfgvzE4Fir~BkRQwB3X9xldISVuRFcKiZBnyCLb47N1MJY00kZJA7rStjUsN~q9MjxrWv85rEdC2A7AB78Y~Tvp89X0mCkC2LiXA29RWAdHj80MaGUA0V0S1GZ-jVyNi4niHuF~jJvxqV6QbJOr3R27V3Q__',
    alt: 'Speakers demonstrating menstrual hygiene techniques - School H-27',
    eventId: 'menstrual-hygiene-hope-high-2026',
    eventTitle: 'Menstrual Hygiene Day - Hope High',
    date: 'June 9, 2026',
    year: 2026,
    location: 'Hope High Academy, Zawan',
    aspectRatio: 'landscape'
  },
  {
    id: 'se7m9nh22x4h0lncl20260609143905',
    src: 'https://preview-eu.wetransfer.net/collect/shgo68lwx9ffg8rwq20260609143841/se7m9nh22x4h0lncl20260609143905/default/preview.webp?Expires=1783573301&Key-Pair-Id=K2SVF85QSYV5SB&Signature=McAZJegj3-QXbMvAU0otLu0Llfegja2EnIASEoOakpZmkpC3nuslXIlKiJyKrKO7pmLMeJymh4WPEGfpHMR9RdzFZ1oBxkOuBgb9iUwDAvdLTVkRFaYCmQ4oZTsys5cxCGiseueAbVmCWW20P6n8wlYs0P2L-JIEbD2t1y8aZ~Zz-6XAUfFJ-sl7L5wZxyogwx5Lkfv2-T5X3Vpzf2Rp2v~FYGAHsP0~obVQQYrgIplATQOkYCUh~m~iCNllmQ9Gs7QRtEnZTTfGAKv0uybc1Nl9z7Jz-MICtNftnSDkcaqOp9IOSkfxmFsiNWJehfvZ7f8IrB2h5SZkZwzY2ZtTTg__',
    alt: 'Distribution of sanitary pads to Hope High students - School H-28',
    eventId: 'menstrual-hygiene-hope-high-2026',
    eventTitle: 'Menstrual Hygiene Day - Hope High',
    date: 'June 9, 2026',
    year: 2026,
    location: 'Hope High Academy, Zawan',
    aspectRatio: 'landscape'
  },
  {
    id: 'sni7cb4z5510a5ay420260609143905',
    src: 'https://preview-eu.wetransfer.net/collect/shgo68lwx9ffg8rwq20260609143841/sni7cb4z5510a5ay420260609143905/default/preview.webp?Expires=1783573301&Key-Pair-Id=K2SVF85QSYV5SB&Signature=DtF0-H5vZaXYbNnI38h~xHY9SsN3u0JJS3p~PufEBqkVsbyGp~bXU2CkNutpVcc2wRThmwmp~tY7TRCSBoDbj4I2~Y~03ihcnRZZteQoJgtHQTRul3OcnUR~8ppVRSm7LW6jygtXWYK1btyW2~RdDTeXN8fi2ZO7Xv7OPuwmPver8abYxjNqZ71xlVBTCMwq1OENnrKVJC6G1lxSv55t8TE5-jmC~2Lcbmo1cuBVcsI61AslCBi8Wp0yoPCKrV6nmhgdXunalu5NRBA0TqbLQjFd73Z8gfNk2C7hUfZj0rG6Gwob3NNfxPtBxJW2E1hsqk3oiR1WhP5KlmKOOP6ikA__',
    alt: 'Students smiling during the interactive activities - School H-30',
    eventId: 'menstrual-hygiene-hope-high-2026',
    eventTitle: 'Menstrual Hygiene Day - Hope High',
    date: 'June 9, 2026',
    year: 2026,
    location: 'Hope High Academy, Zawan',
    aspectRatio: 'landscape'
  },
  {
    id: 'si58trk5r4bl6p0mr20260609143905',
    src: 'https://preview-eu.wetransfer.net/collect/shgo68lwx9ffg8rwq20260609143841/si58trk5r4bl6p0mr20260609143905/default/preview.webp?Expires=1783573301&Key-Pair-Id=K2SVF85QSYV5SB&Signature=QiPh63MQ9eieSrhyj9oKv~BpIHsNNOZ6enN9kKiV8Rwid0c17FWkl6fsJecYdXYXTUOPB0v7xwY2PTXkjVDWFgqLqv~M-cXGt-vFgKBmS~5~JbG9uu5JRclqYH0nMb30GZglDiJrCPy9d4W4dYYlT4yunGswT5tLHdXIbtVUKfy62NmAt4uiCK8pp-8zx3b6ZPanrLUf37Aj1dtyahL2yNM4YA~57L2Fhc0AS3f76OIJ-E4NpXS~fmKMp2321GRPHGfuEDEVFu6Yy3Tu7QQPjCJ6q7XVPzOVH2jBPJz9mkzTIzaDmo8yAHNgf1ZLJ~S401mFOXkScQV5NfpMx1NADw__',
    alt: 'Presenters answering student questions on emotional health - School H-29',
    eventId: 'menstrual-hygiene-hope-high-2026',
    eventTitle: 'Menstrual Hygiene Day - Hope High',
    date: 'June 9, 2026',
    year: 2026,
    location: 'Hope High Academy, Zawan',
    aspectRatio: 'landscape'
  },
  {
    id: 'supxwlvq3egqzu69q20260609143905',
    src: 'https://preview-eu.wetransfer.net/collect/shgo68lwx9ffg8rwq20260609143841/supxwlvq3egqzu69q20260609143905/default/preview.webp?Expires=1783573301&Key-Pair-Id=K2SVF85QSYV5SB&Signature=LZBFvJ7Zf~fYnQuOSHIqL3VFljiAZ4lJLPEVvm4S3iB17sS19TvJdEQUKej9RfUlkmNXwwmrS9WZ2oVcg5eB7bfz2c7C8VpTydBwYDkosKciC9d0SxXOePpTyPGo7EoRy3nx8xgyz3owvAOs6yv7MAsEX4vfh2194stZmd~dVuGqYoAFHbuumaHd9J9hMdxBXfaMkJRnllXoHw3OptRlyKmVfJ8miGNqtoe0W1az3zh1CeK3QhmVOHGuRsMYe4EXZEH322ip9MUe0ghzc0nhSLc9mYBPP76EbIFpmwr8~8veXnK82XLxv66Gt1HZv6C~m8Io47wXx3V2PzHu4o7kKA__',
    alt: 'Close-up of sanitary products distributed during the campaign - School H-34',
    eventId: 'menstrual-hygiene-hope-high-2026',
    eventTitle: 'Menstrual Hygiene Day - Hope High',
    date: 'June 9, 2026',
    year: 2026,
    location: 'Hope High Academy, Zawan',
    aspectRatio: 'landscape'
  },
  {
    id: 'sbj0wm94pm5abhw6o20260609143905',
    src: 'https://preview-eu.wetransfer.net/collect/shgo68lwx9ffg8rwq20260609143841/sbj0wm94pm5abhw6o20260609143905/default/preview.webp?Expires=1783573301&Key-Pair-Id=K2SVF85QSYV5SB&Signature=CwMd1z9JsCfi0hhE689C9X-BG8BlxdX8VVsHuBi27rJABq-RtLp37wZUjZLBEMbaEGE2UMxtDZd4uc5DhaxqifzmSowTdI6ht7iXc8uf4~ugYH6yHUWoPVxs0AgYqgX60Y9xzfm4A7t5~BGYC8BIHQJlGS~QCIGrsNDgZOBzXkIX334vONtDkVzVcHmAkl1u7WczYPKPC45UpND~F3~sHdNvR1fFTlslGWYKYBdMrs3GTncoZAOLmjNLv9wgm2avXgf1Z9yndf1MG4KN8KKf2jTBYAa5Oi2MCbUFdTUh95w4KQvqyEecswGpqT-epsB9FVvxQU4vVCDMYniAt2KWHA__',
    alt: 'Students reading educational leaflets on reproductive rights - School H-31',
    eventId: 'menstrual-hygiene-hope-high-2026',
    eventTitle: 'Menstrual Hygiene Day - Hope High',
    date: 'June 9, 2026',
    year: 2026,
    location: 'Hope High Academy, Zawan',
    aspectRatio: 'landscape'
  },
  {
    id: 'sheihbefmgyxiup8920260609143905',
    src: 'https://preview-eu.wetransfer.net/collect/shgo68lwx9ffg8rwq20260609143841/sheihbefmgyxiup8920260609143905/default/preview.webp?Expires=1783573301&Key-Pair-Id=K2SVF85QSYV5SB&Signature=Kb1SdtzF-RHITwMNHaIfKbzCA-1kzFBDn3mz~~D4BwvqVE67yBK5NQEtaxt838Knx~tLBIpBymJ8LInKbsFpR4awF2Gsll3FDIbnjtU0w3UfSwfY42DJdP5cOvk4CTmUm87iubNpAVCiLwCWlUfLvD-fUgCrHD1-VJ16kfutv6eVgqfcTZo6It9zZaQQnbBiItnJLhg~5nwq-By1lYLOnrUWEq0KfOQ~9pbNGMSWj8QL9YNKnUB7hYT4EZJaG3rKHFOhLQeoByp1JTX2eFIpYZKXx~TbIXKzvl3tVmDoJbb0Or28bizgipoheRxtdpDEwErP6XoRyC3WWxRk~tpSKw__',
    alt: 'Staff and volunteers posing together - School H-33',
    eventId: 'menstrual-hygiene-hope-high-2026',
    eventTitle: 'Menstrual Hygiene Day - Hope High',
    date: 'June 9, 2026',
    year: 2026,
    location: 'Hope High Academy, Zawan',
    aspectRatio: 'landscape'
  },
  {
    id: 'sj1tfw7oa1pcq78g820260609143906',
    src: 'https://preview-eu.wetransfer.net/collect/shgo68lwx9ffg8rwq20260609143841/sj1tfw7oa1pcq78g820260609143906/default/preview.webp?Expires=1783573301&Key-Pair-Id=K2SVF85QSYV5SB&Signature=HWkrufgnwsUz9JUbB4mfE6W7mT-sHwcl~nHNB7SN1vYE4RpWNWEsVOie9ebl5bcfTcsbhLGI8gMm-9dGFASyT8zgSDlf-rJP9Hb8iADQQPPySvLoX0fLBZJzqPyLSe5pnhdPhyNn5vBEeBnmpPon8bu6ODnRhvvJjtVttfk2CpCXqMxU6qA-huFxQ85oCKgcQcaJ3ephAR~ERd29f6aok3JHlwgM0VLJMTu5cxySiTlZwCper8I-1Y82DwO83VFnMQD71v9mGHFu0F3qsn5~e3UGsUukUBkMX1KcT6UDh-UTkSXAXWyflsioyGN97qIfl9SP~JYsHaZDHtTrgyDjpQ__',
    alt: 'Student asking questions during the interactive forum - School H-32',
    eventId: 'menstrual-hygiene-hope-high-2026',
    eventTitle: 'Menstrual Hygiene Day - Hope High',
    date: 'June 9, 2026',
    year: 2026,
    location: 'Hope High Academy, Zawan',
    aspectRatio: 'landscape'
  },
  {
    id: 'snqn8qbflx09mh9nt20260609143906',
    src: 'https://preview-eu.wetransfer.net/collect/shgo68lwx9ffg8rwq20260609143841/snqn8qbflx09mh9nt20260609143906/default/preview.webp?Expires=1783573301&Key-Pair-Id=K2SVF85QSYV5SB&Signature=Kt-H9lNdt8i5QcL-Orxpc2iAb-NeNng-6t24wgfaFgv340vBPUwRw~sWq0zpgFr8AcY0vXCMT3r3n5wUqMgPKHFpSVqJnDFF1gEYXGQfQLA6tgM8b9~KVf00ixeZVyVsl2AwNiAjRx1SBf7CyUurQwmTDzewZCvSTjrLHKkSUV8~cpfHiZOu4C1UuotBoxghd8bBgT601lNu~HoatnwaEi1L9szNIEX7tlwRIg30jyXwOqmnDJsHnyWITfUqMfo3DS9nusKRj6CrEIBldwHAnwkENZg761M50OrRZWWqGEdRmnCnF2yGHhTPqIQzA2MLSc~vFYijOjjygh1Dyi09rg__',
    alt: 'Demonstrations on hygiene practices by volunteers - School H-36',
    eventId: 'menstrual-hygiene-hope-high-2026',
    eventTitle: 'Menstrual Hygiene Day - Hope High',
    date: 'June 9, 2026',
    year: 2026,
    location: 'Hope High Academy, Zawan',
    aspectRatio: 'landscape'
  },
  {
    id: 'smjwj1fn1clmytwxo20260609143906',
    src: 'https://preview-eu.wetransfer.net/collect/shgo68lwx9ffg8rwq20260609143841/smjwj1fn1clmytwxo20260609143906/default/preview.webp?Expires=1783573301&Key-Pair-Id=K2SVF85QSYV5SB&Signature=i06fkwcoXPdhrg3zAZnVz3uawtdjG6N2CsFudnyzcAhQk5COHi~a28~0Byr5l0RgTYrPIIX35tSB4m6-YAPbBntaz-F0fth1ieWAX49YDi0Mht3WwURLOliDu5kacHIc06D5e9NaK3N1snQaoCAyMMLCl6yaRd-BKtjyRKQlwvFmeFSAnglqEtd3Oho8d0hbQhHE8F2GykSMw2L5A8O-Z1NXq-HLS2W7t7ODEkD4nVt5PrvyyHaCVF3x8tt6-iOfEXKsCbM7jjTJOgZvy91egDJakAfWFh2q714ayK2cgf~wDOEzDQELCdpGNZL72wVTC5suw1BXRLnhNEHbnbPoMw__',
    alt: 'Crowd of students holding up their hygiene kits - School H-35',
    eventId: 'menstrual-hygiene-hope-high-2026',
    eventTitle: 'Menstrual Hygiene Day - Hope High',
    date: 'June 9, 2026',
    year: 2026,
    location: 'Hope High Academy, Zawan',
    aspectRatio: 'landscape'
  },
  {
    id: 's8iceks4q3cnb28vn20260609143906',
    src: 'https://preview-eu.wetransfer.net/collect/shgo68lwx9ffg8rwq20260609143841/s8iceks4q3cnb28vn20260609143906/default/preview.webp?Expires=1783573301&Key-Pair-Id=K2SVF85QSYV5SB&Signature=FXy0-OcLuCpwgsVH5ST~DVAgCFyg7O2xNPQYS8bxJ2X7DIG7EBtflYZTxo~Y5aJwV2ojBCwydAHNOT64kpFnBiYrkv44Kq1ZtqbmE~XUpmH8haMSS0CeXS-yv-LSAWMN9~VugWJ24OTQH4IdPd0q1HXnsevH580YsCI8KUal8lzTkUkhqgcRRwB~~oH7NX1qwE~GsAPLMKGmgxHQDhJ003K1-q02fyEdsCxOPKsLtbQFUQYz1nl~UY2YkmqS~u~Yf99m8KCbLldm8taDIdw~qNYKSsLDHjl-ev6Sc5dcqxZhk0TrUydw1WplLgP-yFINui2bZBjjsssz8aQ0aiRJPw__',
    alt: 'Volunteers smiling at the cameras during seminar setup - School H-39',
    eventId: 'menstrual-hygiene-hope-high-2026',
    eventTitle: 'Menstrual Hygiene Day - Hope High',
    date: 'June 9, 2026',
    year: 2026,
    location: 'Hope High Academy, Zawan',
    aspectRatio: 'landscape'
  },
  {
    id: 'sf9jeadxykpemzc4v20260609143906',
    src: 'https://preview-eu.wetransfer.net/collect/shgo68lwx9ffg8rwq20260609143841/sf9jeadxykpemzc4v20260609143906/default/preview.webp?Expires=1783573301&Key-Pair-Id=K2SVF85QSYV5SB&Signature=j6-oJo9YgpqRknJPHYKECSj-QMJJhmlzROz~viLY7PNvhNm0d5tSS~Sh4Vi7NVPL-YnCS~e09xKTEqSg-a9s5txcb2X1K~stDGoTBmdwbP93RLyqRBbAPx2L6-ZWzAU7sTrjIcqkBEdzVt2oOsVOc7ZadfbweXfozzNw5B1LMjMwxE4n2c2zf8CHG5nh1fDQTbKJbhMhsjcBmhgEuTLOPOuwEPmcumUBnfM2o1MwMviIlVbUCBCNUqBv7AdVIueTeZ39VjI~9lu7b2LW0mHdg6SHcigLJ3iUUobT7bVgQxuCvYNhKiwPzAkKgZwjgQkwabjgnU0bboXfb6sXhMgBPg__',
    alt: 'One of our medical scientists addressing student health - School H-41',
    eventId: 'menstrual-hygiene-hope-high-2026',
    eventTitle: 'Menstrual Hygiene Day - Hope High',
    date: 'June 9, 2026',
    year: 2026,
    location: 'Hope High Academy, Zawan',
    aspectRatio: 'landscape'
  },
  {
    id: 'sr5uzhx519f3rycns20260609143906',
    src: 'https://preview-eu.wetransfer.net/collect/shgo68lwx9ffg8rwq20260609143841/sr5uzhx519f3rycns20260609143906/default/preview.webp?Expires=1783573301&Key-Pair-Id=K2SVF85QSYV5SB&Signature=XBY0LA8Dw2TO3tAcohPdYaQncsJwPibEjBZGufX~BdMkImQInN5~QY4yQY1CzynoYXmSzHBh-cPUNCpFep8XOna7WnlrXv8NIfmD4ruyYOivfhfkfBxHI4feVcGsZ5ex-c0-qWPsrq9VQ4ciJ0lToyPqYMFw3AB8XhQjJ4cciICS~zxSqLXuL0cNLp6fN1xMuzAXs4trLOf1DxF4Jjm-OvHS9d-F8fBoLArsLl4PJ~cKYnyhKvA~RKlPGt224pG5V3LS-vDVOZqiaZCjz8vySCuYerMBZM-D4SDWkkFVC9JZlEvaHKSm1tu4emCNVcud4mAW3ItTMmrDW6IH2nHs3Q__',
    alt: 'Presentation board displaying menstrual cycle timelines - School H-37',
    eventId: 'menstrual-hygiene-hope-high-2026',
    eventTitle: 'Menstrual Hygiene Day - Hope High',
    date: 'June 9, 2026',
    year: 2026,
    location: 'Hope High Academy, Zawan',
    aspectRatio: 'landscape'
  },
  {
    id: 'skb8z8thjmumd12iz20260609143906',
    src: 'https://preview-eu.wetransfer.net/collect/shgo68lwx9ffg8rwq20260609143841/skb8z8thjmumd12iz20260609143906/default/preview.webp?Expires=1783573301&Key-Pair-Id=K2SVF85QSYV5SB&Signature=AZA5u6BnI2mXG6uMy3SBbu8Uk2JDADlHLD6YO6pAH2EpmucFOV0r0d1UhM38zNFqqVcU~4t~mZmBkj5cJK5NJLJRKzmKHL0mekXZmCB~e5pA5~5CFuSs15W~lJ-FST1CeVHrgJM3gpEtHgUYpIp8bQIqFunNDoNtn6Cdo2EnzHGOqAmTr2LBhv2NjtpnjXQP33x70AA3rRnqyvGoEy3WvEpa-Eau~y-IeEWajHtiR4iMNLjptXeGAgrTMMz0OKWlHoJ5mBQvbCVpDxElrp7xlqkeu1RRHs-iaXUr37aHM-IsHuL54OtievrrkdLmZtffi6JY8yEcpDKCp0PG3b32KQ__',
    alt: 'Group discussion among students regarding boundary setting - School H-38',
    eventId: 'menstrual-hygiene-hope-high-2026',
    eventTitle: 'Menstrual Hygiene Day - Hope High',
    date: 'June 9, 2026',
    year: 2026,
    location: 'Hope High Academy, Zawan',
    aspectRatio: 'landscape'
  },
  {
    id: 'smc98ddlx692lebnv20260609143906',
    src: 'https://preview-eu.wetransfer.net/collect/shgo68lwx9ffg8rwq20260609143841/smc98ddlx692lebnv20260609143906/default/preview.webp?Expires=1783573301&Key-Pair-Id=K2SVF85QSYV5SB&Signature=GcDrPmHa7r34gQ9zYmkuw0G8Pd1zKW1JZJ9yxlSqwAQ6bYhkpUnToeRcPery~d43Hca~oyVmLa1lJGb-d19Vh80NvCe084mTgst4l~efgr06GYNXxEI342ue16COihOhhUIY6UCi3--thQn6kkz1-kHIygPfE-VrCimyNQRN~Y6JFs9Q0np4U-x3r11B9I9ZuN2HRQZYD0sXXdlisH4-bhQ4PeES9ZVkNeM5t6vTIbO1Fbh90k-u4DQogp~IwDsSlvh6cG5CHx5vJ1MalnT8zBlMQ1YPEUjjiBi0hxq85JRWPmYeZFRSF8BJEBEK9i-VCLwoCgFJNllb7fFi4~ojKg__',
    alt: 'Classroom filled with students showing support for Padded Girl - School H-40',
    eventId: 'menstrual-hygiene-hope-high-2026',
    eventTitle: 'Menstrual Hygiene Day - Hope High',
    date: 'June 9, 2026',
    year: 2026,
    location: 'Hope High Academy, Zawan',
    aspectRatio: 'landscape'
  },
  {
    id: 'smnca3bq5fdt0o1xz20260609143906',
    src: 'https://preview-eu.wetransfer.net/collect/shgo68lwx9ffg8rwq20260609143841/smnca3bq5fdt0o1xz20260609143906/default/preview.webp?Expires=1783573301&Key-Pair-Id=K2SVF85QSYV5SB&Signature=Hk8BFppVOPDwWKH47UhZlRshJIDhhh2da8XRN7zLgD~7SxSXpwuIBMMUaJz~cw4pZ6E8r0rv8Mx5p98xOsBVtzAx5yXOQ3fEr2kDG-xjbHhpSK1Y~xyrDBM4bsYqA2RkY9OxMRBMi7terSxnZ0IC692GY50ViJXJetLN~WAJGCwHkVWUItp1aU6MWla0jRj2scIhKCZRxeNU8DK1hN1HXRh4K2MLI2dE4O-O9Zlp3NMLHagBMik4XPpYV2Nd0bdxPUE3fV13Qk~BlD-AO-kamZA9WF-dNwrShkH5S03eRpzJ4l38MKl1uhl~yPqFuBg-kxFpBq711FrdVWtzN99tPw__',
    alt: 'One of the female student leaders giving feedback - School H-45',
    eventId: 'menstrual-hygiene-hope-high-2026',
    eventTitle: 'Menstrual Hygiene Day - Hope High',
    date: 'June 9, 2026',
    year: 2026,
    location: 'Hope High Academy, Zawan',
    aspectRatio: 'portrait'
  },
  {
    id: 'smgt88i9h7vdh007u20260609143906',
    src: 'https://preview-eu.wetransfer.net/collect/shgo68lwx9ffg8rwq20260609143841/smgt88i9h7vdh007u20260609143906/default/preview.webp?Expires=1783573301&Key-Pair-Id=K2SVF85QSYV5SB&Signature=gvuzmPXacAJYoG0qRakv9qwOkDbfJ3~rRTa7gWwOvr8a0KI7dODp-LTAAC4srGyKeAHAj8L6H4~Ovm2bA-OR4tIxj9WtpzcIsfthdUUEqGzEWhbqYzIF7kllOxg6USRNWwR39RgP5SyAnT607yK7Y4V-n2ypDnchbSM7vwxuSq19a1FmQHX10OBPCWSN8L2Fn93UzM9gqsH7pP48eHt5kdTNhxKPdl~Dkt5JsFBLgeLAIaZ9PZBvjILodkyArsWnX3BedlYYC1gtRW6-rNKI8wpyrXHJVflzcsrJqT0eRj7pOIjdAA6fkYiCThlWll30Jl2645X9fib0s5sOGMBWjw__',
    alt: 'Close-up of Hope High students smiling - School H-42',
    eventId: 'menstrual-hygiene-hope-high-2026',
    eventTitle: 'Menstrual Hygiene Day - Hope High',
    date: 'June 9, 2026',
    year: 2026,
    location: 'Hope High Academy, Zawan',
    aspectRatio: 'landscape'
  },

  // 1.1 Google Drive Additional Images (Official Partnership with TCNN - May 2026)
  {
    id: 'gd-1',
    src: 'https://drive.google.com/u/0/drive-usercontent/16f7MBHmOFDQy0zmem-xvDqZ29jPG0rrz=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Official partnership workshop session at TCNN',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-2',
    src: 'https://drive.google.com/u/0/drive-usercontent/1fZX2r5D-PhoMSZ8B8ZYuaog-nEy_qCyf=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Interactive discussion groups regarding joint advocacy',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-3',
    src: 'https://drive.google.com/u/0/drive-usercontent/1QkkThGJ0eltasg18GgRwxFgd5XAW90Zy=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Partnership launch and student development seminar',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-4',
    src: 'https://drive.google.com/u/0/drive-usercontent/1BfqCMcncdPjrHVgOYzqgRgjS6JKoE1g0=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Collaborative development classes and educational resources',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-5',
    src: 'https://drive.google.com/u/0/drive-usercontent/1WVaNWS_uJsDVneggosbG1a1gXefk-c3_=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Joint safety initiative launches at TCNN Bukuru',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-6',
    src: 'https://drive.google.com/u/0/drive-usercontent/1ZxY63aPA4xCyrgm70IMJW7uucDBU8jxP=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Leaders exchanging ideas on girl child mentorship',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-7',
    src: 'https://drive.google.com/u/0/drive-usercontent/1eHiQLSln6vyTa6HosFpb8niPPCMc1_ZP=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Mentorship network discussions and planning sessions',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-8',
    src: 'https://drive.google.com/u/0/drive-usercontent/1qd0CrOvoA5qkimh7zAFZzZufLe_jyqu0=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Resource setups and support structures at TCNN campus',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-9',
    src: 'https://drive.google.com/u/0/drive-usercontent/1NsjK1tItxGdlmq6oFAlI1Gzf4XnMJGYY=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Interactive forum with youth leaders on safety networks',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-10',
    src: 'https://drive.google.com/u/0/drive-usercontent/1xnvYM8MMpXV59uW7ae4wvOEwLCZ55pRi=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Mentors leading discussion circles at TCNN',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-11',
    src: 'https://drive.google.com/u/0/drive-usercontent/1ID_Xf1stuQN_zdAZ0n4lAvQPOKIF2xgW=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Advocacy literature distribution inside the campus',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-12',
    src: 'https://drive.google.com/u/0/drive-usercontent/1_U7h7Ba3uzUgw43wQC13iBRQwq0XLKPS=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Student and leader collaboration session on reproductive rights',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-13',
    src: 'https://drive.google.com/u/0/drive-usercontent/1safSIJzK2Wz6E-oZR4JQty36fLdPnaLp=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Joint session detailing mental health strategies and outreach',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-14',
    src: 'https://drive.google.com/u/0/drive-usercontent/189-ftpduCieYImD0QtyVQXIDxa7wXM9M=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Attendees gather after the joint partnership seminar',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-15',
    src: 'https://drive.google.com/u/0/drive-usercontent/1r21SGUoDVdlVaI1XmDtQDfDtn2GIf24u=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Collaboration workshop slides and presenter address',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-16',
    src: 'https://drive.google.com/u/0/drive-usercontent/1qK4JPm7PzkPo8NqkAhy17g93eAt-H46G=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Counseling and mentorship launch programs',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-17',
    src: 'https://drive.google.com/u/0/drive-usercontent/1a-9K7H4L2NgFzXq56P1_WXVKryOJiuLT=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Roleplaying boundaries and consent sessions',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-18',
    src: 'https://drive.google.com/u/0/drive-usercontent/1GB5mB5QkzsZQ0HxK_BUh5kbo2pscopYk=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Panel discussion on youth abuse prevention guidelines',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-19',
    src: 'https://drive.google.com/u/0/drive-usercontent/10t8BSxL6bcJrv3xp9LvlRx6yiXJvERj8=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'TCNN students posing with advocacy banners',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-20',
    src: 'https://drive.google.com/u/0/drive-usercontent/1vQI0dMayD8mnwMBTn0GlPjrIha09ayW1=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'TCNN Bukuru collaboration event group view',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-21',
    src: 'https://drive.google.com/u/0/drive-usercontent/1vYuH4POPIckXaC7IfdfBwhW8c9RkIImk=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Presentation of child-safety frameworks to administrators',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-22',
    src: 'https://drive.google.com/u/0/drive-usercontent/125herEkgZx-P51qivVquIxeQiaB2eKHE=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'TCNN youth workshop focusing on boundary safety guidelines',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-23',
    src: 'https://drive.google.com/u/0/drive-usercontent/1fghQWIVTwG1aBWZj7RJBJ_wAax2f5rMU=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'TCNN students and staff listing to key address',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-24',
    src: 'https://drive.google.com/u/0/drive-usercontent/1yduvzEKCCLBnqhG34yxFyAPl9XpQEwpU=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Mentoring session happening in TCNN classroom circles',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-25',
    src: 'https://drive.google.com/u/0/drive-usercontent/1wNMnSe2TFnaRPk9w91NNWsnQG0jTLrig=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Healthy communication and relationships focus seminar',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-26',
    src: 'https://drive.google.com/u/0/drive-usercontent/1qWidQKE5CSJaqtdN0bdhbcNQY_o5oj7n=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Volunteers discussing community outreach cycles',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-27',
    src: 'https://drive.google.com/u/0/drive-usercontent/1RuYmw-c6W03ZLlIP0ABL4EihHiCncmWX=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Girls receiving educational and hygiene support kits',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-28',
    src: 'https://drive.google.com/u/0/drive-usercontent/1L1fBmvBk5RIZRkZ8TqMiOGuZPlktvImB=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Launch of the safety helpdesk network inside TCNN campus',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-29',
    src: 'https://drive.google.com/u/0/drive-usercontent/1Avn0lnyCgL_AgkvT9TmMi4teNmyozfLB=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Workshop participants in collaborative dialogue',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-30',
    src: 'https://drive.google.com/u/0/drive-usercontent/18DQx50eDk_WUYSMWEarjMEQuUDt5wL0j=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Advocacy training seminar at TCNN auditorium',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-31',
    src: 'https://drive.google.com/u/0/drive-usercontent/1yHGEK8YyaJTCbfc4hbMVVthcdm4qYULD=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Reproductive health and legal support presentation slides',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-32',
    src: 'https://drive.google.com/u/0/drive-usercontent/1vOai_0IKUHb3JNxy-Xd696YVp3689GIm=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Group debate and workshops among youth leaders',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-33',
    src: 'https://drive.google.com/u/0/drive-usercontent/1wAKAZweKtuf9VnebMCwmRH1awaL1-AB2=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'ECJAPI founder presenting safe spaces outline to TCNN',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-34',
    src: 'https://drive.google.com/u/0/drive-usercontent/1JqzLafM27QGZ9aOuhuK9PMbqE6jK7yKC=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Staff and administrators posing together for the signing',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-35',
    src: 'https://drive.google.com/u/0/drive-usercontent/1t9OYPyfcJNRJGeqUfxxbZmDid8yDmzd9=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Interactive exercises focusing on child safety models',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-36',
    src: 'https://drive.google.com/u/0/drive-usercontent/1qll7QLO8_oIItOEe7_OQJ9zgnz0Lz2kq=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Presenters answering student counseling questions',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-37',
    src: 'https://drive.google.com/u/0/drive-usercontent/1bMIngf4P64y0bGfHjSTawtIHatZyGnI5=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Joint safety advisory panel at TCNN campus library hall',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-38',
    src: 'https://drive.google.com/u/0/drive-usercontent/1uhQ1I8eMT9-SBtRQcv32hvJ_f6ZdBHWO=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Focus groups detailing joint child rights action projects',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-39',
    src: 'https://drive.google.com/u/0/drive-usercontent/1Uq0aiqYM1NwfgFwC9rhNKIvt9KtOHoR2=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'TCNN students reviewing reproductive health booklets',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-40',
    src: 'https://drive.google.com/u/0/drive-usercontent/1JPIwmX0a3z1rVXtrlrLbbMImHf21b3Bz=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'TCNN collaboration official banner group shot',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-41',
    src: 'https://drive.google.com/u/0/drive-usercontent/1OfaxzQU9alevYynWOkLXZMd18RTyu7Dg=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Organizers and TCNN student network officers',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-42',
    src: 'https://drive.google.com/u/0/drive-usercontent/1dxZbHzOa8FTziA_T7Ej0Mah-fpZUsnj1=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Joint safety awareness signing and launch forum',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-43',
    src: 'https://drive.google.com/u/0/drive-usercontent/1hvI1m9XPpRTOBcepOyVN6dRhzZWBVwEe=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'TCNN community leaders focus groups',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-44',
    src: 'https://drive.google.com/u/0/drive-usercontent/1x3Lvkvto9npxdFmIGnFDk8iDHuqfZKv4=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Close-up of participant taking part in the seminar',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-45',
    src: 'https://drive.google.com/u/0/drive-usercontent/1Mhh9AbefrVzURrrxIrX-dkG0FeJ-zvOr=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'TCNN administrators and ECJAPI founders group photo',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-46',
    src: 'https://drive.google.com/u/0/drive-usercontent/14VdGJ5Hi_URLKoVnXmi9b4LFKT2jwRLx=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Legal guidelines and victim support center overview',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-47',
    src: 'https://drive.google.com/u/0/drive-usercontent/1UkI9J1cFUtYgtjUuPvW7houTRDiHz_0w=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Hygiene packs display and launch at TCNN center',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-48',
    src: 'https://drive.google.com/u/0/drive-usercontent/1b3o3TnyLEib2TiKVzfWEvJPwEkfChGPN=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Advocacy training forum debate sessions',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-49',
    src: 'https://drive.google.com/u/0/drive-usercontent/16PeWN1Bolr3dCSpFYV-OT2bGWrRUVAZB=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Seminar distribution session detail for student leaders',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'gd-50',
    src: 'https://drive.google.com/u/0/drive-usercontent/17To9gvUrqBm1Jez0Syw4cV086AvsmPPR=w400-h380-p-k-rw-v1-nu-iv1?auditContext=thumbnail',
    alt: 'Partnership launch commemorative photograph',
    eventId: 'tcnn-partnership-2026',
    eventTitle: 'Official Partnership with TCNN',
    date: 'May 2026',
    year: 2026,
    location: 'TCNN Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },

  // 1.2 First Time Lunch - Female Stable Hands (July 2026) - Local Images
  {
    id: 'sh-1',
    src: '/first_time_lunch_female_stable_hands_in_nigeria/WhatsApp%20Image%202026-07-08%20at%2011.13.37.jpeg',
    alt: 'Group portrait of the female stable hands during the lunch program',
    eventId: 'first-time-lunch-stable-hands-2026',
    eventTitle: 'First Time Lunch - Female Stable Hands',
    date: 'July 8, 2026',
    year: 2026,
    location: 'Plateau State, Nigeria',
    aspectRatio: 'landscape'
  },
  {
    id: 'sh-2',
    src: '/first_time_lunch_female_stable_hands_in_nigeria/WhatsApp%20Image%202026-07-08%20at%2011.13.38.jpeg',
    alt: 'Mentors discussing biological health education with attendees',
    eventId: 'first-time-lunch-stable-hands-2026',
    eventTitle: 'First Time Lunch - Female Stable Hands',
    date: 'July 8, 2026',
    year: 2026,
    location: 'Plateau State, Nigeria',
    aspectRatio: 'landscape'
  },
  {
    id: 'sh-3',
    src: '/first_time_lunch_female_stable_hands_in_nigeria/WhatsApp%20Image%202026-07-08%20at%2011.13.39.jpeg',
    alt: 'Attendees sharing experiences and challenges faced in stable roles',
    eventId: 'first-time-lunch-stable-hands-2026',
    eventTitle: 'First Time Lunch - Female Stable Hands',
    date: 'July 8, 2026',
    year: 2026,
    location: 'Plateau State, Nigeria',
    aspectRatio: 'landscape'
  },
  {
    id: 'sh-4',
    src: '/first_time_lunch_female_stable_hands_in_nigeria/WhatsApp%20Image%202026-07-08%20at%2011.13.40.jpeg',
    alt: 'Providing lunch boxes and care kits to the girls',
    eventId: 'first-time-lunch-stable-hands-2026',
    eventTitle: 'First Time Lunch - Female Stable Hands',
    date: 'July 8, 2026',
    year: 2026,
    location: 'Plateau State, Nigeria',
    aspectRatio: 'landscape'
  },
  {
    id: 'sh-5',
    src: '/first_time_lunch_female_stable_hands_in_nigeria/WhatsApp%20Image%202026-07-08%20at%2011.13.42.jpeg',
    alt: 'Interactive safety boundaries seminar session',
    eventId: 'first-time-lunch-stable-hands-2026',
    eventTitle: 'First Time Lunch - Female Stable Hands',
    date: 'July 8, 2026',
    year: 2026,
    location: 'Plateau State, Nigeria',
    aspectRatio: 'landscape'
  },
  {
    id: 'sh-6',
    src: '/first_time_lunch_female_stable_hands_in_nigeria/WhatsApp%20Image%202026-07-08%20at%2011.13.43.jpeg',
    alt: 'Speakers presenting consent models to stable workers',
    eventId: 'first-time-lunch-stable-hands-2026',
    eventTitle: 'First Time Lunch - Female Stable Hands',
    date: 'July 8, 2026',
    year: 2026,
    location: 'Plateau State, Nigeria',
    aspectRatio: 'landscape'
  },
  {
    id: 'sh-7',
    src: '/first_time_lunch_female_stable_hands_in_nigeria/WhatsApp%20Image%202026-07-08%20at%2011.13.44.jpeg',
    alt: 'Female stable hands laughing and sharing happy moments',
    eventId: 'first-time-lunch-stable-hands-2026',
    eventTitle: 'First Time Lunch - Female Stable Hands',
    date: 'July 8, 2026',
    year: 2026,
    location: 'Plateau State, Nigeria',
    aspectRatio: 'landscape'
  },
  {
    id: 'sh-8',
    src: '/first_time_lunch_female_stable_hands_in_nigeria/WhatsApp%20Image%202026-07-08%20at%2011.13.45.jpeg',
    alt: 'Outreach coordinators distributing hygienic resources',
    eventId: 'first-time-lunch-stable-hands-2026',
    eventTitle: 'First Time Lunch - Female Stable Hands',
    date: 'July 8, 2026',
    year: 2026,
    location: 'Plateau State, Nigeria',
    aspectRatio: 'landscape'
  },
  {
    id: 'sh-9',
    src: '/first_time_lunch_female_stable_hands_in_nigeria/WhatsApp%20Image%202026-07-08%20at%2011.13.46.jpeg',
    alt: 'Mentoring circles answering health questions',
    eventId: 'first-time-lunch-stable-hands-2026',
    eventTitle: 'First Time Lunch - Female Stable Hands',
    date: 'July 8, 2026',
    year: 2026,
    location: 'Plateau State, Nigeria',
    aspectRatio: 'landscape'
  },
  {
    id: 'sh-10',
    src: '/first_time_lunch_female_stable_hands_in_nigeria/WhatsApp%20Image%202026-07-08%20at%2011.13.47.jpeg',
    alt: 'Female stable hands during self-esteem and values talks',
    eventId: 'first-time-lunch-stable-hands-2026',
    eventTitle: 'First Time Lunch - Female Stable Hands',
    date: 'July 8, 2026',
    year: 2026,
    location: 'Plateau State, Nigeria',
    aspectRatio: 'landscape'
  },
  {
    id: 'sh-11',
    src: '/first_time_lunch_female_stable_hands_in_nigeria/WhatsApp%20Image%202026-07-08%20at%2011.13.48.jpeg',
    alt: 'A volunteer scientist discussing menstrual hygiene cycles',
    eventId: 'first-time-lunch-stable-hands-2026',
    eventTitle: 'First Time Lunch - Female Stable Hands',
    date: 'July 8, 2026',
    year: 2026,
    location: 'Plateau State, Nigeria',
    aspectRatio: 'landscape'
  },
  {
    id: 'sh-12',
    src: '/first_time_lunch_female_stable_hands_in_nigeria/WhatsApp%20Image%202026-07-08%20at%2011.13.50.jpeg',
    alt: 'Group discussion and lunch overview session',
    eventId: 'first-time-lunch-stable-hands-2026',
    eventTitle: 'First Time Lunch - Female Stable Hands',
    date: 'July 8, 2026',
    year: 2026,
    location: 'Plateau State, Nigeria',
    aspectRatio: 'landscape'
  },

  // 2. World Menstrual Health Day Campaign (May 2026) - Local Images
  {
    id: 'limg-1',
    src: '/jen/empowher_choices.japi_1783442692847.jpeg',
    alt: 'EmpowHer Choices Padded Girl Campaign Presentation',
    eventId: 'padded-girl-campaign-2026',
    eventTitle: 'De-Stigmatizing Menstrual Development, Dismantles Rape Culture Campaign',
    date: 'May 28, 2026',
    year: 2026,
    location: 'Schools across Bukuru & Zawan',
    aspectRatio: 'landscape'
  },
  {
    id: 'limg-2',
    src: '/jen/empowher_choices.japi_1783442969963.jpeg',
    alt: 'Padded Girl Awareness Session in Schools',
    eventId: 'padded-girl-campaign-2026',
    eventTitle: 'De-Stigmatizing Menstrual Development, Dismantles Rape Culture Campaign',
    date: 'May 28, 2026',
    year: 2026,
    location: 'Schools across Bukuru & Zawan',
    aspectRatio: 'landscape'
  },
  {
    id: 'limg-3',
    src: '/jen/empowher_choices.japi_1783442969965.jpeg',
    alt: 'Students Participating in Menstrual Health Seminar',
    eventId: 'padded-girl-campaign-2026',
    eventTitle: 'De-Stigmatizing Menstrual Development, Dismantles Rape Culture Campaign',
    date: 'May 28, 2026',
    year: 2026,
    location: 'Schools across Bukuru & Zawan',
    aspectRatio: 'landscape'
  },
  {
    id: 'limg-4',
    src: '/jen/manlikemagwa_1783442525426.jpeg',
    alt: 'Padded Girl Interactive Workshop',
    eventId: 'padded-girl-campaign-2026',
    eventTitle: 'De-Stigmatizing Menstrual Development, Dismantles Rape Culture Campaign',
    date: 'May 28, 2026',
    year: 2026,
    location: 'Schools across Bukuru & Zawan',
    aspectRatio: 'landscape'
  },
  {
    id: 'limg-5',
    src: '/jen/manlikemagwa_1783442525427.jpeg',
    alt: 'School outreach group photograph',
    eventId: 'padded-girl-campaign-2026',
    eventTitle: 'De-Stigmatizing Menstrual Development, Dismantles Rape Culture Campaign',
    date: 'May 28, 2026',
    year: 2026,
    location: 'Schools across Bukuru & Zawan',
    aspectRatio: 'landscape'
  },
  {
    id: 'limg-6',
    src: '/jen/manlikemagwa_1783442594266.jpeg',
    alt: 'Educators and Speakers at Hope High Academy',
    eventId: 'padded-girl-campaign-2026',
    eventTitle: 'De-Stigmatizing Menstrual Development, Dismantles Rape Culture Campaign',
    date: 'May 28, 2026',
    year: 2026,
    location: 'Schools across Bukuru & Zawan',
    aspectRatio: 'landscape'
  },
  {
    id: 'limg-7',
    src: '/jen/nikurai_1783442755146.jpeg',
    alt: 'Founder Ms. Jennifer Nikurai Maton addressing students',
    eventId: 'padded-girl-campaign-2026',
    eventTitle: 'De-Stigmatizing Menstrual Development, Dismantles Rape Culture Campaign',
    date: 'May 28, 2026',
    year: 2026,
    location: 'Schools across Bukuru & Zawan',
    aspectRatio: 'landscape'
  },
  {
    id: 'limg-8',
    src: '/jen/nikurai_1783442800013.jpeg',
    alt: 'Biodegradable Sanitary Pads Demonstration',
    eventId: 'padded-girl-campaign-2026',
    eventTitle: 'De-Stigmatizing Menstrual Development, Dismantles Rape Culture Campaign',
    date: 'May 28, 2026',
    year: 2026,
    location: 'Schools across Bukuru & Zawan',
    aspectRatio: 'landscape'
  },

  // 3. How the Story Began (2024) - Local Images
  {
    id: 'story-1',
    src: '/how_the_story_began/WhatsApp%20Image%202026-07-08%20at%2011.10.14.jpeg',
    alt: 'The initial grassroots seminar presenting the initiative',
    eventId: 'how-the-story-began-2024',
    eventTitle: 'How the Story Began',
    date: 'May 2024',
    year: 2024,
    location: 'Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'story-2',
    src: '/how_the_story_began/WhatsApp%20Image%202026-07-08%20at%2011.10.16.jpeg',
    alt: 'First group of girls attending the counseling workshop',
    eventId: 'how-the-story-began-2024',
    eventTitle: 'How the Story Began',
    date: 'May 2024',
    year: 2024,
    location: 'Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'story-3',
    src: '/how_the_story_began/WhatsApp%20Image%202026-07-08%20at%2011.10.17%20(1).jpeg',
    alt: 'Advocacy circle discussing girl child education rights',
    eventId: 'how-the-story-began-2024',
    eventTitle: 'How the Story Began',
    date: 'May 2024',
    year: 2024,
    location: 'Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'story-4',
    src: '/how_the_story_began/WhatsApp%20Image%202026-07-08%20at%2011.10.17.jpeg',
    alt: 'Organizing the very first sanitary resource distributions',
    eventId: 'how-the-story-began-2024',
    eventTitle: 'How the Story Began',
    date: 'May 2024',
    year: 2024,
    location: 'Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'story-5',
    src: '/how_the_story_began/WhatsApp%20Image%202026-07-08%20at%2011.10.35.jpeg',
    alt: 'Community leaders and volunteers gather for initial launch',
    eventId: 'how-the-story-began-2024',
    eventTitle: 'How the Story Began',
    date: 'May 2024',
    year: 2024,
    location: 'Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'story-6',
    src: '/how_the_story_began/WhatsApp%20Image%202026-07-08%20at%2011.10.36.jpeg',
    alt: 'Students smiling during the inaugural self-worth workshop',
    eventId: 'how-the-story-began-2024',
    eventTitle: 'How the Story Began',
    date: 'May 2024',
    year: 2024,
    location: 'Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'story-7',
    src: '/how_the_story_began/WhatsApp%20Image%202026-07-08%20at%2011.10.37%20(1).jpeg',
    alt: 'Interactive discussion on child abuse prevention protocols',
    eventId: 'how-the-story-began-2024',
    eventTitle: 'How the Story Began',
    date: 'May 2024',
    year: 2024,
    location: 'Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'story-8',
    src: '/how_the_story_began/WhatsApp%20Image%202026-07-08%20at%2011.10.37%20(2).jpeg',
    alt: 'Our founders posing with the first seminar attendees',
    eventId: 'how-the-story-began-2024',
    eventTitle: 'How the Story Began',
    date: 'May 2024',
    year: 2024,
    location: 'Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'story-9',
    src: '/how_the_story_began/WhatsApp%20Image%202026-07-08%20at%2011.10.54.jpeg',
    alt: 'Inaugural workshop banner group shot',
    eventId: 'how-the-story-began-2024',
    eventTitle: 'How the Story Began',
    date: 'May 2024',
    year: 2024,
    location: 'Bukuru, Plateau State',
    aspectRatio: 'landscape'
  },
  {
    id: 'story-10',
    src: '/how_the_story_began/WhatsApp%20Image%202026-07-08%20at%2011.11.26.jpeg',
    alt: 'Group portrait commemorating the launch of ECJAPI',
    eventId: 'how-the-story-began-2024',
    eventTitle: 'How the Story Began',
    date: 'May 2024',
    year: 2024,
    location: 'Bukuru, Plateau State',
    aspectRatio: 'landscape'
  }
];
