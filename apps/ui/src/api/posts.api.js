export const getPosts = async () => {
    const response = await fetch("/api/posts");
    return response.json();
};
