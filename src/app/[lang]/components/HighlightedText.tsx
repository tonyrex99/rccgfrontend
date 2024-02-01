interface HighlightedTextProps {
  text: string;
  classNames?: string;
  color?: string;
  style?: object;
}

export default function HighlightedText({
  text,
  classNames,
  color,
  style,
}: HighlightedTextProps) {
  /**
  const tempText = text.split(" ");
  let result = [];

  result.push(`<${tag} class="${className ? className : ""}">`);

  tempText.forEach((word: string, index: number) => {
    if (word.includes("[")) {
      const highlight = word.replace("[", "").replace("]", "");
      result.push(
        `<span key=${index} class="${color ? color : ""}">${highlight}</span> `
      );
    } else result.push(word + " ");
  });

  result.push(`</${tag}>`);
 */
  return (
    <div
      className={classNames + " " + color}
      style={style}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}
