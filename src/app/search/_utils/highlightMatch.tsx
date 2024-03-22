export const highlightMatch = (text: string, highlight: string) => {
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));

  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={index} className="text-primary">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
};
