export function NivewayButton({
  embedSrc = "https://app.niveway.com/api/public/embed/bfc576cd-9eb3-4c1e-91ce-248caaa7cdda",
}: {
  embedSrc?: string;
}) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<button type="button" class="niveway-btn">Reservar ahora</button><script src="${embedSrc}"></script>`,
      }}
    />
  );
}
