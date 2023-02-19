import React from "react";

import { Top } from "@/components/page/Top";
import { BasicLayout } from "@/layouts/BasicLayout";

const Page = () => <Top />;

Page.getLayout = BasicLayout;

export default Page;
