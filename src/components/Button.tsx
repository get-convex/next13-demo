export default function Button({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="bg-gray-300 dark:bg-gray-700 leading-4 py-1 px-4 rounded-md h-8 hover:bg-gray-400 dark:hover:bg-gray-600"
      onClick={onClick}
    >
      Increment
    </button>
  );
}
