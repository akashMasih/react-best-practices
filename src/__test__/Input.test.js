import { fireEvent, render, screen } from '@testing-library/react'
import Input from '../components/todo/Input'
import '@testing-library/jest-dom'



describe("Basic Tests of Input Field", () => {
    test("Render Input Field", () => {
        render(<Input />)
        const input = screen.getByTestId("input-container")
        expect(input).toBeInTheDocument();
    })

    test("onChange", () => {
        render(<Input />)
        const input = screen.getByTestId("input")
        fireEvent.change(input, { target: { value: "A" } })
        expect(input).toHaveValue("A")
    })
})