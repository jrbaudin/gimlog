import Logger from './index'

describe('#Logger', () => {
    test('test', () => {
        Logger.info('test', 'test again')
        expect(1).toBe(1)
    })
})
