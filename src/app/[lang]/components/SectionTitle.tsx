import HighlightedText from "./HighlightedText";

/***/
function SectionTitle({ data }: any) {
  return (
    <section>
      <div className="min-h-116px mx=auto p-6 w-auto whitespace-normal break-words">
        <HighlightedText
          text={data?.title}
          classNames="text-4xl font-bold leading-none mb-8  "
          color="dark:text-secondary"
        />
      </div>
    </section>
  );
}

export default SectionTitle;
