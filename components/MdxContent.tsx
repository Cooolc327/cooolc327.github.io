interface Props {
  html: string;
}

export function MdxContent({ html }: Props) {
  return (
    <div
      className="prose dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
