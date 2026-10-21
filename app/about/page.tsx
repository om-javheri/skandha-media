import type { Metadata } from 'next';
import Script from 'next/script';
import SiteScripts from '@/components/SiteScripts';
import './screens.css';

export const metadata: Metadata = {
  title: "About Skandha Media Services | Skandha Media Services",
  description: "Our story since 2013, 200+ people in Mumbai and Dubai, our BluLive Pro, Evince and SyncView products, awards, team, clients and partners.",
  alternates: {
    canonical: "https://skandha-media.vercel.app/about/",
  },
  openGraph: {
    type: "website",
    title: "About Skandha Media Services",
    description: "Our story since 2013, 200+ people in Mumbai and Dubai, our BluLive Pro, Evince and SyncView products, awards, team, clients and partners.",
    url: "https://skandha-media.vercel.app/about/",
    siteName: "Skandha Media Services",
    locale: "en",
    images: [
      "https://skandha-media.vercel.app/files/b436345e-442a-4882-ab17-e8d9a6e7a54f.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Skandha Media Services",
    description: "Our story since 2013, 200+ people in Mumbai and Dubai, our BluLive Pro, Evince and SyncView products, awards, team, clients and partners.",
    images: [
      "https://skandha-media.vercel.app/files/b436345e-442a-4882-ab17-e8d9a6e7a54f.png",
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
      "@id": "https://skandha-media.vercel.app/about/#webpage",
      url: "https://skandha-media.vercel.app/about/",
      name: "About Skandha Media Services",
      description: "Our story since 2013, 200+ people in Mumbai and Dubai, our BluLive Pro, Evince and SyncView products, awards, team, clients and partners.",
      abstract: "Skandha Media Services was founded in 2013 and has more than 200 people. It built BluLive Pro, Evince and SyncView, holds ISO 27001:2022 and works with clients such as FanCode.",
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
          name: "About Skandha Media Services",
          item: "https://skandha-media.vercel.app/about/",
        },
      ],
    },
  ],
};

/** About (/about) */
export default function About() {
  return (
    <>
      <div className="uide-site" style={{ backgroundColor: "#ffffff", color: "#1e293b", fontFamily: "'Inter', system-ui, sans-serif" }}>
        <Section1 />
        <OurStory />
        <CompanyStats />
        <CoreSolutions />
        <Awards />
        <OurTeam />
        <NextStep />
        <Section8 />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <link rel="icon" href="../files/0fc6fd24-f07e-41bf-86e9-374f2a7e22e6.png" />
      <link rel="stylesheet" href={"https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"} precedence="default" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" precedence="default" />
      <SiteScripts motion menu />
      <Script id="analytics-1" strategy="afterInteractive">{"(function(){try{var d={\"path\":\"/about\"};d.referrer=document.referrer;var b=JSON.stringify(d),u=\"https://universalide.onrender.com/api/public/sites/skandha-media/views\";if(navigator.sendBeacon)navigator.sendBeacon(u,new Blob([b],{type:'text/plain'}));else fetch(u,{method:'POST',body:b,keepalive:true,mode:'no-cors'})}catch(e){}})();"}</Script>
      <Script id="analytics-2" strategy="afterInteractive">{"(function(){try{(function startTracking(win, config) {\n    const doc = win.document;\n    // The window's own classes (a test's window, or an iframe's, isn't the global one).\n    const W = win;\n    const device = win.innerWidth <= 640 ? 'phone' : win.innerWidth <= 991 ? 'tablet' : 'desktop';\n    const queue = [];\n    const started = {};\n    let depth = 0;\n    let seen = -1;\n    let pending = false;\n    let flush = 0;\n    // Looked up each time: a framework project draws the page after this script has run.\n    const sections = () => {\n        const root = doc.querySelector('.uide-site');\n        return root ? Array.prototype.slice.call(root.children) : [];\n    };\n    const sectionOf = (el) => {\n        const list = sections();\n        for (let i = 0; i < list.length; i++)\n            if (el && list[i].contains(el))\n                return i;\n        return -1;\n    };\n    const labelOf = (el) => ((el.textContent || '').trim() || el.getAttribute('aria-label') || '').replace(/\\s+/g, ' ').slice(0, 80);\n    const cell = (v, size) => Math.max(0, Math.min(19, Math.floor((v / Math.max(size, 1)) * 20)));\n    // Sent as they happen, never only when the page is left: a page can be closed (or a phone can\n    // drop it) without any last event, and a beacon sent while leaving can be lost.\n    const send = () => {\n        win.clearTimeout(flush);\n        flush = 0;\n        if (!queue.length)\n            return;\n        const data = JSON.stringify({ path: config.path, device, events: queue.splice(0, 40) });\n        try {\n            const nav = win.navigator;\n            if (!(nav.sendBeacon && nav.sendBeacon(config.endpoint, new W.Blob([data], { type: 'text/plain' })))) {\n                void win.fetch(config.endpoint, { method: 'POST', body: data, keepalive: true, mode: 'no-cors' }).catch(() => undefined);\n            }\n        }\n        catch {\n            // Analytics must never break the page.\n        }\n    };\n    /** Clicks and forms go at once (a click can leave the page); scrolling within a second. */\n    const push = (event, now = false) => {\n        queue.push(event);\n        if (now || queue.length >= 40)\n            send();\n        else if (!flush)\n            flush = win.setTimeout(send, 1000);\n    };\n    // How far the page was read: each 25% step and each section once, when first reached.\n    const measure = () => {\n        const list = sections();\n        // Not drawn yet (a framework project draws the page after this script): nothing to measure.\n        if (!list.length)\n            return;\n        const height = Math.max(doc.documentElement.scrollHeight, 1);\n        const d = Math.min(100, Math.round((((win.scrollY || 0) + win.innerHeight) / height) * 100));\n        for (const step of [25, 50, 75, 100])\n            if (d >= step && depth < step)\n                push({ t: 'depth', d: step });\n        if (d > depth)\n            depth = d;\n        for (let i = seen + 1; i < list.length; i++) {\n            if (list[i].getBoundingClientRect().top >= win.innerHeight)\n                break;\n            seen = i;\n            push({ t: 'seen', s: i });\n        }\n    };\n    const onClick = (e) => {\n        const target = e.target instanceof W.Element ? e.target : null;\n        const s = sectionOf(target);\n        if (!target || s < 0)\n            return;\n        const event = { t: 'click', s };\n        // A real pointer click has a place; a keyboard \"click\" (detail 0) only counts for its button.\n        if (e.detail > 0) {\n            const r = sections()[s].getBoundingClientRect();\n            event.x = cell(e.clientX - r.left, r.width);\n            event.y = cell(e.clientY - r.top, r.height);\n        }\n        const el = target.closest('a, button');\n        if (el) {\n            const label = labelOf(el);\n            if (label)\n                event.label = label;\n            const href = el.getAttribute('href') || '';\n            if (/^https?:/i.test(href)) {\n                try {\n                    const url = new URL(href, win.location.href);\n                    if (url.host !== win.location.host)\n                        event.out = url.hostname;\n                }\n                catch {\n                    // Not an address.\n                }\n            }\n        }\n        push(event, true);\n    };\n    const formSection = (t) => {\n        const form = t instanceof W.Element ? t.closest('form') : null;\n        return form ? sectionOf(form) : -1;\n    };\n    const onFocus = (e) => {\n        const s = formSection(e.target);\n        if (s < 0 || started[s])\n            return;\n        started[s] = true;\n        push({ t: 'form', s, a: 'start' }, true);\n    };\n    const onSubmit = (e) => {\n        const s = formSection(e.target);\n        if (s < 0)\n            return;\n        push({ t: 'form', s, a: 'send' }, true);\n    };\n    const onScroll = () => {\n        if (pending)\n            return;\n        pending = true;\n        win.setTimeout(() => {\n            pending = false;\n            measure();\n        }, 200);\n    };\n    const onHide = () => {\n        if (doc.visibilityState === 'hidden')\n            send();\n    };\n    const onPageHide = () => send();\n    doc.addEventListener('click', onClick, true);\n    doc.addEventListener('focusin', onFocus, true);\n    doc.addEventListener('submit', onSubmit, true);\n    win.addEventListener('scroll', onScroll, { passive: true });\n    doc.addEventListener('visibilitychange', onHide);\n    win.addEventListener('pagehide', onPageHide);\n    // The view and what is on screen go at once; a page drawn later is measured in a moment.\n    queue.push({ t: 'view' });\n    measure();\n    send();\n    const first = win.setTimeout(measure, 300);\n    return () => {\n        doc.removeEventListener('click', onClick, true);\n        doc.removeEventListener('focusin', onFocus, true);\n        doc.removeEventListener('submit', onSubmit, true);\n        win.removeEventListener('scroll', onScroll);\n        doc.removeEventListener('visibilitychange', onHide);\n        win.removeEventListener('pagehide', onPageHide);\n        win.clearTimeout(first);\n        measure();\n        send();\n    };\n})(window,{\"endpoint\":\"https://universalide.onrender.com/api/public/sites/skandha-media/interactions\",\"path\":\"/about\"})}catch(e){}})();"}</Script>
    </>
  );
}

function Section1() {
  return (
    <div data-uide-r="container_mvi5yig82hz06r" className="uide-container" style={{ color: "#1e293b", padding: "16px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#ffffff" }}>
      <div data-uide-r="container_mvi5yig82icuet" className="uide-container uide-row" style={{ gap: "16px", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
        <a data-uide-r="link_mvi5yig82jkjuk" href="../" style={{ color: "#1e293b", fontSize: "26px", fontWeight: "700", letterSpacing: "0.02em", textDecoration: "none" }}>
          <img className="uide-link-logo" src="../files/d0870c16-0072-499e-a95c-aa73e1eeb3e9.png" alt="Skandha Media Services" draggable="false" />
        </a>
        <nav data-uide-r="menu_mvi5yig82kt4m3" className="uide-menu" data-uide-collapse="phone" style={{ gap: "24px", "--uide-menu-panel": "#ffffff" }}>
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
            <a href="../media-verticals/" style={{ color: "#1e293b", fontWeight: "500", textDecoration: "none" }}>
              <span>Industries</span>
            </a>
            <a href="../about/" aria-current="page" style={{ color: "#1e293b", fontWeight: "500", textDecoration: "none" }}>
              <span>About</span>
            </a>
            <a href="../news/" style={{ color: "#1e293b", fontWeight: "500", textDecoration: "none" }}>
              <span>News</span>
            </a>
          </div>
        </nav>
        <a data-uide-r="button_mvi5yig82rq4cv" href="../contact/" className="uide-button" style={{ color: "#0f172a", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#e8503f" }}>
          <span>Get in touch</span>
        </a>
      </div>
    </div>
  );
}

function OurStory() {
  return (
    <div id="our-story" data-uide-r="ab_hero" className="uide-container" style={{ gap: "18px", color: "#f8fafc", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#0b1f4d" }}>
      <p style={{ color: "#ed7a6d", fontSize: "14px", fontWeight: "600", lineHeight: "1.6", letterSpacing: "0.06em", textTransform: "uppercase" }}>Our story · Why Skandha?</p>
      <h1 data-uide-r="ab_h1" style={{ color: "#f8fafc", fontSize: "52px", maxWidth: "22ch", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.1", letterSpacing: "normal", textTransform: "none" }}>More than a decade keeping media on air</h1>
      <p data-uide-r="ab_lead" style={{ color: "#f8fafc", fontSize: "21px", maxWidth: "68ch", lineHeight: "1.6" }}>Since 2013 we have helped broadcasters, OTT platforms, content owners, advertisers, rights holders and media-tech firms run leaner, from cloud workflows to AI automation. Technology matters, but our people, values and processes are what clients come back for.</p>
      <a data-uide-r="ab_hero_btn" href="#our-team" className="uide-button" style={{ color: "#0f172a", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#e8503f" }}>
        <span>Meet the team</span>
      </a>
    </div>
  );
}

function CompanyStats() {
  return (
    <div id="company-stats" data-uide-anim="fade-in" data-uide-r="ab_stats" className="uide-container" style={{ gap: "40px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div className="uide-container" style={{ gap: "12px" }}>
        <h2 data-uide-r="ab_stats_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Based in Mumbai, working worldwide</h2>
        <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Mumbai gives us modern infrastructure, a deep pool of talent, room to innovate and lower costs, a mix that is hard to find anywhere else. Our Dubai Media City office serves the Middle East and North Africa.</p>
      </div>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="2" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "2", "--uide-phone-cols": "2", "--uide-cols": "4" }}>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="ab_n1" className="uide-card uide-align-center" style={{ gap: "4px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", textAlign: "center", backgroundColor: "#f5f6fa" }}>
          <p data-uide-count="" data-uide-r="ab_n1n" style={{ color: "#c54436", fontSize: "33px", fontWeight: "700", lineHeight: "1.15" }}>200+</p>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Strong workforce</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="ab_n2" className="uide-card uide-align-center" style={{ gap: "4px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", textAlign: "center", backgroundColor: "#f5f6fa", "--uide-delay": "60ms" }}>
          <p data-uide-count="" data-uide-r="ab_n2n" style={{ color: "#c54436", fontSize: "33px", fontWeight: "700", lineHeight: "1.15" }}>150 K+</p>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Streaming hours</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="ab_n3" className="uide-card uide-align-center" style={{ gap: "4px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", textAlign: "center", backgroundColor: "#f5f6fa", "--uide-delay": "120ms" }}>
          <p data-uide-count="" data-uide-r="ab_n3n" style={{ color: "#c54436", fontSize: "33px", fontWeight: "700", lineHeight: "1.15" }}>70+</p>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Live sport events</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="ab_n4" className="uide-card uide-align-center" style={{ gap: "4px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", textAlign: "center", backgroundColor: "#f5f6fa", "--uide-delay": "180ms" }}>
          <p data-uide-r="ab_n4n" style={{ color: "#c54436", fontSize: "33px", fontWeight: "700", lineHeight: "1.15" }}>2013</p>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Year founded</p>
        </div>
      </div>
    </div>
  );
}

function CoreSolutions() {
  return (
    <div id="core-solutions" data-uide-anim="fade-in" data-uide-r="ab_core" className="uide-container" style={{ gap: "40px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#ffffff" }}>
      <div className="uide-container" style={{ gap: "12px" }}>
        <h2 data-uide-r="ab_core_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Core solutions we built</h2>
        <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Our own products sit alongside digital infra services, customized solutions, digital sports operations and AI/ML for media. Pricing follows outcomes, measured by KPIs we agree with you.</p>
      </div>
      <div data-uide-tablet-cols="1" data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "1", "--uide-phone-cols": "1", "--uide-cols": "3" }}>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="ab_c1" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff" }}>
          <img src="../files/b436345e-442a-4882-ab17-e8d9a6e7a54f.png" alt="BluLive Pro logo" style={{ width: "96px", height: "64px", objectFit: "contain" }} draggable="false" />
          <h3 data-uide-r="ab_c1h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>BluLive Pro</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Automates playlist scheduling and management for playout.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="ab_c2" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "60ms" }}>
          <i className="uide-icon fa-solid fa-eye" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="ab_c2h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Evince</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>AI ad verification with visual proof of delivery.</p>
          <a href="../ai-ml-for-media/#proof-of-ad-delivery" style={{ color: "#c54436" }}>
            <span>About Evince</span>
          </a>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="ab_c3" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "120ms" }}>
          <i className="uide-icon fa-solid fa-chart-line" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="ab_c3h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>SyncView</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Live ad-delivery tracking that stops revenue leakage.</p>
          <a href="../digital-sports-operations/#ad-monetization" style={{ color: "#c54436" }}>
            <span>About SyncView</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function Awards() {
  return (
    <div id="awards" data-uide-anim="fade-in" data-uide-r="ab_awards" className="uide-container" style={{ gap: "40px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <h2 data-uide-r="ab_aw_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Awards and certifications</h2>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "3" }}>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="ab_a1" className="uide-card" style={{ gap: "8px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa" }}>
          <i className="uide-icon fa-solid fa-trophy" aria-hidden="true" style={{ color: "#c54436", fontSize: "22px" }} />
          <h3 data-uide-r="ab_a1h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Two-time finalist for Evince</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Finalist: Monetize Category, Evince x2.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="ab_a2" className="uide-card" style={{ gap: "8px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "60ms" }}>
          <i className="uide-icon fa-solid fa-medal" aria-hidden="true" style={{ color: "#c54436", fontSize: "22px" }} />
          <h3 data-uide-r="ab_a2h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Silver for automation</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Silver position in the automation category.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="ab_a3" className="uide-card" style={{ gap: "8px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "120ms" }}>
          <i className="uide-icon fa-solid fa-star" aria-hidden="true" style={{ color: "#c54436", fontSize: "22px" }} />
          <h3 data-uide-r="ab_a3h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Best systems integrator</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Recognised for joining complex systems into one.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="ab_a4" className="uide-card" style={{ gap: "8px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "180ms" }}>
          <i className="uide-icon fa-solid fa-id-badge" aria-hidden="true" style={{ color: "#c54436", fontSize: "22px" }} />
          <h3 data-uide-r="ab_a4h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>IABM silver member</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Member of the broadcast and media technology trade body.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="ab_a5" className="uide-card" style={{ gap: "8px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "240ms" }}>
          <i className="uide-icon fa-solid fa-shield-halved" aria-hidden="true" style={{ color: "#c54436", fontSize: "22px" }} />
          <h3 data-uide-r="ab_a5h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>ISO 27001:2022 certified</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Information security certified by URS.</p>
        </div>
      </div>
    </div>
  );
}

function OurTeam() {
  return (
    <div id="our-team" data-uide-anim="fade-in" data-uide-r="ab_team" className="uide-container" style={{ gap: "40px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#ffffff" }}>
      <div data-uide-tablet-cols="1" data-uide-phone-cols="1" data-uide-r="ab_team_grid" className="uide-container uide-grid" style={{ gap: "32px", "--uide-tablet-cols": "1", "--uide-phone-cols": "1", "--uide-cols": "3" }}>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "10px" }}>
          <h2 data-uide-r="ab_t1h" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Our team</h2>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>A leadership team, a business team and an operations centre that runs around the clock. Recent hires include Mithun Panchal as Head of Technology and K.S. Avinash as VP Sales, with growth leads for the US and MENA.</p>
        </div>
        <div id="our-clients" data-uide-anim="fade-in" className="uide-container" style={{ gap: "10px", "--uide-delay": "60ms" }}>
          <h2 data-uide-r="ab_t2h" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Our clients</h2>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Broadcasters, OTT platforms, sports streamers and rights holders, from FanCode to the ICC T20 World Cup and Warner Bros. Discovery's linear channels.</p>
        </div>
        <div id="our-partners" data-uide-anim="fade-in" className="uide-container" style={{ gap: "10px", "--uide-delay": "120ms" }}>
          <h2 data-uide-r="ab_t3h" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Our partners</h2>
          <div className="uide-container" style={{ gap: "14px" }}>
            <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Partners such as Mediaexcel for encoding and EFC for Media Capability Centre infrastructure help us keep operations running and set the bar higher. Our engineering builds on cloud platforms such as Google Cloud.</p>
            <img src="../files/60f2b9c9-8201-4804-96c1-cb57be03b6dd.png" alt="Google Cloud logo" style={{ width: "140px", height: "72px", objectFit: "contain" }} draggable="false" />
          </div>
        </div>
      </div>
      <div data-uide-phone-layout="stack" className="uide-container uide-row" style={{ gap: "16px", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
        <p style={{ fontSize: "17px", fontWeight: "600", lineHeight: "1.6" }}>Press releases, case studies and our whitepaper are all on one page.</p>
        <a data-uide-r="ab_press_b" href="../news/" className="uide-button" style={{ color: "#0f172a", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#e8503f" }}>
          <span>Read the news</span>
        </a>
      </div>
    </div>
  );
}

function NextStep() {
  return (
    <div id="next-step" data-uide-anim="fade-in" data-uide-r="ab_cta" className="uide-container" style={{ color: "#0f172a", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#e8503f" }}>
      <div data-uide-r="ab_cta_row" className="uide-container uide-row" style={{ gap: "32px", alignItems: "center", justifyContent: "space-between" }}>
        <div className="uide-container" style={{ gap: "10px", width: "calc(65% - 16px)" }}>
          <h2 data-uide-r="ab_cta_h2" style={{ color: "#0f172a", fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Work with a team that lives media</h2>
          <p style={{ color: "#0f172a", fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Whether you are a broadcaster, a platform or a rights holder, we would like to hear what you are building.</p>
        </div>
        <a data-uide-r="ab_cta_btn" href="../contact/" className="uide-button" style={{ color: "#e8503f", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#0f172a" }}>
          <span>Get in touch</span>
        </a>
      </div>
    </div>
  );
}

function Section8() {
  return (
    <div data-uide-anim="fade-in" data-uide-r="container_mvi5yjj2aiowa6" className="uide-container" style={{ color: "#f8fafc", padding: "58px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#0b1f4d" }}>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" data-uide-r="container_mvi5yjj2ajp8bx" className="uide-container uide-grid" style={{ gap: "40px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "4" }}>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "12px" }}>
          <a data-uide-r="link_mvi5yjj2alcha8" href="../" style={{ color: "#f8fafc", fontSize: "20px", fontWeight: "700", textDecoration: "none" }}>
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
          <a href="../about/" aria-current="page" style={{ color: "#f8fafc" }}>
            <span>About us</span>
          </a>
          <a href="../media-capability-centres/" style={{ color: "#f8fafc" }}>
            <span>Media capability centres</span>
          </a>
          <a href="../media-verticals/" style={{ color: "#f8fafc" }}>
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
