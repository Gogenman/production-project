/* eslint-disable linebreak-style */
import { classNames } from './classNames'

describe('classNames', () => {
    test('test with additional class', () => {
        const expected = 'someClass class1 class2'
        expect(classNames({ cls: 'someClass', mods: {}, additional: ['class1', 'class2'] })).toBe(expected)
    })

    test('test with onle one param', () => {
        expect(classNames({ cls: 'someClass', mods: {}, additional: [] })).toBe('someClass')
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
            { cls: 'someClass', mods: { hovered: true, scrollable: false }, additional: ['class1', 'class2'] },
        )).toBe(expected)
    })

    test('test with undefined mod', () => {
        const expected = 'someClass class1 class2 hovered'
        expect(classNames(
            { cls: 'someClass', mods: { hovered: true, scrollable: undefined }, additional: ['class1', 'class2'] },
        )).toBe(expected)
    })
})
