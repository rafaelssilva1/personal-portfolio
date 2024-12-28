type BaseType = {
    databaseId: string;
    title: string;
    content: string;
    excerpt?: string;
};

type DateType = {
    startDate: string;
    endDate?: string;
};

type OrderType = {
    order?: number;
};

export type WorkType = {
    company?: string;
} & BaseType & DateType & OrderType;

export type EducationType = {
    school: string;
    grade?: string;
} & BaseType & DateType & OrderType;

export type ProjectType = {
    technologies: IconType[];
    featuredImage: {
        node: {
            sourceUrl: string;
            altText?: string;
        }
    }
    projectLink?: string
} & BaseType & OrderType;

export type IconType = {
    title: string;
    icon: string;
    link?: string;
    order?: number;
};