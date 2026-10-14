import Image from "next/image";
import {
ArrowDown,
ArrowRight,
ArrowUpRight,
BookOpen,
CalendarDays,
Clock3,
MapPin,
Music2,
} from "lucide-react";

const ministries = [
{
number: "01",
title: "A joyful choir",
description:
"Lift your voice with us. Our choir brings the congregation together through music and praise.",
image: "/images/church_choir.jpeg",
alt: "The church choir singing together in blue robes",
label: "Music & fellowship",
},
{
number: "02",
title: "A place to grow",
description:
"Sunday School is a welcoming place for children to learn, ask questions, and grow in faith.",
image: "/images/sunday_school.jpeg",
alt: "Children gathered together for Sunday School",
label: "Sunday School",
},
{
number: "03",
title: "Wednesday Bible Study",
description:
"Take a midweek pause to read Scripture, share questions, and encourage one another in faith.",
image: "/images/Bible_Study.jpeg",
alt: "Church members reading the Bible together around a table",
label: "Bible Study",
},
];

const concerts = [
{
day: "FRI",
date: "NOV 06",
year: "2026",
title: "Gospel & Hymns Night",
time: "7:00 PM",
description: "An uplifting evening of gospel favorites and beloved hymns.",
},
{
day: "SAT",
date: "DEC 12",
year: "2026",
title: "Christmas Choir Concert",
time: "6:30 PM",
description: "Celebrate the season with joyful songs from our church choir.",
},
{
day: "FRI",
date: "JAN 15",
year: "2027",
title: "Winter Night of Praise",
time: "7:00 PM",
description: "Gather for an evening of music, praise, and fellowship.",
},
];

export default function Home() {
return (
<main className="overflow-hidden bg-[#f8f7f3] text-[#202923]">
{/* Header background starts here */}

<div className="bg-[#263d31] px-5 py-2.5 text-center text-xs font-medium tracking-[0.12em] text-[#f6e6bd] sm:text-sm">
YOU ARE WELCOME HERE — COME AS YOU ARE
</div>

<header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-5 sm:px-8 lg:px-12">
<a
href="#home"
className="flex shrink-0 items-center gap-2.5"
aria-label="Belief Ministries home"
>
<Image
src="/images/belief_logo.png"
alt=""
width={30}
height={36}
className="h-8 w-auto"
/>
<span className="font-serif text-lg font-semibold tracking-[0.04em] text-[#263d31] sm:text-xl">
BELIEF <span className="text-[#b48742]">MINISTRIES</span>
</span>
</a>

<nav
aria-label="Main navigation"
className="hidden items-center gap-8 text-sm text-[#47534b] md:flex"
>
<a className="transition hover:text-[#a27535]" href="#welcome">
Welcome
</a>
<a className="transition hover:text-[#a27535]" href="#ministries">
Ministries
</a>
<a className="transition hover:text-[#a27535]" href="#events">
Events
</a>
<a className="transition hover:text-[#a27535]" href="#visit">
Visit us
</a>
</nav>

<a
href="#visit"
className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#263d31] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#385541] sm:px-5 sm:text-sm"
>
Plan a visit <ArrowUpRight size={15} aria-hidden="true" />
</a>
</header>
{/* Header background stops here */}

{/* Hero section */}
<section
id="home"
className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-8 sm:px-8 sm:pb-20 lg:grid-cols-[0.94fr_1.06fr] lg:gap-14 lg:px-12 lg:pb-24 lg:pt-10"
>
<div className="relative z-10">
<span className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7138]">
<span className="h-px w-8 bg-[#b48742]" />
A community rooted in faith
</span>
<h1 className="max-w-xl font-serif text-5xl leading-[1.08] tracking-[-0.045em] text-[#263d31] sm:text-6xl lg:text-[4.5rem]">
Faith feels
<br />
like <span className="italic text-[#ad8247]">coming home.</span>
</h1>
<p className="mt-6 max-w-lg text-base leading-7 text-[#606a62] sm:text-lg sm:leading-8">
A place to worship, find encouragement, and share life together.
There&apos;s a seat for you at Belief Ministries.
</p>
<div className="mt-8 flex flex-wrap items-center gap-3">
<a
href="#visit"
className="inline-flex items-center gap-2 rounded-full bg-[#263d31] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#385541]"
>
We&apos;d love to meet you <ArrowRight size={16} aria-hidden="true" />
</a>
<a
href="#ministries"
className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold text-[#39473d] transition hover:bg-[#eeece4]"
>
Get to know us
</a>
</div>
<div className="mt-10 flex items-center gap-3 text-sm text-[#70796f]">
<span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dedbd0] text-[#a77c3e]">
<ArrowDown size={15} aria-hidden="true" />
</span>
A little more about our church
</div>
</div>

<div className="relative min-h-80 sm:min-h-107.5">
<div className="absolute -right-2 top-0 h-[88%] w-[84%] rounded-[48%_48%_12px_12px] bg-[#e8e2d3] sm:right-2" />
<div className="absolute right-0 top-5 h-[88%] w-[84%] overflow-hidden rounded-[48%_48%_12px_12px] sm:right-6 sm:top-8">
<Image
src="/images/church.jpg"
alt="A quiet watercolor painting of a country church in winter"
fill
priority
sizes="(max-width: 1024px) 90vw, 52vw"
className="object-cover object-center"
/>
</div>
<div className="absolute bottom-0 left-0 max-w-57.5 rounded-xl border border-[#eeeae0] bg-white p-4 shadow-[0_16px_45px_-25px_rgba(28,43,33,0.38)] sm:bottom-3 sm:left-1 sm:max-w-65 sm:p-5">
<span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f4efe4] text-[#aa7d3c]">
<BookOpen size={17} aria-hidden="true" />
</span>
<p className="mt-3 font-serif text-lg text-[#263d31]">
Growing together
</p>
<p className="mt-1 text-xs leading-5 text-[#737b73]">
In faith, in hope, and in love.
</p>
</div>
<div className="absolute right-0 top-4 rounded-full border border-white/70 bg-white/90 px-4 py-2 text-xs font-semibold tracking-wide text-[#3e5545] shadow-sm sm:right-3 sm:top-10">
A church for everyone
</div>
</div>
</section>

<section
id="welcome"
className="bg-[#263d31] px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-12"
>
<div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[0.68fr_1.32fr] lg:gap-16">
<div className="relative mx-auto aspect-4/4.5 w-full max-w-85 overflow-hidden rounded-t-full rounded-b-2xl border border-white/15">
<Image
src="/images/reverend.jpeg"
alt="The reverend welcoming the congregation"
fill
sizes="(max-width: 768px) 85vw, 340px"
className="object-cover object-top"
/>
</div>
<div className="max-w-2xl">
<span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4b77e]">
A word from our reverend
</span>
<h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
There&apos;s room for you in our story.
</h2>
<p className="mt-5 text-base leading-7 text-[#d4dcd5] sm:text-lg sm:leading-8">
Whether you&apos;re exploring faith, looking for a church family,
or simply passing through, we&apos;re glad you found us. Come as
you are, and let&apos;s worship together.
</p>
<p className="mt-7 font-serif text-lg italic text-[#e8d3aa]">
With joy and blessings,
</p>
<p className="mt-1 text-sm font-semibold tracking-wide text-white">
Your Reverend
</p>
</div>
</div>
</section>

<section
id="ministries"
className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
>
<div className="mb-9 flex flex-wrap items-end justify-between gap-5 sm:mb-12">
<div>
<span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7138]">
Find your place
</span>
<h2 className="mt-3 font-serif text-3xl tracking-[-0.035em] text-[#263d31] sm:text-4xl">
Life is better together.
</h2>
</div>
<p className="max-w-sm text-sm leading-6 text-[#687169] sm:text-base">
However you like to connect, there&apos;s a way to belong here.
</p>
</div>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
{ministries.map((ministry) => (
<article
key={ministry.number}
className="group overflow-hidden rounded-2xl border border-[#eae7de] bg-white"
>
<div className="relative aspect-[16/8.7] overflow-hidden bg-[#e8e2d3]">
<Image
src={ministry.image}
alt={ministry.alt}
fill
sizes="(max-width: 768px) 100vw, 50vw"
className="object-cover transition duration-500 group-hover:scale-[1.03]"
/>
<span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#49594b]">
{ministry.label}
</span>
</div>
<div className="p-5 sm:p-6">
<div className="flex items-start justify-between gap-5">
<div>
<span className="text-[11px] font-semibold tracking-[0.16em] text-[#a77c3e]">
{ministry.number}
</span>
<h3 className="mt-1 font-serif text-2xl text-[#263d31]">
{ministry.title}
</h3>
</div>
<span className="mt-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e9e5da] text-[#7d6746] transition group-hover:bg-[#f4efe4]">
{ministry.number === "01" ? (
<Music2 size={16} aria-hidden="true" />
) : (
<BookOpen size={16} aria-hidden="true" />
)}
</span>
</div>
<p className="mt-3 max-w-lg text-sm leading-6 text-[#6b736b]">
{ministry.description}
</p>
</div>
</article>
))}
</div>
</section>

<section
id="events"
className="border-y border-[#eae6db] bg-[#f0ede4] px-5 py-14 sm:px-8 sm:py-16 lg:px-12"
>
<div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-center lg:gap-16">
<div>
<span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7138]">
Gather &amp; celebrate
</span>
<h2 className="mt-3 font-serif text-3xl tracking-[-0.035em] text-[#263d31] sm:text-4xl">
Make a little room for music.
</h2>
<p className="mt-4 max-w-md text-sm leading-6 text-[#687169] sm:text-base sm:leading-7">
Join us for uplifting music, warm fellowship, and joyful praise.
Bring a friend; we&apos;ll save you a seat.
</p>
</div>
<div className="rounded-2xl border border-[#e0dacc] bg-[#fbfaf7] p-5 sm:p-7">
<div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#ece8de] pb-5">
<span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#53705b]">
<CalendarDays size={16} aria-hidden="true" />
Upcoming concerts
</span>
<span className="rounded-full bg-[#f1eadb] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#8a6938]">
Save the dates
</span>
</div>
<div className="divide-y divide-[#ece8de]">
{concerts.map((concert) => (
<article
key={concert.title}
className="flex items-center gap-4 py-5 first:pt-5 last:pb-0 sm:gap-5"
>
<div className="flex h-19 w-19 shrink-0 flex-col items-center justify-center rounded-xl bg-[#263d31] text-center text-[#f7e8c6]">
<span className="text-[10px] font-semibold uppercase tracking-[0.17em]">
{concert.day}
</span>
<span className="mt-1 font-serif text-base leading-none">{concert.date}</span>
<span className="mt-1 text-[10px] text-white/70">{concert.year}</span>
</div>
<div className="min-w-0 flex-1">
<h3 className="font-serif text-lg text-[#263d31] sm:text-xl">
{concert.title}
</h3>
<p className="mt-1 flex items-center gap-2 text-xs text-[#73796f] sm:text-sm">
<Clock3 size={15} aria-hidden="true" />
{concert.time}
</p>
<p className="mt-2 text-xs leading-5 text-[#73796f] sm:text-sm">
{concert.description}
</p>
</div>
<Music2
className="hidden text-[#b48742] sm:block"
size={28}
strokeWidth={1.5}
aria-hidden="true"
/>
</article>
))}
</div>
</div>
</div>
</section>

<section
id="visit"
className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1.03fr] lg:items-center lg:gap-16 lg:px-12 lg:py-24"
>
<div>
<span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a7138]">
We can&apos;t wait to meet you
</span>
<h2 className="mt-3 max-w-lg font-serif text-3xl leading-tight tracking-[-0.035em] text-[#263d31] sm:text-4xl lg:text-5xl">
Your next Sunday could feel like home.
</h2>
<p className="mt-5 max-w-lg text-sm leading-7 text-[#687169] sm:text-base">
Come worship with us, bring the family, and stay for a while. We
would love to welcome you in person.
</p>
<div className="mt-7 space-y-4">
<div className="flex items-start gap-3 text-sm text-[#47534b]">
<span className="mt-0.5 text-[#a77c3e]">
<BookOpen size={17} aria-hidden="true" />
</span>
<span>
<strong className="block font-semibold text-[#263d31]">
Sunday School
</strong>
<span className="mt-0.5 block text-[#73796f]">
Children are welcome to learn and grow with us.
</span>
</span>
</div>
<div className="flex items-start gap-3 text-sm text-[#47534b]">
<span className="mt-0.5 text-[#a77c3e]">
<MapPin size={17} aria-hidden="true" />
</span>
<span>
<strong className="block font-semibold text-[#263d31]">
Find your way here
</strong>
<span className="mt-0.5 block text-[#73796f]">
Look up Belief Ministries and get directions.
</span>
</span>
</div>
</div>
<a
href="#"
rel="noreferrer"
className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#263d31] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#385541]"
>
Get directions <ArrowUpRight size={16} aria-hidden="true" />
</a>
</div>
<div className="relative min-h-65 overflow-hidden rounded-2xl sm:min-h-90">
<Image
src="/images/church.jpg"
alt="Watercolor painting of a welcoming white country church"
fill
sizes="(max-width: 1024px) 100vw, 50vw"
className="object-cover"
/>
<div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#16241bd9] to-transparent px-5 pb-5 pt-20 sm:px-7 sm:pb-7">
<p className="font-serif text-2xl text-white">Come worship with us.</p>
<p className="mt-1 text-sm text-white/80">
A warm welcome is waiting.
</p>
</div>
</div>
</section>
{/*Heero section ends here */}

{/* Footer starts here */}
<footer className="bg-[#263d31] px-5 py-7 text-white sm:px-8 lg:px-12">
<div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<a
href="#home"
className="flex items-center gap-2.5 font-serif text-base tracking-[0.04em]"
>
<Image
src="/images/belief_logo.png"
alt=""
width={20}
height={24}
className="h-6 w-auto"
/>
BELIEF MINISTRIES
</a>
<p className="text-xs text-[#d3dbd4]">
A place for faith, fellowship, and family.
</p>
<a
href="#home"
className="inline-flex items-center gap-1 text-xs text-[#e8d3aa] transition hover:text-white"
>
Back to top <ArrowUpRight size={13} aria-hidden="true" />
</a>
</div>
</footer>
{/* Footer ends here */}
</main>
);
}
