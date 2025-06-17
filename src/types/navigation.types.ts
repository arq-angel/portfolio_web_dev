export type ISectionId =
    | "hero"
    | "about"
    | "skills"
    | "experience"
    | "projects"
    | "services"
    | "testimonials"
    | "contact";

export interface ISection {
    id: ISectionId;
    label: string;
}


