import type { Metadata } from 'next';
import Script from 'next/script';
import SiteScripts from '@/components/SiteScripts';
import './screens.css';

export const metadata: Metadata = {
  title: "AI/ML for media | Skandha Media Services",
  description: "Evince proof of ad delivery, translation, optimal ad placement, object ad detection and addressable TV advertising powered by AI and machine learning.",
  alternates: {
    canonical: "https://om-javheri.github.io/skandha-media/ai-ml-for-media/",
  },
  openGraph: {
    type: "website",
    title: "AI/ML for media | Skandha Media Services",
    description: "Evince proof of ad delivery, translation, optimal ad placement, object ad detection and addressable TV advertising powered by AI and machine learning.",
    url: "https://om-javheri.github.io/skandha-media/ai-ml-for-media/",
    siteName: "Skandha Media Services",
    locale: "en",
    images: [
      "https://om-javheri.github.io/skandha-media/files/e6e2e1c6-6993-42a0-a865-43ef03c0c187.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI/ML for media | Skandha Media Services",
    description: "Evince proof of ad delivery, translation, optimal ad placement, object ad detection and addressable TV advertising powered by AI and machine learning.",
    images: [
      "https://om-javheri.github.io/skandha-media/files/e6e2e1c6-6993-42a0-a865-43ef03c0c187.png",
    ],
  },
};

/** Structured data (JSON-LD): what search engines and AI answers read about this page. */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://om-javheri.github.io/skandha-media/#website",
      url: "https://om-javheri.github.io/skandha-media/",
      name: "Skandha Media Services",
      description: "Cloud-native media operations for broadcasters, OTT platforms and rights holders: playout, live sports, ad operations, AI tools and Media Capability Centres, from Mumbai and Dubai.",
      inLanguage: "en",
      publisher: {
        "@id": "https://om-javheri.github.io/skandha-media/#organization",
      },
    },
    {
      "@type": "Corporation",
      "@id": "https://om-javheri.github.io/skandha-media/#organization",
      name: "Skandha Media Services Pvt Ltd",
      url: "https://om-javheri.github.io/skandha-media/",
      logo: "https://om-javheri.github.io/skandha-media/files/d0870c16-0072-499e-a95c-aa73e1eeb3e9.png",
      email: "globalsales@skandhams.com",
      telephone: "+91 22 62040500",
      address: "B206/309, Everest Grande, Mahakali Caves Road, Andheri (E), Mumbai 400093, India",
      sameAs: [
        "https://www.linkedin.com/company/skandha-media-services",
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://om-javheri.github.io/skandha-media/ai-ml-for-media/#webpage",
      url: "https://om-javheri.github.io/skandha-media/ai-ml-for-media/",
      name: "AI/ML for media | Skandha Media Services",
      description: "Evince proof of ad delivery, translation, optimal ad placement, object ad detection and addressable TV advertising powered by AI and machine learning.",
      abstract: "Skandha uses AI and machine learning to detect problems early and to verify, place and target ads, including Evince visual proof of delivery and addressable TV.",
      inLanguage: "en",
      isPartOf: {
        "@id": "https://om-javheri.github.io/skandha-media/#website",
      },
      about: {
        "@id": "https://om-javheri.github.io/skandha-media/#organization",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Skandha Media Services: cloud media operations",
          item: "https://om-javheri.github.io/skandha-media/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "AI/ML for media | Skandha Media Services",
          item: "https://om-javheri.github.io/skandha-media/ai-ml-for-media/",
        },
      ],
    },
  ],
};

/** AI/ML for media (/ai-ml-for-media) */
export default function AIMLForMedia() {
  return (
    <>
      <div className="uide-site" style={{ backgroundColor: "#ffffff", color: "#1e293b", fontFamily: "'Inter', system-ui, sans-serif" }}>
        <Section1 />
        <Overview />
        <ProofOfAdDelivery />
        <AiTools />
        <Roadmap />
        <NextStep />
        <Section7 />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <link rel="icon" href="../files/0fc6fd24-f07e-41bf-86e9-374f2a7e22e6.png" />
      <link rel="stylesheet" href={"https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"} precedence="default" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" precedence="default" />
      <SiteScripts motion menu />
      <Script id="analytics-1" strategy="afterInteractive">{"(function(){try{var d={\"path\":\"/ai-ml-for-media\"};d.referrer=document.referrer;var b=JSON.stringify(d),u=\"https://universalide.onrender.com/api/public/sites/skandha-media/views\";if(navigator.sendBeacon)navigator.sendBeacon(u,new Blob([b],{type:'text/plain'}));else fetch(u,{method:'POST',body:b,keepalive:true,mode:'no-cors'})}catch(e){}})();"}</Script>
      <Script id="analytics-2" strategy="afterInteractive">{"(function(){try{(function startTracking(win, config) {\n    const doc = win.document;\n    // The window's own classes (a test's window, or an iframe's, isn't the global one).\n    const W = win;\n    const device = win.innerWidth <= 640 ? 'phone' : win.innerWidth <= 991 ? 'tablet' : 'desktop';\n    const queue = [];\n    const started = {};\n    let depth = 0;\n    let seen = -1;\n    let pending = false;\n    let flush = 0;\n    // Looked up each time: a framework project draws the page after this script has run.\n    const sections = () => {\n        const root = doc.querySelector('.uide-site');\n        return root ? Array.prototype.slice.call(root.children) : [];\n    };\n    const sectionOf = (el) => {\n        const list = sections();\n        for (let i = 0; i < list.length; i++)\n            if (el && list[i].contains(el))\n                return i;\n        return -1;\n    };\n    const labelOf = (el) => ((el.textContent || '').trim() || el.getAttribute('aria-label') || '').replace(/\\s+/g, ' ').slice(0, 80);\n    const cell = (v, size) => Math.max(0, Math.min(19, Math.floor((v / Math.max(size, 1)) * 20)));\n    // Sent as they happen, never only when the page is left: a page can be closed (or a phone can\n    // drop it) without any last event, and a beacon sent while leaving can be lost.\n    const send = () => {\n        win.clearTimeout(flush);\n        flush = 0;\n        if (!queue.length)\n            return;\n        const data = JSON.stringify({ path: config.path, device, events: queue.splice(0, 40) });\n        try {\n            const nav = win.navigator;\n            if (!(nav.sendBeacon && nav.sendBeacon(config.endpoint, new W.Blob([data], { type: 'text/plain' })))) {\n                void win.fetch(config.endpoint, { method: 'POST', body: data, keepalive: true, mode: 'no-cors' }).catch(() => undefined);\n            }\n        }\n        catch {\n            // Analytics must never break the page.\n        }\n    };\n    /** Clicks and forms go at once (a click can leave the page); scrolling within a second. */\n    const push = (event, now = false) => {\n        queue.push(event);\n        if (now || queue.length >= 40)\n            send();\n        else if (!flush)\n            flush = win.setTimeout(send, 1000);\n    };\n    // How far the page was read: each 25% step and each section once, when first reached.\n    const measure = () => {\n        const list = sections();\n        // Not drawn yet (a framework project draws the page after this script): nothing to measure.\n        if (!list.length)\n            return;\n        const height = Math.max(doc.documentElement.scrollHeight, 1);\n        const d = Math.min(100, Math.round((((win.scrollY || 0) + win.innerHeight) / height) * 100));\n        for (const step of [25, 50, 75, 100])\n            if (d >= step && depth < step)\n                push({ t: 'depth', d: step });\n        if (d > depth)\n            depth = d;\n        for (let i = seen + 1; i < list.length; i++) {\n            if (list[i].getBoundingClientRect().top >= win.innerHeight)\n                break;\n            seen = i;\n            push({ t: 'seen', s: i });\n        }\n    };\n    const onClick = (e) => {\n        const target = e.target instanceof W.Element ? e.target : null;\n        const s = sectionOf(target);\n        if (!target || s < 0)\n            return;\n        const event = { t: 'click', s };\n        // A real pointer click has a place; a keyboard \"click\" (detail 0) only counts for its button.\n        if (e.detail > 0) {\n            const r = sections()[s].getBoundingClientRect();\n            event.x = cell(e.clientX - r.left, r.width);\n            event.y = cell(e.clientY - r.top, r.height);\n        }\n        const el = target.closest('a, button');\n        if (el) {\n            const label = labelOf(el);\n            if (label)\n                event.label = label;\n            const href = el.getAttribute('href') || '';\n            if (/^https?:/i.test(href)) {\n                try {\n                    const url = new URL(href, win.location.href);\n                    if (url.host !== win.location.host)\n                        event.out = url.hostname;\n                }\n                catch {\n                    // Not an address.\n                }\n            }\n        }\n        push(event, true);\n    };\n    const formSection = (t) => {\n        const form = t instanceof W.Element ? t.closest('form') : null;\n        return form ? sectionOf(form) : -1;\n    };\n    const onFocus = (e) => {\n        const s = formSection(e.target);\n        if (s < 0 || started[s])\n            return;\n        started[s] = true;\n        push({ t: 'form', s, a: 'start' }, true);\n    };\n    const onSubmit = (e) => {\n        const s = formSection(e.target);\n        if (s < 0)\n            return;\n        push({ t: 'form', s, a: 'send' }, true);\n    };\n    const onScroll = () => {\n        if (pending)\n            return;\n        pending = true;\n        win.setTimeout(() => {\n            pending = false;\n            measure();\n        }, 200);\n    };\n    const onHide = () => {\n        if (doc.visibilityState === 'hidden')\n            send();\n    };\n    const onPageHide = () => send();\n    doc.addEventListener('click', onClick, true);\n    doc.addEventListener('focusin', onFocus, true);\n    doc.addEventListener('submit', onSubmit, true);\n    win.addEventListener('scroll', onScroll, { passive: true });\n    doc.addEventListener('visibilitychange', onHide);\n    win.addEventListener('pagehide', onPageHide);\n    // The view and what is on screen go at once; a page drawn later is measured in a moment.\n    queue.push({ t: 'view' });\n    measure();\n    send();\n    const first = win.setTimeout(measure, 300);\n    return () => {\n        doc.removeEventListener('click', onClick, true);\n        doc.removeEventListener('focusin', onFocus, true);\n        doc.removeEventListener('submit', onSubmit, true);\n        win.removeEventListener('scroll', onScroll);\n        doc.removeEventListener('visibilitychange', onHide);\n        win.removeEventListener('pagehide', onPageHide);\n        win.clearTimeout(first);\n        measure();\n        send();\n    };\n})(window,{\"endpoint\":\"https://universalide.onrender.com/api/public/sites/skandha-media/interactions\",\"path\":\"/ai-ml-for-media\"})}catch(e){}})();"}</Script>
    </>
  );
}

function Section1() {
  return (
    <div data-uide-r="container_mvi5yig5cl33m" className="uide-container" style={{ color: "#1e293b", padding: "16px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#ffffff" }}>
      <div data-uide-r="container_mvi5yig5d63hw" className="uide-container uide-row" style={{ gap: "16px", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
        <a data-uide-r="link_mvi5yig5ess0h" href="../" style={{ color: "#1e293b", fontSize: "26px", fontWeight: "700", letterSpacing: "0.02em", textDecoration: "none" }}>
          <img className="uide-link-logo" src="../files/d0870c16-0072-499e-a95c-aa73e1eeb3e9.png" alt="Skandha Media Services" draggable="false" />
        </a>
        <nav data-uide-r="menu_mvi5yig5fyysc" className="uide-menu" data-uide-collapse="phone" style={{ gap: "24px", "--uide-menu-panel": "#ffffff" }}>
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
            <a href="../about/" style={{ color: "#1e293b", fontWeight: "500", textDecoration: "none" }}>
              <span>About</span>
            </a>
            <a href="../news/" style={{ color: "#1e293b", fontWeight: "500", textDecoration: "none" }}>
              <span>News</span>
            </a>
          </div>
        </nav>
        <a data-uide-r="button_mvi5yig5mqcgi" href="../contact/" className="uide-button" style={{ color: "#0f172a", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#e8503f" }}>
          <span>Get in touch</span>
        </a>
      </div>
    </div>
  );
}

function Overview() {
  return (
    <div id="overview" data-uide-r="ai_hero" className="uide-container" style={{ gap: "18px", color: "#f8fafc", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#0b1f4d" }}>
      <p style={{ color: "#ed7a6d", fontSize: "14px", fontWeight: "600", lineHeight: "1.6", letterSpacing: "0.06em", textTransform: "uppercase" }}>AI/ML for media</p>
      <h1 data-uide-r="ai_h1" style={{ color: "#f8fafc", fontSize: "52px", maxWidth: "22ch", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.1", letterSpacing: "normal", textTransform: "none" }}>AI that finds problems before your viewers do</h1>
      <p data-uide-r="ai_lead" style={{ color: "#f8fafc", fontSize: "21px", maxWidth: "68ch", lineHeight: "1.6" }}>Machine learning spots the patterns that hurt your infrastructure and your ad revenue, and automation acts on them, so operations teams spend less time checking and more time improving.</p>
      <a data-uide-r="ai_hero_btn" href="../contact/" className="uide-button" style={{ color: "#0f172a", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#e8503f" }}>
        <span>Talk to us about AI</span>
      </a>
    </div>
  );
}

function ProofOfAdDelivery() {
  return (
    <div id="proof-of-ad-delivery" data-uide-anim="fade-in" data-uide-r="ai_evince" className="uide-container" style={{ gap: "40px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div data-uide-r="ai_ev_headrow" className="uide-container uide-row" style={{ gap: "48px", alignItems: "center" }}>
        <div className="uide-container" style={{ gap: "12px", width: "calc(55% - 24px)" }}>
          <p style={{ color: "#c54436", fontSize: "17px", fontWeight: "600", lineHeight: "1.6" }}>Digital advertising operations · Evince</p>
          <h2 data-uide-r="ai_ev_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Proof of ad delivery</h2>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Evince checks that every ad appeared correctly, at the agreed time and for the agreed length, on whichever channel or platform carried it. Contracts are met and everyone can see it.</p>
        </div>
        <img src="../files/e6e2e1c6-6993-42a0-a865-43ef03c0c187.png" alt="Media professional reviewing content on a tablet" style={{ width: "calc(45% - 24px)", objectFit: "contain" }} draggable="false" />
      </div>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "4" }}>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="ai_e1" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa" }}>
          <i className="uide-icon fa-solid fa-eye" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="ai_e1h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Visual proof-of-delivery</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Captured evidence of each spot as it aired.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="ai_e2" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "60ms" }}>
          <i className="uide-icon fa-solid fa-cloud-arrow-up" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="ai_e2h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Cloud-based storage</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Ad insertion records kept securely, ready for all stakeholders.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="ai_e3" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "120ms" }}>
          <i className="uide-icon fa-solid fa-tags" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="ai_e3h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Customizable metadata</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Files named by commercial ID and brand automatically.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="ai_e4" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "180ms" }}>
          <i className="uide-icon fa-solid fa-photo-film" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="ai_e4h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Multi-format capture</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Spots saved as MP4; L-Band, Aston and bug graphics as PNG, JPG or MOV, all time-stamped.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="ai_e5" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "240ms" }}>
          <i className="uide-icon fa-solid fa-gauge-high" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="ai_e5h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Scalability and efficiency</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Machine learning replaces manual checks and cuts errors.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="ai_e6" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "300ms" }}>
          <i className="uide-icon fa-solid fa-scale-balanced" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="ai_e6h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Industry compliance</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Responsible ad practice that protects brands and builds trust.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="ai_e7" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "360ms" }}>
          <i className="uide-icon fa-solid fa-file-lines" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="ai_e7h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Performance reports</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Impressions, clicks and click-through rates for agencies.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="ai_e8" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "420ms" }}>
          <i className="uide-icon fa-solid fa-file-invoice-dollar" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="ai_e8h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Billing and invoicing</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Accurate bills backed by delivery records.</p>
        </div>
      </div>
    </div>
  );
}

function AiTools() {
  return (
    <div id="ai-tools" data-uide-anim="fade-in" data-uide-r="ai_more" className="uide-container" style={{ gap: "40px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#ffffff" }}>
      <div data-uide-r="ai_more_headrow" className="uide-container uide-row" style={{ gap: "48px", alignItems: "center" }}>
        <div className="uide-container" style={{ gap: "12px", width: "calc(55% - 24px)" }}>
          <h2 data-uide-r="ai_more_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>More ways AI earns its keep</h2>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>From translating a message to placing a shoppable ad on screen, AI turns live and on-demand video into reach and revenue.</p>
        </div>
        <img src="../files/4c1dafd7-79b2-4f09-a44a-472a4d69d21a.png" alt="TV showing a football match with shoppable ads and a QR code" style={{ width: "calc(45% - 24px)", objectFit: "contain" }} draggable="false" />
      </div>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "2" }}>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="ai_t1" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff" }}>
          <i className="uide-icon fa-solid fa-language" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="ai_t1h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Translation</h3>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Reach global audiences with automatic translation into many languages that keeps the message intact.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="ai_t2" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "60ms" }}>
          <i className="uide-icon fa-solid fa-crosshairs" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="ai_t2h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Optimal ad placement</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Ads placed where content and commerce meet, at the moments viewers are watching.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="ai_t3" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "120ms" }}>
          <i className="uide-icon fa-solid fa-magnifying-glass" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="ai_t3h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Object ad detection</h3>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Real-time detection of clothes, furniture, consumables and more in any video, with no manual tagging, for brands, creators and live events.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="ai_t4" className="uide-card" style={{ gap: "10px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#ffffff", "--uide-delay": "180ms" }}>
          <i className="uide-icon fa-solid fa-tv" aria-hidden="true" style={{ color: "#c54436", fontSize: "24px" }} />
          <h3 data-uide-r="ai_t4h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Addressable TV advertisement</h3>
          <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Turn passive viewing into engagement and revenue with ads matched to region, device or audience group.</p>
        </div>
      </div>
    </div>
  );
}

function Roadmap() {
  return (
    <div id="roadmap" data-uide-anim="fade-in" data-uide-r="ai_steps" className="uide-container" style={{ gap: "40px", color: "#1e293b", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif" }}>
      <div className="uide-container" style={{ gap: "12px" }}>
        <h2 data-uide-r="ai_steps_h2" style={{ fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Your roadmap to building AI/ML for media</h2>
        <p style={{ fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Four steps take an addressable TV campaign from the screen to the viewer's phone and back into your reports.</p>
      </div>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" className="uide-container uide-grid" style={{ gap: "24px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "4" }}>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="ai_s1" className="uide-card" style={{ gap: "8px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa" }}>
          <p style={{ color: "#c54436", fontSize: "17px", fontWeight: "700", lineHeight: "1.6" }}>Step 1</p>
          <h3 data-uide-r="ai_s1h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Scan code</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Viewers scan an on-screen code and save the offer in a companion app.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="ai_s2" className="uide-card" style={{ gap: "8px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "60ms" }}>
          <p style={{ color: "#c54436", fontSize: "17px", fontWeight: "700", lineHeight: "1.6" }}>Step 2</p>
          <h3 data-uide-r="ai_s2h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>API</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Our APIs connect each part of the solution end to end.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="ai_s3" className="uide-card" style={{ gap: "8px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "120ms" }}>
          <p style={{ color: "#c54436", fontSize: "17px", fontWeight: "700", lineHeight: "1.6" }}>Step 3</p>
          <h3 data-uide-r="ai_s3h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Track</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Impressions are tracked and reported for performance insight.</p>
        </div>
        <div data-uide-anim="fade-in" data-uide-hover="lift" data-uide-r="ai_s4" className="uide-card" style={{ gap: "8px", border: "1px solid #e2e8f0", padding: "28px", boxShadow: "none", backgroundColor: "#f5f6fa", "--uide-delay": "180ms" }}>
          <p style={{ color: "#c54436", fontSize: "17px", fontWeight: "700", lineHeight: "1.6" }}>Step 4</p>
          <h3 data-uide-r="ai_s4h" style={{ fontSize: "21px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>Display ads</h3>
          <p style={{ fontSize: "17px", lineHeight: "1.6" }}>Local ads shown by region, device or user group.</p>
        </div>
      </div>
    </div>
  );
}

function NextStep() {
  return (
    <div id="next-step" data-uide-anim="fade-in" data-uide-r="ai_cta" className="uide-container" style={{ color: "#0f172a", padding: "96px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#e8503f" }}>
      <div data-uide-r="ai_cta_row" className="uide-container uide-row" style={{ gap: "32px", alignItems: "center", justifyContent: "space-between" }}>
        <div className="uide-container" style={{ gap: "10px", width: "calc(65% - 16px)" }}>
          <h2 data-uide-r="ai_cta_h2" style={{ color: "#0f172a", fontSize: "33px", fontFamily: "'Space Grotesk', system-ui, sans-serif", fontWeight: "700", lineHeight: "1.2", letterSpacing: "normal", textTransform: "none" }}>See Evince on your own ad breaks</h2>
          <p style={{ color: "#0f172a", fontSize: "17px", maxWidth: "68ch", lineHeight: "1.6" }}>Send us a sample of your playout and we will show what AI proof of delivery looks like for it.</p>
        </div>
        <a data-uide-r="ai_cta_btn" href="../contact/" className="uide-button" style={{ color: "#e8503f", padding: "14px 26px", fontWeight: "700", borderRadius: "999px", letterSpacing: "normal", textTransform: "none", backgroundColor: "#0f172a" }}>
          <span>Talk to us</span>
        </a>
      </div>
    </div>
  );
}

function Section7() {
  return (
    <div data-uide-anim="fade-in" data-uide-r="container_mvi5yjix4a7tx7" className="uide-container" style={{ color: "#f8fafc", padding: "58px max(24px, calc((100% - 1160px) / 2))", fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: "#0b1f4d" }}>
      <div data-uide-tablet-cols="2" data-uide-phone-cols="1" data-uide-r="container_mvi5yjix4bp1a3" className="uide-container uide-grid" style={{ gap: "40px", "--uide-tablet-cols": "2", "--uide-phone-cols": "1", "--uide-cols": "4" }}>
        <div data-uide-anim="fade-in" className="uide-container" style={{ gap: "12px" }}>
          <a data-uide-r="link_mvi5yjix4d5rmt" href="../" style={{ color: "#f8fafc", fontSize: "20px", fontWeight: "700", textDecoration: "none" }}>
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
          <a href="../ai-ml-for-media/" aria-current="page" style={{ color: "#f8fafc" }}>
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
