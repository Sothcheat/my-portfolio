import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import SkillTag from "@/components/SkillTag";
import StatusBadge from "@/components/StatusBadge";

const name = "Bunna Sothcheat";
const goal =
    "My goal with this course is to be able to create functional, interactive and dynamic websites with React and Tailwind.";

const skills = ["React", "Tailwind CSS", "JavaScript", "UX/UI", "Git"];

function App() {
    return (
        <div className="min-h-screen bg-white px-4 py-12 md:px-8 md:py-16">
            <div className="mx-auto max-w-5xl">
                <header className="mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">{name}</h1>
                    <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-700">{goal}</p>
                </header>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <main className="md:order-2 md:col-span-2">
                        <Section title="Projects">
                            <div className="grid grid-cols-1 gap-6">
                                <ProjectCard
                                    title="Personal Portfolio"
                                    description="React 19 + Tailwind v4 + Shadcn"
                                    status="inProgress"
                                    href="https://github.com/Sothcheat/my-portfolio.git"
                                >
                                    A responsive portfolio built with Vite and styled entirely with
                                    Tailwind utilities, using shadcn/ui for the card primitives.
                                </ProjectCard>

                                <ProjectCard
                                    title="Course Exercises"
                                    description="JavaScript fundamentals"
                                    status="completed"
                                    href="https://github.com/Sothcheat/blackjack-game-project.git"
                                >
                                    A collection of smaller builds working through components, props
                                    and conditional rendering one concept at a time.
                                </ProjectCard>
                            </div>
                        </Section>
                    </main>

                    <aside className="md:order-1 md:col-span-1">
                        <Section title="Availability">
                            <StatusBadge status="busy" />
                        </Section>

                        <Section title="Skills">
                            <ul className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <SkillTag key={skill} label={skill} />
                                ))}
                            </ul>
                        </Section>

                        <Section title="Contact">
                            <a
                                className="text-sm text-indigo-600 transition-colors duration-200 hover:text-indigo-700 hover:underline"
                                href="mailto:sothcheatbunna1608@gmail.com"
                            >
                                sothcheatbunna1608@gmail.com
                            </a>
                        </Section>
                    </aside>
                </div>
            </div>
        </div>
    );
}

export default App;
