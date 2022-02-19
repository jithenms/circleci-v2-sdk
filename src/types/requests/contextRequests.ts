export type ListContextsRequest = {
    /** The unique ID of the owner of the context. Specify either this or owner-slug. */
    ownerId?: string;
    /** A string that represents an organization. Specify either this or owner-id. Cannot be used for accounts. */
    ownerSlug?: string;
    /** The type of the owner. Defaults to "organization". Accounts are only used as context owners in server. */
    ownerType?: 'account' | 'organization';
    /** A token to retrieve the next page of results. */
    pageToken?: string;
}

export type CreateContextRequest = {
    /** @description The user defined name of the context. */
    name: string;
    owner:
    | {
        /**
         * Format: uuid
         * @description The unique ID of the owner of the context. Specify either this or slug.
         */
        id: string;
        /**
         * @description The type of the owner. Defaults to "organization". Accounts are only used as context owners in server.
         * @example organization
         * @enum {string}
         */
        type?: 'account' | 'organization';
    }
    | {
        /** @description A string that represents an organization. Specify either this or id. Cannot be used for accounts. */
        slug: string;
        /**
         * @description The type of owner. Defaults to "organization". Accounts are only used as context owners in server and must be specified by an id instead of a slug.
         * @enum {string}
         */
        type?: 'organization';
    };
}

export type DeleteContextRequest = {
    /** ID of the context (UUID) */
    contextId: string;
}

export type GetContextRequest = {
    /** ID of the context (UUID) */
    contextId: string;
}

export type ListEnvVariablesRequest = {
    /** ID of the context (UUID) */
    contextId: string;
}

export type DeleteEnvVariableRequest = {
    /** ID of the context (UUID) */
    contextId: string;
    /** The name of the environment variable */
    envVarName: string;
}


export type AddEnvVariableRequest = {
    /** ID of the context (UUID) */
    contextId: string;
    /** The name of the environment variable */
    envVarName: string;
    /**
 * @description The value of the environment variable
 * @example some-secret-value
 */
    envValue: string;
}

