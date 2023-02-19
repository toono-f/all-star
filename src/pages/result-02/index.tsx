import { Result } from "@/components/page/Result";
import { BasicLayout } from "@/layouts/BasicLayout";

const Page = () => <Result sheetNumber={2} answerNumber={2} />;

Page.getLayout = BasicLayout;

export default Page;
