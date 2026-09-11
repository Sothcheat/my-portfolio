function SkillTag({ label }) {
    return (
        <li className="rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-700 transition-colors duration-200 hover:bg-indigo-100 hover:text-indigo-700">
            {label}
        </li>
    );
}

export default SkillTag;
