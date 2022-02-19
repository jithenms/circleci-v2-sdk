export type Context = {
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

export type ContextList = {
    items: Context[]
    /** @description A token to pass as a `page-token` query parameter to return the next page of results. */
    next_page_token: string;
}

export type EnvVariable = {
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
}

export type EnvVariableList = {
    items: EnvVariable[]
    /** @description A token to pass as a `page-token` query parameter to return the next page of results. */
    next_page_token: string;
}

export type AddedEnvVariable = Partial<{
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