export const getPosts = async () => {
    const response = await fetch("/api/posts");
    return response.json();
};

const DateNow = Date.now(); 

export const fakePosts = [
    {
        content:'post1',
        author: 'yakov',
        likes: '0',
        comments: [],
        timeOfUpload: new Date(DateNow).toString().substr(4, 11)
    },
    {
        content:'post2',
        author: 'yakov',
        likes: '0',
        comments: [],
        timeOfUpload: new Date(DateNow).toString().substr(4, 11)

    }
]
