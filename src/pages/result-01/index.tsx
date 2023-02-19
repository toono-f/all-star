import { Result } from "@/components/page/Result";
import { BasicLayout } from "@/layouts/BasicLayout";

const Page = () => <Result sheetNumber={1} answerNumber={1} />;

Page.getLayout = BasicLayout;

export default Page;
