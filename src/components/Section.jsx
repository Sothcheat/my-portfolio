function Section({ title, children }) {
    return (
        <section className="mb-12">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">{title}</h2>
            {children}
        </section>
    );
}

export default Section;
