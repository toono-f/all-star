---
to: src/components/page/<%= h.changeCase.pascal(pagePath); %>/index.tsx
---
export { <%= h.changeCase.pascal(pagePath); %> } from "@/components/page/<%= h.changeCase.pascal(pagePath); %>/<%= h.changeCase.pascal(pagePath); %>";