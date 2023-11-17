
export default function SubmitButton({ text, type, onClick, disabled }) {
  return (
    <button
      className="avant-garde-bold font-bold bg-Az5 text-gray px-6 py-3 rounded-full transition duration-300 hover:shadow-md hover:underline w-40 flex justify-center"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

