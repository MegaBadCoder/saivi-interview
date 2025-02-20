const fetchSequentially = require('../tasks/1-promise-chain');

describe('fetchSequentially', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it('должен выполнять запросы последовательно', async () => {
    const urls = [
      'https://api.example.com/1',
      'https://api.example.com/2',
      'https://api.example.com/3'
    ];
    
    global.fetch
      .mockImplementationOnce(() => Promise.resolve({ json: () => Promise.resolve({ id: 1 }) }))
      .mockImplementationOnce(() => Promise.resolve({ json: () => Promise.resolve({ id: 2 }) }))
      .mockImplementationOnce(() => Promise.resolve({ json: () => Promise.resolve({ id: 3 }) }));

    const results = await fetchSequentially(urls);
    
    expect(results).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
    expect(fetch).toHaveBeenCalledTimes(3);
    
    expect(fetch.mock.calls[0][0]).toBe(urls[0]);
    expect(fetch.mock.calls[1][0]).toBe(urls[1]);
    expect(fetch.mock.calls[2][0]).toBe(urls[2]);
  });

  it('должен обрабатывать пустой массив', async () => {
    const results = await fetchSequentially([]);
    expect(results).toEqual([]);
    expect(fetch).not.toHaveBeenCalled();
  });

  it('должен обрабатывать ошибки', async () => {
    const urls = ['https://api.example.com/error'];
    global.fetch.mockImplementationOnce(() => Promise.reject(new Error('Network error')));

    await expect(fetchSequentially(urls)).rejects.toThrow('Network error');
  });
}); 