## 2025-05-15 - Improving Header Accessibility and Fixing Icon Rendering
**Learning:** Icon-only interactive elements (buttons, links) in the Inspinia theme often lack descriptive ARIA labels, which is a major accessibility barrier for screen reader users. Additionally, minor typos in font-awesome class names (like 'clfa' instead of 'fa') can completely break icon rendering without being immediately obvious in the code.
**Action:** Always check for 'aria-label' on elements that don't have visible text and double-check font-awesome class prefixes during UI reviews.
