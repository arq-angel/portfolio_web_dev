import type {ISectionId} from "@/types/navigation.types.ts";

interface IProject {
    id: number;
    title: string;
    description: string;
    url: ISectionId;
}

export interface IHero {
    title: string;
    description: string;
    links: IProject[];
}

