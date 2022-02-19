import { Message } from "../src/types/common";
import { AddedEnvVariable, Context, ContextList, EnvVariableList } from "../src/types/data/contextData";


export const mockListContexts: ContextList = {
    "items": [
        {
            "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            "name": "string",
            "created_at": "2015-09-21T17:29:21.042Z"
        }
    ],
    "next_page_token": "string"
}

export const mockCreateContext: Context = {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "created_at": "2015-09-21T17:29:21.042Z"
}

export const mockDeleteContext: Message = {
    "message": "string"
}

export const mockGetContext: Context = {
    "id": "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    "name": "string",
    "created_at": "2015-09-21T17:29:21.042Z"
}

export const mockListEnvsFromContext: EnvVariableList = {
    "items": [
        {
            "variable": "POSTGRES_USER",
            "created_at": "2015-09-21T17:29:21.042Z",
            "context_id": "f31d7249-b7b1-4729-b3a4-ec0ba07b4686"
        }
    ],
    "next_page_token": "string"
}

export const mockDeleteEnvFromContext: Message = {
    "message": "string"
}

export const mockAddEnvToContext: AddedEnvVariable = {
    "variable": "POSTGRES_USER",
    "created_at": "2015-09-21T17:29:21.042Z",
    "context_id": "f31d7249-b7b1-4729-b3a4-ec0ba07b4686"
}