export default function Avatar({ size }) {
  let width = "w-12";
  if (size === "lg") {
    width = "w-24 md:w-36";
  }
  return (
    <div className={`${width} rounded-full overflow-hidden`}>
      <img src="https://picsum.photos/200" />
    </div>
  );
}
