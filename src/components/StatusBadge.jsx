function StatusBadge({ isOpen }) {
  return (
    <span
      className={`inline-block rounded-full border px-3 py-1.5 text-sm font-semibold ${
        isOpen
          ? 'border-green-300 bg-green-100 text-green-700'
          : 'border-gray-300 bg-gray-100 text-gray-600'
      }`}
    >
      {isOpen ? 'Open to work' : 'Busy learning'}
    </span>
  );
}

export default StatusBadge;
