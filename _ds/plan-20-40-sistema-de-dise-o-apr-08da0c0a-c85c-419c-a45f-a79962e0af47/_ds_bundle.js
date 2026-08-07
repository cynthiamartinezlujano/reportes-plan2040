/* @ds-bundle: {"format":3,"namespace":"Plan2040DesignSystem_08da0c","components":[{"name":"EmotionPicker","sourcePath":"components/brand/EmotionPicker.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"PillarChip","sourcePath":"components/brand/PillarChip.jsx"},{"name":"PILLARS","sourcePath":"components/brand/PillarIcon.jsx"},{"name":"PillarIcon","sourcePath":"components/brand/PillarIcon.jsx"},{"name":"SPOT_NAMES","sourcePath":"components/brand/SpotIcon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/brand/SpotIcon.jsx"},{"name":"SpotIcon","sourcePath":"components/brand/SpotIcon.jsx"},{"name":"StatBlock","sourcePath":"components/brand/StatBlock.jsx"},{"name":"EMOTIONS","sourcePath":"components/brand/emotions.js"},{"name":"EMOTION_MAP","sourcePath":"components/brand/emotions.js"},{"name":"PILLAR_GLYPH_SRC","sourcePath":"components/brand/pillarGlyphs.js"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/EmotionPicker.jsx":"609a5e85178e","components/brand/Logo.jsx":"c4269797e7f5","components/brand/PillarChip.jsx":"09882e3f6d36","components/brand/PillarIcon.jsx":"b1caa4c12e61","components/brand/SpotIcon.jsx":"46d721c6638a","components/brand/StatBlock.jsx":"c89305cf751d","components/brand/emotions.js":"b623ba4d9feb","components/brand/pillarGlyphs.js":"00c97303f9ac","components/core/Avatar.jsx":"d115cd07a7b0","components/core/Badge.jsx":"db594aa26ebb","components/core/Button.jsx":"cafd29819821","components/core/Card.jsx":"a0c79b698128","components/core/IconButton.jsx":"5f35db6032ea","components/core/Tag.jsx":"7124f33660dd","components/feedback/Dialog.jsx":"966f0da8722b","components/feedback/ProgressBar.jsx":"7645f99a702a","components/feedback/Toast.jsx":"51dc56426c60","components/forms/Checkbox.jsx":"3078c8e17e93","components/forms/Field.jsx":"18abb31c5867","components/forms/Input.jsx":"9225600dd9be","components/forms/Radio.jsx":"06a029daaefd","components/forms/Select.jsx":"45b3840b9a6e","components/forms/Switch.jsx":"75c265e48ef9","components/forms/Textarea.jsx":"341b1c4a83a7","components/navigation/Tabs.jsx":"a96b50ab4634","ui_kits/plataforma/Dashboard.jsx":"29793c6c249d","ui_kits/plataforma/FamiliesList.jsx":"d3746006c8f7","ui_kits/plataforma/FamilyProfile.jsx":"1a97ea552346","ui_kits/plataforma/Shell.jsx":"a64e32a0a9fe","ui_kits/plataforma/VisitForm.jsx":"2aa4c7d8f2ef","ui_kits/plataforma/data.js":"1c3e0e285b04","ui_kits/plataforma/icons.jsx":"b3cdbb79cc29"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.Plan2040DesignSystem_08da0c = window.Plan2040DesignSystem_08da0c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
// Real Plan 20·40 hand mark (from the official icon). Fills are scoped by a
// per-instance id so the shared .cls-* class names can't leak onto other SVGs.
const VIEWBOX = "0 0 1920 2050";
const INNER = "<path class=\"cls-3\" d=\"M1563.36,1843.77l.07.07-.07.07v-.13Z\"></path><path class=\"cls-3\" d=\"M1565.07,1842.06s0,.07.07.07l-.07.07v-.13Z\"></path><polygon class=\"cls-3\" points=\"1566.71 1840.36 1566.77 1840.36 1566.71 1840.42 1566.71 1840.36\"></polygon><polygon class=\"cls-3\" points=\"1568.41 1838.65 1568.48 1838.65 1568.41 1838.72 1568.41 1838.65\"></polygon><polygon class=\"cls-3\" points=\"1570.12 1836.95 1570.18 1836.95 1570.12 1837.01 1570.12 1836.95\"></polygon><path class=\"cls-2\" d=\"M1906.13,501.9c-8.98,39.35-26.03,75.61-43.61,111.67-39.28,83.67-84.33,164.66-119.08,250.5-16.39,40.46-28.39,82.3-32.85,125.97-1.64,15.8-1.77,31.61.39,47.48,4.13,30.3,4.98,60.85,7.15,91.35,4.2,59.8,8.26,119.67,11.54,179.61,2.75,51.08,7.54,102.23,5.97,153.51-2.1,69.38-21.12,134.89-48.72,198.1-3.93,8.98-7.15,18.3-13.05,26.23-.07.07-.07.13-.13.2,3.41-20.53,2.95-41.25,0-61.64-5.97-40.66-16.66-80.26-32.13-118.36-17.9-44.07-23.8-89.18-15.74-136.26,5.44-31.67,16.79-60.92,31.61-89.25,9.71-18.56,18.69-37.64,20.46-58.95,1.11-13.05-2.56-24.98-13.77-32.79-9.44-6.56-19.87-4.39-29.38-.2-40.13,17.71-69.71,46.49-89.97,85.44-15.41,29.64-21.64,61.77-27.54,94.1-3.67,20.2-9.31,39.87-22.3,56.33-15.8,20.07-36.59,20.92-55.41,3.41-23.87-22.36-42.49-48.72-60.59-75.67-21.31-31.74-42.56-63.67-60.33-97.58-28.33-53.9-55.8-108.2-86.17-161.05-14.03-24.52-29.77-47.67-53.71-63.87-12.13-8.26-25.51-12.53-40.2-8.79-21.64,5.51-32.72,26.36-29.05,52.72,4.13,29.64,15.21,56.79,30.56,82.23,28.33,46.89,54.76,94.63,73.58,146.23,4.39,12,8.59,24.07,7.87,37.18-.66,12.13-7.15,18.82-19.34,19.02-16.33.26-30.43-6.03-41.71-17.38-28.26-28.2-56.39-56.59-83.87-85.51-31.41-33.11-59.28-69.64-96-97.51-18.16-13.77-37.05-26.36-59.35-32.85-20.79-6.1-37.31-1.18-47.21,14.29-8.2,12.79-8.92,26.76-5.57,40.92,7.54,31.87,27.15,56.99,48.53,80.4,15.61,17.12,32.98,32.66,49.57,48.85,33.77,32.98,66.36,67.08,97.77,102.36,11.93,13.38,23.8,27.02,28.46,45.31,3.41,13.38-1.25,22.36-14.56,25.57-15.8,3.8-30.95.46-45.77-5.05-42.82-16-83.74-36.2-124.13-57.38-30.89-16.13-63.21-27.67-96.92-35.8-22.69-5.44-45.71-8.66-69.05-3.94-20.46,4.2-31.08,17.9-30.3,38.76.52,13.77,8.26,23.94,17.25,33.11,22.43,22.89,50.56,37.05,79.02,50.69,29.57,14.1,61.58,21.05,92.13,32.2,32.59,11.8,64.92,23.93,94.36,42.49,12.39,7.87,22.75,17.97,30.3,30.49,8.26,13.64,4.26,24.72-10.36,30.76-6.82,2.89-13.97,4.85-21.38,5.25-28.07,1.18-56.2.13-84.07-2.56-34.62-3.34-68.99-4-103.22,2.69-20.66,4-41.05,8.85-58.17,22.16-15.28,11.8-19.15,28.79-10.56,46.03,7.54,15.34,21.12,23.8,36.26,29.84,31.21,12.46,64.33,14.36,97.25,15.48,27.54.92,54.82,3.67,81.97,7.8,77.31,11.74,150.63,36.39,221.05,70.1,27.02,12.92,53.25,27.74,81.64,37.9,40.26,14.43,81.84,22.76,124.46,25.31,24.59,1.51,49.38,1.84,73.77-2.23,37.64-6.23,69.64-24.53,99.35-47.61,2.1-1.57,3.54-4.52,6.89-4.06h.13c.26.46.46.92.52,1.31.39,1.97-1.64,3.08-2.75,4.2-58.43,59.61-122.95,110.49-201.05,142.5-56.26,23.02-114.76,36.46-175.41,40.92-107.22,7.93-211.15-7.34-312.53-42.62-68.66-23.94-127.35-63.74-182.23-110.04-46.49-39.28-87.28-84-126.3-130.63-42.69-50.82-94.82-90.89-151.54-124.92-50.95-30.56-105.12-53.51-164.2-62.23-42.56-6.23-84.99-12.98-127.28-21.31-32.59-6.36-62.56-18.03-87.02-41.12-27.48-25.97-30.56-62.82-7.15-92.72,28.33-36.2,66.17-59.74,108.07-77.12,50.36-20.92,103.22-29.57,157.45-30.95,95.74-2.49,187.94,16.92,278.69,45.25,23.8,7.48,47.94,8.79,72.13,2.95,32.13-7.8,50.62-30.76,52.46-63.8,1.97-35.08-8.26-67.61-19.74-100.07-12.66-35.8-33.9-67.15-52.26-99.94-54.23-96.85-109.84-192.92-163.28-290.17-39.94-72.66-76.66-147.15-117.25-219.41-27.15-48.33-51.94-97.31-66.95-150.89-8.72-30.89-15.67-62.03-15.87-94.3-.07-10.16,1.12-20.33,3.54-30.3,9.25-38.3,44.53-59.02,84.4-49.44,32.07,7.61,56.99,27.21,80,49.38,39.67,38.1,69.97,83.08,96.26,131.02,55.94,101.84,121.12,197.45,192.66,288.86,12.46,15.87,26.23,30.49,42.75,42.36,5.31,3.8,10.82,7.15,16.92,9.64,17.64,7.02,31.08,2.23,39.61-14.82,10.03-20.33,11.02-42.43,12.33-64.53,2.3-36.59-4.59-72.2-9.51-108.07-7.54-54.95-15.54-109.84-23.21-164.79-7.21-51.61-14.95-103.08-21.18-154.82-7.21-59.8-9.64-119.74,7.61-178.63,4.59-15.61,11.48-30.16,21.64-42.95,29.25-36.85,77.77-40.33,111.94-7.93,19.54,18.43,32.72,41.12,43.61,65.31,21.51,47.54,34.23,97.58,42.16,148.99,8.72,56.46,17.12,113.05,26.16,169.45,9.12,57.05,18.69,113.97,28.46,170.82,6.43,37.31,10.82,75.15,23.74,111.08,5.77,16,12,31.8,23.8,44.66,15.28,16.72,31.54,16.79,46.3-.39,16.59-19.34,24.53-43.15,32.07-66.89,15.21-48.2,22.16-98.23,32.33-147.54,19.61-95.61,38.03-191.48,58.1-286.96,9.18-43.61,24.13-85.51,46.1-124.53,8.66-15.41,18.62-29.9,32-41.57,31.41-27.48,72.07-24.2,99.35,7.74,17.05,19.87,24.39,43.74,28.26,68.99,6.95,45.38,2.29,90.3-5.38,135.22-8.07,47.67-15.87,95.41-23.48,143.22-8.98,56.46-17.84,112.92-26.36,169.45-7.8,51.48-16.46,102.95-14.23,155.35,1.05,23.8,3.28,47.48,12.85,69.77,2.03,4.59,4.39,9.25,7.15,13.44,13.51,20.72,33.77,26.49,56.07,16,24.46-11.61,42.49-30.89,59.67-50.95,25.64-29.77,46.95-62.43,66.95-96.13,35.08-58.95,73.44-115.74,109.31-174.17,18.82-30.62,36.72-61.9,61.77-88.2,15.28-16.13,31.21-31.41,50.89-42.1,10.3-5.57,21.12-9.57,33.05-9.71,24.72-.72,42.23,12.85,47.21,37.25,4.72,23.21,1.05,46.1-4.2,68.79Z\"></path><path class=\"cls-1\" d=\"M1563.43,1843.83l-.07.07v-.13l.07.07Z\"></path><path class=\"cls-1\" d=\"M1565.13,1842.13l-.07.07v-.13s0,.07.07.07Z\"></path><polygon class=\"cls-1\" points=\"1566.77 1840.36 1566.71 1840.42 1566.71 1840.36 1566.77 1840.36\"></polygon><polygon class=\"cls-1\" points=\"1568.48 1838.65 1568.41 1838.72 1568.41 1838.65 1568.48 1838.65\"></polygon><polygon class=\"cls-1\" points=\"1570.18 1836.95 1570.12 1837.01 1570.12 1836.95 1570.18 1836.95\"></polygon><path class=\"cls-1\" d=\"M1571.84,1835.2l-.07.09s.04-.06.06-.09h.02Z\"></path><path class=\"cls-3\" d=\"M1657.46,1281c9.71-18.56,18.69-37.64,20.46-58.95,1.11-13.05-2.56-24.98-13.77-32.79-9.44-6.56-19.87-4.39-29.38-.2-40.13,17.71-69.71,46.49-89.97,85.44-15.41,29.64-21.64,61.77-27.54,94.1-3.67,20.2-9.31,39.87-22.3,56.33-15.8,20.07-36.59,20.92-55.41,3.41-23.87-22.36-42.49-48.72-60.59-75.67-21.31-31.74-42.56-63.67-60.33-97.58-28.33-53.9-55.8-108.2-86.17-161.05-14.03-24.52-29.77-47.67-53.71-63.87-12.13-8.26-25.51-12.53-40.2-8.79-21.64,5.51-32.72,26.36-29.05,52.72,4.13,29.64,15.21,56.79,30.56,82.23,28.33,46.89,54.76,94.63,73.58,146.23,4.39,12,8.59,24.07,7.87,37.18-.66,12.13-7.15,18.82-19.34,19.02-16.33.26-30.43-6.03-41.71-17.38-28.26-28.2-56.39-56.59-83.87-85.51-31.41-33.11-59.28-69.64-96-97.51-18.16-13.77-37.05-26.36-59.35-32.85-20.79-6.1-37.31-1.18-47.21,14.29-8.2,12.79-8.92,26.76-5.57,40.92,7.54,31.87,27.15,56.99,48.53,80.4,15.61,17.12,32.98,32.66,49.57,48.85,33.77,32.98,66.36,67.08,97.77,102.36,11.93,13.38,23.8,27.02,28.46,45.31,3.41,13.38-1.25,22.36-14.56,25.57-15.8,3.8-30.95.46-45.77-5.05-42.82-16-83.74-36.2-124.13-57.38-30.89-16.13-63.21-27.67-96.92-35.8-22.69-5.44-45.71-8.66-69.05-3.94-20.46,4.2-31.08,17.9-30.3,38.76.52,13.77,8.26,23.94,17.25,33.11,22.43,22.89,50.56,37.05,79.02,50.69,29.57,14.1,61.58,21.05,92.13,32.2,32.59,11.8,64.92,23.93,94.36,42.49,12.39,7.87,22.75,17.97,30.3,30.49,8.26,13.64,4.26,24.72-10.36,30.76-6.82,2.89-13.97,4.85-21.38,5.25-28.07,1.18-56.2.13-84.07-2.56-34.62-3.34-68.99-4-103.22,2.69-20.66,4-41.05,8.85-58.17,22.16-15.28,11.8-19.15,28.79-10.56,46.03,7.54,15.34,21.12,23.8,36.26,29.84,31.21,12.46,64.33,14.36,97.25,15.48,27.54.92,54.82,3.67,81.97,7.8,77.31,11.74,150.63,36.39,221.05,70.1,27.02,12.92,53.25,27.74,81.64,37.9,40.26,14.43,81.84,22.76,124.46,25.31,24.59,1.51,49.38,1.84,73.77-2.23,37.64-6.23,69.64-24.53,99.35-47.61,2.1-1.57,3.54-4.52,6.89-4.06h.13c.26.46.46.92.52,1.31,47.28-45.57,86.03-100.26,113.05-160.46,3.41-20.53,2.95-41.25,0-61.64-5.97-40.66-16.66-80.26-32.13-118.36-17.9-44.07-23.8-89.18-15.74-136.26,5.44-31.67,16.79-60.92,31.61-89.25ZM1563.36,1843.9v-.13l.07.07-.07.07ZM1565.07,1842.19v-.13s0,.07.07.07l-.07.07ZM1566.71,1840.42v-.07h.07l-.07.07ZM1568.41,1838.72v-.07h.07l-.07.07ZM1570.12,1837.01v-.07h.07l-.07.07Z\"></path>";
let _uid = 0;
const TONES = {
  color: {
    big: "#FDB813",
    small: "#E81957",
    text: "var(--ink-900)"
  },
  black: {
    mono: "#141414",
    text: "var(--ink-900)"
  },
  white: {
    mono: "#ffffff",
    text: "#ffffff"
  }
};

/** Plan 20·40 — Logo. Hand mark, optional wordmark. tone: color | black | white. */
function Logo({
  tone = "color",
  variant = "full",
  height = 40,
  className = "",
  style = {}
}) {
  const id = React.useMemo(() => "p2040logo" + ++_uid, []);
  const t = TONES[tone] || TONES.color;
  const markSize = variant === "icon" ? height : height * 1.02;
  let markup;
  if (t.mono) {
    // Mono tones: paint the whole mark in the tone color, with the small (child) hand
    // knocked out so the background shows through — via a luminance mask. Everything
    // inherits white (=shown) from the group; only cls-3 (child hand) is black (=hidden).
    const mid = id + "m";
    const maskBody = INNER.replaceAll('class="cls-3"', 'class="cls-3" fill="#000"');
    markup = `<defs><mask id="${mid}" maskUnits="userSpaceOnUse" x="0" y="0" width="1920" height="2050">` + `<g fill="#ffffff">${maskBody}</g></mask></defs>` + `<rect x="0" y="0" width="1920" height="2050" fill="${t.mono}" mask="url(#${mid})"></rect>`;
  } else {
    // Color tone: yellow parent hand + magenta child hand, painted directly.
    const css = `#${id} .cls-1,#${id} .cls-2{fill:${t.big};}#${id} .cls-3{fill:${t.small};}`;
    markup = "<style>" + css + "</style>" + INNER;
  }
  const txtColor = t.mono || t.text;
  const mark = /*#__PURE__*/React.createElement("svg", {
    id: id,
    viewBox: VIEWBOX,
    role: "img",
    "aria-label": "Plan 20 40",
    style: {
      height: markSize,
      width: "auto",
      display: "block",
      flex: "none"
    },
    dangerouslySetInnerHTML: {
      __html: markup
    }
  });
  if (variant === "icon") {
    return /*#__PURE__*/React.createElement("span", {
      className: className,
      style: {
        display: "inline-flex",
        ...style
      },
      title: "Plan 20\xB740"
    }, mark);
  }
  return /*#__PURE__*/React.createElement("span", {
    className: className,
    title: "Plan 20\xB740",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: height * 0.18,
      ...style
    }
  }, mark, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 800,
      color: txtColor,
      lineHeight: 0.86,
      letterSpacing: "-0.01em",
      fontSize: height * 0.62,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", null, "PLAN"), /*#__PURE__*/React.createElement("span", null, "20", /*#__PURE__*/React.createElement("span", {
    style: {
      color: tone === "color" ? "#FDB813" : txtColor
    }
  }, "\xB7"), "40")));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/SpotIcon.jsx
try { (() => {
/**
 * Plan 20·40 — SpotIcon. Renders one of the brand's 80 flat full-color spot
 * illustrations from `assets/spot/`. These are the official illustrated icon library
 * (early childhood, health, education, faith, family economy, food, generic UI).
 *
 * NOTE: art is referenced by relative path. `basePath` must point at the design
 * system's `assets/spot/` directory from wherever you render (default assumes the
 * file sits two levels under the DS root, like the component cards).
 */
const SPOT_NAMES = [
// Early childhood & family
"blocks", "pacifier", "stroller", "baby-bottle", "family", "community", "house", "embrace",
// Education & growth
"book", "crayon", "pencil", "graduation-cap", "lightbulb", "puzzle", "paper-plane", "rocket",
// Health
"heart-pulse", "syringe", "stethoscope", "first-aid", "bandage", "medicine", "medical-record", "dna", "microbe-blue", "microbe-green", "microbe-purple", "virus-blue", "virus-green", "virus-orange", "water-drops", "carrot", "avocado", "banana", "apple", "strawberry", "utensils", "cheese", "wheat",
// Faith & milestones
"church", "cross", "praying-hands", "rings", "cake", "tree", "hands-heart", "hand-heart",
// Family economy
"growth", "calculator", "money-hand", "briefcase", "cash", "piggy-bank", "scissors", "key",
// Accompaniment & generic
"hand-offer", "handshake", "thumbs-up", "person-shine", "compass", "compass-rose", "location", "message", "clock", "camera", "photo", "document", "tag", "envelope", "megaphone", "arrow-swirl", "stars", "sunburst", "moon", "cloud", "rain-cloud", "rainbow", "flower", "lightning", "line"];

/**
 * Plan 20·40 — richer multi-color illustrated icons (vector SVGs in `assets/icons/`):
 * families, children, emotion blobs, milestones, professions/roles, objects. Render
 * with <SpotIcon set="icon" name="family-trio" />.
 */
const ICON_NAMES = [
// Families & people
"family-trio", "family-quad", "family-floor", "family-play", "parent-child", "parent-baby", "mother-child", "girl-baby", "embrace", "baby-crawl", "baby-cradle", "cradle", "person-orange", "person-yellow", "person-pink", "woman", "woman-pink", "woman-purple", "boy", "boy-blue", "walk", "girl-jump", "kid-jump-orange", "kid-jump-blue", "kid-jump-yellow",
// Roles
"nurse-cap", "officer-cap", "helmet", "palette", "hammer", "camera-video",
// Emotion blobs
"blob-happy", "blob-angry", "blob-scared", "blob-worried", "blob-purple", "emotion-group", "laugh", "eyes",
// Early childhood, milestones & objects
"diaper", "stacking-toy", "binoculars", "sleep", "shell", "clouds", "music", "music-pink", "crown", "gift", "birthday-3", "calendar", "candy", "car", "sandwich", "toothbrush", "book", "notepad", "note", "house", "tree", "flag", "diploma", "trophy", "scale", "pie-chart", "idea", "puzzle", "hand-offer", "footprints"];
function SpotIcon({
  name,
  set = "spot",
  size = 48,
  basePath = null,
  alt = "",
  className = "",
  style = {}
}) {
  const ext = set === "icon" ? "svg" : "png";
  const base = basePath || (set === "icon" ? "../../assets/icons" : "../../assets/spot");
  return /*#__PURE__*/React.createElement("img", {
    src: `${base}/${name}.${ext}`,
    alt: alt || name,
    width: size,
    height: size,
    className: className,
    style: {
      width: size,
      height: size,
      objectFit: "contain",
      display: "block",
      ...style
    }
  });
}
Object.assign(__ds_scope, { SPOT_NAMES, ICON_NAMES, SpotIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SpotIcon.jsx", error: String((e && e.message) || e) }); }

// components/brand/StatBlock.jsx
try { (() => {
/** Plan 20·40 — StatBlock. A big, optimistic number with a label. */
function StatBlock({
  value,
  label,
  sublabel = null,
  color = "var(--text-strong)",
  align = "left",
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ["p2040-stat", className].filter(Boolean).join(" "),
    style: {
      textAlign: align,
      alignItems: align === "center" ? "center" : "flex-start",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "p2040-stat__value",
    style: {
      color
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    className: "p2040-stat__label"
  }, label), sublabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-faint)"
    }
  }, sublabel));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/brand/emotions.js
try { (() => {
// Official Plan 20·40 emotion characters, embedded as data URIs (self-contained).
const EMOTIONS = [{
  key: "alegre",
  label: "Alegre",
  src: "data:image/png;base64,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"
}, {
  key: "en-calma",
  label: "En calma",
  src: "data:image/png;base64,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"
}, {
  key: "triste",
  label: "Triste",
  src: "data:image/png;base64,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"
}, {
  key: "enojado",
  label: "Enojado",
  src: "data:image/png;base64,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"
}, {
  key: "asustado",
  label: "Asustado",
  src: "data:image/png;base64,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"
}, {
  key: "preocupado",
  label: "Preocupado",
  src: "data:image/png;base64,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"
}, {
  key: "sorprendido",
  label: "Sorprendido",
  src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABUCAYAAABjugIwAAAACXBIWXMAAAsSAAALEgHS3X78AAAR40lEQVR4nOVdfXQT15X/jT8l28KSbCFkHCxjB7AhIL4PhxCUQFPqhsXZlBaUJvF2z6ZpN92QLm3OhtPGWRZ2u2027Gmb9KS0MUmBHHKSmOI4GxaIWD4MAWxBMA5gQICNbISNjG3JkkVm/5g38ljSzGhGI1smv3M4B8379Pzm3nfve/e9R9E0jXsNFEVpAVgAaAF4BLKy6U6app0j0DXFQN0LxBGirJxHHpqm7RLKWwCYwZCoJY/tNE0LkT6qGNPEURRlBXnRNE3XJqBuM4Yk0qFk/fFiTBLHean2kVBxRCItYEhMCklMeuIIScDQeKTFKEoARVGVpA8j8tHw9iOZiOOMNSw8ABzJ8IWHY6SlPqL90SYuTA05xpx1RwikabpmRNsdLeISrXIqDHrWJTBjuBSzcLL/6t3dcbVPrNpKMCrcHk9dMbc50sRxCKtVWgVWGPRWMC+wEkCRxOIHATgA2AHY693dkvvGao+RkL4RI46jEhNBWBWAakgnSwi7AdQCqJVCIpG+KgA1iRybR4Q4iqKqkAA1QtRhLYClStYbhh7SRrUUlUr+ZkeirN+EEqfU10dUIDA0jcViHYBcufXKwEEwBNpjyUyGhYS4LgkjjiWNpuktUspVGPRmMNNXVjBEzVK6bwpgG4B1sajQRJGXEOKkkkZUXiUYCUpGoqKhB4z0if6NiSAvUcSti4U0Qtg6jLzKUxK7AVSJSR8Z8xQzzFKUqIQLiqLWAagRy1dh0FeCMb9fwdglDQBWAbBXGPQWoUzERahSqlFFJY7MIoiubVUY9FsAvKBYw8mBHgDWenc3rzpkHXUl/DzFiIulU0Q12jF2xjGpiIU8K5j1wrjGOyVV5dedNIBR+YJqk/iygmo1FihCHPmKxL6gGtzbpLHIBVBDPlQ+2DnLVbKglMSZhUS/wqCvBjOIf10wCwCvVU1sAHM8DcQ9xpE5SA+fQULURlNcjYxdPMw3y8LGycgNuVBC4iwiVqSkmZN7DDV8CcSfE1KngoiLOPLV8DqUZI4xkRPAyY4isnLBBzvRWJIRr8SJiXp1nPXfC6jmSyCaalSI4wUZ277O0sZCTOpkTYEljDgoOL1zD6BKIM1JUZRZaoWyiSO6Wch3q5Rb9z2IpXx+HXGjJKvLeCTOLOACmKFsGEEEDDrN3UTWnwBYBdIkq8tEqUprgupFtjpz4KnKBfAOBAYT1UaCEPc0FxdpcZQV+koU7SQApKemBpYuvD/9kQVmVf3/Xfyq3+dXKd3GWEI8xAk5j4oRl56aGlg4y5xmXWDOyFKlw33bh8ONlxKiKQoMub6UlNTMts7uRBptiiBpJS6cMBa7PjkdAJARb/1cTJ6Y1794fkk2APW7tZ8rWTUXTiUrk0UcsSiFOiJ7RVufm+1bPLtYNWuacRhhANDgaKPbb3oUIU2fm+2bW16YOWPKhBSDTp3tHRjEr7baBwGkixYOg1Gv8RSadDmm8dq0us/O8GUTssAlT33JlTgt32qAyHIGL6aXmgIPzi3OKDKNU/PlKS3Ko56qXIArV93B7h7fYJen39/rDWR4B/xZQnUb9RpPtjoj3WTQpBZM0KmmmvXIUqUPa+fYmXZaPy6rn6+OQqNWrcpMpQFAr83J1GqzqPxcNQw6NcB58Qcaznuj9KeHb3FVbNqQD/GoSj5IUpN52pzA06vmZhh0alFJMuiYF1Vm1qeB6TsvyWEQ/ZgeWWCmHllglj3py2JOeaHqcOOl8Md2gSKyVggSQVzMyNPmBH60ZmGESuRCU1yOnPumIstUHHrmdV3B7eZjGOhyjUQ3JWH+A4UpUYiTtXQjBLnEWSD8FQ1DliozQn1kqzMHfrRmoYqPNE1xOQpX/B0y9RMj00rnwbhkNXpbT6J9305FCdQUl0M7ZTYytMbQs4CnE54LTei9ck60vEGnhm5cVt/tO94czmMh4jwk7lLSvnVJxJE5tUrEEH7HIidLFZg0QUudu9wx7PnffnMWL2mmhx6HcclqAMDmjRux/8B+tF6+DFenG1NKilEyeTLWrrVhjc2G0olT0Vb/FjxfnpLyp0RAlWdC8Xd/GvVDAYC8ed9Gf1sLrtdtFf1QJt+XrzrVfI39eVoo5pIli6Ios5Q9FjH5KxRFaUmlZpqmt4gFdaanpgYenFPy1YvPLMXLz1ozSiblD3OWCwy5vjKzPmpZ/awHYVyyGh0uFxYumI/qTZtxqOE4XJ1uAMCFS1fwyf/ux9M/+Hs8uXYN0tQamJ/4Z6jyTLH8KVGhnTYX0557DZn6idi8cSNmTC9Hhkod+rdwwXxs3rgR2YVlmPbca9BOmytYX/n9E7gCEZOapGnaSYKtPBRFVRGjhReioQtSdlw6Ntm0/f0DjVRqajFXmty3fXh928HQ75XWGfQiSyEVXj4jR4fyF36PDpcLy5cvw4VLV8SaRNX3n8RbW7fC392Oljd/Jpo/HKo8E6Y99xo6XC6sWvU3aDpzljfvkkULsX3HTuRrc9C6rVpQ8l7e8j/sf2cLhevxQWy3j6DEkahkZ6ykAXBkZ6uKw1WgQadGlirTy/4uLcqLIA0AjIsrAADVr7wiSFp2lhrv/vlPCAz48NbWrQCATP1E6B9YJNbNCExcvhYA8KRtrSBp2VlqgKKw4y/bkabWhMrxwZSf2wcBN0AM5J2b+VbIeYljQ8klbPOthcCKgLlARwGMoUJ8nwjkTn8IHS4X3nv/fcGG1nxnNb5ns0U8z5v3aIxdZZBVUAxN6Txs3rgRhxqO8+abM3MGzre0YP+Bz/DTn60HwBhIQup5cqEuDRIMuGggbkJU8qIaJxzSYnIMHZtsVRBZ7S6ZlK86d7kjRGA4VHkmpKk1sH+0B17fgGB7vX13oj5XGybF0t0QciZNAQDsP7BfMN9syxyMNxojno+ftwzXPv1L1DIFE3QqwPklCU00YygczwmyZTkWaaRpupaMeU4uHxHESSGNrLtVPfvdRS+YC4RnuWZNM1J77GcRbqiwSMlkHjc1Noo1i10f1gK2tVj52MrQs/HjjXh4+TLRslxoiqYDAE45Tgvma3I04mZnZwR56drxvGUKjeMwaYLupWsdt8OTlgJ4BgAqDPqrYLZq1Qi1T9N0DeElFDE3jDhiiIienEPiSbaQTkCMNADIUqXDoNPcnTXNmCqUr6jILFoXwJC368Mhg62u9qOYykWDmIQ3njmLqWVleOjBxSiYUIAmRyOOfX5CsIxBp4an3y/WdBGAt0lMSpXIVuVaiqKsrKsQGuOI+SkYkQyEopKbQEgrLMgX61wI1oWlqXy+W/AO862U3l8ac31cPLpiBfzd7bLKmowG0Tz9Xh8+2bsPf3rnHbg6OwEAwYE+wTJ3er2C6RwsBeAQ2XPgBCf6mWuciG7/qTDoa8DsZ5OF2dMixwkWgb7b8He349EVK2J6kVx86xuMiuy7LM2A673aDACwzJwpqRyb39d5VVI5EbAbRswCeWrJLAtDXCwz1IS0Z5TpY3R0Ne0DALy0/ueSylVX/ytT/oujksrducgswaxdG2mhCoHN7znLv3b3pbNbUp0EuRBw2LlDGCtxgjPURAdHJc3dFd3Ck4OuxoPwd7fjxz95PiRFYqje8DJmz52D3taT8N4Qd9i5GOhyobf1JNbYbFj9eGx7UlY/vgprbDbcPmtHoC/C8AjB5w9K6gsHs0TiMEFRlFZ0yousr/HG//v9AVx19UrvXhTcDQzgyq7/QtDXi9176vDi8/+ILHX00BKT0YAtv/41Xv7FL+DvbofzozdktXn947cR9PVi+873RMn7wdNPYfvO9xD09aLtk3cE87puxfVOqvkSiIBZKTBrVbwSR4wRwXFt+tRCPPmtGfK7GQZVngmlz1QjTa1Bh8uFP2/dimvXr4fSZz4wEz/+yfMAgP62Flz94HeCX7+U9ppONeI3v/lPtF4aWpopLSnB+vU/x+y5cxD09YpOdwFAw5l27Dnwhew+AXi83t0dlROKoiopMKTZ+UpXGPQexBCK8MPvLUaRSSO7l+FIzVCh4OEnkDfv21HTg75e3Dz6IW4e+zRqel3LLextbsOxFkZ9ziyeiGUzJmGtZYKs9gCg6+THuPHZB7gbEHYfAMA7EMS//WGfaD4B/He9u3tdtASKoqwUGGuST9qsAD6LpRVDXi5+uHo+slTKrs2mZqiQmW8KzXIEff0YcLcLjmd/PH4df9x7EsssUzDzvjxoMtNwpLUT+x0XUFJgwJu2RdCqo7uTGTk65JRMR5o6G5qi6ei92oygrx99l5olS/Xr7zbA3dUjqQwHB+vd3dZoCazECRFXDQnmvyEvF99faYFBG2tEQWLg8d3FYedtPFY23Md0uPrwq3oHXLdu4+1/+AaK9YkNzXxj10m03bglt7gQcdYUiB/vHjPcXT14Y2cD6o9cgndAtlUVN7Tq1AjSAMBiysGbtkUw5euw+4vkC3uQAjG9Jjk+0u8P4PCJizh84iIKC/JhzNegID8Hi2ZGX1keaWjVqYKqcoxAm9BgobYbt9B24xYuarKShjgAY4U0IU3oEfPj7Er04E6vVzFfbywhzskJu0CaNgXC45giB4YBwGGHovN6SQ+3xwe/PxBPFYKxKiMicQDQfL4Nbo9PqeqSHq3XZM1VstjGt8RDIu2caWCiirTR1uDq3d0OstinyCbFvQ2XFJ1h4aLunBtHLnXiZo8X2ap0fGdOMR6aHF2Z1J1zY/vRL9HqYiLHFpUV48VHyhR1D1ouu+MpXi2QZqFpujaNpmk7WSrgE80tAF6Ppxcsms+3wb2oRFE/z+O7i19+fAYNLcMd8oaWK1humYJ/Xzn8Q9nR5MLrdQ0ReU+3XkfNs48qQp53IIhWZ4d4xuh4UWRBVQvEFldZA0CxAer9vc1KVQUA+O2h1gjSWOxzXMDS//grNu49j7pzbvzLnrMRpLHwDgbx1pFWRfpkPyX7dW0TOnGWjVAAIlfAI0CicKvk9iQcbTdu4cAJ5QyVfY3nBdO9g0H89XgzXv3gEPY5LgjXJZIeC7wDQZw4I+vve7Xe3V0lkie07z4FCC0V8J6SQM6jelVOb6Jh35GWHn/gbvxvCQwxyYSjZ9p+6/cHpExQXgVz5le1UCb2aGD2N9cB5zVSAKDe3V1N1ubiPdm1B4A1MyPVCSZULa5jfY25GnT2DPcRC3PGYYnxPpSlj0MRPXzM8lBBHBvsxmmPG+e6bkbUFSe2rd999J8OGPS/xNCNI9EW+XrAqLwavqUbLtiNpFxuhoWgUxRVFUPcCbvpQ84LPwhONJNjk43d9SObvLpzbrz6wSEAQHneeLyUPx3fvBlbdZ+O78Hvey7i8442AMArTyzBY+XS4l04OA3AatmwI+LDJ3EkZvLTIePmkIh4oHDiLGB2m9qFKuOsilcitpfOGz+oFHnHT3Wgpme6rPJVuc0om5EP22zZG0d4SYsHQtcARGz6kHJGPue+ACuGonWLwEgWwBBSKxaxS/Yd2BHHCbIpQQrqTiD7Io3Ms1/FVGawlIKvJAV999G4K98LSBRpZjCSFtXKjLpbR+kz8mOFY5NtCxQ6HT29F0gZpJASBDKIqXA3HRgcx/zfr1fkEPFtANYlgDQrGM3HO/7xbrMiIc+1I30Rn2OTzQpmDE3okVJx4ioYwhTdIszZOCr63gX3x8nZ4qoUHJts68BM/STTZRI9YMb2LUpKGeeKtphv/IplYyNb6WioTnYMrcboSuBuALWWDTtqYi3ARhwjyvWhUe6ClXzFaMyHaZNxzxPvfdtEHVil3nZBrM8qyLuNUQ52gxhXlg07nFIKcnc8sZZ6WBbR21BE25ByCjrnhnstJF5qx/kCPWD2h1VB5r1yhEQrGE1gQfz3GZwGZ9+aZcMOu5xKRuq2RiCO4+uJ5LAxKR4M3dPNQst5DkTZvqXkTY6OTTYzGPWjhXisDNueU6o08WGkbydOhuukzYjRkkpGcG4kTti1mlHbHW3iWHAuRB9xI0gOOITFPe7Laj9ZiGOR6PvB4wVrXGGUCAv1I9mIY8HOHgChZafR7IsZQxfrjqhK5EPSEseCY8myEN2jrlC7VjCq24ME3SwcD5KeuHBwJZGAfbFOmfWZMWSNcut0JPNYO+aIiwaOkxvukgjBDMZ3i/v2xNHA/wO1Knc3JV+lMwAAAABJRU5ErkJggg=="
}, {
  key: "timido",
  label: "Tímido",
  src: "data:image/png;base64,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"
}, {
  key: "llorando",
  label: "Llorando",
  src: "data:image/png;base64,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"
}, {
  key: "ansioso",
  label: "Ansioso",
  src: "data:image/png;base64,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"
}, {
  key: "mareado",
  label: "Mareado",
  src: "data:image/png;base64,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"
}, {
  key: "enfermo",
  label: "Enfermo",
  src: "data:image/png;base64,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"
}, {
  key: "inseguro",
  label: "Inseguro",
  src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAACRCAYAAAAM2qylAAAACXBIWXMAAAsSAAALEgHS3X78AAAeOElEQVR4nO1de1RU17n/HYZ5IswADgiiDKI8otFR4yNPhyi2MbGSdyQPsWnS3LRpaXuzkhZbodHe1dX0Rle6+jBNSpp1SR9ZCUarqdRmNCupJpGMiQbRGAajvMEZgRkYGM/94+wZh+E855x5kPa3FgvmnH323szvfN/+9re/vT+Kpml8WUFRlAWABYAJgItcDv07HIF7gd9Omqad0exjrEB9GYimKMoEwAqGoABcAFw0TTtk1GsLq9MxVYmfkkRTFGUFI6kBuGiatseoXSuYl8hO0zSXZkg4TAmiicTaQi7FXbIoiqoAI+2NU4HwhCWajK8BdeyMhcRGAoqiqpDA/Qsg4YgmkgLESB0rAfJSVgCoT1TpTgiiiWquwBQc+0JBpNshxwCMFuJKdCjBNE03Kl3/OnOGDYzqt5JL4ZZ5OJzkxwHAsa93wCm1TaKRnIlGdlyIVprgdeaMgLFmJb8tAPLl1gugHYAdQOO+3gHR/UxEsmNOdMBapWm6PtI6Qoi1gXlhlCBVCO0A6gHs2Nc7IDi0kDm4BQliqMWMaCLF1WAMFqfU5wm5FeRng7K9kwQ3GLJrxRQOceaEI3QIibpdEhOiA46GSKR4nTmjAkAV4ksuG44DqNrXOyBbPcdiihZ1oomqljRVItJbDYbgWKhlOdi8r3egXm4lcoRBVP3RJFqqUUIIrgVDsDFqHVMeO/f1DlTLrSTgJIrGDCRqREshOUSCqzG1CA5Fndhxmw9Esk1Kq/EkJSsLQCLJFWDmrlsxdUkGgK3rzBlVcish35mFGHGKQXGJJtMKweVBIsX1kGFkGVONQ/l5WerZM/Tatw63+Mb9Y5pI61IIbgA2pQw0JcfrZKUqAsSrHeKxakQEEmxKM3kXXzVLay3OSDKn66cFrqcbdZpXGt+XWp3SMALYAbLSts6cYQEzHbSBmU6tAjMfdwKoFzDiXBRFmZSadikq0WLeQqLe/iC17nkF+d6Vi7L1pZYMzjLvOrrov9kdlNS6o4CXwThLVgmUOw5GA7CSqaRUKybRZC7Iay2uM2fUghmLRSPbbPZW3DxPn5+Tphcqe711BgVYE4HsTSLLLQLzndk47ivmRFFEogOxWXwqWyrJySq1b8Maq3ppaaZk0t51dNFvvXPC5/ePa6U+GyewzsUDARdKTLeUsrorBEiuggSS040m3xMPXKeJhGSAkexv3LVcm6xS+yJ5Pg6oYLuopFtUNtHEyuZ849aZM6yQMCbn5+WOfWvjUo05XVBT89eTk4aH71qmMehTRmRVFBvwzjyUmGopIdEmgUWKerEVlczN93/zroVqg04tu1MAQ/b3N63UzTCbE16yyUxkEojaZr0nBbKIJmMzp3oh4/IiMXWlG02+u9bMVcnpDxsMOjW+c/9SzaKr5o4rXbfCUNRBEg65Em3lGptD3JqCSFapx761calGKUlmw71r5ybf+ZVldLJKPRa1RuSBbSkzCLnqWy7RfI1XQKRDZOP6xYqpaz4sLc2knn7kJvVUUOWhUEJ9R0w0ecP4rEJR0lxcaPHxOUGURkCV33zdfHoKWeWyIUeiOZfTiNoWHJtVquTRdTfkx8U/vWb5LOrpR27SFBdapgzZctS3HKL5GuUdbwJYUGxRyZ1GyYFBp8am9SWaByuWI9ts9satIwx458xy1bccFyhfx2xiKrh52UxFF1UiRaklA6WWDH2LcwAH3m3zdvf2xuPtE7PiFbFEy/miZVmBs3JnDpvT9Sly6lAaCUI4HxwURVkiCa6Uo7pluecWFpkNcp6PJkotGTDMzdL7Zudg0VVzx/U6gyfabe7rHbALlSFr/LZI6o+b6lxcEpkfOxZ41dGFFw58iJWlBbh37dxkYG7yR6e60do+NHqm7YLfO+JR+iV1SygbkYBFi2jezhhTjUMGnToYNLDtwGncdnUurDnT+B6LCV44+gVeOPAhCnPN+OmtVwevLy7JxuKSbC1QiN6LXpxud9On2y+O9PS5/O5BN2fH9TqDp2hOrmZhUUZy+DSyxTmA087Bcdfg6JBje6XVWtMgZpy2UxRVIXVFK+JlSr7GiN/2ba5nF5bOG73vK4VaAGgbGMHmF5oAADseKosb2W0DI9i+72N83HYBK0sL8NNbr4ZJL94j23vRiz63FyMjY3B2jo4AQFa6RsuskYvGbgDV1poGJ1+hRCLaBOAi17O3lS3EdYtyg58dnUP48WtH0O0axCNrr8EjK2ZF1Cch7G3pQ5puohJr7RnEJ1/040hLGwyaZNxvs0atfZFwA6iy1jRwEklWDCWdryKHaBuYLaKsanqdOcMBDqfJgxXLEa7GXF4/fvK3T3CkpQ3ZplRU3rgAtxSbJUmVEJY/8wbr9cJcM1bMnYmq5bMVbU8mNltrGuq5bkqValkRJgJSvQPAd9nu/az6q5x1Hm5z4Y/vnsbHbRcAANmmVGSnpwXvd1+8hEGPF/an1kfU58NtE9/LmwqiumgkF4u5xm2p8WTRJNoCoI3tHh/RAbQNjOAfZ3rxec8l9LqHg9fNxhTMyUqTpV5NJUuRuWgV9DOLkaxPxbh3EINnj8HdegyuU8cirjcKaAdgtdY0TNKaJOLWJVZ9R216ta93wLnOnHEIYZGQZE4qOD0pnVeA+QtKAQCeDtb3RTJ0mTkouOf70GbMxEfHmtH6/h581NyMxUuWwFZWBsudNgx+9iGcb/wafl/0A1NedXRho3UGX5F8MItDteE3aJp2BDZKiGlLLtFCpn4twqzvFIPBBw6iVRodMpesQtZ1dyBZnzrh3sUTdvR+0BQx6brMHMzdVIs+1xC+uf427G86OOG+Qa/DfXffjd/u2oU5G5/E56/+Iqpk/3DPSRx0nMZMY5nQ8MFKtFTIWo8mhhhnL4m355CYunSZOSj99k7krt6E197Yg8cefRQrli/DhvW34WfPPIPRzGIUbd6OnJtuj6ivBfd8H32uIaxZs3oSyQDg8Y7gpT++gg3rb0NKXikstz8eUTtisLelDwcdp7HaWiTGRjA6tldWyW1TiZgxO7HAuVArVIFmWnpQ2lYsX4aHvv4wXvrjK/jo4xPY33QQtdt/hpKrrsKvn/8Vsm+8G1krvyKpgxlXXwttxkzMyMnBiZOf4pWXXkRx4RzWsvubDuKxRx9F6txroMvMkdSOGLi8fjz75r9QmGvG/6yfL/YxG8d1oe8+CNlEE2PAwnWfSPXLfHXMunUzkvWpePy/HoNnmN2t7PGOoPrJJ/Gnhgbkrt4EzbR00X00r1g34fO9lZXYUlPDWX7/398CAKTPXym6DbGof/8cPL5xPLVO1EpuAKyFhTRqKJSK6xZ6s6pB/Lkut3vC+KzLzEHq3GsAAK837sYnJ0+ibgs3CU/98GkAQPb16zjLhEObngOfb2J8wZ69ezjLd3b34qNjzTDkFIhuQywaj5zAojl5+PFrR+DoHBL7mKgASz4oQrQIqXaBBKmH73jMumb1pPI/3LKFs63O7l78qaEBxvk3ie5fksaA/Xv3YsPX1uOByo24ev58/OV1fl9Da+sp0fWLxeE2Fzy+cSwrnIFBjxc/3+eAy+uXW62oRQ4l90c3kv1XrCAqfGf4dRqT5/EPVG7kbchut0+yyvkwOnAB3pER7D/wD/zl9Ua0nv1c8BlbWZno+sWi+RzjFX505Sz89J4bcbajF79656zi7bBBMaLJeOEkE3lW7OsdqE5WqY+2OAeudEDHxB5odHpYLPnQ6PSC0iYVno4zsJWVwaDXiSpfVFiAGTk5uHhK2W24n/e6UZhrBsB45L62Yj7ePHoSbQOC07h2uW0reuIBifHmtTLe7OpeGern9nYz/4NBr0NHV4+odhZevVBSv3o/aMKMnBzcd/fdoso//hgztRo6e1JSO0LwjPiQor0ycn37xkIYNMnY9a6gVMveWB+Noy0aQw5u5UJwbu3t/gIAsOqG60VVbtDrcMddd+LiCbvoDnk62jD42Yf47a5duKV8sk0Qiq8/9CAef+Lb6H7nr/ANcS7AKQKTXoU1i4txwtkpVNTOV42YthQnOmDyC4SmBt/QwbZPMTpwAb/b9YIo1frNhx/GjJwc9H7QJKlfzjd+jeHzLdi9Zy9qa36EnGzzhPtFhQXY8Ytf4Le7dmH4fAs6D7OvdCmNLWuL8MxdgtM42WNZVE8l4nKNEk9PcIelIbcARZu348Bbb+GejRvh8bKPWXffvgH/9+qfcPGEHe27d0nuk0qjQ94tDyF9gQ0A0NXZCfvbb8NWVoYZOYxzpPudv8aMZJF42VrTUMV2g+x9M4k5FCheRFsQtrJlKlkKy50/QFdnJ5775S9hP3wIrWc+Q15uDgrnzMHGjZW4r7KSc9HB5fXjrx934OgZRg1asky4/5rZKMiYrCV0mTlIm7cQqfmMZ2p8ZAiDzk8xdPZk1NW1RLjBrF452W5KWZOOC9EA4NheOalhXWYOZq7ZGHSghGLcO4ie915Hz5G/T7q3t6UPz775L3h84yjMNSNFq8FnF7rh8Y3jJ3fdiNtKp8v9d+KF71lrGnZw3ZSyJh3NKFDJp+qM9Hfi7J//F5pp6TDkzYHGxBA0dO4056rVq44uPLeH8R0/tc4ajDkLSPgNFvGu0gTDywIk28BvpE0sH+UjIm1c22rZJDoSLH/mDRTmmvGbymsTKQxILnZaaxp4NylKjTBJiC0xcvDsA2VYOCP1y0JyO5goUN5xV8wJUOGY8kQneMxXGRgHUhX4FyaOA9jBFwwYQEgIkaRA/ngS7cbUPvtTCG5rTYMdzDi6g8w0LLiS18MFkruDLSaMDYFD3iM5ZC7aRAs5TYRO1pvKmKBayRTJCQkGVCgIyVU0TXMaaHyIyum+IeB7U51RbjveqFWqIqKuKyIlGYg+0aLcoF9CvCy0rUYsAklY5J4JGs8x2h6LRtoGRvCFm/GizTLqWD1lCsMNBaQ5JDteoxJ5OKM+jwbPth3H9konFM6ZEQj8P3qmM7jbIxwLC2ZixbwcrJlnjgbxvFtphBCS0VbRZCoxSZ7C4/Pm3LYjFW0DI9j17lkcdJwGwOynmj8rC9lGPYqzmGiUC+4RdLu9OPrZBZzt6AUArLYWSYnGFALnAgQXwnJfm8CkRnIq1aEA4j2PVoToHYfa0HjkBDy+cay2FuHR6wv5JXVVQfDFmJOVxl1OGkSRHJpkFTFMgBardEicCbwc2yvtkDHN+s5rDhxpacPK0gJ87+aSWIzBbBAkOTA9Qpwy0sYqwZmkJUspcHQOoaV7SGgPUzRRZ61pqOUrEO2cVmIQK6J5HfDhgQhTBG4AFcT7xQlCsiUauaykINrz6AB448iIlVoGaYe2xBM7AVimCslAbJOQVoGZE3KOT0SNN0KBnQlRwssAasU4QxKJZCDGaYUpiqoW48ZzbK+sReJktXODeflEEQwE/QemRCEZiD3RFojMvUikuxbiM84ojeNgpn+NYleXgMRMEg7EJ1G4DSIy3QVACK9GFBOTurx+tF30+hfnTtsLRnrtkfiqE5VkIA5EA5F/IY7tlRW4kgk+onE84PtuPncR3Zc8SNGqMU2rxvL8jGOPv/C3yVGJIpHIJANxIhqILK90OBzbK21gvEuWkMvWT7qGDQdbe8qHRscwTcuc7N99yYPsNANSdMkozkplCz86ZK1psEXaF7H2R7wQN6KBCQ58Xms8EkQQfCiXaCuikA5YKcRqHs0KmqYdxJFSIWK/VkKDqGwT327SeCKuEh0KMfPsAOqaOkxg1motuHK+hwvAKQBmAJl5Q62S0hWPJWld3QbLbjDr5Pat5blOKc8HIOX/iCUSgmgxuS0BoK6pw4LYTbn6AAS2eLjBvACNW8tz64UeTMTxOlGIFvxi6po6aiExU60CGAAQnsKnHUD11vJcTl8AWamqiOciRjjiTrTQMiZR0/WQkTleJkIlOxQvby3PreJ6KNGMs7gaY+TNF9qftQPxIxkAuPJ+bKpr6qjneijEOLNEoU+SEVeiIaDe6po6qhE/F2gAfAlUNpE+soK4ehNiNhFPhwmvaiMq24kEWNhQX/b5x5I0XJu73AAsW8tzWbVSoozX8ZRozgSmALC1PNdV2vdO46zBT4e5ysQKKeMuvj4YwZOeMeS0JovC3ZKEuAQHitnb69heaSpi1F5KqSGr+9P8r2WfTy2JRfcmIdk/OipQpAo8sdw0TdvJ/LpesU5JRLwkWkySrnoQta339GQvbfk9yk79qs/k641239hgFrifT+b4fOA9gy3aiDnRIqXZBhZLO+2Sc/oqx89xw+f1Q7EkvE8vfNr/dW2vPMt3nwxTFmV6JB3xWI8WPGBFzA6OS6mzjr9d+t0i8FvFisPo60Oqrx/mwc+QPObFNE8XtKMuaEddAHC70tltlEKsI0xMAGwCh9hUQTgitB2AdffyZ2uh0E4PIeRdamlYeurFW8E/C3ADsPElKpN6JIVSiLXqFiLZBMZBIoQqEt4TszHvfFrpGBijiw9GCBtccVnsiLfDJBxiAgJ3hoTZxvJcCwtRy5sFyi0iwY1cEH1qvpJIGKKJNPOexAMmYK825HMsw4KtQDAGnTejAICtJNZtEsi8mvVeNBGzebQIa1uMNAdUdsBzJgnF/e8ht+cYVJd9LpV/1A0AfpXWCAAq/6i7L6PUdCzvdq4+BK9baxqqHNsrreB/0WrBreqdUvsuF7GUaAvPRjsx0lwXZuRIGp9Nvl6UnH0daYPtSBnuNOlGBvJ1IwP5KcOdpsDnvI53jTeefWmAq466pg5byMcq8O8s2UT+L9buSOm7Eogl0U6ee1Xgl+ZDLBvZJH1Z00b7RZXL6P80I2+QM81CsE3y0gkZjjaO6y6B048VRyyJ5vvHqnjuuQP3vSPuCu+I20KuS5Lo86kl8GlNnNIaijmdh77guBXephDRrH0Uc4C90oilr5tvWsE31u0ICaZ36XXGwN8WKY0XXjzm0Yy6wqNFWJHuOjNrw/v/PeEaTam84yptheN9j41csiIBVtbEImGsbh5UE5co9DqjPeS6RUolJZ83jsnpBEX79epxzyIwm/ZXQRzJsufMSvnHpwLRRgBvO7ZX1hNLlxcmXy8W9PwTxf3vTbie7PfGQ/oi2mRHUZSJoqgqEmalCNGxVN18Y/RuCIcLbQJjyR4HUJ+58Hu6ft3MCQWWnXsNuV1Hgp9ze47BZSyAy5ALT8qMfsNwV2aEfY8EnGeNESmddC9kQ4Mr4CalKMpKUZSY1T5exPuwmgCkxIUtAvDcDR8/B5/WhL70EnSmL4DJ2zGBZABIG2xH2mA7ZjMfY0nycfBPFyfsmyaSawITJFkfWlBq+mAuxHIjPOfZ3YCyR1HFGTvB7KXmHJ8Dka9gpl8mCAT8S0mpwFlHDIkWs3IVd7JpSuXtyl7ak+wfTU4d/GKcpjXp+tEuvjOq3GCOu2wEs5faKdQGRVHVYJYrRZE3pYgGRK9F28CsACl6oqBYnM+93s3mBk31jmDBx8FEZG4AlrVbymOyEiUlGw4X4hFhwusRstY02K01DRYAm8c0qd2x6RUDn9Y0cDLnq5NITvZfRlHrudBLRohbTlUEQklexSDhAg+A4IJFI4BVWd525Pd+gOkXT0EzKl+ALiepvUmXxyZFpfi0poG3F/wgY0Q1OWDlqs/Owdg/yFZd2dot5XbZnRIBueo71la34MHidU0dVjAk5wNAjz4fPbPzgdnMHDl78AwyL52F8VJ7RMSfz71e7zLkIufiyQupg1+Mj6kNSR3ma6afmn4Dq9csr7ufi2SAkeqE3CYbjlgaY9UQOB6RrA41QqRrUef3orT7IGaft4vux7HSb0Bs2LDeNwbrR6eFitWt3VJeK7oDPDiwralq7ZbyerZ7csfpWJwFaoKIMzDrmjqqEMHpgXmDp7C05feiyp4qvAOtmdeJrru47QIyegS1hhuAde2WcqfoikNwYFuTBRMP41m8dks5K5ly1HdUVXfAESBCXVcgwiMi+wzijHO/SieJZAkIGGaCe6xI7Ldra3mu68C2piow5IYfeGtDFLITKE50wOCCCEcAEByT6yNtb0Slx0BGMTIGWnnLqfwjyPK2o0cvftZ2djaTmFSEVG84sK3JFjDMyP8U+j1YQQid0e86emDbyRJwD082RMGiV4ToEHIBBHcRCiLEupa84DB4/hQOvlCHirpX0TpzLZa726Hyc2dW92lNkkgGgHFVEloLZgIFM5E+OAydbwzaEd+EMqM6DUY0alxOStr/r6YOHwDeA8D9KtUKgWZtPPfsQh5GLkRMdOCsS5AcThGOHfWI0DHy0Z4XkTEjDwBjmb9/1SNYevoVVkvcpzXhWNGDkTQTxMVUrm3SQejIDy+GDIJFjAe2NVnZxmmapl1kkYMzfQUXJBEddnKQQ868jozLEW9wb3UcxSO/Oxz83KPPx/5FW1DgaobJ0xG87jLkos20JNJmFIdXo4Y/WQXVuJ+vWAU4xmmapndQFFVBUVTgsygOBIkmZr0NzCI65xEUESDicejCsb/DlMGeKrjNtARIIGLZ4E3RYprbw1fExnczQC5Ztw5d+XJyPcNJdAjBTqW3kJD5csS+7FPv7MWcq5cr16EYYzA1RYhoUakniNAFSLeRkGpWA5jV10328lpomq5X+rCV5n6/xaBRPS2njs9bjmNppawq4orhFOF9gQe2Ndmk1EnTdGAtu4JtJ8gEiVYywUdzv98CZloR+LGABAHKddKkpsU8LFpRiDDsAGactkutm6bpemKwTXCuBImWm+Syud9vw5WTd3kjJL1jlyNpIoiBvpguaimOcVUSfFo1NKPc8YpJKZr7m/v9DgD2JZkqp5T6SVTKhGCPUImWRDKRWBuYNy+ex0NNSXin6XiJvjzsm355dOwPSVo1mvv9x8FId/2STJUorxkhu4qiKBNN065kILgvSpSZ3tzvr0Kcyc2Ynh2vphWDR6+DEZyrYgAA3/kB6AqzAWbIWwTgu839/nYw/od6IUknarwKQH3AGDMJRRk29/urmvv9TjA+aVkkJydRch7H4KWYBHZEFe404XF6rIP1/8wHc1RmW3O/v7653y9ksLgAIEko4qO5329q7vc3giFYkfCezGlqWc8XW1fg8G+eVKIrccOgQdjyHnP2CRXZBMDZ3O/nWxN3UBRlTYJwMpN6KKym52SJsjo5sXj9w2g59p5wwQTGuCoJdEkukqZpOctcHhqFn3++DTBGr53YTJNANLVJTMyY4mPx9DQN5pgNET+fmleCuQuW4OCOJxTsVewxbi1Acg6/5vVduCimKiP4NyqKIjoq2eXmz0pFUXbkkr26+nn0dZ7DJ288r2CvYotLnjFoCthduQFwjNNscPLdTAKjw208Zfh2HMhC8cxpuHZuOjJTIhuz1z3xczT/80289+KPFe5ZbNA/5IOuMBuUmuuYUWC8UxTRx5dkqurZbhAbzJUkdKYGqeB2REmyp6dpcF1xBq6dm45Z6TpJFnlqXgk2Pd+ELudpvP7jezF4nnMDe0LC7R0HAOgW5nGWuTw0irGeS3zV7AT/IoiNpml7QHXz7sBfkqlqBPMy1CGKhFsLjLjFmoVr56ajKDsFmSlq6NXCo8sdz/wZ85bcgPofPTClrPHxyzS8o37oF83mNcp87Op7N4CyJZmq6iWZKkGxDwYHSjnoLB5OE7dnHGPjlzHmp3HJw+1R+sNPvoHFZeuRtqAc45fjn0aCD3p1EpYVpsNoSIbvi35c2nuctZx6dgaMt1oBZvNePYBGMW7R0FwloURbEUFqgOZ+fwVkZpeLFvou+dA/6EP/kA9u73jMiderk2DQqJCsomDUq6FWJSHNkAx1chKMhskrxN5PL2D40OTYN0qVNJL5qK1Uqs87NFfJhHBfuWn3iJfGBmZRI/A7YY5/8I76MTzqxyXPOMb8lzF+mYabRTv0D1+5lpxEwahnX7bPnKYJ/m3QqqAnZ7cbU9RQqyLy/h0fae3sGn7n9DX0mD98m6+kXSHhcfST4rqVSCUYCkJ+6FJl4HdcNtElCA6BcU06yI8zfLGCxHtbyEeH2A19XEvNrAH80UwlGArizQn9CbwUwNR9GQ6R305cmdvaAWBJpsoezYbJNNnCZmvx7tQgKx9Kx4pJRsgLEUD4Z2DiS6IUAlIXDntoGbFLh9GEULpmUVtyQgLQHImaNvffHULbdSTtvQpkdA+5FFdJ/w8YkKG2gqbpWs4ycuK3iLoIdbQ44nG6/L8TiLEV2PITgOD3ruhuypDdGwG4SCf+I/USEUaoC1eIjWhGFIttszawdBZxyi2RCAghEZj43YT+hlJTXCABMtmB0QBOsPyjmALagGXlL7T/XH8rSqIYxD3bLB/CvsQJXxTL53Dw3bdA+IA2tufZrk0JzfT/g0LsUTuvM1gAAAAASUVORK5CYII="
}, {
  key: "meditando",
  label: "Meditando",
  src: "data:image/png;base64,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"
}, {
  key: "serio",
  label: "Serio",
  src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABbCAYAAACriwG+AAAACXBIWXMAAAsSAAALEgHS3X78AAASo0lEQVR4nO2de1BcVZ7HPx2x6QYChBBCE4GGPEzkIRATQF3SqTGOmqBERys6o2Ks1fGRNVbhuo66i8+pVcZgOaM7uzUO8ZFNubUrDiZxTFwbyhk1uyGQkHfCIy80EEI3CXQISe8f915soPu++nZD4n6rKOjb555zuN/z+53f+f1+51yT1+vlxwaTyZQHxI++7vV6neHvTXAw/RgINJlMZT4fe4F2r9fbPqpMPDCCWK/XWxuWDgaBS5ZAkZAyBMKcXq+3V8f9DgRCnaMJnyi4JAk0mUzlQK9REmQymRyAHajVOhBCjUuKQHFuyyNED1ocGO0Taa6c0ASKIx8ENdbr87vX6/U2jSpbJl53hrhPeUCe1+utCWU7ajGhCBQJk4yIXqDJnySZTCY7gqRJiBfLNo0uGwqI82O51+utDkd7sn0ZbwLHy1gwW6y+FmfvoGdAE/kThcRxJVBUe/HhUEdmi9WOYJWWAYsCFGsGnED1oGegXalOSROM53JjXAiURi9QE2qrzmyxxgPVwP0ab60HypWIFNX+mDk5XJgU7gZFI6DM6/VWh4G8MqAd7eSBIKVNZot1tVwh0WjKkysTSoRVAkXy7OFQOWaLtRz4o0HVrR30DJQH+tJnHvcdkL6Ws2ZHglqEjUC95JktVseoS4oGh8HkSXhz0DMgK42B4OvKM3rwhoVAcbJ3qDFWxDmrXPy5WqboJ0DtoGdgRJ2idbldV0eVsXzQM6CbAF+L2yjDLVwErlYyt0XiVos/cRqq7wAqJSLNFmsT8sQHAxdgH/QMBKUOffy0QXt1Qk6g6H6SdW2JUlNDcA++HqgF1gRRhxq8MOgZqDSiIiO8OiElUFIZcnpfJM+JNqkbT7gGPQNjYol6EaxDINTLiLJLjDyAOHF5YghEzVRjMpl0GUgRRnUkAOTUZjyCyruYyJPgAGpF744DYR3ouxZsF3+cg54Bp1JlXq+312Qy1aixFUYjZCpUNJ0Drn/MFms18ERIGg89OhAICuSSG122BsE9J2v8SMaNljkxJARK655A6lMcuW2GNzyx4UKwlmUlTKtrzjAVqjGFQZe+14tMWyLnzg1RPHsGAB0n++ju6+dQZ3c4uxEHrDFbrHlyXh2v1+sULXdVBAYtgb7EqfUymC3WdiA9qIZ1YMvjN4y59u3xMzR3utnW/n04CVXlmlPzPIOSQD3rGFF9hp28KLP/f7UwJZrClGiYb+NI3znq20+xqamV712nQ9md+80WK4FIFI0aVUsV3RKoN4VB9G1+qavRILBwThqv3jhHdflvj59hfWM7O9s7Q9irwK450f1oV3q+utaB4ppFrxvIoafNYHFr1gxN5QtTolmzLItXbi9melxMiHpFQINGzExQlELNBIqSV6s1gGm2WPNE6bNrbTNYZKfbKJoRrevewpRoPry3iLuKswzuFQDpYuRENzSpUC0mrk8KQzmhcy4rIsocwe9WXEdq7OVB17W728Mrm5qMnh+bBz0DfgPCoo3RK5cnpFoCRZ0cr0Se2WK1my3WGoR13hrGmbxf315kCHkAVyVaePuuBeTYbYbUJ+JqcbCPgfisZaP9WlSorF8ThlMYmtCXwmAostNtvH9/CVmJFkPrjYu8jDXLslicM9PIauVIkvXeqFpGiKpTibxyjI+Ca0Z2uo0VBXbdc55aPLsoA4Avdx4yoro8FJ5vIKhdB8qas+NNXna6jXm2BK63TzFc4uTw7KIMuvv6Q73UkIUigZLVGeh70bI0nDxHdibTYqx0nR6gu2+AxMlWpsVYh7/PnBrNZPNlIZc0JVQumcvff3ou3G65YaiSQAW/Zo0xXRmJ+wtSDTM+Qom4yMt4YtFc/m79V+PSflABXVF1Gu4WS4qLuSjIk3BVooXyRbnBVKE7KViWQCmmJ1OkUm/DclgwS5vXZCLgFzlJzLQl6r1djkC7nF9UUQJlArJ5hMgp/bOs5FBUG3KsLJ6t57YOufR9MVBQHojEgASKXgA5GJYX4ovsdNtFpT59UZgSrWeRX6NUQEyz8EuiXyPGxxMutzYJyX6AFQX2UFQbNqwosA8vK6bHxXDNrBSuTZ/K3KkW4iIvGy63u9vDwZ6BwXxbzAE19Xq93moxiDDCAT7GF6o2zc1ssToRc0Jy7DbSpk4m2vyD5Ozp7OHQ8S76B4fU9A8QpK+6NCRO47DiyU93sWi2jbIrE9Te0gFUllTV1cgV8pcz449AVZlRs1JTvrk1L6NwsT1uxMgajS1tLjbsOqq42I0yR5CalMCs6VNYWTCDuEh1BvIHO7vY2HSId+5aqPqeCYx6oKykqi7gsm10stgIAkWX2ZgzVHzRUFEaj2B9asoo+/b4Gd79+gD9nkE6T7nHfP/y8mIO9vTz0de76B8cwpGdSWF6IksyYseU3dXt4fMDXXy58xD9g0MsnX+lJtLV4ptjQroFQEdPHwDpCZOJjowg3zY5VF6fZsChQGK5JIXDBKpJaWuoKLUjeGV0RRhcZ8/zDxtaOHC8a/haUlwMz96cN/wwXGcv8N9tvWzadZhW0buRaUskSlTPLR2dw/ctmpfOLXMSQ2L07Or28MT6r0iKiyEpfjJRkUIb/WfPcaK3jxOu08N9WJEz3ejBI0uirxT6EigbbRAlr50gE3FdZy+wp3tg+LOcK0wqK0kBQFJMJHMSo8Li8zziPhdwcPhqAYC7irP4Rc40I5t/s6SqLmD2nsSXL4HlCtIXyl0/Fy1cZy/wbuMxNmzbhyM7k1XFdlXS+LKzlcMn3fzrHbLGfEZJVV27vy8kAieJH6Q9Cn7RUFFayf+T5xdxkZN4sjiVp5cuZOv+wzz16Q5cZy/I3vPBzi6cLa3cnJWmVH2lUgFpHRgwNVBUnaoScXd1ewxXbbGps0iaX0LMjJnEZuQy1O+mr6OFvqOH+O6bLXhcPYa2JyHCYmVqTiFJucVMTs8mIioWd9sOTh87xMldWzl1oGVE+SUZsaTcXsQrm5pwnz0fUAqPuM9RU9/MnUVZLJ+ruMyQc5Y0mUymPJPX65Wd/xoqSlejYs/dEfc5HnivnqXzr+TJ4lSl4oqIsFiZ9/PVTJl37fC19evWkZCQwI033TR8rfVP73C0YWPQ7fkiMWcBc+5cTUSUYAFv39bIvn17cSxeTLJN8LS423Zw4KO3OdN1TFPdq+t2caK3j3X3Fqm9RU6NOqRhIhcuUuUyS429nMduKGDDtn1sbhu7TNCCCIuV7AefY8q8a1m/bh2FCxdgtli5b+WDLCtbjtli5bbSZWzf1kjmrY8wq2xlUO35wv7Tu7jq/n+k23WGXz70EPFTplB43XXct/JB0jIySU9P49WXXiI2I5erV71G9DT1jvcj7nO0dHSSk57Mrm6P6i7JfBc/SXSbyRGoZgcOAMvnJrBwThpvbW5UnAfkkP3gc8Rm5PLzu1dw38oH2b6jZUyZTZu/YPENP+Hzzz4j5frlXFFyi+72JEyZnU3aknv5/LPPKCwq5N333qd/YOSD7vy+i8pXXuW20mVERMVy9arXiLBYA9Q4Ehv3d5MUF8P5Cxd45r++0UJiIPROQvB5+g1niPOfJjy9aBYA63d+r6tHiTkLiM3I5dWXXuI/Pv4kYLmU5CSW3XwTGzds4LvO78i89REscapdV34x795n+K6zk799+CE6v+8KWO5vri0ixTaDmj/8gYioWOw33a2q/j2dPSyYNYNVxXaSp8bzZv3eoPoLxCtF5DU7rP/p8z3kz7yCDY37ePga7el3V5QIGvu1N94IWCYlOYmt324lafr0EddTb7iDA//5b5rbBGHgRETFUrm6Qpa8J1c9zj+//vqIa7aipRysfVexjZaOThbNthEXOYnnl2TxwHv1/P5/O5Wek5x27FVasGiKFL/sbKW1s4vFs6fTPzikeS6MsFiJzcjl7bd+O0Z1+SI5KWkMeQBxGfod4fEzcwD46i/yqREF+fljrpkizMSmzlLVjm1yJCDYDHcWZbGhcZ9ccVdJVZ1fDqTQ0iSgN1DsT84fNxqb29w4W1p5oCQXR9pkMm2JtJ48o/Z2AKJEg2DHzh2y5Rp3tPD0U0+NuHby5EmikvXnalqnCgNi/yH5fadrqtfQvP2HY2h6e4VHZE2+QnObK3KEgf7x3oBLIblwnsPr9TonifOf3FzXrKYzf/xqNwvnpA2vbdKmxrKnMzRrNIA1b/2WKQkJFC1cwJSEBDb/+c8ha8sXjTtaWFB8LTlZWeRkZfHTG5cAcLk1SnNdcZGTeHrpQq5JmRyoSI1SHZIKlSPQqVTJx3t7OOE6zSNFGcPXfFMA1eK8R/CRpqWqW0ee6R+gcUcLZ/oHcCxejLtNXnLlMNQv7HeIsqpzROw71Mq+Q63k5wkq1d22X/Gel5cXMy9x5HNZkhEbyN/6SUlVnVOpTjUudMXY4InTZ3FkZwYdFTjTdYyhfjc337JU031zZmaQbLNx+pj+LOmegzsBWHT9dZruczgcAAy6lbVN0YxotVELF8KmIL8Qw35N4ENgoKQZ0QuwVq61h6+x8ZwjU03HFHH8L5+QP7+AO5ffpvqeR3/5KAAntjXobte1X5DeysoXVd+Tn5vNinvu4dSevxrp0nOhEA9EWPq1g0ig6EZzyNxQKVasGg9foy894mh9HUP9bn7zxhrmzMxQLH/n8tt4dNXjnNrzV9xHDmpuT4LH1cPhze+TP7+Aymd/pVg+ymrhX975PQCtf3pPd7ujIMUBA1r/ovQ5pc++8hxwHhSlsDLY3qnBkGeAPe//mmSbjS1bvggoiVFWC08+/hgf/vt6hvrd7PlQ10lVI3C0vg532w5+9fzzVL/+Orbp/uN7+bnZ7N29m/z5Bexe+6Jmf6gfuIAXUCYvHh/pg5EReTsKm1gaKkprCNPWsSmzs5l37zNERMWyfVsjmzZu4PCRIwDk5uRy+8/uINlmw922g70f/MYwFTbaib5+3TqcTicAcbGxrLj7HvLnFwCwe+2LdO/8H71NuRAkqRaoVbNk85evNDonRjaoC+ElMcJixX7T3SQV/GQ4MiBhoKuDto1rZR+g6+wF3vq6na37Dw9nx6ndfpaYs4ArSsqIzRiZMj/U7+ZE4xcc/bJWz6B5oaSqrlLrTTCcRtE05p1PowhUddRTQ0Vp2I/Jip42g8tEp/Ggu0fVw5NCN7fkzWRWQhR9g+fZ0HKElo5OHNmZqgyvCIt12MFw3jMQrLrURaBIXrs/n7W/tEIHKvbBN1SUOhAWmlrT65sR/Huqoxx6IUVERpvuH+/t4XdbGlWTaCA0Eyid2hSIjzGLEukUdqWDZkqq6pwlVXV24AGE44+V0Aw8UFJVl0eItqSNRlzkJL/rruVzE3jshgK27j/MEfe5cHRFglNtQZPJZBczsWVPBAl4SoV4s+r3OoihpzzGLkeagCbfqLJY9pSaei8xBIyuS9B6HLPsMSNaSdSChorSWkD9av3iR4eosfxCOhgeja/Nk/Xr+OyKCdhwEKgJQZ0TGQFJ8X0FkdbXEqjZH1iNMCc6tFSshJKqulqETR0/Fsh6GvS+ukeVZ1UcFe0mk2m1wdJYaWBdExlrZTLLNKet+EJ1Qr/X620XpdFuMpnKVWwAVYS4nao+2HouAlTKfKfqXNBA0HxeqGQZiWZuOT+8FVrvRv3VhOBNK7u6PXzVfmo4qCwdU5I5NZqUyeZwnifzgoLlGZQEGnJmtuRHZeQLn6TNMCBM0HIbZ1QlD6uF6+wFHvloKzFRFualTCXq8ohhIls7f9h0mmlLJG1qLNNirLoSsFSgvqSqzhHoSzXb+ZRgyJnZYgcCdsJkMjlMJlNeICktqaqrbqgozcMgH+ue7gFuyZs5arfQDwRJu54O9vTTfrJPJNdwAptRTopWPNBVCeF8e5nS7qd4BE/FpbCJRtUmTQx423Y49yTXip32C/GfdaAyiWoCQw15dgTVGbSDJNwvgHSgzlFewwQ4slIHZDdlStDzhpZACOupABoc5eUITnJNaRzjiGZgsVryMNALNV4vQVY1AsU9+TWEIfSkE6qOB5Fg1Lw3os5xIlDVWTQSxNhjJROHyHqgRi1xoBzX04txe4+8nleRi0SWI5jn4X7rWTOCNqhVCgmNRiijOuNG4HAHdP5zDRWlZQhEOjD+0D0XQhzTKf3Wsk9Egp5BqrmN8SYQglcvo4LJ0t+IvwNJqq8P1ongQWoC2rVKmD+IFrc9mNerqmpnIhAI4fuHQw1xjVeGYKy0h7y9iUIgGPt253BjvPo+oQiU4JNeMOGJ1JsKYVj7E5FACeP9cAJBer8fwnxr+NJAU18mMoESJsIDEwPYdunzRBlQFwWBvhCl0jcbIJhgcqA2JLKk2Cb4SWufCLjoCByNUcFkGPnQldZevgFo399BBVnDiYuewB87/g/YjwiWaP8JHgAAAABJRU5ErkJggg=="
}, {
  key: "enojado-llanto",
  label: "Frustrado",
  src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAACnCAYAAADKQBSxAAAACXBIWXMAAAsSAAALEgHS3X78AAAewklEQVR4nO1da3AU15X+Wo/R6DUzoJGEwEKDbPOIAAsFMCQqMU5Mkg1WLMfGIZSzyCk/skkcoEq77PqxlmtZJySqEo7XSexUhSEPb1yOFzlaEttrx4NKiQlgWdhgY+yIEbIQkkZi9B5pJPX+6NujnlE/Z25P9xC+KpWkvt237/R8fe45555zLsOyLP6ewTCMC4ALQIBl2XZDB2NCMFc7QQgBygEEADjI4YDglADLsu0CovBwCK7hf7ezLOvTc7xmw1VJEIZhagT/+mhJBoZhyhFJoqueMFcNQYgEcIN7270sywbkzqd0T54wvHS56qaopCeIgBg+lmW9Bo+jHBxZvFeLZElagjAM4wBQC+7N9Ro7mkgwDOMG0V3MNjatSEqCkC/AxbKsx+ChyMIs0i0eJBVBBFKjKZlEOCFKDZJs3EASEYQohOWxSA2LNdMF7k3mfzsA3KRw2WlwCq+P/HgBtE8FJ2JWfnnJB44ouivRNJAUBOGtBZZlm9ReY7FmloOTNjUASigOpxNAEwDvVHBC9XiEYBimFkli9ZieIMSnoVrZs1gzawHUgy4ppDAEjixNWsmSNHqUmQlCyKHK0ZVgYoihE8BBAB6105BAp/KYdcoxLUHUksNizXSAe4u3JGRgyhgCR5SDGoiyByYliSkJooEcbnDksCdiXBrRCWCP2qnHrCQxHUE0kKMWwKGEDCo+HANQo0aamJEkKUYPQIirkBwAN/X5LNbMGqUTWZY9CE4nMQ1MQxCN00qykIOHHcARizWzXsW5HiJJTAFTTDEayOEC0A7AnmNNxQqXEz0DY7jUP5qIYdLC4angRK3cCXxsihnc82lGD4D4A1RZKyVF9j/c/w+F9l3uEeTbxgBMAEhB/3ARDntz8ZPmS8lAll0WaybkSMKyrI9hGDfDMA6j9RFDJQi/RK7GQ7r7a2tfe/jO0a0cMaRR+7QTv32jg84A9YUaSbKH6CWGwWgdpEYNOR68Y/V9jff2bs23jaF/OBt3/nABnDvGYK0ZRun9s7jzhwtwpisPAOB5yI/931yu+8ApYJfFmqn05TcRCWsYDCMI+eCqfAS3bUh9GgDOdOVh1QN9OPqXTqxfVYQHbrsBRXnZ3P8PXUDD7xcBAOq+chnbPmOUQ1UTdstZN2Tl15Ww0YjASB3EoWbpe/3qkoMnGoJWAHjwmXEAwCv/eQPcZX0AhgEAZ7qW4cFnxvHoL87Dkb0C932+Bz/71hRWtaViNDij3yegA4/Fmlk+FZzwSbR7GYZxG6WwGj3FiGL2lUL37CuF5RZrpsNqSbkP4KTH2+d6cdtnSwg5AO/ZAgDA6uIB/PkHE1hZkod//fnH6B/ORr5tDLd9NimkiB2AR6qRvEQOqXa9YSRBRLXz2VcKXQDeBBd/sae8NCcbAD68lA4AqN7ICT3v2QJ86ZGPUXr/bJgoj+3Mw2hwBoe9uRHnJgG2EP+OJMjCXsJhRgnCE8deVpr/QPdgCACwYjH3u/nENADAXdaHuq/diEv9o3jkVyMAgDtvvgwAeP2d8cSOmA7qpRqIIu9O2EgEMB1BUr7UG5Ys+faMor91c36N1cUD+O62NXizrS8sMfZ/vRcrS7ipR4iRiVDE/wX2HGRZTC9NFKWIETAdQQiOAcCt67JwrnMAL/2Vs04ev3sML+y6GX85uRCP/aoY332uEOc6B+Bed13ExYsWWiP+7xsaxUNbK7Bx+VKqg8yypKG0yEmzy1qZtmtTDI/uQdurALDLPYLF+Tn4j+cHMBa0ItfuR/nGD3F7eTq2r1qIe5YvxX9/ZzNe2sdJjF+3LAYAbF6ZAQB4p2POCXj0TBee/MJy7Nu2EQX2HCrjHJ+axvaKUrhXl1LpD8AumTYvCb1MKExJkM89MjLEWyIP71iCc50DeOGVUkyHMmDNGkZZ+XtYu/40NrlP4o6tZ5FtncB0KAMrUxbj6Pe2oO4rnC4yeCUdq0uKAABnOntwvHsMW5fZ8NO7N2L7pjIqRDl6pguPukvxnVsr4u4LCC9GzoNRPhHDXO1ytr3Fmulxr7tu1yuPc36Oht8vAq7kwX19JpYt70VeQVfE+YHBxbjw0SJMTqSibN0F5Nr9GBly4vTJuTe7a5iTMsW29Ihrj5wbxLGPenCmsyfmz/LUjkqUOa046w/iqWPn0NHjj7kvAE9MBSfqxRqM8IeYlSA+ACV1X7sR+7/OKaAXLy1GX8diBIMpSEtjkZUzBQAYH7VgeppBWhobJgcAvPPXCoyNqFdMu4ZDOHVpBCcv+nHGdwnjU9Oqr3WvLsWjbo6MQ5Oz+EVbN46+/aHq66Pw8lRwQtS7yjCMqqUJmkgoQcgc6gCXwyoaOUViTK/w/z9w2w348X194faBvmL099owNTn35S/MH8WixZ8gLX0SAHDuvTL4e7PjGutZfxDn/ePoG51E5+AIxidD6AuMoG9IfLX40D9uiZBOx7vH8OM/vSd5vgyOTQUn3GINV6UEiSrFoFgugczBbwqPfXplId7493RYs4Zl7xUct+Fv50twxZ8Z42jp49lTPTja9qEWiWQqgujmHCDEcEB7Ftk8c+7tc7049Zdb4SwcQ37hMLJzhsJkCY7bMDZqR3+vDYGBLExPM3Q+ACU8uL4IX17uxOG2LnjPxB2GkHBTlzpBKOTPzjPleEvE35tNpo4i0QuPnBsEANyxcmEMt9UPxbZ0POouxc0lTjz9f22a9JsoJDx4iKqZy5ODZdmDRiQp52Sk4cWT5/HAS+043i0fWKQ3hiZnMTQ5G3Fs6zIbvv/VTUpeXZ+e49IKagQRkiPOrnyxXrh1mQ3Pf2MTqpYvwZNHT6Lxra55X1Ii8OypHnzjcAv+dGH+C1/mtOLuzWVyl3tl2hI+xdCUIDTIAQBN0e7rVUXapox71uTjmR2fRad/GP/8v+/irD9IYVjKON49hp2/Oo4Pegbx8LYNklPdPWvypZx0fK7vPBALMOHJ3lR0EC3RYQDQUlftxly5Jh4BcOUVvJVrV6Ajdr8VAG7eP1hdhmdP9eDf/uc4vv/VTShzWpUvjBG8tXL35jLcsyZf8fztG5bjmdfbog/LpWtqqm5AC7SUVDfLsvVyJxBS1IIrxyCZKtlSVz1UsjAXJygN7MH1RSjIydCVJPu9HXi/q09T/+sX54odlpPAhizWxU0QIj08Uu0tddUu0q42udpekJMRcaA0Lz6nFyfq1+pCkv3eDlwcGMZP794Ie4b6GTva5Q8uyl1UepDof0NqidDQQSRjSwk52qEx874oN5IguZbUGIc2hztWLsS9VRxJaCmuPDl+dNtaTeTgEaVr1cucWm5UsRm9V3M9iCHzPjcjfkKI4Y6VC7Fx+VI8/toHcfd15NwgTpy/iMe2lsVEDgDIsoSlyDGZoGUgWWNS5TRrIj0kJcfx7jE88JL4SxE9Baxy0nOdP7TZhfGpEJ49FbsW3DUcwqGWd/Hwtg1iU4VqZGWEr62XOoe4D3wx3yROxCtBXDIOMdnglk1LspFlScd+r7j7WehMivUNPesP4nj3WMSUYs9Iwe4tK/Hi8bMx9QkAh9u6cMua67FpyZxuJHYvJZQszEUq2J6p4IRX5jTDUh6A+JVUOdevYvTTE19YhW8cbsHxGwsjHjYAlBblxxSjcdYfxG/aLuLE+YsosOegwJGLM509yLKkYbVrMTYsdWIsNIPSIieGJmdjIl92RjrGJkNofKsLH1waQEePHwX2HORkWdHR40dpkRPf3HTjvM8khhkwDyucYmhurp6RvIofzJ6Rgnur1uK3bT5sWhLpXeTFr5aoryPnBvHM623YvqkM/xSx/F4WEe8xPhmKWbEEgL2bi9H4VhfGJkPYXlGKjYsj+/r1e/148uhJ3Fu1VnZdqNK1AL/xTngUbmeY/gHoSxBFrfvIuUG8ePI8AO7NF+oevC+kwCHqLxCF78pYOLorGsW2dBTbFlJbyNu7uViy7Z41+VhXtEmxjzKnFS111TVVDc1yDrC/Twly1h/EoZZ38f2vbsJrH/Wj1XcFZc65VdpYfB9yX5padA2H8Luzl9Hp58IJsjLSsWGpUzOxNPhaDkLeC22oBNHNzK1qaJaVID9/62+4e3MZypxWrF5kxwc9gxHtK/M4y8WZm7jgn1+/1497f3kMnf5hbLmxCDsqXMjPzcShlncllWkKKGmpq66VaU9qCaLE7mMQMXWPd4+hLzCCe9ZweoeYI6zYlo4Cew7ycxJDkP3eDpw4fxHfubUiQlpsWpKNu8oWYXhK1yTwGsh4o41EvATxMQwjZ+p6IUKQ0z3DuLfyU4qdf+9za3Rzmglx1h/EifMXJd3wnLIbu79DBdwybcmrpJK93mog7chpAvB49MEH10dGhOVmpKLEaZt3sRozkQbKnFY8s+OzcTm94oSct9nQKUZXVzvRQzqVzitzWqkomPHAQHIACK92mw5UCKJQmsBD4x5/B/AZPQAxxE0QFaUJDoKLlNKCwzEPKElR1dDsk2i6KsxcyQ9R1dAcAEcgNSR5GcAtVQ3NtTCYJPzaivBHRyhOw0aBlqOsiWGYWqm9T6oamttb6qrLwa1ausBZNvyOTu3grB0vIROPPVCIPqMJoYNMbg3IvboUD212xeyml4BpPanUMusEBXF9VDoE0FJXvQdAI63+pND4VldELu2nnPnITrcAAE72dM87P8uSRtvqWSflWDQiHzfi/jRTL/XYraClrtoLHfeCefi18zhx/iIA4JbiZXgibQVuDMxFtF3JnMHvbH481/0+PhmZS/0UJmzHiWNVDc1usQbiQkjIJtFSoConddqtoAbalVxV4B1kAHBdrg3Pj66NIAcALJhIxf29hXgttwrVrrkCvf6RCVrDqJVrNLoUtx5+EA/DMHtoVeXTqORqQqsvXEQAn4wM4yPHpOS5CyZS8dzQqgiSUMBeKevFqKqG0aBOEJZlA0SS1NAqmUTmZ+pbZERHz39r5G1cyZRfc3luaBU2FC3RnMwlgsNVDc1yaQ5uI3UPHrp5UolF42AYppaE7ceFqoZmD4B74+1HiM8tc0SENr7v78ddU3/FyTz5MppPZ96EHWsK47n1YWLKi4JID1NIkIQUkBHsZQ9Emm0O8r8L3Nanim9MS101v/JJxfzlo9CE+Pdtm7BzKh/2U9LvT/cXQwg4p2K5pSw5AG5fXbNsl2qKDYUAbWUjiE+lCZS2QD3ePYbTPZyF8uXlzrD5uuxUFrI+FK83MrR+Fp+s0KyoPlHV0Fwvd4KZNhMCTEQQHmo3Um6pq3aAkyS36zWW/C4rClrEww3GV7C4sF51RedOALVVDc1epRPNsEeMEKYrg0mmmUBU6ap5qGpoDlQ1NNeA00t0MYPHHdIK60yGZJMQQwCeAFCulhww2eKm6SQID2IBlauZi4k0qQewm+YYskfS4fq9RbTN95UpjOWGRNsIDgOol1mEiwDDMLXQXq5Ld5iWIID2ojQkm68e8hWLNWFRRyYyB+f0kFAuiyuLp6XI0QlOAhyMWleSBSFHu1H5t3IwNUGA2Pa3JxKlFpzvRO9NY/iiL00K6QuiMONmykKYniA8Yn2QxOKpAeeNjWtNp2s4hOGpmZkyp7UV3Ap0k1L0vhSItVIDE5MDSCKCAHREMV/d6HTfxL9MhGbFyyVKYEmuBcW2dMnFNTUgErEG3Mq3N9Z+EgXTb6IiBMuyHoZhahiGQawkIdaEF5zDTRNB4gWRGrVK1ZjMBNOZuSpgaDmEeEAcgO1GbOsRK5JKgpAH6zPTnL2vsdKFuW062g/sbZUdG8uyTfFKwUQiaXQQfu5W8ovsa6zk5/gazK3/tAM4eGBvq48/75VHth2fTJm9WayPwQzxNZbpFMCfPh0IpM2cFhwuR+S60FMA6pWIwucTmZ0kyUQQRRf0vsZKqgt5caATQM2Bva2yXz4hieIGB0YiKXQQYr145M7Z11h5EMARGE8OgPO9ePc1VtbKnUSWFWrMEhwkBtMTRI3esa+x0gPKbnYKsAM4pIIkeoRpUoPpCQJuPcYr1bivsXIPKLrWdcAhMvXJwUMcgaaDqXUQpQWsfY2VbkRtPmRSDAFwy+kkxEdSboYwQyFMK0HIA5OcWoi14kngkOKBHZxO4pI6gSiqAbP5SExLECiXf6yH/gtxNGGHwoYH5PNeI4gSeOkh1U7eRLMppZLID6WhcsDW9emhLKWSlwBJY9V7TGphSoJAQXoc2NvqWxBKra4csHUVTKUZu7WUDPJDadjit/k39uXCHkwtXjSa8TxZXZYEmVIDZjF9TUcQJenB4zN9tvvswdTiDf252V/qWTBw/YSly8KaY0PD/FAaqvy2wMa+XORMpgor9tsBeFWQpAmcJ9hwmM6KURPyT5bs51svDEavWKe7TjvGrhtLmVVfYJUicmZSPqjst1tSZ3C9zGlD4OJUfVInmCEvFzChBIG6cgce0aMschZMpK1y99g7wAUzv0xxXKowmjr77dQZrAdX3kIKahRWpcI8CYGpCMK/NXLntNRV10PeehkCUHtgb6vnwN5WI8S0W2U+8U0tddVKsbaG6yGmIgggn81OgpKVPI41fBggcaQlGm5AddL5boXidT6jlVXTEUQB9ZBfjNsblX/i0nMwEggroCqTzuulGogl56YxqFiRNAQhmr/cmsvLItnyrnjuecNEBrZ1L5D8WT0iWgXavq+xUkgSD7gYESlsUZAi15RUIBwQJPcw5ObrToiviLrjGBKuD2TJtpcMW6VIEm3G1kO+UF2tlnElEqYhCGRWbYn0kEtZqJFIVHLFM6DpVOXdo0qGrRDxv0QQhIytVqYbOWXaUB0kWWJS5R7gE7xSOhEccgBwZFrtPtIW11rNFWsIRSHlJNzVI5kYF5ApbZbZQWqr8aR1K3RhhiAnUSQLQdwybS7+j0yrPQDypcRrwSwNWlA0oi5DW+S8QnDRbTRwTQchCMhUIvLJXLerpa7aK6LoxbUq6pxK6Lsj59C7NsUA4Z0j3BAnQzvkLZgtAN5sqas+DX4HpyWR+odjOhVlw1lwTKRhOgXotE3gckYIgTTxEg/jKvQPivCIHVShuOsOU63FSBWNJcnYPmiYq8fTZ0e7coM5PZYQQiksbrnsQJrEdx5Mn0V39iTOZQfDxywsg62XEvLySpakMrqILmCuKQaQEKfECtAUs5kVSslZMZgF92U7tl6SJgcAWEMpuD6QGWGyLg2K1wWhjKeU6pUZDbMRpF1KD9GjymE07KG5GbdwQh1BRjNm0JM7iUDmNILpqqal0+AcZ8uqGpolSU+eg+EZhKaaYgDl5X6ijHqgQ7hhpy2IM7lcYbrVI5koGVbeufJEwQj606fnHc+eSUFJ0PLYskBmKznUrrWojBkqHZpGSRUgwDCMQ2rRjqy1uMhOkXsA3ETjpqMZM2FyAMD5nCCWjFplp6ae3ElRcgDAWOos3s8Opu169HWv1rHwuUBar9MDZptiVEdTVTU0e6oamssBrAOwF/LxF4rImUxF9szc45hiWLQWDCGQKU6ATlsQbTbFKodureMglotsLlAiYbopBggX3g1oTWwm1k5NT87k/txQ2pKcSW07Zv65cFjU7M2eSUHRVDrSZjmXupx5HI0De1tVx0FqrcmWCJhxigHLsl5SIiGgJbGZzPGefY2VjuFA6AdsGjJ2jhWoujaQNo3O0TkzdzIYObdcgKBo7oiKDhn0FhRm7FB1c4RfCpeZyAGYlCBAuI5GLcMwmktOdfnG2wFkAIA/PQSnwp63I5jBkWA/JieoOscKD+xt9SqdJKgH6zODUhoN0+kgQpAH5iJvlxaEz++BunLZkyx9z+nO3RWy7n6S/+JlWbbJrHVCTE0QIKy0+og0URtj6ub/eG9GdblsPaDkijVVtSQxmJ4gAJe3SqQJr5vUKlwSjh0Znp2Blx2UPfltVpdK3oDygqHhQclKMK0OIgbytjXJSZKduyvmtZ2bnsBwaj/WpGRjMWNFBsu9Fxcwjvdmx3BpJqZtPdRAiQCmlh5AkhEEUJV55xY7eGlmSk8iSMFUidixICmmmCiUKyh07kQNRAVMP4UoIRkJIomduyscoOR6pwTdtnNNFK4qgoBuwnNcrnuVcCXgHnEhqQiiIsLKTfF2VBTInbsr3DLNPhr30BNJRRAoL2K5Kd7LR6mfpNZDko0gkg975+4KF+jGiPgo9ZPUlkyyEUQObsr90fJRyEkQ00uXq4kgtEs90FobkZMgpneUJQ1ByIKdV+YUd0IGoh0umbZrEoQiJMMQyaopzfTFYxT7ktOLrkmQBMFt9ADkILPsL5dNaApcI4g4vJT7E51KyJKBi/K9qCIpCBLrAp2J4JZpM7UekhQEgcwCHfF/0C6fQDu6y9QkkEOyEEQObh36pK08Jq2z7BpBxOGj3J+cBDG1JWN6gqhYoKP+dj7/VJuPcpdyIQjtMQRlJwyGRpTxWWTg3jCeBC5EvsEOqRIIOsV/6BKgunN3hUuMeCzLBhiGcZAwSv4Z8M+j3eig5oQQJIoIAPfhHeCy57xxdK3H3K5X+oELElOX1AvAMIybYRhA5LkhQeTRhSAk+dglOBQvEaTg1qFPvR66Gxr9K3LPjJAnmjjUi/9TIQgZqFtwqD1BlXGSSYJQNXXFyBNFGoACYWImCL8JH7gP7jOoVFIymY+6jzWaNPwW8AQxbeCsiSACSeFA4qSEKIiCqseedV4d+gQMcKkLvx8iXcqjjytBFUFIx+XgdAlDi6q1DcyUA3Cs/tTny8+8/wb1/u/a/uSbbQMzuGv7k/jdi2q2mFONkraBGTeA9oq81IRbJrx0EVhMDshsOctDliBkGqkhHXloDFQKbQMzLnBvGf/DWz4gvyPc6RmZ+mwoVbi0Qpd+AaCn89SbRSXr0TYQri1yGpyCGcCc7uMFgIq8VK8eY+CzE4HwFCRLFEmCkPxXH816FW0DM/yXzls5/G/NU4W/v4PWsCKQmZ2nS78AEBjoRFHJeuEhoQ/ndvL7cQBCEh3DHIHaAfgq8lKpKNL8bCBXZmMeQfgqNwA88WjARCLwZHBDRArEg5HRflpdhZGbo2/J9Ms957BK+2V88hVPIJ48pzFHmvZ4JA7Lsh6io8yryxpBEF7XiEVqEELUgCODGzoXqB8c7KHeZ06OU/mkODAy1Eezu5vIzy4gTJpj4KYor1bCkKpO5dEkCRNEUDzNo7ZTojDWgiNGwnbB7uk8pUu/uTmF4b8vdJyg3v/IaC/1PqOwhfw8TgjzMjh9o0mNYkzKoTsYhnHxJrFQgtSoIQfRI/aAI4YhW6M7nMtw1/Ynw/8fa3kCoalZzEYVCQqFZjE7G1mkL7r2mBC5dnX1zMTApDCwWMTr1WVa7bDbiuHML425/xhxO/k51DYwcxiAR0myEEmyB2QDJ4ZlWQjsY0nlhxCjHgZsid7b1YpB/4cYH+tFYOjCvHb/wPm4+rekLcK6dffB7izBgvzlAIAr/ecx5O/E+PgATp76L6SlM0hLi23xO8vqQFZ2JPks6dmw25dhYd5yOPJXIse+LK7PoAHHANTLEYVYry6WZb08QWSr+pKpxIsEbnzzycd/xIWOV3Hp8ju638uZtxyf3/ZzyfYXfql/kn6W1YHFi2/GijVfTxRZnqrIS90j1cjrIvwUIzk/JZocvV2tOPHWjzAeTJwvyZKenbB7SWE8GMDHHa/i445XcUPpF7F2w7eRnqFrpOLutoEZyJEEmAsYkvs26pEgcnS8/wK8bz6SUHIAgD1x4l0VPu54FW/84dsYFZlOKWM3sT7FEADURZQlJOD2k4//iJOnfpKIWyUFhka60fqnRxJxK5dcI08QORJ4aY1EDu+0/SwRt0kqDI10o+P9F/S8RaeSVaMoQSryUusBHKY0IFFc6Xs34dNKsuDChdf16noIKrZjVWW3VeSl1oLbUUGXeM2pyWE9ulWNiXGqHs5kwMsAXGrWdHgz1wHArbSUr5eTLDQZwGDfGVrdaYYlw4YFBWsl23u7WiXb9IbS2DRClbNsnh+EHKyFivgAHm0DMzXgRFQNTLwx8DXgNLgdupoq8lJ9ai5gGGYPvx4XsV+MsEELCFncSPCazDWIYghkwQ4aSMGDBBOFwxOjCeJAnBvaCJb53eR30tcKNTk6wZGhHdwqbsyxImTJxSGMbZ234xSteBAhiDfWhTniOGCugrfJgCEIgoYwFwdC5Tvi699H66GSW5IJIsq8NAYgBj6+FHMpE/xvqsFFSQQ+BNGHORIEoGMcKxEI/LQyT/rI7llHtFk3dCaKFARxqkBk3o3wbzNLI/6t58F/4RF/6xV/qgQ+eFluoVbVpoYCogQQY35FIiGQTGJwx9m9D9LZ/4ZErGtB1HepmFileddLkbRK6ul+10APIlmPPi3bn8W9LSopXSB8W/XKw70GFaD9fVDfN1ckkx8wSSmDqwmC1FchqD/nhG2sHMXsAExUA8PMEDy3QNRvTVNFzPc3eudtmQcQAPcQfIYNLgHg1z0g/QwMfYEMJ4gceM8eIisQRT9AAPK1NBINwTTLQ2zM/N+at6BPJExNELWQ+UKgcCwWSPVjWsLGg/8H0PLuoAxjbwEAAAAASUVORK5CYII="
}];
const EMOTION_MAP = EMOTIONS.reduce((m, e) => (m[e.key] = e, m), {});
Object.assign(__ds_scope, { EMOTIONS, EMOTION_MAP });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/emotions.js", error: String((e && e.message) || e) }); }

// components/brand/EmotionPicker.jsx
try { (() => {
/**
 * Plan 20·40 — EmotionPicker. A row/grid of the official feelings characters for
 * child & family wellbeing check-ins ("¿Cómo te sientes hoy?").
 */
function EmotionPicker({
  value = null,
  onChange,
  options = null,
  // array of emotion keys to show; null = all
  columns = 8,
  size = 72,
  showLabels = true,
  className = "",
  style = {}
}) {
  const list = options ? options.map(k => __ds_scope.EMOTION_MAP[k]).filter(Boolean) : __ds_scope.EMOTIONS;
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: 12,
      ...style
    }
  }, list.map(e => {
    const active = value === e.key;
    return /*#__PURE__*/React.createElement("button", {
      key: e.key,
      type: "button",
      onClick: () => onChange && onChange(e.key),
      "aria-pressed": active,
      title: e.label,
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        border: active ? "2px solid var(--brand)" : "2px solid transparent",
        background: active ? "var(--educacion-50)" : "var(--ink-50)",
        borderRadius: "var(--radius-lg)",
        padding: "10px 6px",
        cursor: "pointer",
        transition: "background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)"
      },
      onMouseEnter: ev => {
        if (!active) ev.currentTarget.style.background = "var(--ink-100)";
      },
      onMouseLeave: ev => {
        if (!active) ev.currentTarget.style.background = "var(--ink-50)";
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: e.src,
      alt: e.label,
      style: {
        width: size,
        height: size,
        objectFit: "contain",
        display: "block"
      }
    }), showLabels && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-xs)",
        fontWeight: 600,
        color: active ? "var(--brand-strong)" : "var(--text-muted)"
      }
    }, e.label));
  }));
}
Object.assign(__ds_scope, { EmotionPicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/EmotionPicker.jsx", error: String((e && e.message) || e) }); }

// components/brand/pillarGlyphs.js
try { (() => {
// Official Plan 20·40 pillar glyphs (white-on-transparent), embedded as data URIs
// so the component is self-contained for consuming projects.
const PILLAR_GLYPH_SRC = {
  educacion: "data:image/png;base64,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",
  salud: "data:image/png;base64,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",
  juventud: "data:image/png;base64,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",
  espiritu: "data:image/png;base64,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",
  economia: "data:image/png;base64,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"
};
Object.assign(__ds_scope, { PILLAR_GLYPH_SRC });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/pillarGlyphs.js", error: String((e && e.message) || e) }); }

// components/brand/PillarIcon.jsx
try { (() => {
const PILLARS = {
  educacion: {
    color: "var(--pillar-educacion)",
    tint: "var(--educacion-50)",
    tintStrong: "var(--educacion-100)",
    fg: "var(--brand-strong)",
    label: "Educación"
  },
  salud: {
    color: "var(--pillar-salud)",
    tint: "var(--salud-50)",
    tintStrong: "var(--salud-100)",
    fg: "#B5611F",
    label: "Salud"
  },
  juventud: {
    color: "var(--pillar-juventud)",
    tint: "var(--juventud-50)",
    tintStrong: "var(--juventud-100)",
    fg: "#9A6B05",
    label: "Juventud y Familia"
  },
  espiritu: {
    color: "var(--pillar-espiritu)",
    tint: "var(--espiritu-50)",
    tintStrong: "var(--espiritu-100)",
    fg: "#2D7CC4",
    label: "Espiritualidad"
  },
  economia: {
    color: "var(--pillar-economia)",
    tint: "var(--economia-50)",
    tintStrong: "var(--economia-100)",
    fg: "#8A45A0",
    label: "Economía Familiar"
  }
};
const SIZES = {
  sm: 36,
  md: 48,
  lg: 64,
  xl: 84
};

/** Plan 20·40 — PillarIcon. Official white pillar glyph centered on a solid pillar-colored circle. */
function PillarIcon({
  pillar = "educacion",
  size = "md",
  className = "",
  style = {},
  children
}) {
  const p = PILLARS[pillar] || PILLARS.educacion;
  const px = SIZES[size] || SIZES.md;
  const src = __ds_scope.PILLAR_GLYPH_SRC[pillar];
  const glyph = children != null ? children : src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: p.label,
    style: {
      width: px * 0.58,
      height: px * 0.58,
      objectFit: "contain",
      display: "block"
    }
  }) : null;
  return /*#__PURE__*/React.createElement("span", {
    className: ["p2040-pillaricon", className].filter(Boolean).join(" "),
    style: {
      width: px,
      height: px,
      background: p.color,
      fontSize: px * 0.5,
      ...style
    },
    title: p.label
  }, glyph);
}
Object.assign(__ds_scope, { PILLARS, PillarIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PillarIcon.jsx", error: String((e && e.message) || e) }); }

// components/brand/PillarChip.jsx
try { (() => {
/** Plan 20·40 — PillarChip. Soft pill labelled with a pillar, with a leading dot. */
function PillarChip({
  pillar = "educacion",
  solid = false,
  className = "",
  style = {},
  children
}) {
  const p = __ds_scope.PILLARS[pillar] || __ds_scope.PILLARS.educacion;
  const s = solid ? {
    background: p.color,
    color: "#fff",
    ...style
  } : {
    background: p.tint,
    color: p.fg,
    ...style
  };
  return /*#__PURE__*/React.createElement("span", {
    className: ["p2040-pillarchip", className].filter(Boolean).join(" "),
    style: s
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: "50%",
      flex: "none",
      background: solid ? "rgba(255,255,255,.35)" : p.color,
      display: "inline-block"
    }
  }), children || p.label);
}
Object.assign(__ds_scope, { PillarChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PillarChip.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
const SIZES = {
  xs: 28,
  sm: 36,
  md: 44,
  lg: 56,
  xl: 72
};
// Deterministic pillar color from a name, so avatars feel branded & varied.
const PALETTE = ["var(--pillar-educacion)", "var(--pillar-salud)", "var(--pillar-juventud)", "var(--pillar-espiritu)", "var(--pillar-economia)"];
function pick(name = "") {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = h * 31 + name.charCodeAt(i) >>> 0;
  return PALETTE[h % PALETTE.length];
}
function initials(name = "") {
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0] || "").join("").toUpperCase();
}

/** Plan 20·40 — Avatar. Photo or auto-colored initials. */
function Avatar({
  name = "",
  src = null,
  size = "md",
  className = "",
  style = {}
}) {
  const px = SIZES[size] || SIZES.md;
  const s = {
    width: px,
    height: px,
    fontSize: px * 0.38,
    background: src ? "var(--ink-200)" : pick(name),
    ...style
  };
  return /*#__PURE__*/React.createElement("span", {
    className: ["p2040-avatar", className].filter(Boolean).join(" "),
    style: s,
    title: name
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const TONES = {
  neutral: {
    bg: "var(--ink-100)",
    fg: "var(--text-body)"
  },
  brand: {
    bg: "var(--educacion-50)",
    fg: "var(--brand-strong)"
  },
  success: {
    bg: "var(--success-50)",
    fg: "var(--success)"
  },
  warning: {
    bg: "var(--warning-50)",
    fg: "#9A6411"
  },
  danger: {
    bg: "var(--danger-50)",
    fg: "var(--danger)"
  },
  info: {
    bg: "var(--espiritu-50)",
    fg: "#2D7CC4"
  }
};

/** Plan 20·40 — Badge. Small status pill, optional leading dot. */
function Badge({
  tone = "neutral",
  dot = false,
  solid = false,
  className = "",
  style = {},
  children
}) {
  const t = TONES[tone] || TONES.neutral;
  const cls = ["p2040-badge", dot ? "p2040-badge--dot" : "", className].filter(Boolean).join(" ");
  const s = solid ? {
    background: t.fg,
    color: "#fff",
    ...style
  } : {
    background: t.bg,
    color: t.fg,
    ...style
  };
  return /*#__PURE__*/React.createElement("span", {
    className: cls,
    style: s
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Plan 20·40 — Button
 * Pill-shaped, friendly. Primary = brand magenta.
 */
function Button({
  variant = "primary",
  size = "md",
  block = false,
  iconLeft = null,
  iconRight = null,
  as = "button",
  className = "",
  children,
  ...rest
}) {
  const Tag = as;
  const cls = ["p2040-btn", `p2040-btn--${variant}`, `p2040-btn--${size}`, block ? "p2040-btn--block" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), iconLeft, children != null && /*#__PURE__*/React.createElement("span", null, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Plan 20·40 — Card. Soft, rounded surface. Optional top accent stripe in a pillar color. */
function Card({
  pad = true,
  hover = false,
  accent = null,
  className = "",
  style = {},
  children,
  ...rest
}) {
  const cls = ["p2040-card", pad ? "p2040-card--pad" : "", hover ? "p2040-card--hover" : "", className].filter(Boolean).join(" ");
  const s = {
    ...style
  };
  if (accent) {
    s.borderTop = `4px solid ${accent}`;
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: s
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Plan 20·40 — IconButton. Square, pill-radius, for toolbar/icon-only actions. */
function IconButton({
  size = "md",
  variant = "plain",
  label,
  className = "",
  children,
  ...rest
}) {
  const cls = ["p2040-iconbtn", `p2040-iconbtn--${size}`, variant === "solid" ? "p2040-iconbtn--solid" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Plan 20·40 — Tag. Removable/selectable chip. */
function Tag({
  removable = false,
  onRemove,
  icon = null,
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ["p2040-tag", className].filter(Boolean).join(" ")
  }, rest), icon, children, removable && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Quitar",
    onClick: onRemove,
    style: {
      border: 0,
      background: "transparent",
      cursor: "pointer",
      color: "var(--text-muted)",
      padding: 0,
      marginLeft: 2,
      display: "inline-flex",
      fontSize: 14,
      lineHeight: 1
    }
  }, "\u2715"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/** Plan 20·40 — Dialog. Centered modal with scrim. Render only when open. */
function Dialog({
  open = true,
  title,
  children,
  onClose,
  footer = null,
  width = 480
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "p2040-dialog__scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "p2040-dialog",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === "string" ? title : undefined,
    style: {
      maxWidth: width
    },
    onClick: e => e.stopPropagation()
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-xl)",
      marginBottom: 8
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-body)",
      fontSize: "var(--text-md)"
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 10,
      marginTop: 24
    }
  }, footer || onClose && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    onClick: onClose
  }, "Entendido"))));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
/** Plan 20·40 — ProgressBar. Track toward a goal (e.g. plan de vida progress). */
function ProgressBar({
  value = 0,
  max = 100,
  color = "var(--brand)",
  showLabel = false,
  className = "",
  style = {}
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "p2040-progress"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p2040-progress__fill",
    style: {
      width: `${pct}%`,
      background: color
    }
  })), showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: 600,
      color: "var(--text-strong)",
      minWidth: 38,
      textAlign: "right"
    }
  }, Math.round(pct), "%"));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONES = {
  brand: "var(--brand)",
  success: "var(--success)",
  warning: "var(--warning)",
  danger: "var(--danger)",
  info: "var(--pillar-espiritu)"
};

/** Plan 20·40 — Toast. Compact notification with a colored accent bar. */
function Toast({
  tone = "brand",
  title,
  children,
  onClose,
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ["p2040-toast", className].filter(Boolean).join(" "),
    role: "status",
    style: style
  }, /*#__PURE__*/React.createElement("span", {
    className: "p2040-toast__bar",
    style: {
      background: TONES[tone] || TONES.brand
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      marginBottom: 2
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "rgba(255,255,255,.82)"
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Cerrar",
    style: {
      border: 0,
      background: "transparent",
      color: "rgba(255,255,255,.6)",
      cursor: "pointer",
      fontSize: 16,
      lineHeight: 1
    }
  }, "\u2715"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Plan 20·40 — Checkbox. */
function Checkbox({
  label,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["p2040-check", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "p2040-check__box",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
/** Plan 20·40 — Field. Label + control wrapper with hint/error text. */
function Field({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  className = "",
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ["p2040-field", className].filter(Boolean).join(" ")
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "p2040-label",
    htmlFor: htmlFor
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand)",
      marginLeft: 3
    }
  }, "*")), children, error ? /*#__PURE__*/React.createElement("span", {
    className: "p2040-hint p2040-hint--error"
  }, error) : hint && /*#__PURE__*/React.createElement("span", {
    className: "p2040-hint"
  }, hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Plan 20·40 — Input. */
function Input({
  error = false,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    className: ["p2040-input", error ? "p2040-input--error" : "", className].filter(Boolean).join(" ")
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Plan 20·40 — Radio. Use within a shared `name` group. */
function Radio({
  label,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["p2040-check", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "p2040-check__box p2040-check__box--radio",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "50%",
      background: "currentColor"
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Plan 20·40 — Select (native, styled). */
function Select({
  error = false,
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("select", _extends({
    className: ["p2040-select", error ? "p2040-input--error" : "", className].filter(Boolean).join(" ")
  }, rest), children);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Plan 20·40 — Switch (toggle). */
function Switch({
  label,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["p2040-switch", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "p2040-switch__track",
    "aria-hidden": "true"
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-md)",
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Plan 20·40 — Textarea. */
function Textarea({
  error = false,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("textarea", _extends({
    className: ["p2040-textarea", error ? "p2040-textarea--error" : "", className].filter(Boolean).join(" ")
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Plan 20·40 — Tabs. Pill segmented control. Controlled via value/onChange. */
function Tabs({
  tabs = [],
  value,
  onChange,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ["p2040-tabs", className].filter(Boolean).join(" "),
    role: "tablist"
  }, tabs.map(t => {
    const key = typeof t === "string" ? t : t.value;
    const label = typeof t === "string" ? t : t.label;
    const active = key === value;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      role: "tab",
      "aria-selected": active,
      className: ["p2040-tab", active ? "p2040-tab--active" : ""].filter(Boolean).join(" "),
      onClick: () => onChange && onChange(key)
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma/Dashboard.jsx
try { (() => {
// Plan 20·40 — Plataforma · Dashboard (Inicio)
const {
  Card,
  StatBlock,
  ProgressBar,
  PillarChip,
  Badge,
  Button,
  PillarIcon
} = window.Plan2040DesignSystem_08da0c;
function PillarRow({
  p
}) {
  const labelColor = `var(--pillar-${p.key})`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "10px 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: "50%",
      background: labelColor,
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 150,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: "var(--text-sm)",
      color: "var(--text-strong)"
    }
  }, p.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, p.note)), /*#__PURE__*/React.createElement(ProgressBar, {
    value: p.value,
    color: labelColor,
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      textAlign: "right",
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, p.value, "%"));
}
function AlertRow({
  a
}) {
  const map = {
    warning: "var(--warning)",
    danger: "var(--danger)",
    info: "var(--pillar-espiritu)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "12px 0",
      borderBottom: "1px solid var(--ink-150)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: map[a.kind],
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: "var(--text-sm)",
      color: "var(--text-body)"
    }
  }, a.text), /*#__PURE__*/React.createElement("button", {
    style: {
      border: 0,
      background: "transparent",
      color: "var(--brand)",
      fontWeight: 700,
      fontSize: "var(--text-sm)",
      cursor: "pointer"
    }
  }, a.cta));
}
function Dashboard({
  onOpenFamily
}) {
  const D = window.P2040_DATA;
  const Up = window.PIcons.arrowUp;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22,
      maxWidth: 1180
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16
    }
  }, D.stats.map((s, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    accent: s.color
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: s.value,
    label: s.label,
    color: s.color
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      marginTop: 10,
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Up, {
    size: 13,
    color: "var(--success)"
  }), s.delta)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.55fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-lg)",
      fontWeight: 700
    }
  }, "Indicadores por pilar"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, "Primera Generaci\xF3n 2040")), D.pillars.map(p => /*#__PURE__*/React.createElement(PillarRow, {
    key: p.key,
    p: p
  }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-lg)",
      fontWeight: 700,
      marginBottom: 4
    }
  }, "Pendientes"), D.alerts.map((a, i) => /*#__PURE__*/React.createElement(AlertRow, {
    key: i,
    a: a
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    block: true,
    style: {
      marginTop: 14
    }
  }, "Ver todo el seguimiento"))), /*#__PURE__*/React.createElement(Card, {
    pad: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "18px 22px 12px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-lg)",
      fontWeight: 700
    }
  }, "Visitas recientes"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => onOpenFamily()
  }, "Ver familias")), D.families.slice(0, 4).map(f => {
    const st = {
      "al-dia": ["success", "Al día"],
      "pendiente": ["warning", "Visita pendiente"],
      "atrasado": ["danger", "Sin contacto"]
    }[f.status];
    return /*#__PURE__*/React.createElement("div", {
      key: f.id,
      onClick: () => onOpenFamily(f),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "13px 22px",
        borderTop: "1px solid var(--ink-150)",
        cursor: "pointer"
      },
      onMouseEnter: e => e.currentTarget.style.background = "var(--ink-50)",
      onMouseLeave: e => e.currentTarget.style.background = "transparent"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 38,
        borderRadius: "50%",
        background: "var(--educacion-50)",
        color: "var(--brand)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 800,
        flex: "none"
      }
    }, f.name[0]), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: "var(--text-strong)"
      }
    }, "Familia ", f.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--text-xs)",
        color: "var(--text-muted)"
      }
    }, "Col. ", f.colonia, " \xB7 ", f.children, " ni\xF1os \xB7 Gu\xEDa ", f.guia)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-xs)",
        color: "var(--text-faint)"
      }
    }, f.last), /*#__PURE__*/React.createElement(Badge, {
      tone: st[0],
      dot: true
    }, st[1]));
  })));
}
window.Dashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma/FamiliesList.jsx
try { (() => {
// Plan 20·40 — Plataforma · Families list
const {
  Card,
  Badge,
  Button,
  Tag,
  PillarChip
} = window.Plan2040DesignSystem_08da0c;
const STATUS = {
  "al-dia": ["success", "Al día"],
  "pendiente": ["warning", "Pendiente"],
  "atrasado": ["danger", "Sin contacto"]
};
function FamiliesList({
  onOpenFamily
}) {
  const D = window.P2040_DATA;
  const [filter, setFilter] = React.useState("todas");
  const Plus = window.PIcons.plus,
    ChevR = window.PIcons.chevR;
  const filters = [{
    k: "todas",
    l: "Todas"
  }, {
    k: "al-dia",
    l: "Al día"
  }, {
    k: "pendiente",
    l: "Pendientes"
  }, {
    k: "atrasado",
    l: "Sin contacto"
  }];
  const rows = D.families.filter(f => filter === "todas" || f.status === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "p2040-tabs"
  }, filters.map(f => /*#__PURE__*/React.createElement("button", {
    key: f.k,
    className: "p2040-tab" + (filter === f.k ? " p2040-tab--active" : ""),
    onClick: () => setFilter(f.k)
  }, f.l))), /*#__PURE__*/React.createElement(Tag, null, "Colonia Independencia \u2715"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Plus, {
      size: 16
    }),
    style: {
      marginLeft: "auto"
    }
  }, "Registrar familia")), /*#__PURE__*/React.createElement(Card, {
    pad: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2.2fr 1.2fr .8fr 1.4fr 1fr 1.2fr",
      gap: 12,
      padding: "14px 22px",
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: ".04em",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      borderBottom: "1px solid var(--ink-150)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Familia"), /*#__PURE__*/React.createElement("span", null, "Colonia"), /*#__PURE__*/React.createElement("span", null, "Ni\xF1os"), /*#__PURE__*/React.createElement("span", null, "Gu\xEDa"), /*#__PURE__*/React.createElement("span", null, "\xDAltimo contacto"), /*#__PURE__*/React.createElement("span", null, "Estatus")), rows.map(f => {
    const st = STATUS[f.status];
    return /*#__PURE__*/React.createElement("div", {
      key: f.id,
      onClick: () => onOpenFamily(f),
      style: {
        display: "grid",
        gridTemplateColumns: "2.2fr 1.2fr .8fr 1.4fr 1fr 1.2fr",
        gap: 12,
        alignItems: "center",
        padding: "14px 22px",
        borderBottom: "1px solid var(--ink-150)",
        cursor: "pointer"
      },
      onMouseEnter: e => e.currentTarget.style.background = "var(--ink-50)",
      onMouseLeave: e => e.currentTarget.style.background = "transparent"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 36,
        height: 36,
        borderRadius: "50%",
        background: "var(--educacion-50)",
        color: "var(--brand)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 800,
        flex: "none"
      }
    }, f.name[0]), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: "var(--text-strong)"
      }
    }, f.name), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 4,
        marginTop: 3
      }
    }, f.pillars.map(p => /*#__PURE__*/React.createElement("span", {
      key: p,
      style: {
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: `var(--pillar-${p})`
      }
    }))))), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-body)",
        fontSize: "var(--text-sm)"
      }
    }, f.colonia), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-body)",
        fontSize: "var(--text-sm)"
      }
    }, f.children), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-body)",
        fontSize: "var(--text-sm)"
      }
    }, f.guia), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-muted)",
        fontSize: "var(--text-sm)"
      }
    }, f.last), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: st[0],
      dot: true
    }, st[1]), /*#__PURE__*/React.createElement(ChevR, {
      size: 16,
      color: "var(--text-faint)"
    })));
  })));
}
window.FamiliesList = FamiliesList;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma/FamiliesList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma/FamilyProfile.jsx
try { (() => {
// Plan 20·40 — Plataforma · Family profile
const {
  Card,
  Tabs,
  Badge,
  Button,
  PillarChip,
  PillarIcon,
  ProgressBar,
  Avatar
} = window.Plan2040DesignSystem_08da0c;
const PILLAR_ICON = {
  educacion: "cap",
  salud: "heart",
  juventud: "users",
  espiritu: "hands",
  economia: "coins"
}; // (legacy map — PillarIcon now renders official glyphs by default)
const VAC_STATUS = {
  "al-dia": ["success", "Al día"],
  "pendiente": ["warning", "Pendiente"],
  "proximo": ["info", "Próxima"]
};
function ChildCard({
  c
}) {
  return /*#__PURE__*/React.createElement(Card, {
    hover: true,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: c.name,
    size: "lg",
    style: {
      background: c.color
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: "var(--text-lg)",
      color: "var(--text-strong)"
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, c.age, " a\xF1os \xB7 ", c.grade))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-body)"
    }
  }, c.school), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)",
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", null, "Plan de vida"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, c.plan, "%")), /*#__PURE__*/React.createElement(ProgressBar, {
    value: c.plan,
    color: c.color
  })));
}
function VisitItem({
  v,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(PillarIcon, {
    pillar: v.pillar,
    size: "sm"
  }), !last && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      width: 2,
      background: "var(--ink-200)",
      marginTop: 4
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 22,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, v.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-faint)"
    }
  }, v.date)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-body)",
      marginTop: 4
    }
  }, v.note), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)",
      marginTop: 4
    }
  }, "Gu\xEDa: ", v.guia)));
}
function FamilyProfile({
  family,
  onBack,
  onLogVisit
}) {
  const f = family && Array.isArray(family.children) ? family : window.P2040_DATA.family;
  const [tab, setTab] = React.useState("perfil");
  const Plus = window.PIcons.plus,
    Pin = window.PIcons.pin,
    Check = window.PIcons.check,
    Clock = window.PIcons.clock;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      alignSelf: "flex-start",
      border: 0,
      background: "transparent",
      color: "var(--text-muted)",
      cursor: "pointer",
      fontWeight: 600,
      fontSize: "var(--text-sm)"
    }
  }, "\u2190 Familias"), /*#__PURE__*/React.createElement(Card, {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "50%",
      background: "var(--brand)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 800,
      fontSize: 26,
      flex: "none"
    }
  }, "H"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-2xl)",
      fontWeight: 800,
      letterSpacing: "-.02em"
    }
  }, f.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginTop: 6,
      color: "var(--text-muted)",
      fontSize: "var(--text-sm)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement(Pin, {
    size: 15
  }), f.colonia), /*#__PURE__*/React.createElement("span", null, f.since), /*#__PURE__*/React.createElement("span", null, "Gu\xEDa: ", f.guia)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 12
    }
  }, f.pillars.map(p => /*#__PURE__*/React.createElement(PillarChip, {
    key: p,
    pillar: p
  })))), /*#__PURE__*/React.createElement(Button, {
    iconLeft: /*#__PURE__*/React.createElement(Plus, {
      size: 18
    }),
    onClick: onLogVisit
  }, "Registrar visita")), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    tabs: [{
      value: "perfil",
      label: "Niños"
    }, {
      value: "visitas",
      label: "Visitas"
    }, {
      value: "indicadores",
      label: "Indicadores"
    }, {
      value: "vacunacion",
      label: "Vacunación"
    }]
  }), tab === "perfil" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 16
    }
  }, f.children.map(c => /*#__PURE__*/React.createElement(ChildCard, {
    key: c.name,
    c: c
  }))), tab === "visitas" && /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--text-lg)",
      fontWeight: 700
    }
  }, "L\xEDnea de acompa\xF1amiento"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-muted)"
    }
  }, f.visits.length, " visitas registradas")), f.visits.map((v, i) => /*#__PURE__*/React.createElement(VisitItem, {
    key: i,
    v: v,
    last: i === f.visits.length - 1
  }))), tab === "indicadores" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5,1fr)",
      gap: 14
    }
  }, window.P2040_DATA.pillars.map(p => {
    return /*#__PURE__*/React.createElement(Card, {
      key: p.key,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement(PillarIcon, {
      pillar: p.key
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--text-2xl)",
        fontWeight: 800,
        color: `var(--pillar-${p.key})`,
        lineHeight: 1
      }
    }, p.value, "%"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--text-sm)",
        fontWeight: 700,
        color: "var(--text-strong)"
      }
    }, p.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--text-xs)",
        color: "var(--text-muted)"
      }
    }, p.note));
  })), tab === "vacunacion" && /*#__PURE__*/React.createElement(Card, {
    pad: false
  }, f.vaccines.map((vx, i) => {
    const st = VAC_STATUS[vx.status];
    const Ico = vx.status === "al-dia" ? Check : Clock;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "15px 22px",
        borderBottom: i < f.vaccines.length - 1 ? "1px solid var(--ink-150)" : "none"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 36,
        height: 36,
        borderRadius: "50%",
        flex: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: vx.status === "al-dia" ? "var(--success-50)" : "var(--warning-50)",
        color: vx.status === "al-dia" ? "var(--success)" : "var(--warning)"
      }
    }, /*#__PURE__*/React.createElement(Ico, {
      size: 18
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        color: "var(--text-strong)"
      }
    }, vx.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--text-xs)",
        color: "var(--text-muted)"
      }
    }, vx.who)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-sm)",
        color: "var(--text-muted)"
      }
    }, vx.date), /*#__PURE__*/React.createElement(Badge, {
      tone: st[0],
      dot: true
    }, st[1]));
  })));
}
window.FamilyProfile = FamilyProfile;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma/FamilyProfile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma/Shell.jsx
try { (() => {
// Plan 20·40 — Plataforma · app shell (sidebar + topbar)
const {
  Logo,
  Avatar,
  IconButton,
  Badge
} = window.Plan2040DesignSystem_08da0c;
const NAV = [{
  key: "inicio",
  label: "Inicio",
  icon: "home"
}, {
  key: "familias",
  label: "Familias",
  icon: "users"
}, {
  key: "visitas",
  label: "Visitas",
  icon: "calendar"
}, {
  key: "indicadores",
  label: "Indicadores",
  icon: "chart"
}, {
  key: "vacunacion",
  label: "Vacunación",
  icon: "syringe"
}];
function NavItem({
  item,
  active,
  onClick
}) {
  const I = window.PIcons[item.icon];
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      width: "100%",
      border: 0,
      cursor: "pointer",
      textAlign: "left",
      padding: "11px 14px",
      borderRadius: "var(--radius-md)",
      font: "inherit",
      fontSize: "var(--text-sm)",
      fontWeight: 600,
      background: active ? "var(--educacion-50)" : "transparent",
      color: active ? "var(--brand-strong)" : "var(--text-muted)",
      position: "relative",
      transition: "background .12s, color .12s"
    },
    onMouseEnter: e => {
      if (!active) e.currentTarget.style.background = "var(--ink-100)";
    },
    onMouseLeave: e => {
      if (!active) e.currentTarget.style.background = "transparent";
    }
  }, /*#__PURE__*/React.createElement(I, {
    size: 20
  }), item.label, active && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 10,
      bottom: 10,
      width: 3,
      borderRadius: 3,
      background: "var(--brand)"
    }
  }));
}
function Shell({
  active,
  onNav,
  title,
  subtitle,
  actions,
  children
}) {
  const Search = window.PIcons.search,
    Bell = window.PIcons.bell,
    Logout = window.PIcons.logout,
    Settings = window.PIcons.settings;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      minHeight: "100vh",
      background: "var(--bg-app)"
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 248,
      flex: "none",
      background: "var(--white)",
      borderRight: "1px solid var(--border-subtle)",
      padding: "22px 16px",
      display: "flex",
      flexDirection: "column",
      gap: 6,
      position: "sticky",
      top: 0,
      height: "100vh"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "4px 8px 18px"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    tone: "color",
    height: 34
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      padding: "4px 14px 6px"
    }
  }, "Plataforma"), NAV.map(n => /*#__PURE__*/React.createElement(NavItem, {
    key: n.key,
    item: n,
    active: active === n.key,
    onClick: () => onNav(n.key)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement(NavItem, {
    item: {
      label: "Configuración",
      icon: "settings"
    },
    active: false,
    onClick: () => {}
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 14px",
      marginTop: 6,
      borderTop: "1px solid var(--ink-150)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Mar\xEDa Robles",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.2,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, "Mar\xEDa Robles"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--text-muted)"
    }
  }, "Gu\xEDa de familias")), /*#__PURE__*/React.createElement(Logout, {
    size: 16,
    color: "var(--text-faint)"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "18px 32px",
      background: "var(--white)",
      borderBottom: "1px solid var(--border-subtle)",
      position: "sticky",
      top: 0,
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-2xl)",
      fontWeight: 800,
      letterSpacing: "-.02em"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-muted)",
      fontSize: "var(--text-sm)",
      marginTop: 2
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 240
    }
  }, /*#__PURE__*/React.createElement(Search, {
    size: 18,
    color: "var(--text-faint)",
    style: {
      position: "absolute",
      left: 12,
      top: 12
    }
  }), /*#__PURE__*/React.createElement("input", {
    className: "p2040-input",
    placeholder: "Buscar familia\u2026",
    style: {
      height: 42,
      paddingLeft: 38
    }
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Notificaciones"
  }, /*#__PURE__*/React.createElement(Bell, {
    size: 20
  })), actions)), /*#__PURE__*/React.createElement("main", {
    style: {
      padding: "28px 32px",
      flex: 1
    }
  }, children)));
}
window.Shell = Shell;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma/VisitForm.jsx
try { (() => {
// Plan 20·40 — Plataforma · Visit log dialog
const {
  Dialog,
  Field,
  Input,
  Select,
  Textarea,
  Checkbox,
  Button
} = window.Plan2040DesignSystem_08da0c;
function VisitForm({
  open,
  onClose
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    title: "Registrar visita",
    width: 560,
    onClose: onClose,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
      onClick: onClose
    }, "Guardar visita"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Pilar",
    htmlFor: "v-p",
    required: true
  }, /*#__PURE__*/React.createElement(Select, {
    id: "v-p",
    defaultValue: "Salud"
  }, /*#__PURE__*/React.createElement("option", null, "Educaci\xF3n"), /*#__PURE__*/React.createElement("option", null, "Salud"), /*#__PURE__*/React.createElement("option", null, "Juventud y Familia"), /*#__PURE__*/React.createElement("option", null, "Espiritualidad"), /*#__PURE__*/React.createElement("option", null, "Econom\xEDa Familiar"))), /*#__PURE__*/React.createElement(Field, {
    label: "Fecha de visita",
    htmlFor: "v-d",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    id: "v-d",
    type: "date",
    defaultValue: "2025-06-16"
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Tema de la visita",
    htmlFor: "v-t",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    id: "v-t",
    placeholder: "Ej. Revisi\xF3n de cartilla y crecimiento"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Observaciones",
    htmlFor: "v-o",
    hint: "Describe c\xF3mo encontraste a la familia y los acuerdos."
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "v-o",
    rows: 3,
    placeholder: "\xBFC\xF3mo va el plan de vida de los ni\xF1os?"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Requiere seguimiento de un especialista"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Avanza seg\xFAn su plan de vida",
    defaultChecked: true
  }))));
}
window.VisitForm = VisitForm;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma/VisitForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/plataforma/data.js
try { (() => {
// Plan 20·40 — Plataforma · demo data (fictional, for the UI kit only)
window.P2040_DATA = {
  // "Plan 20·40" is the single organization; these are communities of operation, not brands.
  community: {
    name: "Cuatro Ciénegas",
    year: 2040
  },
  stats: [{
    value: "1,208",
    label: "niños activos",
    color: "var(--brand)",
    delta: "+64 este año"
  }, {
    value: "742",
    label: "familias acompañadas",
    color: "var(--pillar-juventud)",
    delta: "+18 este mes"
  }, {
    value: "6,582",
    label: "visitas de formación",
    color: "var(--pillar-espiritu)",
    delta: "348 casos abiertos"
  }, {
    value: "91%",
    label: "cobertura de acompañamiento",
    color: "var(--pillar-salud)",
    delta: "meta 100%"
  }],
  pillars: [{
    key: "educacion",
    label: "Educación",
    value: 89,
    note: "culminan estudios"
  }, {
    key: "salud",
    label: "Salud",
    value: 71,
    note: "cartillas al día"
  }, {
    key: "juventud",
    label: "Juventud y Familia",
    value: 81,
    note: "plan de vida activo"
  }, {
    key: "espiritu",
    label: "Espiritualidad",
    value: 64,
    note: "participan en formación"
  }, {
    key: "economia",
    label: "Economía Familiar",
    value: 99,
    note: "ingreso registrado"
  }],
  families: [{
    id: 1,
    name: "Hernández García",
    colonia: "Independencia",
    children: 3,
    guia: "María Robles",
    last: "12 jun",
    status: "al-dia",
    pillars: ["salud", "educacion"]
  }, {
    id: 2,
    name: "Martínez Soto",
    colonia: "Centro",
    children: 2,
    guia: "José Luis Mena",
    last: "08 jun",
    status: "pendiente",
    pillars: ["juventud", "espiritu"]
  }, {
    id: 3,
    name: "Ramírez de la Cruz",
    colonia: "Independencia",
    children: 4,
    guia: "María Robles",
    last: "30 may",
    status: "atrasado",
    pillars: ["educacion", "economia"]
  }, {
    id: 4,
    name: "Sánchez Vega",
    colonia: "San Rogelio",
    children: 1,
    guia: "Ana Treviño",
    last: "11 jun",
    status: "al-dia",
    pillars: ["salud"]
  }, {
    id: 5,
    name: "Domínguez Ríos",
    colonia: "Centro",
    children: 3,
    guia: "José Luis Mena",
    last: "05 jun",
    status: "al-dia",
    pillars: ["juventud", "educacion", "salud"]
  }, {
    id: 6,
    name: "Flores Aguirre",
    colonia: "Independencia",
    children: 2,
    guia: "Ana Treviño",
    last: "28 may",
    status: "pendiente",
    pillars: ["economia", "espiritu"]
  }],
  family: {
    id: 1,
    name: "Familia Hernández García",
    colonia: "Colonia Independencia",
    since: "Acompañada desde 2017",
    guia: "María Robles",
    pillars: ["salud", "educacion", "juventud"],
    children: [{
      name: "Iaan",
      age: 9,
      grade: "4º primaria",
      school: "Esc. Benito Juárez",
      plan: 62,
      color: "var(--pillar-educacion)"
    }, {
      name: "Sofía",
      age: 6,
      grade: "1º primaria",
      school: "Esc. Benito Juárez",
      plan: 40,
      color: "var(--pillar-juventud)"
    }, {
      name: "Mateo",
      age: 2,
      grade: "Primera infancia",
      school: "—",
      plan: 18,
      color: "var(--pillar-salud)"
    }],
    visits: [{
      date: "12 jun 2025",
      pillar: "salud",
      title: "Revisión de cartilla y crecimiento",
      note: "Iaan presenta avance saludable. Se agenda revisión ocular.",
      guia: "María Robles"
    }, {
      date: "28 may 2025",
      pillar: "educacion",
      title: "Seguimiento escolar",
      note: "Sofía se integró bien al ciclo. Buen desempeño en lectura.",
      guia: "María Robles"
    }, {
      date: "14 may 2025",
      pillar: "juventud",
      title: "Plan de vida familiar",
      note: "Se revisó el sueño familiar y metas del trimestre.",
      guia: "María Robles"
    }, {
      date: "30 abr 2025",
      pillar: "espiritu",
      title: "Acompañamiento",
      note: "Visita de convivencia y oración con la familia.",
      guia: "José Luis Mena"
    }],
    vaccines: [{
      name: "Hexavalente",
      who: "Mateo (2)",
      status: "al-dia",
      date: "Abr 2025"
    }, {
      name: "Triple viral (SRP)",
      who: "Mateo (2)",
      status: "al-dia",
      date: "Mar 2025"
    }, {
      name: "Influenza estacional",
      who: "Toda la familia",
      status: "pendiente",
      date: "Vence jul 2025"
    }, {
      name: "Refuerzo DPT",
      who: "Sofía (6)",
      status: "al-dia",
      date: "Feb 2025"
    }, {
      name: "VPH",
      who: "Iaan (9)",
      status: "proximo",
      date: "Programar 2026"
    }]
  },
  alerts: [{
    kind: "warning",
    text: "8 cartillas de vacunación por vencer este mes",
    cta: "Revisar"
  }, {
    kind: "danger",
    text: "5 familias sin contacto en 30 días",
    cta: "Ver familias"
  }, {
    kind: "info",
    text: "Campaña de influenza inicia el 30 de junio",
    cta: "Detalles"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma/data.js", error: String((e && e.message) || e) }); }

// ui_kits/plataforma/icons.jsx
try { (() => {
// Plan 20·40 — Lucide-style stroke icons (2px, round). Self-contained, no CDN.
const Icon = ({
  d,
  size = 20,
  fill = "none",
  stroke = "currentColor",
  sw = 2,
  children,
  ...rest
}) => React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill,
  stroke,
  strokeWidth: sw,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  ...rest
}, children || (d ? React.createElement("path", {
  d
}) : null));
const P = (d, extra) => props => /*#__PURE__*/React.createElement(Icon, props, d, extra);
const Icons = {
  home: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M3 11.5 12 4l9 7.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 10v10h14V10"
  })),
  users: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "8",
    r: "3.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 20c0-3.3 2.7-5 6-5s6 1.7 6 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 5.5a3.2 3.2 0 0 1 0 6.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 15c2.6.4 4 2.2 4 5"
  })),
  calendar: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4.5",
    width: "18",
    height: "16",
    rx: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 9h18M8 2.5v4M16 2.5v4"
  })),
  chart: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M4 20V4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 20h16"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "7",
    y: "11",
    width: "3",
    height: "6"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "12.5",
    y: "7",
    width: "3",
    height: "10"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "18",
    y: "13",
    width: "0.5",
    height: "4"
  })),
  syringe: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "m18 2 4 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m17 7 3-3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 9 9.7 18.3a2 2 0 0 1-1.4.6H6l-2 2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m22 6-3 3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m9.5 8.5 6 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6.5 11.5 6 6"
  })),
  heart: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M3 12h4l2 5 4-11 2 6h6"
  })),
  bell: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.5 19a1.8 1.8 0 0 0 3 0"
  })),
  search: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  })),
  plus: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  })),
  chevR: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "m9 6 6 6-6 6"
  })),
  chevD: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  })),
  cap: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M22 10 12 5 2 10l10 5 10-5Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5"
  })),
  hands: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 3v8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 11c0 3 6 3 6 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 13c-1 3 2 8 5 8s6-5 5-8"
  })),
  coins: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("ellipse", {
    cx: "12",
    cy: "6.5",
    rx: "7",
    ry: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 6.5v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 11.5v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5"
  })),
  pin: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "2.5"
  })),
  pencil: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 20h9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"
  })),
  clock: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "8.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 7.5V12l3 2"
  })),
  check: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })),
  dots: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "5",
    cy: "12",
    r: "1.3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1.3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "1.3"
  })),
  arrowUp: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 19V5M5 12l7-7 7 7"
  })),
  sparkle: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z"
  })),
  settings: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 12a7 7 0 0 0-.1-1.4l2-1.5-2-3.4-2.3 1a7 7 0 0 0-2.4-1.4L13.8 2h-3.6l-.4 2.3A7 7 0 0 0 7.4 5.7l-2.3-1-2 3.4 2 1.5A7 7 0 0 0 5 12a7 7 0 0 0 .1 1.4l-2 1.5 2 3.4 2.3-1a7 7 0 0 0 2.4 1.4l.4 2.3h3.6l.4-2.3a7 7 0 0 0 2.4-1.4l2.3 1 2-3.4-2-1.5A7 7 0 0 0 19 12Z"
  })),
  logout: p => /*#__PURE__*/React.createElement(Icon, p, /*#__PURE__*/React.createElement("path", {
    d: "M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 17l-5-5 5-5M5 12h11"
  }))
};
window.PIcons = Icons;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/plataforma/icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.EmotionPicker = __ds_scope.EmotionPicker;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.PillarChip = __ds_scope.PillarChip;

__ds_ns.PILLARS = __ds_scope.PILLARS;

__ds_ns.PillarIcon = __ds_scope.PillarIcon;

__ds_ns.SPOT_NAMES = __ds_scope.SPOT_NAMES;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.SpotIcon = __ds_scope.SpotIcon;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.EMOTIONS = __ds_scope.EMOTIONS;

__ds_ns.EMOTION_MAP = __ds_scope.EMOTION_MAP;

__ds_ns.PILLAR_GLYPH_SRC = __ds_scope.PILLAR_GLYPH_SRC;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
