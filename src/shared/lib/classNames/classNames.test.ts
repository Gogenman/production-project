import { classNames } from 'shared/lib/classNames/classNames'

describe('classNames', () => {
    test('test with additional class', () => {
        const expected = 'someClass class1 class2'
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
    })

    test('test with onle one param', () => {
        expect(classNames('someClass', {}, [])).toBe('someClass')
    })

    test('test with mods', () => {
        const expected = 'someClass class1 class2 hovered scrollable'
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true }, // mods
            ['class1', 'class2'],
        )).toBe(expected)
    })

    test('test with one mod', () => {
        const expected = 'someClass class1 class2 hovered'
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false }, // mods
            ['class1', 'class2'],
        )).toBe(expected)
    })

    test('test with undefined mod', () => {
        const expected = 'someClass class1 class2 hovered'
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: undefined }, // mods
            ['class1', 'class2'],
        )).toBe(expected)
    })
})
