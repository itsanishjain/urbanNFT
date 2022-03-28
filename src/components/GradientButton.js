
export default function GradientButton({ text, onClick }) {
  return (
    <div
      className="max-w-sm rounded-lg bg-gradient-to-r from-yellow-300 to-yellow-500 text-center font-semibold text-lg"
      onClick={onClick}
    >
      <span className="block px-2 py-4 rounded-lg bg-gradient-to-r from-yellow-300 to-yellow-500 text-xl text-white  cursor-pointer">
        {text}
      </span>
    </div>
  );
}
