import ReportService from '../ReportService';
import { ReportResponse } from '../../api/ReportService';
import postsMock from '../../../__mocks__/reports';
import { mockGetFirebaseItem, expectWithFailNow } from '../../utils/testUtils';

describe('ReportService tests', () => {
  it('ReportRequest method calls for and receiving a valid response from ReportResponse subscription', (done) => {
    expect.assertions(19);
    const { postsRefSubject } = mockGetFirebaseItem();
    const reportService = new ReportService();
    let updates = 0;
    reportService
      .report({ filterFn: () => true })
      .subscribe((data: ReportResponse) => {
        expectWithFailNow(() => expect(data).toEqual({ post: postsMock[updates] }), done);
        expectWithFailNow(() => expect(data.post).toEqual(
          expect.objectContaining({
            postId: expect.any(Number),
            authorId: expect.any(String),
            authorName: expect.any(String),
            publicationTime: expect.any(Number),
            mood: expect.any(Number),
            message: expect.any(String),
            popularity: expect.any(Number)
          })
        ), done);
        (data.post.tags || []).forEach((tag) =>
          expectWithFailNow(() => expect(typeof tag === 'string').toBeTruthy(), done)
        );
        data.post.relatedUsers.forEach((userId) =>
          expectWithFailNow(() => expect(typeof userId === 'string').toBeTruthy(), done)
        );
        expectWithFailNow(() => expect(Object.keys(data.post).length).toBe(9), done);
        updates++;
        expectWithFailNow(() => expect(updates < 5), done);
      });

    postsRefSubject.next(postsMock);

    setTimeout(done, 1000);
  });
});
