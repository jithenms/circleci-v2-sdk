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

export type ListContextsResponse = {
    items: {
        /**
         * Format: uuid
         * @description The unique ID of the context.
         */
        id: string;
        /** @description The user defined name of the context. */
        name: string;
        /**
         * Format: date-time
         * @description The date and time the context was created.
         * @example 2015-09-21T17:29:21.042Z
         */
        created_at: string;
    }[];
    /** @description A token to pass as a `page-token` query parameter to return the next page of results. */
    next_page_token: string;
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

export type CreateContextResponse = {
    /**
 * Format: uuid
 * @description The unique ID of the context.
 */
    id: string;
    /** @description The user defined name of the context. */
    name: string;
    /**
     * Format: date-time
     * @description The date and time the context was created.
     * @example 2015-09-21T17:29:21.042Z
     */
    created_at: string;
};

export type DeleteContextRequest = {
    /** ID of the context (UUID) */
    contextId: string;
}

export type DeleteContextResponse = {
    /** @description A human-readable message */
    message: string;
}

export type GetContextRequest = {
    /** ID of the context (UUID) */
    contextId: string;
}

export type GetContextResponse = {
    /**
 * Format: uuid
 * @description The unique ID of the context.
 */
    id: string;
    /** @description The user defined name of the context. */
    name: string;
    /**
     * Format: date-time
     * @description The date and time the context was created.
     * @example 2015-09-21T17:29:21.042Z
     */
    created_at: string;
}

export type ListEnvVariablesRequest = {
    /** ID of the context (UUID) */
    contextId: string;
}

export type ListEnvVariablesResponse = {
    items: {
        /**
         * @description The name of the environment variable
         * @example POSTGRES_USER
         */
        variable: string;
        /**
         * Format: date-time
         * @description The date and time the environment variable was created.
         * @example 2015-09-21T17:29:21.042Z
         */
        created_at: string;
        /**
         * Format: uuid
         * @description ID of the context (UUID)
         */
        context_id: string;
    }[];
    /** @description A token to pass as a `page-token` query parameter to return the next page of results. */
    next_page_token: string;
}

export type DeleteEnvVariableRequest = {
    /** ID of the context (UUID) */
    contextId: string;
    /** The name of the environment variable */
    envVarName: string;
}

export type DeleteEnvVariableResponse = {
    /** @description A human-readable message */
    message: string;
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


export type AddEnvVariableResponse =
    Partial<{
        /**
         * @description The name of the environment variable
         * @example POSTGRES_USER
         */
        variable: string;
        /**
         * Format: date-time
         * @description The date and time the environment variable was created.
         * @example 2015-09-21T17:29:21.042Z
         */
        created_at: string;
        /**
         * Format: uuid
         * @description ID of the context (UUID)
         */
        context_id: string;
    }> &
    Partial<{
        /** @description A human-readable message */
        message: string;
    }>;
