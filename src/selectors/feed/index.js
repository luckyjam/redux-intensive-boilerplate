// Core
import { createSelector } from 'reselect';

const postsIds = (state) => state.result;
const postsMap = (state) => state.entities.get('posts');
const authorsMap = (state) => state.entities.get('authors');

const getAuthorShape = createSelector(
    (state) => state,
    (author) => ({
        firstName: author.get('firstName'),
        lastName:  author.get('lastName'),
        avatar:    author.get('avatar')
    })
);

const getLikesShape = createSelector(
    (state) => state.likes,
    (state) => state.authors,
    (likes, authors) =>
        likes.map((liker) => ({
            id:        liker,
            firstName: authors.getIn([liker, 'firstName']),
            lastName:  authors.getIn([liker, 'lastName'])
        }))
);

export const getPosts = createSelector(
    postsIds,
    postsMap,
    authorsMap,
    (ids, posts, authors) =>
        ids
            .map((id) =>
                posts
                    .get(id)
                    .merge(
                        authors
                            .get(posts.getIn([id, 'author']))
                            .update((author) => getAuthorShape(author))
                    )
                    .update('likes', (likes) => getLikesShape({ likes, authors }))
                    .delete('groupId')
            )
            .toJS()
);

export const getAuthors = createSelector(authorsMap, (authors) => authors.toJS());
