const createEventBus = require('../tasks/7-event-bus');

describe('EventBus', () => {
  let eventBus;

  beforeEach(() => {
    eventBus = createEventBus();
  });

  it('должен регистрировать и вызывать обработчики событий', () => {
    const mockCallback = jest.fn();
    
    eventBus.on('test', mockCallback);
    eventBus.emit('test', 1, 2, 3);
    
    expect(mockCallback).toHaveBeenCalledWith(1, 2, 3);
  });

  it('должен удалять обработчики событий', () => {
    const mockCallback = jest.fn();
    
    eventBus.on('test', mockCallback);
    eventBus.off('test', mockCallback);
    eventBus.emit('test');
    
    expect(mockCallback).not.toHaveBeenCalled();
  });

  it('должен обрабатывать несколько обработчиков для одного события', () => {
    const mockCallback1 = jest.fn();
    const mockCallback2 = jest.fn();
    
    eventBus.on('test', mockCallback1);
    eventBus.on('test', mockCallback2);
    eventBus.emit('test');
    
    expect(mockCallback1).toHaveBeenCalled();
    expect(mockCallback2).toHaveBeenCalled();
  });

  it('должен выбрасывать ошибку при передаче невалидного callback в on', () => {
    expect(() => eventBus.on('test', 'not a function')).toThrow();
  });

  it('должен игнорировать вызов emit для несуществующих событий', () => {
    expect(() => eventBus.emit('unknown')).not.toThrow();
  });
}); 