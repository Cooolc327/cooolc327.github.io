interface Props {
  html: string;
}

export function MdxContent({ html }: Props) {
  return (
    <div
      className="prose max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
