export default function DiagonalBackgroundShapes({ variant }) {
  return (
    <>
      <div className={`bg-shape-1 ${variant === "bw" ? "bw" : ""}`} />
      <div className={`bg-shape-2 ${variant === "bw" ? "bw" : ""}`} />
    </>
  );
}
