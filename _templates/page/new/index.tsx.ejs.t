---
to: src/pages/<%= pagePath %>/index.tsx
---
import { <%= h.changeCase.pascal(pagePath); %> } from "@/components/page/<%= h.changeCase.pascal(pagePath); %>";
import { BasicLayout } from "@/layouts/BasicLayout";

const Page = () => <<%= h.changeCase.pascal(pagePath); %> />;

Page.getLayout = BasicLayout;

export default Page;
