import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import "./highlight_styles.css";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";

SyntaxHighlighter.registerLanguage("javascript", jsx);

export default function JsHighlighter(props: { children: React.ReactNode }) {
  const Highlighter = SyntaxHighlighter as any;
  return (
    <div className="not-prose overflow-y-scroll rounded-lg mb-2 max-md:py-4 max-md:bg-zinc-100 dark:max-md:bg-zinc-900">
      <Highlighter
        showLineNumbers
        language="javascript"
        useInlineStyles={false}
      >
        {props.children}
      </Highlighter>
    </div>
  );
}
