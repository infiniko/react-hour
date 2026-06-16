export type LanguageEdge = {
    node: {
        name: string;
    };
    size: number;
};

export type Repository = {
    name: string;
    description: string | null;
    stargazerCount: number;
    forkCount: number;
    url: string;
    languages: {
        edges: LanguageEdge[];
    };
};

export type User = {
    name: string | null;
    avatarUrl: string;
    bio: string | null;
    url: string;
    repositories: {
        totalCount: number;
        nodes: Repository[];
    };
    followers: {
        totalCount: number;
    };
    following: {
        totalCount: number;
    };
    gists: {
        totalCount: number;
    };
};

export type UserData = {
    user: User | null;
};

export interface UserVariables {
    login: string;
}