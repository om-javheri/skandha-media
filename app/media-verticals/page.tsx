import type { Metadata } from 'next';
import Script from 'next/script';
import SiteScripts from '@/components/SiteScripts';
import './screens.css';

export const metadata: Metadata = {
  title: "Media verticals we serve | Skandha Media Services",
  description: "Services for content owners, broadcasters, OTT platforms, brands and advertisers, post-production houses and gaming and eSports companies.",
  alternates: {
    canonical: "https://skandha-media.vercel.app/media-verticals/",
  },
  openGraph: {
    type: "website",
    title: "Media verticals we serve | Skandha Media Services",
    description: "Services for content owners, broadcasters, OTT platforms, brands and advertisers, post-production houses and gaming and eSports companies.",
    url: "https://skandha-media.vercel.app/media-verticals/",
    siteName: "Skandha Media Services",
    locale: "en",
    images: [
      "https://skandha-media.vercel.app/files/62b2cf00-1a5d-43db-9e9d-addf043dae2e.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Media verticals we serve | Skandha Media Services",
    description: "Services for content owners, broadcasters, OTT platforms, brands and advertisers, post-production houses and gaming and eSports companies.",
    images: [
      "https://skandha-media.vercel.app/files/62b2cf00-1a5d-43db-9e9d-addf043dae2e.png",
    ],
  },
};

/** Structured data (JSON-LD): what search engines and AI answers read about this page. */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://skandha-media.vercel.app/#website",
      url: "https://skandha-media.vercel.app/",
      name: "Skandha Media Services",
      description: "Cloud-native media operations for broadcasters, OTT platforms and rights holders: playout, live sports, ad operations, AI tools and Media Capability Centres, from Mumbai and Dubai.",
      inLanguage: "en",
      publisher: {
        "@id": "https://skandha-media.vercel.app/#organization",
      },
    },
    {
      "@type": "Corporation",
      "@id": "https://skandha-media.vercel.app/#organization",
      name: "Skandha Media Services Pvt Ltd",
      url: "https://skandha-media.vercel.app/",
      logo: "https://skandha-media.vercel.app/files/d0870c16-0072-499e-a95c-aa73e1eeb3e9.png",
      email: "globalsales@skandhams.com",
      telephone: "+91 22 62040500",
      address: "B206/309, Everest Grande, Mahakali Caves Road, Andheri (E), Mumbai 400093, India",
      sameAs: [
        "https://www.linkedin.com/company/skandha-media-services",
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://skandha-media.vercel.app/media-verticals/#webpage",
      url: "https://skandha-media.vercel.app/media-verticals/",
      name: "Media verticals we serve | Skandha Media Services",
      description: "Services for content owners, broadcasters, OTT platforms, brands and advertisers, post-production houses and gaming and eSports companies.",
      abstract: "Skandha serves content owners and rights holders, broadcasters, OTT platforms, brands and advertisers, post-production and gaming and eSports with tailored digital operations.",
      inLanguage: "en",
      isPartOf: {
        "@id": "https://skandha-media.vercel.app/#website",
      },
      about: {
        "@id": "https://skandha-media.vercel.app/#organization",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Skandha Media Services: cloud media operations",
          item: "https://skandha-media.vercel.app/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Media verticals we serve | Skandha Media Services",
          item: "https://skandha-media.vercel.app/media-verticals/",
        },
      ],
    },
  ],
};

/** Media verticals (/media-verticals) */
export default function MediaVerticals() {
  return (
    <>
      <div className="uide-site" style={{ backgroundColor: "#ffffff", color: "#1e293b", fontFamily: "'Inter', system-ui, sans-serif" }}>
        <Section1 />
        <Overview />
        <ContentOwners />
        <Broadcast />
        <Ott />
        <BrandsAdvertisers />
        <PostProduction />
        <GamingEsports />
        <NextStep />
        <Section10 />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <link rel="icon" href="../files/0fc6fd24-f07e-41bf-86e9-374f2a7e22e6.png" />
      <link rel="stylesheet" href={"https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"} precedence="default" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" precedence="default" />
      <SiteScripts motion menu />
      <Script id="analytics-1" strategy="afterInteractive">{"(function(){try{var d={\"path\":\"/media-verticals\"};d.referrer=document.referrer;var b=JSON.stringify(d),u=\"https://universalide.onrender.com/api/public/sites/skandha-media/views\";if(navigator.sendBeacon)navigator.sendBeacon(u,new Blob([b],{type:'text/plain'}));else fetch(u,{method:'POST',body:b,keepalive:true,mode:'no-cors'})}catch(e){}})();"}</Script>
      <Script id="analytics-2" strategy="afterInteractive">{"(function(){try{(function startTracking(win, config) {\n    const doc = win.document;\n    // The window's own classes (a test's window, or an iframe's, isn't the global one).\n    const W = win;\n    const device = win.innerWidth <= 640 ? 'phone' : win.innerWidth <= 991 ? 'tablet' : 'desktop';\n    const queue = [];\n    const started = {};\n    let depth = 0;\n    let seen = -1;\n    let pending = false;\n    let flush = 0;\n    // Looked up each time: a framework project draws the page after this script has run.\n    const sections = () => {\n        const root = doc.querySelector('.uide-site');\n        return root ? Array.prototype.slice.call(root.children) : [];\n    };\n    const sectionOf = (el) => {\n        const list = sections();\n        for (let i = 0; i < list.length; i++)\n            if (el && list[i].contains(el))\n                return i;\n        return -1;\n    };\n    const labelOf = (el) => ((el.textContent || '').trim() || el.getAttribute('aria-label') || '').replace(/\\s+/g, ' ').slice(0, 80);\n    const cell = (v, size) => Math.max(0, Math.min(19, Math.floor((v / Math.max(size, 1)) * 20)));\n    // Sent as they happen, never only when the page is left: a page can be closed (or a phone can\n    // drop it) without any last event, and a beacon sent while leaving can be lost.\n    const send = () => {\n        win.clearTimeout(flush);\n        flush = 0;\n        if (!queue.length)\n            return;\n        const data = JSON.stringify({ path: config.path, device, events: queue.splice(0, 40) });\n        try {\n            const nav = win.navigator;\n            if (!(nav.sendBeacon && nav.sendBeacon(config.endpoint, new W.Blob([data], { type: 'text/plain' })))) {\n                void win.fetch(config.endpoint, { method: 'POST', body: data, keepalive: true, mode: 'no-cors' }).catch(() => undefined);\n            }\n        }\n        catch {\n            // Analytics must never break the page.\n        }\n    };\n    /** Clicks and forms go at once (a click can leave the page); scrolling within a second. */\n    const push = (event, now = false) => {\n        queue.push(event);\n        if (now || queue.length >= 40)\n            send();\n        else if (!flush)\n            flush = win.setTimeout(send, 1000);\n    };\n    // How far the page was read: each 25% step and each section once, when first reached.\n    const measure = () => {\n        const list = sections();\n        // Not drawn yet (a framework project draws the page after this script): nothing to measure.\n        if (!list.length)\n            return;\n        const height = Math.max(doc.documentElement.scrollHeight, 1);\n        const d = Math.min(100, Math.round((((win.scrollY || 0) + win.innerHeight) / height) * 100));\n        for (const step of [25, 50, 75, 100])\n            if (d >= step && depth < step)\n                push({ t: 'depth', d: step });\n        if (d > depth)\n            depth = d;\n        for (let i = seen + 1; i < list.length; i++) {\n            if (list[i].getBoundingClientRect().top >= win.innerHeight)\n                break;\n            seen = i;\n            push({ t: 'seen', s: i });\n        }\n    };\n    const onClick = (e) => {\n        const target = e.target instanceof W.Element ? e.target : null;\n        const s = sectionOf(target);\n        if (!target || s < 0)\n            return;\n        const event = { t: 'click', s };\n        // A real pointer click has a place; a keyboard \"click\" (detail 0) only counts for its button.\n        if (e.detail > 0) {\n            const r = sections()[s].getBoundingClientRect();\n            event.x = cell(e.clientX - r.left, r.width);\n            event.y = cell(e.clientY - r.top, r.height);\n        }\n        const el = target.closest('a, button');\n        if (el) {\n            const label = labelOf(el);\n            if (label)\n                event.label = label;\n            const href = el.getAttribute('href') || '';\n            if (/^https?:/i.test(href)) {\n                try {\n                    const url = new URL(href, win.location.href);\n                    if (url.host !== win.location.host)\n                        event.out = url.hostname;\n                }\n                catch {\n                    // Not an address.\n                }\n            }\n        }\n        push(event, true);\n    };\n    const formSection = (t) => {\n        const form = t instanceof W.Element ? t.closest('form') : null;\n        return form ? sectionOf(form) : -1;\n    };\n    const onFocus = (e) => {\n        const s = formSection(e.target);\n        if (s < 0 || started[s])\n            return;\n        started[s] = true;\n        push({ t: 'form', s, a: 'start' }, true);\n    };\n    const onSubmit = (e) => {\n        const s = formSection(e.target);\n        if (s < 0)\n            return;\n        push({ t: 'form', s, a: 'send' }, true);\n    };\n    const onScroll = () => {\n        if (pending)\n            return;\n        pending = true;\n        win.setTimeout(() => {\n            pending = false;\n            measure();\n        }, 200);\n    };\n    const onHide = () => {\n        if (doc.visibilityState === 'hidden')\n            send();\n    };\n    const onPageHide = () => send();\n    doc.addEventListener('click', onClick, true);\n    doc.addEventListener('focusin', onFocus, true);\n    doc.addEventListener('submit', onSubmit, true);\n    win.addEventListener('scroll', onScroll, { passive: true });\n    doc.addEventListener('visibilitychange', onHide);\n    win.addEventListener('pagehide', onPageHide);\n    // The view and what is on screen go at once; a page drawn later is measured in a moment.\n    queue.push({ t: 'view' });\n    measure();\n    send();\n    const first = win.setTimeout(measure, 300);\n    return () => {\n        doc.removeEventListener('click', onClick, true);\n        doc.removeEventListener('focusin', onFocus, true);\n        doc.removeEventListener('submit', onSubmit, true);\n        win.removeEventListener('scroll', onScroll);\n        doc.removeEventListener('visibilitychange', onHide);\n        win.removeEventListener('pagehide', onPageHide);\n        win.clearTimeout(first);\n        measure();\n        send();\n    };\n})(window,{\"endpoint\":\"https://universalide.onrender.com/api/public/sites/skandha-media/interactions\",\"path\":\"/media-verticals\"})}catch(e){}})();"}</Script>
    </>
  );
}

function Section1() {
  return (
    <div data-uide-r="container_mvi5yig8262k8t" className="uide-container" style={{ color: "#1e293b", padding: "16px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#ffffff" }}>
      <div data-uide-r="container_mvi5yig827h1p1" className="uide-container uide-row" style={{ gap: "16px", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
        <a data-uide-r="link_mvi5yig828asln" href="../" style={{ color: "#1e293b", fontSize: "26px", fontWeight: "700", letterSpacing: "0.02em", textDecoration: "none" }}>
          <img className="uide-link-logo" src="../files/d0870c16-0072-499e-a95c-aa73e1eeb3e9.png" alt="Skandha Media Services" draggable="false" />
        </a>
        <nav data-uide-r="menu_mvi5yig829gpw0" className="uide-menu" data-uide-collapse="phone" style={{ gap: "24px", "--uide-menu-panel": "#ffffff" }}>
          <button type="button" className="uide-menu-toggle" aria-label="Menu" aria-expanded="false">
            <span className="uide-menu-bars" />
          </button>
          <div className="uide-menu-items">
            <a href="../digital-first-services/" style={{ color: "#1e293b", fontWeight: "500", textDecoration: "none" }}>
              <span>Services</span>
            </a>
            <a href="../digital-sports-operations/" style={{ color: "#1e293b", fontWeight: "500", textDecoration: "none" }}>
              <span>Live sports</span>
            </a>
            <a href="../media-capability-centres/" style={{ color: "#1e293b", fontWeight: "500", textDecoration: "none" }}>
              <span>MCC</span>
            </a>
            <a href="../media-verticals/" aria-current="page" style={{ color: "#1e293b", fontWeight: "500", textDecoration: "none" }}>
              <span>Industries</span>
            </a>
            <a href="../about/" style={{ color: "#1e293b", fontWeight: "500", textDecoration: "none" }}>
              <span>About</span>
            </a>
            <a href="../news/" style={{ color: "#1e293b", fontWeight: "500", textDecoration: "none" }}>
              <span>News</span>
            </a>
          </div>
        </nav>
        <a data-uide-r="button_mvi5yig82gvijw" href="../contact/" className="uide-button" style={{ color: "#0f172a", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#e8503f" }}>
          <span>Get in touch</span>
        </a>
      </div>
    </div>
  );
}

function Overview() {
  return (
    <div id="overview" data-uide-r="mv_hero" className="uide-container" style={{ gap: "18px", color: "#f8fafc", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#0b1f4d" }}>
      <p style={{ color: "#ed7a6d", fontSize: "14px", fontWeight: "600", lineHeight: "1.6", letterSpacing: "0.06em", textTransform: "uppercase" }}>Media verticals</p>
      <h1 data-uide-r="mv_h1" style={{ color: "#f8fafc", fontSize: "52px", maxWidth: "22ch", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.1", letterSpacing: "normal", textTransform: "none" }}>Digital operations for every kind of media business</h1>
      <p data-uide-r="mv_lead" style={{ color: "#f8fafc", fontSize: "21px", maxWidth: "68ch", lineHeight: "1.6" }}>Viewers watch on more platforms, and live events and VoD workflows keep getting more complex. Broadcasters, streaming platforms and other media companies stay competitive with operations they can rely on and scale.</p>
      <div data-uide-phone-layout="row" className="uide-container uide-row" style={{ gap: "10px", flexWrap: "wrap" }}>
        <a data-uide-r="mv_j1" href="#content-owners" className="uide-button" style={{ color: "#f8fafc", border: "1px solid #ed7a6d", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "transparent" }}>
          <span>Content owners</span>
        </a>
        <a data-uide-r="mv_j2" href="#broadcast" className="uide-button" style={{ color: "#f8fafc", border: "1px solid #ed7a6d", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "transparent" }}>
          <span>Broadcast</span>
        </a>
        <a data-uide-r="mv_j3" href="#ott" className="uide-button" style={{ color: "#f8fafc", border: "1px solid #ed7a6d", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "transparent" }}>
          <span>OTT</span>
        </a>
        <a data-uide-r="mv_j4" href="#brands-advertisers" className="uide-button" style={{ color: "#f8fafc", border: "1px solid #ed7a6d", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "transparent" }}>
          <span>Brands / advertisers</span>
        </a>
        <a data-uide-r="mv_j5" href="#post-production" className="uide-button" style={{ color: "#f8fafc", border: "1px solid #ed7a6d", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "transparent" }}>
          <span>Post-production</span>
        </a>
        <a data-uide-r="mv_j6" href="#gaming-esports" className="uide-button" style={{ color: "#f8fafc", border: "1px solid #ed7a6d", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "transparent" }}>
          <span>Gaming / eSports</span>
        </a>
      </div>
    </div>
  );
}

function ContentOwners() {
  return (
    <div id="content-owners" data-uide-anim="fade-in" data-uide-r="mv_owners" className="uide-container" style={{ color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div data-uide-r="mv_ow_row" className="uide-container uide-row" style={{ gap: "48px", alignItems: "flex-start" }}>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "12px", width: "calc(50% - 24px)" }}>
          <h2 data-uide-r="mv_ow_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>{"Content owners, aggregators & rights holders"}</h2>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>High-quality video has to reach its audience smoothly and at a sensible cost. Our encoding and transcoding services rebuild the delivery workflow around that.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "24px", width: "calc(50% - 24px)", "--uide-phone-cols": "1", "--uide-delay": "60ms", "--uide-cols": "2" }}>
          <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="mv_ow1" className="uide-card" style={{ gap: "8px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa" }}>
            <i className="uide-icon fa-solid fa-gauge" aria-hidden="true" style={{ color: "#c54436", fontSize: "22px" }} />
            <h3 data-uide-r="mv_ow1h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Smart bitrate encoding</h3>
          </div>
          <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="mv_ow2" className="uide-card" style={{ gap: "8px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "60ms" }}>
            <i className="uide-icon fa-solid fa-arrows-left-right" aria-hidden="true" style={{ color: "#c54436", fontSize: "22px" }} />
            <h3 data-uide-r="mv_ow2h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Adaptive streaming</h3>
          </div>
          <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="mv_ow3" className="uide-card" style={{ gap: "8px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "120ms" }}>
            <i className="uide-icon fa-solid fa-code" aria-hidden="true" style={{ color: "#c54436", fontSize: "22px" }} />
            <h3 data-uide-r="mv_ow3h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>API workflow automation</h3>
          </div>
          <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="mv_ow4" className="uide-card" style={{ gap: "8px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "180ms" }}>
            <i className="uide-icon fa-solid fa-heart-pulse" aria-hidden="true" style={{ color: "#c54436", fontSize: "22px" }} />
            <h3 data-uide-r="mv_ow4h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>QoS monitoring</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

function Broadcast() {
  return (
    <div id="broadcast" data-uide-anim="fade-in" data-uide-r="mv_bc" className="uide-container" style={{ gap: "32px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#ffffff" }}>
      <div className="uide-container" style={{ gap: "12px" }}>
        <h2 data-uide-r="mv_bc_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Broadcast</h2>
        <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Distribution getting harder, capacity maxed out and CAPEX and OPEX climbing? It may be time for a different media set-up.</p>
      </div>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "3" }}>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "6px" }}>
          <h3 data-uide-r="mv_b1h" style={{ fontSize: "27px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>End-to-end content lifecycle</h3>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Tools, architecture, downlinking, hosting, playout, distribution and operations, all managed.</p>
        </div>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "6px", "--uide-delay": "60ms" }}>
          <h3 data-uide-r="mv_b2h" style={{ fontSize: "27px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>From CAPEX to cloud</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>No premises or hardware to buy; pay as you go for what you use.</p>
        </div>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "6px", "--uide-delay": "120ms" }}>
          <h3 data-uide-r="mv_b3h" style={{ fontSize: "27px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Playout your way</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Skilled operators on-prem, in the cloud or hybrid.</p>
        </div>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "6px", "--uide-delay": "180ms" }}>
          <h3 data-uide-r="mv_b4h" style={{ fontSize: "27px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Scale as you go</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Add channels for events and drop them after.</p>
        </div>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "6px", "--uide-delay": "240ms" }}>
          <h3 data-uide-r="mv_b5h" style={{ fontSize: "27px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Ecosystem integration</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>CDNs, analytics and storage connected in one workflow.</p>
        </div>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "6px", "--uide-delay": "300ms" }}>
          <h3 data-uide-r="mv_b6h" style={{ fontSize: "27px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Scheduling with BluLive Pro</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Our own platform automates playlists and saves hours.</p>
        </div>
      </div>
    </div>
  );
}

function Ott() {
  return (
    <div id="ott" data-uide-anim="fade-in" data-uide-r="mv_ott" className="uide-container" style={{ gap: "32px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div className="uide-container" style={{ gap: "12px" }}>
        <h2 data-uide-r="mv_ott_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>OTT</h2>
        <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>More content on more platforms means peak traffic, unbroken streams and personal recommendations all at once. Our broadcast background helps you deliver to any device, any time.</p>
      </div>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "4" }}>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "6px" }}>
          <h3 data-uide-r="mv_o1h" style={{ fontSize: "27px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Revenue-aligned pricing</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Pay per asset, in line with what the platform earns.</p>
        </div>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "6px", "--uide-delay": "60ms" }}>
          <h3 data-uide-r="mv_o2h" style={{ fontSize: "27px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Media processing at scale</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Elastic, accurate transcoding.</p>
        </div>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "6px", "--uide-delay": "120ms" }}>
          <h3 data-uide-r="mv_o3h" style={{ fontSize: "27px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Tailored content</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Stitch, trim and brand for promotions and ads.</p>
        </div>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "6px", "--uide-delay": "180ms" }}>
          <h3 data-uide-r="mv_o4h" style={{ fontSize: "27px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Targeted delivery</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Secure delivery to 150+ platforms and growing.</p>
        </div>
      </div>
    </div>
  );
}

function BrandsAdvertisers() {
  return (
    <div id="brands-advertisers" data-uide-anim="fade-in" data-uide-r="mv_brands" className="uide-container" style={{ gap: "32px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#ffffff" }}>
      <div data-uide-r="mv_br_headrow" className="uide-container uide-row" style={{ gap: "48px", alignItems: "center" }}>
        <div className="uide-container" style={{ gap: "12px", width: "calc(55% - 24px)" }}>
          <h2 data-uide-r="mv_br_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Brands / advertisers</h2>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Precise targeting, real-time insertion and many platforms at once can overwhelm a team. Central infrastructure gives better campaign analytics and data-led creative; managed services handle programmatic placement, and playout handles live scheduling and creative changes.</p>
        </div>
        <img src="../files/62b2cf00-1a5d-43db-9e9d-addf043dae2e.png" alt="Analyst reviewing campaign dashboards at a desk" style={{ width: "calc(45% - 24px)", objectFit: "cover", borderRadius: "8px" }} draggable="false" />
      </div>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "2" }}>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="mv_r1" className="uide-card" style={{ gap: "8px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff" }}>
          <i className="uide-icon fa-solid fa-chart-column" aria-hidden="true" style={{ color: "#c54436", fontSize: "22px" }} />
          <h3 data-uide-r="mv_r1h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Stop revenue leakage with SyncView</h3>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Advertisers and agencies follow their ads live in any browser, and can ask for spot changes during the match.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="mv_r2" className="uide-card" style={{ gap: "8px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "60ms" }}>
          <i className="uide-icon fa-solid fa-camera" aria-hidden="true" style={{ color: "#c54436", fontSize: "22px" }} />
          <h3 data-uide-r="mv_r2h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Visual proof with Evince</h3>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>AI shows exactly how and when each ad appeared on mobile, digital or CTV, so contracts are met.</p>
        </div>
      </div>
    </div>
  );
}

function PostProduction() {
  return (
    <div id="post-production" data-uide-anim="fade-in" data-uide-r="mv_post" className="uide-container" style={{ gap: "32px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div className="uide-container" style={{ gap: "12px" }}>
        <h2 data-uide-r="mv_po_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Post-production</h2>
        <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>AI does the heavy lifting and experienced editors check the result, so content is ready for viewers and distribution sooner.</p>
      </div>
      <div data-uide-tablet-cols="1" data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "1", "--uide-phone-cols": "1", "--uide-cols": "3" }}>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "6px" }}>
          <h3 data-uide-r="mv_p1h" style={{ fontSize: "27px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Subtitling and dubbing</h3>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Near-instant subtitles, and AI dubs with lip-sync, matched tone and voice cloning, finished by human editors.</p>
        </div>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "6px", "--uide-delay": "60ms" }}>
          <h3 data-uide-r="mv_p2h" style={{ fontSize: "27px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Compliance and blurring</h3>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Faces, logos and sensitive images blurred to each region's rules, and age ratings flagged before QC.</p>
        </div>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "6px", "--uide-delay": "120ms" }}>
          <h3 data-uide-r="mv_p3h" style={{ fontSize: "27px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Cultural adaptation</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Idioms, gestures and backgrounds adjusted so content lands with local audiences.</p>
        </div>
      </div>
    </div>
  );
}

function GamingEsports() {
  return (
    <div id="gaming-esports" data-uide-anim="fade-in" data-uide-r="mv_gaming" className="uide-container" style={{ gap: "32px", color: "#f8fafc", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#0b1f4d" }}>
      <div className="uide-container" style={{ gap: "12px" }}>
        <h2 data-uide-r="mv_ga_h2" style={{ color: "#f8fafc", fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Gaming / eSports</h2>
        <p style={{ color: "#f8fafc", fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>eSports keeps getting more immersive and more global. Cloud production, live data and low-latency streaming handle the bandwidth and keep fans engaged, for a small audience or a worldwide one.</p>
      </div>
      <div data-uide-tablet-cols="1" data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "1", "--uide-phone-cols": "1", "--uide-cols": "3" }}>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "6px" }}>
          <h3 data-uide-r="mv_g1h" style={{ color: "#f8fafc", fontSize: "27px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Ultra-low latency gameplay</h3>
          <p style={{ color: "#f8fafc", fontSize: "17px", lineHeight: "1.6" }}>Cloud infrastructure built for real-time play.</p>
        </div>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "6px", "--uide-delay": "60ms" }}>
          <h3 data-uide-r="mv_g2h" style={{ color: "#f8fafc", fontSize: "27px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Community, managed</h3>
          <p style={{ color: "#f8fafc", fontSize: "17px", lineHeight: "1.6" }}>Moderation, influencer work and community management.</p>
        </div>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "6px", "--uide-delay": "120ms" }}>
          <h3 data-uide-r="mv_g3h" style={{ color: "#f8fafc", fontSize: "27px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Interactive playout</h3>
          <p style={{ color: "#f8fafc", fontSize: "17px", lineHeight: "1.6" }}>Overlays, multiple angles and live chat.</p>
        </div>
      </div>
      <p style={{ color: "#f8fafc", fontSize: "17px", maxWidth: "68ch", fontWeight: "600", lineHeight: "1.6" }}>We prioritize reliability: whichever vertical you are in, your content goes out clearly, on time, every time.</p>
    </div>
  );
}

function NextStep() {
  return (
    <div id="next-step" data-uide-anim="fade-in" data-uide-r="mv_cta" className="uide-container" style={{ color: "#0f172a", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#e8503f" }}>
      <div data-uide-r="mv_cta_row" className="uide-container uide-row" style={{ gap: "32px", alignItems: "center", justifyContent: "space-between" }}>
        <div className="uide-container" style={{ gap: "10px", width: "calc(65% - 16px)" }}>
          <h2 data-uide-r="mv_cta_h2" style={{ color: "#0f172a", fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Not sure where you fit?</h2>
          <p style={{ color: "#0f172a", fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Most clients span more than one vertical. Tell us how you work and we will put the right team together.</p>
        </div>
        <a data-uide-r="mv_cta_btn" href="../contact/" className="uide-button" style={{ color: "#e8503f", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#0f172a" }}>
          <span>Talk to us</span>
        </a>
      </div>
    </div>
  );
}

function Section10() {
  return (
    <div data-uide-anim="fade-in" data-uide-r="container_mvi5yjj19m17m7" className="uide-container" style={{ color: "#f8fafc", padding: "58px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#0b1f4d" }}>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" data-uide-r="container_mvi5yjj19n0wu6" className="uide-container uide-grid" style={{ gap: "40px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "4" }}>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "12px" }}>
          <a data-uide-r="link_mvi5yjj19pny6h" href="../" style={{ color: "#f8fafc", fontSize: "20px", fontWeight: "700", textDecoration: "none" }}>
            <span>Skandha Media Services</span>
          </a>
          <p style={{ color: "#b1b8c8", fontSize: "14px", lineHeight: "1.6" }}>Cloud, playout and ad operations for broadcasters, OTT platforms and rights holders, run from Mumbai since 2013.</p>
          <a href="https://www.linkedin.com/company/skandha-media-services" style={{ color: "#f8fafc" }} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin" aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
        </div>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "10px", "--uide-delay": "60ms" }}>
          <p style={{ color: "#b1b8c8", fontSize: "17px", fontWeight: "700", lineHeight: "1.6" }}>Services</p>
          <a href="../digital-first-services/" style={{ color: "#f8fafc" }}>
            <span>Digital first services</span>
          </a>
          <a href="../ai-ml-for-media/" style={{ color: "#f8fafc" }}>
            <span>AI/ML for media</span>
          </a>
          <a href="../customized-solutions/" style={{ color: "#f8fafc" }}>
            <span>Customized solutions</span>
          </a>
          <a href="../digital-sports-operations/" style={{ color: "#f8fafc" }}>
            <span>Digital sports operations</span>
          </a>
          <a href="../managed-media-fabric/" style={{ color: "#f8fafc" }}>
            <span>Managed media fabric</span>
          </a>
          <a href="../vidre/" style={{ color: "#f8fafc" }}>
            <span>vidRE</span>
          </a>
        </div>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "10px", "--uide-delay": "120ms" }}>
          <p style={{ color: "#b1b8c8", fontSize: "17px", fontWeight: "700", lineHeight: "1.6" }}>Company</p>
          <a href="../about/" style={{ color: "#f8fafc" }}>
            <span>About us</span>
          </a>
          <a href="../media-capability-centres/" style={{ color: "#f8fafc" }}>
            <span>Media capability centres</span>
          </a>
          <a href="../media-verticals/" aria-current="page" style={{ color: "#f8fafc" }}>
            <span>Media verticals</span>
          </a>
          <a href="../news/" style={{ color: "#f8fafc" }}>
            <span>News and resources</span>
          </a>
          <a href="../contact/" style={{ color: "#f8fafc" }}>
            <span>Contact</span>
          </a>
        </div>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "10px", "--uide-delay": "180ms" }}>
          <p style={{ color: "#b1b8c8", fontSize: "17px", fontWeight: "700", lineHeight: "1.6" }}>Global offices</p>
          <p style={{ color: "#b1b8c8", fontSize: "14px", lineHeight: "1.6" }}>Mumbai office: B206/309, Everest Grande, Mahakali Caves Road, Andheri (E), Mumbai 400093</p>
          <p style={{ color: "#b1b8c8", fontSize: "14px", lineHeight: "1.6" }}>Dubai office: DSP-HQSOU-VD-F14-035, Fourteenth Floor, Dubai Science Park, South Tower, Dubai Internet City, UAE</p>
          <a href="tel:+912262040500" style={{ color: "#f8fafc" }}>
            <span>+91 22 62040500</span>
          </a>
          <div className="uide-container" style={{ gap: "10px" }}>
            <a href="tel:+919082558674" style={{ color: "#f8fafc" }}>
              <span>+91 9082558674</span>
            </a>
            <a href="mailto:globalsales@skandhams.com" style={{ color: "#f8fafc" }}>
              <span>globalsales@skandhams.com</span>
            </a>
          </div>
        </div>
      </div>
      <div className="uide-container uide-row" style={{ gap: "16px", margin: "48px 0 0", flexWrap: "wrap", justifyContent: "space-between" }}>
        <p style={{ color: "#b1b8c8", fontSize: "14px", lineHeight: "1.6" }}>© 2026 Skandha Media Services Pvt Ltd.</p>
        <p style={{ color: "#b1b8c8", fontSize: "14px", lineHeight: "1.6" }}>{"Terms & Conditions and Privacy Policy on request · ISO 27001:2022 certified"}</p>
      </div>
    </div>
  );
}
