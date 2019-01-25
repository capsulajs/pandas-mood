import { Subject } from 'rxjs';
import * as firebaseUtils from './firebase';
import { Post } from '../api/Post';

export const mockGetFirebaseItem = ({
} = {}) => {
  const postsRefSubject = new Subject();
  (firebaseUtils as any).getFirebaseItem = jest.fn((itemName) => {
    switch (itemName) {
      case 'postsRef': {
        return {
          on: (type: any, callback: any) => {
            postsRefSubject.subscribe((posts: Post[]) => {
              callback({
                val: () => posts.reduce((postsMap, post) => {
                  return {
                    ...postsMap,
                    [post.postId]: post
                  }
                }, {})
              })
            });
          }
        }
      }

      default: {
        return {};
      }
    }
  });

  return { postsRefSubject };
};

export const expectWithFailNow = (expect: any, done: any) => {
  try {
    expect();
  } catch (error) {
    done.fail(error);
  }
};



