import { useContext } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useApi, ApiContext } from './ApiContext';

describe('ApiContext', () => {
  it('should have a useApi method', () => {
    const hook = renderHook(useApi);
    const context = renderHook(() => useContext(ApiContext));
    expect(hook.result.current).toBe(context.result.current);
  });
});
