interface serverObj {
    members: [string]
    serverOwner: {
        name: string
        email: string
    }
    serverName: string
    serverPhoto: string
    createdAt: firestore.timestamp
}
