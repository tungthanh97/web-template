describe('app ', () => {
  it('should mount correctly', () => {
    process.env.REACT_APP_API_SERVER_URL = 'http://localhost:3000';

    expect(true).toBeTruthy();
  });
});
