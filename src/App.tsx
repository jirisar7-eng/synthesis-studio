// Synthesis Autonomous Code Push
// Sync ID: 99q4pe24u
<html lang="en"><head>
    <script type="module" src="/@vite/client"></script>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Google AI Studio App</title>
  <script src="/_aistudio-iframe.js"></script><script src="https://cdn.jsdelivr.net/npm/html2canvas-pro"></script><style>.aistudio-hover-highlight { box-shadow: inset 0 0 0 0.5px white, inset 0 0 0 1.5px rgba(128,128,128,0.6) !important; }.aistudio-active-highlight { box-shadow: inset 0 0 0 0.5px white, inset 0 0 0 1.5px #87a9ff !important; }#aistudio-focus-mode-tag { position: absolute; display: none; background: #87a9ff; border-radius: 4px; border: 0.5px solid white; z-index: 10000; text-transform: lowercase; padding: 2px 4px; color: #32302c; font-family: Inter, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 16px; pointer-events: none; }#aistudio-hover-mode-tag { position: absolute; display: none; background: rgba(128,128,128,0.6); border-radius: 4px; border: 0.5px solid white; z-index: 10000; text-transform: lowercase; padding: 2px 4px; color: white; font-family: Inter, sans-serif; font-size: 12px; font-style: normal; font-weight: 400; line-height: 16px; pointer-events: none; }</style><style type="text/css" data-vite-dev-id="/app/applet/src/index.css">/*! tailwindcss v4.2.4 | MIT License | https://tailwindcss.com */
@layer properties;
@layer theme, base, components, utilities;
@layer theme {
  :root, :host {
    --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    --color-red-400: oklch(70.4% 0.191 22.216);
    --color-red-500: oklch(63.7% 0.237 25.331);
    --color-amber-500: oklch(76.9% 0.188 70.08);
    --color-emerald-400: oklch(76.5% 0.177 163.223);
    --color-emerald-500: oklch(69.6% 0.17 162.48);
    --color-cyan-300: oklch(86.5% 0.127 207.078);
    --color-cyan-400: oklch(78.9% 0.154 211.53);
    --color-cyan-500: oklch(71.5% 0.143 215.221);
    --color-cyan-900: oklch(39.8% 0.07 227.392);
    --color-blue-400: oklch(70.7% 0.165 254.624);
    --color-blue-500: oklch(62.3% 0.214 259.815);
    --color-blue-600: oklch(54.6% 0.245 262.881);
    --color-indigo-400: oklch(67.3% 0.182 276.935);
    --color-indigo-500: oklch(58.5% 0.233 277.117);
    --color-indigo-600: oklch(51.1% 0.262 276.966);
    --color-purple-400: oklch(71.4% 0.203 305.504);
    --color-purple-500: oklch(62.7% 0.265 303.9);
    --color-purple-600: oklch(55.8% 0.288 302.321);
    --color-slate-300: oklch(86.9% 0.022 252.894);
    --color-slate-400: oklch(70.4% 0.04 256.788);
    --color-slate-500: oklch(55.4% 0.046 257.417);
    --color-slate-600: oklch(44.6% 0.043 257.281);
    --color-slate-700: oklch(37.2% 0.044 257.287);
    --color-slate-800: oklch(27.9% 0.041 260.031);
    --color-zinc-400: oklch(70.5% 0.015 286.067);
    --color-zinc-500: oklch(55.2% 0.016 285.938);
    --color-zinc-600: oklch(44.2% 0.017 285.786);
    --color-zinc-800: oklch(27.4% 0.006 286.033);
    --color-black: #000;
    --color-white: #fff;
    --spacing: 0.25rem;
    --container-xs: 20rem;
    --container-sm: 24rem;
    --container-md: 28rem;
    --container-lg: 32rem;
    --container-4xl: 56rem;
    --text-xs: 0.75rem;
    --text-xs--line-height: calc(1 / 0.75);
    --text-sm: 0.875rem;
    --text-sm--line-height: calc(1.25 / 0.875);
    --text-lg: 1.125rem;
    --text-lg--line-height: calc(1.75 / 1.125);
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --text-2xl: 1.5rem;
    --text-2xl--line-height: calc(2 / 1.5);
    --text-3xl: 1.875rem;
    --text-3xl--line-height: calc(2.25 / 1.875);
    --font-weight-medium: 500;
    --font-weight-bold: 700;
    --font-weight-black: 900;
    --tracking-tighter: -0.05em;
    --tracking-tight: -0.025em;
    --tracking-wider: 0.05em;
    --tracking-widest: 0.1em;
    --leading-tight: 1.25;
    --leading-relaxed: 1.625;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --radius-3xl: 1.5rem;
    --drop-shadow-lg: 0 4px 4px rgb(0 0 0 / 0.15);
    --animate-spin: spin 1s linear infinite;
    --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    --blur-sm: 8px;
    --blur-md: 12px;
    --blur-lg: 16px;
    --blur-xl: 24px;
    --blur-2xl: 40px;
    --blur-3xl: 64px;
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --default-font-family: var(--font-sans);
    --default-mono-font-family: var(--font-mono);
  }
}
@layer base {
  *, ::after, ::before, ::backdrop, ::file-selector-button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0 solid;
  }
  html, :host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
    font-feature-settings: var(--default-font-feature-settings, normal);
    font-variation-settings: var(--default-font-variation-settings, normal);
    -webkit-tap-highlight-color: transparent;
  }
  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }
  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }
  b, strong {
    font-weight: bolder;
  }
  code, kbd, samp, pre {
    font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
    font-feature-settings: var(--default-mono-font-feature-settings, normal);
    font-variation-settings: var(--default-mono-font-variation-settings, normal);
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }
  :-moz-focusring {
    outline: auto;
  }
  progress {
    vertical-align: baseline;
  }
  summary {
    display: list-item;
  }
  ol, ul, menu {
    list-style: none;
  }
  img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
    vertical-align: middle;
  }
  img, video {
    max-width: 100%;
    height: auto;
  }
  button, input, select, optgroup, textarea, ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    border-radius: 0;
    background-color: transparent;
    opacity: 1;
  }
  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }
  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }
  ::file-selector-button {
    margin-inline-end: 4px;
  }
  ::placeholder {
    opacity: 1;
  }
  @supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {
    ::placeholder {
      color: currentcolor;
      @supports (color: color-mix(in lab, red, red)) {
        color: color-mix(in oklab, currentcolor 50%, transparent);
      }
    }
  }
  textarea {
    resize: vertical;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-date-and-time-value {
    min-height: 1lh;
    text-align: inherit;
  }
  ::-webkit-datetime-edit {
    display: inline-flex;
  }
  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  ::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }
  ::-webkit-calendar-picker-indicator {
    line-height: 1;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  button, input:where([type="button"], [type="reset"], [type="submit"]), ::file-selector-button {
    appearance: button;
  }
  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
    height: auto;
  }
  [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
}
@layer utilities {
  .pointer-events-auto {
    pointer-events: auto;
  }
  .pointer-events-none {
    pointer-events: none;
  }
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .inset-0 {
    inset: calc(var(--spacing) * 0);
  }
  .-top-1 {
    top: calc(var(--spacing) * -1);
  }
  .-top-24 {
    top: calc(var(--spacing) * -24);
  }
  .top-0 {
    top: calc(var(--spacing) * 0);
  }
  .top-1\/2 {
    top: calc(1 / 2 * 100%);
  }
  .-right-1 {
    right: calc(var(--spacing) * -1);
  }
  .-right-24 {
    right: calc(var(--spacing) * -24);
  }
  .right-0 {
    right: calc(var(--spacing) * 0);
  }
  .right-1\/4 {
    right: calc(1 / 4 * 100%);
  }
  .right-6 {
    right: calc(var(--spacing) * 6);
  }
  .right-12 {
    right: calc(var(--spacing) * 12);
  }
  .bottom-0 {
    bottom: calc(var(--spacing) * 0);
  }
  .bottom-6 {
    bottom: calc(var(--spacing) * 6);
  }
  .bottom-8 {
    bottom: calc(var(--spacing) * 8);
  }
  .bottom-24 {
    bottom: calc(var(--spacing) * 24);
  }
  .left-0 {
    left: calc(var(--spacing) * 0);
  }
  .left-1\/2 {
    left: calc(1 / 2 * 100%);
  }
  .left-1\/4 {
    left: calc(1 / 4 * 100%);
  }
  .left-4 {
    left: calc(var(--spacing) * 4);
  }
  .left-6 {
    left: calc(var(--spacing) * 6);
  }
  .z-0 {
    z-index: 0;
  }
  .z-10 {
    z-index: 10;
  }
  .z-50 {
    z-index: 50;
  }
  .mx-auto {
    margin-inline: auto;
  }
  .my-8 {
    margin-block: calc(var(--spacing) * 8);
  }
  .mt-0\.5 {
    margin-top: calc(var(--spacing) * 0.5);
  }
  .mt-1 {
    margin-top: calc(var(--spacing) * 1);
  }
  .mt-6 {
    margin-top: calc(var(--spacing) * 6);
  }
  .mt-8 {
    margin-top: calc(var(--spacing) * 8);
  }
  .mb-1 {
    margin-bottom: calc(var(--spacing) * 1);
  }
  .mb-2 {
    margin-bottom: calc(var(--spacing) * 2);
  }
  .mb-4 {
    margin-bottom: calc(var(--spacing) * 4);
  }
  .mb-6 {
    margin-bottom: calc(var(--spacing) * 6);
  }
  .mb-8 {
    margin-bottom: calc(var(--spacing) * 8);
  }
  .mb-12 {
    margin-bottom: calc(var(--spacing) * 12);
  }
  .ml-1 {
    margin-left: calc(var(--spacing) * 1);
  }
  .line-clamp-3 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .grid {
    display: grid;
  }
  .hidden {
    display: none;
  }
  .inline-block {
    display: inline-block;
  }
  .table {
    display: table;
  }
  .h-1 {
    height: calc(var(--spacing) * 1);
  }
  .h-2 {
    height: calc(var(--spacing) * 2);
  }
  .h-3 {
    height: calc(var(--spacing) * 3);
  }
  .h-4 {
    height: calc(var(--spacing) * 4);
  }
  .h-5 {
    height: calc(var(--spacing) * 5);
  }
  .h-6 {
    height: calc(var(--spacing) * 6);
  }
  .h-8 {
    height: calc(var(--spacing) * 8);
  }
  .h-10 {
    height: calc(var(--spacing) * 10);
  }
  .h-12 {
    height: calc(var(--spacing) * 12);
  }
  .h-16 {
    height: calc(var(--spacing) * 16);
  }
  .h-24 {
    height: calc(var(--spacing) * 24);
  }
  .h-48 {
    height: calc(var(--spacing) * 48);
  }
  .h-\[400px\] {
    height: 400px;
  }
  .h-\[500px\] {
    height: 500px;
  }
  .h-full {
    height: 100%;
  }
  .min-h-screen {
    min-height: 100vh;
  }
  .w-1 {
    width: calc(var(--spacing) * 1);
  }
  .w-2 {
    width: calc(var(--spacing) * 2);
  }
  .w-3 {
    width: calc(var(--spacing) * 3);
  }
  .w-4 {
    width: calc(var(--spacing) * 4);
  }
  .w-5 {
    width: calc(var(--spacing) * 5);
  }
  .w-6 {
    width: calc(var(--spacing) * 6);
  }
  .w-8 {
    width: calc(var(--spacing) * 8);
  }
  .w-10 {
    width: calc(var(--spacing) * 10);
  }
  .w-12 {
    width: calc(var(--spacing) * 12);
  }
  .w-16 {
    width: calc(var(--spacing) * 16);
  }
  .w-24 {
    width: calc(var(--spacing) * 24);
  }
  .w-32 {
    width: calc(var(--spacing) * 32);
  }
  .w-48 {
    width: calc(var(--spacing) * 48);
  }
  .w-\[400px\] {
    width: 400px;
  }
  .w-\[500px\] {
    width: 500px;
  }
  .w-full {
    width: 100%;
  }
  .max-w-lg {
    max-width: var(--container-lg);
  }
  .max-w-md {
    max-width: var(--container-md);
  }
  .max-w-sm {
    max-width: var(--container-sm);
  }
  .max-w-xs {
    max-width: var(--container-xs);
  }
  .flex-shrink-0 {
    flex-shrink: 0;
  }
  .-translate-x-1\/2 {
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .-translate-y-1\/2 {
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .scale-110 {
    --tw-scale-x: 110%;
    --tw-scale-y: 110%;
    --tw-scale-z: 110%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .animate-pulse {
    animation: var(--animate-pulse);
  }
  .animate-spin {
    animation: var(--animate-spin);
  }
  .cursor-default {
    cursor: default;
  }
  .cursor-not-allowed {
    cursor: not-allowed;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .flex-col {
    flex-direction: column;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-center {
    justify-content: center;
  }
  .gap-1 {
    gap: calc(var(--spacing) * 1);
  }
  .gap-2 {
    gap: calc(var(--spacing) * 2);
  }
  .gap-3 {
    gap: calc(var(--spacing) * 3);
  }
  .gap-4 {
    gap: calc(var(--spacing) * 4);
  }
  .gap-6 {
    gap: calc(var(--spacing) * 6);
  }
  .space-y-1 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 1) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-2 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-3 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-4 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-6 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-y-8 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 8) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 8) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .rounded-2xl {
    border-radius: var(--radius-2xl);
  }
  .rounded-3xl {
    border-radius: var(--radius-3xl);
  }
  .rounded-\[2\.5rem\] {
    border-radius: 2.5rem;
  }
  .rounded-\[2rem\] {
    border-radius: 2rem;
  }
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .rounded-xl {
    border-radius: var(--radius-xl);
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-2 {
    border-style: var(--tw-border-style);
    border-width: 2px;
  }
  .border-t {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
  }
  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }
  .border-dashed {
    --tw-border-style: dashed;
    border-style: dashed;
  }
  .border-\[\#020617\] {
    border-color: #020617;
  }
  .border-amber-500\/10 {
    border-color: color-mix(in srgb, oklch(76.9% 0.188 70.08) 10%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-amber-500) 10%, transparent);
    }
  }
  .border-amber-500\/20 {
    border-color: color-mix(in srgb, oklch(76.9% 0.188 70.08) 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-amber-500) 20%, transparent);
    }
  }
  .border-blue-500\/20 {
    border-color: color-mix(in srgb, oklch(62.3% 0.214 259.815) 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-blue-500) 20%, transparent);
    }
  }
  .border-cyan-500\/20 {
    border-color: color-mix(in srgb, oklch(71.5% 0.143 215.221) 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-cyan-500) 20%, transparent);
    }
  }
  .border-emerald-500\/10 {
    border-color: color-mix(in srgb, oklch(69.6% 0.17 162.48) 10%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-emerald-500) 10%, transparent);
    }
  }
  .border-emerald-500\/20 {
    border-color: color-mix(in srgb, oklch(69.6% 0.17 162.48) 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-emerald-500) 20%, transparent);
    }
  }
  .border-purple-500\/10 {
    border-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 10%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-purple-500) 10%, transparent);
    }
  }
  .border-red-500\/20 {
    border-color: color-mix(in srgb, oklch(63.7% 0.237 25.331) 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-red-500) 20%, transparent);
    }
  }
  .border-white\/5 {
    border-color: color-mix(in srgb, #fff 5%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-white) 5%, transparent);
    }
  }
  .border-white\/10 {
    border-color: color-mix(in srgb, #fff 10%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-white) 10%, transparent);
    }
  }
  .border-white\/\[0\.05\] {
    border-color: color-mix(in srgb, #fff 5%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      border-color: color-mix(in oklab, var(--color-white) 5%, transparent);
    }
  }
  .border-t-cyan-500 {
    border-top-color: var(--color-cyan-500);
  }
  .bg-\[\#0a0a14\]\/90 {
    background-color: color-mix(in oklab, #0a0a14 90%, transparent);
  }
  .bg-\[\#0c0c14\] {
    background-color: #0c0c14;
  }
  .bg-\[\#11111a\]\/80 {
    background-color: color-mix(in oklab, #11111a 80%, transparent);
  }
  .bg-\[\#020617\] {
    background-color: #020617;
  }
  .bg-amber-500\/5 {
    background-color: color-mix(in srgb, oklch(76.9% 0.188 70.08) 5%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-amber-500) 5%, transparent);
    }
  }
  .bg-amber-500\/10 {
    background-color: color-mix(in srgb, oklch(76.9% 0.188 70.08) 10%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-amber-500) 10%, transparent);
    }
  }
  .bg-black\/20 {
    background-color: color-mix(in srgb, #000 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 20%, transparent);
    }
  }
  .bg-black\/40 {
    background-color: color-mix(in srgb, #000 40%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-black) 40%, transparent);
    }
  }
  .bg-blue-500\/10 {
    background-color: color-mix(in srgb, oklch(62.3% 0.214 259.815) 10%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-blue-500) 10%, transparent);
    }
  }
  .bg-blue-600\/5 {
    background-color: color-mix(in srgb, oklch(54.6% 0.245 262.881) 5%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-blue-600) 5%, transparent);
    }
  }
  .bg-cyan-500 {
    background-color: var(--color-cyan-500);
  }
  .bg-cyan-500\/5 {
    background-color: color-mix(in srgb, oklch(71.5% 0.143 215.221) 5%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-cyan-500) 5%, transparent);
    }
  }
  .bg-cyan-500\/10 {
    background-color: color-mix(in srgb, oklch(71.5% 0.143 215.221) 10%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-cyan-500) 10%, transparent);
    }
  }
  .bg-cyan-500\/20 {
    background-color: color-mix(in srgb, oklch(71.5% 0.143 215.221) 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-cyan-500) 20%, transparent);
    }
  }
  .bg-cyan-500\/50 {
    background-color: color-mix(in srgb, oklch(71.5% 0.143 215.221) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-cyan-500) 50%, transparent);
    }
  }
  .bg-emerald-500 {
    background-color: var(--color-emerald-500);
  }
  .bg-emerald-500\/5 {
    background-color: color-mix(in srgb, oklch(69.6% 0.17 162.48) 5%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-emerald-500) 5%, transparent);
    }
  }
  .bg-emerald-500\/10 {
    background-color: color-mix(in srgb, oklch(69.6% 0.17 162.48) 10%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-emerald-500) 10%, transparent);
    }
  }
  .bg-indigo-500\/20 {
    background-color: color-mix(in srgb, oklch(58.5% 0.233 277.117) 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-indigo-500) 20%, transparent);
    }
  }
  .bg-indigo-600 {
    background-color: var(--color-indigo-600);
  }
  .bg-purple-500\/5 {
    background-color: color-mix(in srgb, oklch(62.7% 0.265 303.9) 5%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-purple-500) 5%, transparent);
    }
  }
  .bg-purple-600 {
    background-color: var(--color-purple-600);
  }
  .bg-red-500 {
    background-color: var(--color-red-500);
  }
  .bg-red-500\/10 {
    background-color: color-mix(in srgb, oklch(63.7% 0.237 25.331) 10%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-red-500) 10%, transparent);
    }
  }
  .bg-white\/5 {
    background-color: color-mix(in srgb, #fff 5%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-white) 5%, transparent);
    }
  }
  .bg-white\/\[0\.02\] {
    background-color: color-mix(in srgb, #fff 2%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-white) 2%, transparent);
    }
  }
  .bg-white\/\[0\.03\] {
    background-color: color-mix(in srgb, #fff 3%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-white) 3%, transparent);
    }
  }
  .bg-zinc-500 {
    background-color: var(--color-zinc-500);
  }
  .bg-zinc-500\/5 {
    background-color: color-mix(in srgb, oklch(55.2% 0.016 285.938) 5%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      background-color: color-mix(in oklab, var(--color-zinc-500) 5%, transparent);
    }
  }
  .bg-zinc-800 {
    background-color: var(--color-zinc-800);
  }
  .bg-gradient-to-br {
    --tw-gradient-position: to bottom right in oklab;
    background-image: linear-gradient(var(--tw-gradient-stops));
  }
  .bg-gradient-to-r {
    --tw-gradient-position: to right in oklab;
    background-image: linear-gradient(var(--tw-gradient-stops));
  }
  .from-blue-600\/20 {
    --tw-gradient-from: color-mix(in srgb, oklch(54.6% 0.245 262.881) 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-gradient-from: color-mix(in oklab, var(--color-blue-600) 20%, transparent);
    }
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .from-cyan-400 {
    --tw-gradient-from: var(--color-cyan-400);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .from-white\/5 {
    --tw-gradient-from: color-mix(in srgb, #fff 5%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-gradient-from: color-mix(in oklab, var(--color-white) 5%, transparent);
    }
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .to-blue-600 {
    --tw-gradient-to: var(--color-blue-600);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .to-cyan-400\/20 {
    --tw-gradient-to: color-mix(in srgb, oklch(78.9% 0.154 211.53) 20%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      --tw-gradient-to: color-mix(in oklab, var(--color-cyan-400) 20%, transparent);
    }
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .to-transparent {
    --tw-gradient-to: transparent;
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .fill-current {
    fill: currentcolor;
  }
  .p-1 {
    padding: calc(var(--spacing) * 1);
  }
  .p-2 {
    padding: calc(var(--spacing) * 2);
  }
  .p-3 {
    padding: calc(var(--spacing) * 3);
  }
  .p-4 {
    padding: calc(var(--spacing) * 4);
  }
  .p-6 {
    padding: calc(var(--spacing) * 6);
  }
  .p-8 {
    padding: calc(var(--spacing) * 8);
  }
  .p-12 {
    padding: calc(var(--spacing) * 12);
  }
  .px-2 {
    padding-inline: calc(var(--spacing) * 2);
  }
  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .px-6 {
    padding-inline: calc(var(--spacing) * 6);
  }
  .px-8 {
    padding-inline: calc(var(--spacing) * 8);
  }
  .py-0\.5 {
    padding-block: calc(var(--spacing) * 0.5);
  }
  .py-1 {
    padding-block: calc(var(--spacing) * 1);
  }
  .py-2 {
    padding-block: calc(var(--spacing) * 2);
  }
  .py-3 {
    padding-block: calc(var(--spacing) * 3);
  }
  .py-4 {
    padding-block: calc(var(--spacing) * 4);
  }
  .py-8 {
    padding-block: calc(var(--spacing) * 8);
  }
  .py-12 {
    padding-block: calc(var(--spacing) * 12);
  }
  .py-20 {
    padding-block: calc(var(--spacing) * 20);
  }
  .pt-12 {
    padding-top: calc(var(--spacing) * 12);
  }
  .pr-4 {
    padding-right: calc(var(--spacing) * 4);
  }
  .pb-2 {
    padding-bottom: calc(var(--spacing) * 2);
  }
  .pb-8 {
    padding-bottom: calc(var(--spacing) * 8);
  }
  .pb-12 {
    padding-bottom: calc(var(--spacing) * 12);
  }
  .pb-24 {
    padding-bottom: calc(var(--spacing) * 24);
  }
  .pl-12 {
    padding-left: calc(var(--spacing) * 12);
  }
  .text-center {
    text-align: center;
  }
  .font-mono {
    font-family: var(--font-mono);
  }
  .font-sans {
    font-family: var(--font-sans);
  }
  .text-2xl {
    font-size: var(--text-2xl);
    line-height: var(--tw-leading, var(--text-2xl--line-height));
  }
  .text-3xl {
    font-size: var(--text-3xl);
    line-height: var(--tw-leading, var(--text-3xl--line-height));
  }
  .text-lg {
    font-size: var(--text-lg);
    line-height: var(--tw-leading, var(--text-lg--line-height));
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .text-xl {
    font-size: var(--text-xl);
    line-height: var(--tw-leading, var(--text-xl--line-height));
  }
  .text-xs {
    font-size: var(--text-xs);
    line-height: var(--tw-leading, var(--text-xs--line-height));
  }
  .text-\[8px\] {
    font-size: 8px;
  }
  .text-\[9px\] {
    font-size: 9px;
  }
  .text-\[10px\] {
    font-size: 10px;
  }
  .leading-relaxed {
    --tw-leading: var(--leading-relaxed);
    line-height: var(--leading-relaxed);
  }
  .leading-tight {
    --tw-leading: var(--leading-tight);
    line-height: var(--leading-tight);
  }
  .font-black {
    --tw-font-weight: var(--font-weight-black);
    font-weight: var(--font-weight-black);
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .font-medium {
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
  }
  .tracking-\[0\.2em\] {
    --tw-tracking: 0.2em;
    letter-spacing: 0.2em;
  }
  .tracking-\[0\.3em\] {
    --tw-tracking: 0.3em;
    letter-spacing: 0.3em;
  }
  .tracking-\[0\.4em\] {
    --tw-tracking: 0.4em;
    letter-spacing: 0.4em;
  }
  .tracking-tight {
    --tw-tracking: var(--tracking-tight);
    letter-spacing: var(--tracking-tight);
  }
  .tracking-tighter {
    --tw-tracking: var(--tracking-tighter);
    letter-spacing: var(--tracking-tighter);
  }
  .tracking-wider {
    --tw-tracking: var(--tracking-wider);
    letter-spacing: var(--tracking-wider);
  }
  .tracking-widest {
    --tw-tracking: var(--tracking-widest);
    letter-spacing: var(--tracking-widest);
  }
  .text-amber-500 {
    color: var(--color-amber-500);
  }
  .text-amber-500\/80 {
    color: color-mix(in srgb, oklch(76.9% 0.188 70.08) 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-amber-500) 80%, transparent);
    }
  }
  .text-black {
    color: var(--color-black);
  }
  .text-blue-400 {
    color: var(--color-blue-400);
  }
  .text-blue-500 {
    color: var(--color-blue-500);
  }
  .text-cyan-400 {
    color: var(--color-cyan-400);
  }
  .text-cyan-400\/70 {
    color: color-mix(in srgb, oklch(78.9% 0.154 211.53) 70%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-cyan-400) 70%, transparent);
    }
  }
  .text-cyan-500 {
    color: var(--color-cyan-500);
  }
  .text-cyan-500\/50 {
    color: color-mix(in srgb, oklch(71.5% 0.143 215.221) 50%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-cyan-500) 50%, transparent);
    }
  }
  .text-emerald-400 {
    color: var(--color-emerald-400);
  }
  .text-emerald-500 {
    color: var(--color-emerald-500);
  }
  .text-indigo-400 {
    color: var(--color-indigo-400);
  }
  .text-purple-400 {
    color: var(--color-purple-400);
  }
  .text-purple-400\/80 {
    color: color-mix(in srgb, oklch(71.4% 0.203 305.504) 80%, transparent);
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, var(--color-purple-400) 80%, transparent);
    }
  }
  .text-red-400 {
    color: var(--color-red-400);
  }
  .text-red-500 {
    color: var(--color-red-500);
  }
  .text-slate-300 {
    color: var(--color-slate-300);
  }
  .text-slate-400 {
    color: var(--color-slate-400);
  }
  .text-slate-500 {
    color: var(--color-slate-500);
  }
  .text-slate-600 {
    color: var(--color-slate-600);
  }
  .text-slate-700 {
    color: var(--color-slate-700);
  }
  .text-slate-800 {
    color: var(--color-slate-800);
  }
  .text-white {
    color: var(--color-white);
  }
  .text-zinc-400 {
    color: var(--color-zinc-400);
  }
  .text-zinc-500 {
    color: var(--color-zinc-500);
  }
  .text-zinc-600 {
    color: var(--color-zinc-600);
  }
  .uppercase {
    text-transform: uppercase;
  }
  .italic {
    font-style: italic;
  }
  .opacity-10 {
    opacity: 10%;
  }
  .opacity-20 {
    opacity: 20%;
  }
  .opacity-30 {
    opacity: 30%;
  }
  .opacity-50 {
    opacity: 50%;
  }
  .shadow-2xl {
    --tw-shadow: 0 25px 50px -12px var(--tw-shadow-color, rgb(0 0 0 / 0.25));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-\[0_0_8px_rgba\(6\,182\,212\,0\.5\)\] {
    --tw-shadow: 0 0 8px var(--tw-shadow-color, rgba(6,182,212,0.5));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-\[0_0_8px_rgba\(16\,185\,129\,0\.5\)\] {
    --tw-shadow: 0 0 8px var(--tw-shadow-color, rgba(16,185,129,0.5));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-\[0_0_15px_rgba\(6\,182\,212\,0\.2\)\] {
    --tw-shadow: 0 0 15px var(--tw-shadow-color, rgba(6,182,212,0.2));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-\[0_0_20px_rgba\(6\,182\,212\,0\.2\)\] {
    --tw-shadow: 0 0 20px var(--tw-shadow-color, rgba(6,182,212,0.2));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-\[0_0_20px_rgba\(6\,182\,212\,0\.3\)\] {
    --tw-shadow: 0 0 20px var(--tw-shadow-color, rgba(6,182,212,0.3));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-\[0_0_30px_rgba\(6\,182\,212\,0\.3\)\] {
    --tw-shadow: 0 0 30px var(--tw-shadow-color, rgba(6,182,212,0.3));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-\[0_0_30px_rgba\(79\,70\,229\,0\.2\)\] {
    --tw-shadow: 0 0 30px var(--tw-shadow-color, rgba(79,70,229,0.2));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-\[0_10px_40px_rgba\(0\,0\,0\,0\.5\)\] {
    --tw-shadow: 0 10px 40px var(--tw-shadow-color, rgba(0,0,0,0.5));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .blur-\[80px\] {
    --tw-blur: blur(80px);
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .blur-\[120px\] {
    --tw-blur: blur(120px);
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .blur-lg {
    --tw-blur: blur(var(--blur-lg));
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .drop-shadow-lg {
    --tw-drop-shadow-size: drop-shadow(0 4px 4px var(--tw-drop-shadow-color, rgb(0 0 0 / 0.15)));
    --tw-drop-shadow: drop-shadow(var(--drop-shadow-lg));
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .grayscale {
    --tw-grayscale: grayscale(100%);
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .filter {
    filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
  }
  .backdrop-blur-2xl {
    --tw-backdrop-blur: blur(var(--blur-2xl));
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .backdrop-blur-3xl {
    --tw-backdrop-blur: blur(var(--blur-3xl));
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .backdrop-blur-md {
    --tw-backdrop-blur: blur(var(--blur-md));
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .backdrop-blur-sm {
    --tw-backdrop-blur: blur(var(--blur-sm));
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .backdrop-blur-xl {
    --tw-backdrop-blur: blur(var(--blur-xl));
    -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
    backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  }
  .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-all {
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-colors {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-opacity {
    transition-property: opacity;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .transition-transform {
    transition-property: transform, translate, scale, rotate;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .duration-300 {
    --tw-duration: 300ms;
    transition-duration: 300ms;
  }
  .duration-500 {
    --tw-duration: 500ms;
    transition-duration: 500ms;
  }
  .group-focus-within\:text-cyan-400 {
    &:is(:where(.group):focus-within *) {
      color: var(--color-cyan-400);
    }
  }
  .group-hover\:translate-x-1 {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        --tw-translate-x: calc(var(--spacing) * 1);
        translate: var(--tw-translate-x) var(--tw-translate-y);
      }
    }
  }
  .group-hover\:scale-110 {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        --tw-scale-x: 110%;
        --tw-scale-y: 110%;
        --tw-scale-z: 110%;
        scale: var(--tw-scale-x) var(--tw-scale-y);
      }
    }
  }
  .group-hover\:text-cyan-400 {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        color: var(--color-cyan-400);
      }
    }
  }
  .group-hover\:opacity-20 {
    &:is(:where(.group):hover *) {
      @media (hover: hover) {
        opacity: 20%;
      }
    }
  }
  .selection\:bg-cyan-500\/30 {
    & *::selection {
      background-color: color-mix(in srgb, oklch(71.5% 0.143 215.221) 30%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-cyan-500) 30%, transparent);
      }
    }
    &::selection {
      background-color: color-mix(in srgb, oklch(71.5% 0.143 215.221) 30%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-cyan-500) 30%, transparent);
      }
    }
  }
  .placeholder\:text-slate-700 {
    &::placeholder {
      color: var(--color-slate-700);
    }
  }
  .hover\:border-cyan-500\/50 {
    &:hover {
      @media (hover: hover) {
        border-color: color-mix(in srgb, oklch(71.5% 0.143 215.221) 50%, transparent);
        @supports (color: color-mix(in lab, red, red)) {
          border-color: color-mix(in oklab, var(--color-cyan-500) 50%, transparent);
        }
      }
    }
  }
  .hover\:border-white\/10 {
    &:hover {
      @media (hover: hover) {
        border-color: color-mix(in srgb, #fff 10%, transparent);
        @supports (color: color-mix(in lab, red, red)) {
          border-color: color-mix(in oklab, var(--color-white) 10%, transparent);
        }
      }
    }
  }
  .hover\:bg-cyan-400 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-cyan-400);
      }
    }
  }
  .hover\:bg-cyan-500\/10 {
    &:hover {
      @media (hover: hover) {
        background-color: color-mix(in srgb, oklch(71.5% 0.143 215.221) 10%, transparent);
        @supports (color: color-mix(in lab, red, red)) {
          background-color: color-mix(in oklab, var(--color-cyan-500) 10%, transparent);
        }
      }
    }
  }
  .hover\:bg-emerald-500\/20 {
    &:hover {
      @media (hover: hover) {
        background-color: color-mix(in srgb, oklch(69.6% 0.17 162.48) 20%, transparent);
        @supports (color: color-mix(in lab, red, red)) {
          background-color: color-mix(in oklab, var(--color-emerald-500) 20%, transparent);
        }
      }
    }
  }
  .hover\:bg-indigo-500 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-indigo-500);
      }
    }
  }
  .hover\:bg-purple-500 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-purple-500);
      }
    }
  }
  .hover\:bg-red-500\/20 {
    &:hover {
      @media (hover: hover) {
        background-color: color-mix(in srgb, oklch(63.7% 0.237 25.331) 20%, transparent);
        @supports (color: color-mix(in lab, red, red)) {
          background-color: color-mix(in oklab, var(--color-red-500) 20%, transparent);
        }
      }
    }
  }
  .hover\:bg-white\/5 {
    &:hover {
      @media (hover: hover) {
        background-color: color-mix(in srgb, #fff 5%, transparent);
        @supports (color: color-mix(in lab, red, red)) {
          background-color: color-mix(in oklab, var(--color-white) 5%, transparent);
        }
      }
    }
  }
  .hover\:bg-white\/10 {
    &:hover {
      @media (hover: hover) {
        background-color: color-mix(in srgb, #fff 10%, transparent);
        @supports (color: color-mix(in lab, red, red)) {
          background-color: color-mix(in oklab, var(--color-white) 10%, transparent);
        }
      }
    }
  }
  .hover\:bg-white\/\[0\.05\] {
    &:hover {
      @media (hover: hover) {
        background-color: color-mix(in srgb, #fff 5%, transparent);
        @supports (color: color-mix(in lab, red, red)) {
          background-color: color-mix(in oklab, var(--color-white) 5%, transparent);
        }
      }
    }
  }
  .hover\:text-cyan-300 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-cyan-300);
      }
    }
  }
  .hover\:text-slate-300 {
    &:hover {
      @media (hover: hover) {
        color: var(--color-slate-300);
      }
    }
  }
  .hover\:text-white {
    &:hover {
      @media (hover: hover) {
        color: var(--color-white);
      }
    }
  }
  .hover\:opacity-100 {
    &:hover {
      @media (hover: hover) {
        opacity: 100%;
      }
    }
  }
  .focus\:border-cyan-500\/50 {
    &:focus {
      border-color: color-mix(in srgb, oklch(71.5% 0.143 215.221) 50%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        border-color: color-mix(in oklab, var(--color-cyan-500) 50%, transparent);
      }
    }
  }
  .focus\:bg-cyan-500\/5 {
    &:focus {
      background-color: color-mix(in srgb, oklch(71.5% 0.143 215.221) 5%, transparent);
      @supports (color: color-mix(in lab, red, red)) {
        background-color: color-mix(in oklab, var(--color-cyan-500) 5%, transparent);
      }
    }
  }
  .focus\:outline-none {
    &:focus {
      --tw-outline-style: none;
      outline-style: none;
    }
  }
  .disabled\:bg-cyan-900 {
    &:disabled {
      background-color: var(--color-cyan-900);
    }
  }
  .disabled\:opacity-50 {
    &:disabled {
      opacity: 50%;
    }
  }
  .md\:right-12 {
    @media (width >= 48rem) {
      right: calc(var(--spacing) * 12);
    }
  }
  .md\:left-auto {
    @media (width >= 48rem) {
      left: auto;
    }
  }
  .md\:grid-cols-3 {
    @media (width >= 48rem) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
  .md\:flex-row {
    @media (width >= 48rem) {
      flex-direction: row;
    }
  }
  .md\:items-center {
    @media (width >= 48rem) {
      align-items: center;
    }
  }
  .lg\:left-1\/2 {
    @media (width >= 64rem) {
      left: calc(1 / 2 * 100%);
    }
  }
  .lg\:block {
    @media (width >= 64rem) {
      display: block;
    }
  }
  .lg\:max-w-4xl {
    @media (width >= 64rem) {
      max-width: var(--container-4xl);
    }
  }
  .lg\:max-w-sm {
    @media (width >= 64rem) {
      max-width: var(--container-sm);
    }
  }
  .lg\:-translate-x-1\/2 {
    @media (width >= 64rem) {
      --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
  }
  .lg\:grid-cols-2 {
    @media (width >= 64rem) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  .lg\:pb-0 {
    @media (width >= 64rem) {
      padding-bottom: calc(var(--spacing) * 0);
    }
  }
  .xl\:grid-cols-3 {
    @media (width >= 80rem) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
}
@property --tw-translate-x {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-y {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-z {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-scale-x {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-y {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-z {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-gradient-position {
  syntax: "*";
  inherits: false;
}
@property --tw-gradient-from {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-gradient-via {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-gradient-to {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-gradient-stops {
  syntax: "*";
  inherits: false;
}
@property --tw-gradient-via-stops {
  syntax: "*";
  inherits: false;
}
@property --tw-gradient-from-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 0%;
}
@property --tw-gradient-via-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 50%;
}
@property --tw-gradient-to-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-tracking {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-drop-shadow-size {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-duration {
  syntax: "*";
  inherits: false;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    *, ::before, ::after, ::backdrop {
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-translate-z: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-scale-z: 1;
      --tw-space-y-reverse: 0;
      --tw-border-style: solid;
      --tw-gradient-position: initial;
      --tw-gradient-from: #0000;
      --tw-gradient-via: #0000;
      --tw-gradient-to: #0000;
      --tw-gradient-stops: initial;
      --tw-gradient-via-stops: initial;
      --tw-gradient-from-position: 0%;
      --tw-gradient-via-position: 50%;
      --tw-gradient-to-position: 100%;
      --tw-leading: initial;
      --tw-font-weight: initial;
      --tw-tracking: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-blur: initial;
      --tw-brightness: initial;
      --tw-contrast: initial;
      --tw-grayscale: initial;
      --tw-hue-rotate: initial;
      --tw-invert: initial;
      --tw-opacity: initial;
      --tw-saturate: initial;
      --tw-sepia: initial;
      --tw-drop-shadow: initial;
      --tw-drop-shadow-color: initial;
      --tw-drop-shadow-alpha: 100%;
      --tw-drop-shadow-size: initial;
      --tw-backdrop-blur: initial;
      --tw-backdrop-brightness: initial;
      --tw-backdrop-contrast: initial;
      --tw-backdrop-grayscale: initial;
      --tw-backdrop-hue-rotate: initial;
      --tw-backdrop-invert: initial;
      --tw-backdrop-opacity: initial;
      --tw-backdrop-saturate: initial;
      --tw-backdrop-sepia: initial;
      --tw-duration: initial;
    }
  }
}
</style></head>
  <body>
    <div id="root"><div class="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-cyan-500/30 pb-24 lg:pb-0"><div class="fixed inset-0 overflow-hidden pointer-events-none z-0"><div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full animate-pulse"></div><div class="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full animate-pulse"></div></div><div class="relative z-10 max-w-lg mx-auto lg:max-w-4xl px-6 pt-12 pb-24"><header class="flex flex-col items-center mb-12 text-center"><div class="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)]" style="transform: scale(1.00007) rotate(-0.0060064deg);"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-terminal w-8 h-8 text-white drop-shadow-lg" aria-hidden="true"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg></div><h1 class="text-3xl font-black text-white tracking-tight mb-2">SYNTHESIS<span class="text-cyan-400">.</span>STUDIO</h1><p class="text-xs font-mono uppercase tracking-[0.4em] text-slate-500">Collective Intelligence Hub</p></header><div class="py-12" style="opacity: 1; transform: none;"><div class="space-y-8 pb-12"><div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-8"><div><h2 class="text-3xl font-bold text-white tracking-tighter">System Infrastructure</h2><p class="text-slate-500 text-sm mt-1">Core Engine Node: BHKX-ZILL-QMPH-XGPL</p></div><button class="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-refresh-cw w-4 h-4" aria-hidden="true"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>Poll All Nodes</button></div><div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"><div class="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 group transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-emerald/20" style="opacity: 1; transform: none;"><div class="absolute -top-24 -right-24 w-48 h-48 bg-emerald/10 rounded-full blur-[80px] group-hover:bg-emerald/20 transition-all"></div><div class="relative p-6 space-y-6"><div class="flex items-center justify-between"><div class="flex items-center gap-4"><div class="p-3 bg-emerald/10 rounded-2xl border border-emerald/20 group-hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database w-6 h-6 text-emerald-400" aria-hidden="true"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg></div><div><h3 class="text-lg font-bold text-white tracking-tight">Supabase Cloud</h3><div class="flex items-center gap-2"><div class="w-2 h-2 rounded-full bg-emerald-500 "></div><span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">ONLINE</span></div></div></div></div><div class="space-y-4"><div class="bg-black/40 rounded-2xl p-4 border border-white/5 space-y-3"><div class="flex items-center justify-between"><span class="text-[10px] font-mono text-zinc-500 uppercase">Registered Schemas</span><span class="text-[10px] font-mono text-emerald-500">public_01</span></div><div class="grid grid-cols-2 gap-2"><div class="px-3 py-2 bg-emerald-500/5 rounded-lg border border-emerald-500/10 text-[9px] font-mono text-emerald-400 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity w-3 h-3" aria-hidden="true"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>profiles</div><div class="px-3 py-2 bg-emerald-500/5 rounded-lg border border-emerald-500/10 text-[9px] font-mono text-emerald-400 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity w-3 h-3" aria-hidden="true"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>audit_log</div><div class="px-3 py-2 bg-emerald-500/5 rounded-lg border border-emerald-500/10 text-[9px] font-mono text-emerald-400 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity w-3 h-3" aria-hidden="true"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>posts</div></div></div><button class="w-full py-4 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-500 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2">Initiate SQL Repair</button></div></div></div><div class="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 group transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-purple/20" style="opacity: 1; transform: none;"><div class="absolute -top-24 -right-24 w-48 h-48 bg-purple/10 rounded-full blur-[80px] group-hover:bg-purple/20 transition-all"></div><div class="relative p-6 space-y-6"><div class="flex items-center justify-between"><div class="flex items-center gap-4"><div class="p-3 bg-purple/10 rounded-2xl border border-purple/20 group-hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github w-6 h-6 text-purple-400" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></div><div><h3 class="text-lg font-bold text-white tracking-tight">GitHub Repository</h3><div class="flex items-center gap-2"><div class="w-2 h-2 rounded-full bg-red-500 "></div><span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">OFFLINE</span></div></div></div></div><div class="space-y-4"><div class="bg-black/40 rounded-2xl p-4 border border-white/5 space-y-4"><div><span class="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Target Cluster</span><p class="text-xs text-slate-300 font-mono italic">jirisar7-eng/synthesis-studio</p></div></div><button class="w-full py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2">Force Push Synthesis</button></div></div></div><div class="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 group transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-blue/20" style="opacity: 1; transform: none;"><div class="absolute -top-24 -right-24 w-48 h-48 bg-blue/10 rounded-full blur-[80px] group-hover:bg-blue/20 transition-all"></div><div class="relative p-6 space-y-6"><div class="flex items-center justify-between"><div class="flex items-center gap-4"><div class="p-3 bg-blue/10 rounded-2xl border border-blue/20 group-hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap w-6 h-6 text-blue-400" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></div><div><h3 class="text-lg font-bold text-white tracking-tight">Vercel Runtime</h3><div class="flex items-center gap-2"><div class="w-2 h-2 rounded-full bg-emerald-500 "></div><span class="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">ONLINE</span></div></div></div></div><div class="space-y-4"><div class="bg-black/40 rounded-2xl p-4 border border-white/5 space-y-4"><div class="flex items-center justify-between"><div><span class="text-[10px] font-mono text-zinc-500 uppercase block mb-1">Environment</span><p class="text-xs text-white font-mono">PRODUCTION</p></div><div class="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[8px] text-blue-400 font-mono uppercase tracking-widest">Optimized</div></div><div class="space-y-2 text-[10px] font-mono uppercase text-zinc-500"><div class="flex items-center gap-3 hover:text-white cursor-pointer transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right w-4 h-4 text-blue-500" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>Vercel Deployment Logs</div><div class="flex items-center gap-3 hover:text-white cursor-pointer transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right w-4 h-4 text-blue-500" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg>Runtime Metrics</div></div></div><button class="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all">Launch Vercel Console</button></div></div></div></div><div class="rounded-[2rem] bg-black/40 border border-white/5 p-8 relative overflow-hidden group"><div class="absolute top-0 left-0 w-1 h-full bg-cyan-500/20"></div><div class="flex items-center justify-between mb-8"><div class="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-terminal w-5 h-5 text-cyan-400" aria-hidden="true"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg><h4 class="text-xs font-bold text-white uppercase tracking-[0.3em]">System Telemetry Log</h4></div><div class="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Live Updates</div></div><div class="space-y-3 font-mono text-[10px]"><div class="flex gap-4 text-emerald-500 transition-all"><span class="text-zinc-600">[14:03:22]</span><span>INFRA: Supabase node handshake successful.</span></div><div class="flex gap-4 text-emerald-500 transition-all"><span class="text-zinc-600">[14:03:22]</span><span>INFRA: Supabase node handshake successful.</span></div><div class="flex gap-4 text-zinc-500 transition-all"><span class="text-zinc-600">[14:03:22]</span><span>SYSTEM: Initialization successful.</span></div><div class="flex gap-4 text-zinc-500 transition-all"><span class="text-zinc-600">[14:03:21]</span><span>SYSTEM: Initialization successful.</span></div></div></div></div></div></div><div class="fixed bottom-24 right-6 left-6 md:left-auto md:right-12 z-50 flex flex-col items-end gap-4 pointer-events-none"><button class="pointer-events-auto p-4 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all group relative"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-refresh-cw w-6 h-6 text-zinc-400 group-hover:text-cyan-400 transition-colors" aria-hidden="true"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg></button></div><nav class="fixed bottom-6 left-6 right-6 lg:left-1/2 lg:-translate-x-1/2 lg:max-w-sm z-50"><div class="bg-[#11111a]/80 backdrop-blur-2xl border border-white/10 rounded-full px-4 py-2 flex items-center justify-between shadow-[0_10px_40px_rgba(0,0,0,0.5)]"><button class="
        relative flex flex-col items-center justify-center p-3 rounded-full transition-all duration-300
        text-slate-500 hover:text-slate-300
      "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house w-5 h-5  transition-transform" aria-hidden="true"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg></button><button class="
        relative flex flex-col items-center justify-center p-3 rounded-full transition-all duration-300
        text-slate-500 hover:text-slate-300
      "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book w-5 h-5  transition-transform" aria-hidden="true"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path></svg></button><button class="
        relative flex flex-col items-center justify-center p-3 rounded-full transition-all duration-300
        text-cyan-400 bg-cyan-500/10
      "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity w-5 h-5 scale-110 transition-transform" aria-hidden="true"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg><div class="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.2)] pointer-events-none" style="transform: none; transform-origin: 50% 50% 0px;"></div></button><button class="
        relative flex flex-col items-center justify-center p-3 rounded-full transition-all duration-300
        text-slate-500 hover:text-slate-300
      "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-grid w-5 h-5  transition-transform" aria-hidden="true"><rect width="7" height="7" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="14" rx="1"></rect><rect width="7" height="7" x="3" y="14" rx="1"></rect></svg></button></div></nav><footer class="hidden lg:block fixed bottom-8 right-12 opacity-30 hover:opacity-100 transition-opacity"><p class="text-[10px] font-mono text-slate-500 uppercase tracking-widest cursor-default">Synthesis Terminal // Core Sync Established</p></footer></div></div>
    <script type="module" src="/src/main.tsx"></script>
  


</body></html>