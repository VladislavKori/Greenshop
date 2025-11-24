export type BlogCardProps = {
    id: string;
    preview: string;
    title: string;
    description: string;
    readTimeMin: number;
    createdAt: string;
    type?: "card" | "row";
}