// Core
import { all } from 'redux-saga/effects';

// Instruments
import auth from './auth';
import feed from './feed';
import profile from './profile';

export function* saga () {
    yield all([
        auth.signupWatcher(),
        auth.loginWatcher(),
        auth.logoutWatcher(),
        feed.fetchPostsWatcher(),
        feed.createPostWatcher(),
        feed.deletePostWatcher(),
        feed.likePostWatcher(),
        profile.updateProfileWatcher(),
        profile.updateAvatarWatcher()
    ]);
}
