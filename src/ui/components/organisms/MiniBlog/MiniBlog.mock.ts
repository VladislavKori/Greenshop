import type { BlogCardProps } from "@ui/components/molecules";

import Preview1 from "@ui/assets/blog/preview1.png";
import Preview2 from "@ui/assets/blog/preview2.png";
import Preview3 from "@ui/assets/blog/preview3.png";
import Preview4 from "@ui/assets/blog/preview4.png";

export const MiniBlogMockData: BlogCardProps[] = [
    {
        id: "1",
        preview: Preview1,
        title: "Уход за розами: секреты пышного цветения",
        description: "Полное руководство по выращиванию роз в саду: от посадки до обрезки и защиты от вредителей.",
        readTimeMin: 7,
        createdAt: "2025-11-20T09:00:00Z",
    },
    {
        id: "2",
        preview: Preview2,
        title: "Тюльпаны весной: сорта и советы по посадке",
        description: "Лучшие сорта тюльпанов и инструкции по правильной посадке, чтобы ваш сад зацвел яркими красками.",
        readTimeMin: 5,
        createdAt: "2025-11-18T15:30:00Z",
    },
    {
        id: "3",
        preview: Preview3,
        title: "Комнатные растения для новичков",
        description: "Подборка неприхотливых растений для дома, которые помогут создать уют и улучшить воздух в помещении.",
        readTimeMin: 6,
        createdAt: "2025-11-22T11:15:00Z",
    },
    {
        id: "4",
        preview: Preview4,
        title: "Секреты ухода за орхидеями",
        description: "Как правильно поливать, пересаживать и обеспечивать орхидеи светом, чтобы они цвели круглый год.",
        readTimeMin: 8,
        createdAt: "2025-11-21T13:45:00Z",
    },
]
