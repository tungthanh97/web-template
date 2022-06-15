export default {
  isAxiosError: jest.fn(),
  create: jest.fn(() => ({
    get: jest.fn(() => Promise.resolve({ data: {} })),
    post: jest.fn(() => Promise.resolve({ data: {} })),
    put: jest.fn(() => Promise.resolve({ data: {} }))
  })),
  get: jest.fn(() => Promise.resolve({ data: {} })),
  post: jest.fn(() => Promise.resolve({ data: {} })),
  put: jest.fn(() => Promise.resolve({ data: {} })),
  interceptors: {
    response: {
      use: jest.fn(() => Promise.resolve({}))
    },
    request: {
      use: jest.fn(() => Promise.resolve({}))
    }
  }
};
