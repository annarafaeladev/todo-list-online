export const getUserToken = (): string | null => {
    const storageUser: string = localStorage.getItem("user") ?? '{}';
    const user: { token: string } = JSON.parse(storageUser);

    return user.token ?? null;
}