export const register = async (data) => {
    const response = await fetch({
        url: "/api/register",
        method: "post",
        body: JSON.stringify(data)
    });
    return response.json();
};