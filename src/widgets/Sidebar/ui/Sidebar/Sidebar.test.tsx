import { fireEvent, screen } from '@testing-library/react'
import { renderWithTranslations } from 'shared/lib/renderWIthTranslations/renderWithTranslations'
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar'

describe('Sidebar', () => {
    test('test render', () => {
        renderWithTranslations(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('test toggle', () => {
        renderWithTranslations(<Sidebar />)
        const toggleBtn = screen.getByTestId('sidebar-toggle')
        const sidebar = screen.getByTestId('sidebar')
        expect(toggleBtn).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(sidebar).toHaveClass('collapse')
    })
})
