import StatusBadge from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

function ProjectCard({ title, description, status, href, children }) {
    return (
        <Card className="transition-shadow duration-200 hover:shadow-lg">
            <CardHeader>
                <CardTitle className="text-base font-semibold text-gray-900">{title}</CardTitle>
                <CardDescription className="text-gray-500">{description}</CardDescription>
                <div className="mt-2">
                    <StatusBadge status={status} />
                </div>
            </CardHeader>

            <CardContent className="leading-relaxed text-gray-700">{children}</CardContent>

            <CardFooter>
                <Button
                    asChild
                    className="bg-indigo-600 transition-colors duration-200 hover:bg-indigo-700"
                >
                    <a href={href} target="_blank">
                        View project
                    </a>
                </Button>
            </CardFooter>
        </Card>
    );
}

export default ProjectCard;
