export default function ErrorMessage({ message }) {
  return (
    <div className="text-red-600 font-semibold text-center mt-10">
      ⚠️ Error: {message}
    </div>
  );
}
