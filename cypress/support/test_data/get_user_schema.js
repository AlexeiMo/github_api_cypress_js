export const getUserSchema = {
    $id: "getUserSchema",
    type: "object",
    properties: {
        id: {
            type: "number"
        },
        node_id: {
            type: "string"
        },
        type: {
            type: "string"
        },
        site_admin: {
            type: "boolean"
        },
        name: {
            type: "string"
        },
        company: {
            type: "string"
        },
        blog: {
            type: "string"
        },
        location: {
            type: "string"
        },
        email: {
            type: "string"
        },
        public_repos: {
            type: "number"
        },
        public_gists: {
            type: "number"
        },
        followers: {
            type: "number"
        },
        following: {
            type: "number"
        },
        created_at: {
            type: "string"
        },
        updated_at: {
            type: "string"
        }
    },
    required: [
        "id",
        "node_id",
        "type",
        "site_admin",
        "name",
        "company",
        "blog",
        "location",
        "email",
        "public_repos",
        "public_gists",
        "followers",
        "created_at",
        "updated_at"
    ]
}
