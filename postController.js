const posts = [
    { id: 1, title: 'Post One' },
    { id: 2, title: 'Post Two' },
];

export const getPostsLength = () => getPosts.length;

const getPosts = () => posts;

export default getPosts;