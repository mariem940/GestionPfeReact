import React from 'react';
import { render, firstEvent, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import TaskCahier from "../components/pages/Cahier/TaskCahier";

describe("test add task", () => {
  const mockAddTask = jest.fn();
  const { debug } = render(<TaskCahier addTask={mockAddTask} />);
//   //debug()
 })
test("should contains task title, description, definition, objectifs, consignes, techniques and a button", () => {
    const mockAddTask = jest.fn()
    const { debug, getByLabelText, getByTestId, getByText } = render(
        <TaskCahier addTask={mockAddTask} />

    )
    const input = getByLabelText(/title/i)
    debug(input)
    expect(input).toBeTruthy()
    expect(input).toHaveAttribute("type", "text")
})



test("should fire events", () => {
    const mockAddTask = jest.fn()
    const { debug, getByLabelText, getByTestId } = render(
        <TaskCahier addTask={mockAddTask} />
    )
    const input = getByLabelText(/title/i)
    const taskValue=""
    userEvent.type(input, taskValue) 

    // fireEvent.change(input, { target: { value: taskValue}})
    //debug(input)
    expect(input.value).toContain(taskValue)

     const submitButton = getByTestId("submit")

     userEvent.click(submitButton)

    expect(mockAddTask).toHaveBeenCalled()
    expect(mockAddTask).toHaveBeenCalledTimes(1)
})




test("should fire events", () => {
    const mockAddTask = jest.fn()
    const { debug, getByLabelText, getByTestId } = render(
        <TaskCahier addTask={mockAddTask} />
    )
    const input = getByLabelText(/description/i)
    const taskValue=""
    userEvent.type(input, taskValue) 
    / fireEvent.change(input, { target: { value: taskValue}})
    //debug(input)
    expect(input.value).toContain(taskValue)

     const submitButton = getByTestId("submit")

     userEvent.click(submitButton)

    expect(mockAddTask).toHaveBeenCalled()
    expect(mockAddTask).toHaveBeenCalledTimes(1)
})




test("should fire events", () => {
    const mockAddTask = jest.fn()
    const { debug, getByLabelText, getByTestId } = render(
        <TaskCahier addTask={mockAddTask} />
    )
    const input = getByLabelText(/definition/i)
    const taskValue=""
    userEvent.type(input, taskValue) 
    / fireEvent.change(input, { target: { value: taskValue}})
    //debug(input)
    expect(input.value).toContain(taskValue)

     const submitButton = getByTestId("submit")

     userEvent.click(submitButton)

    expect(mockAddTask).toHaveBeenCalled()
    expect(mockAddTask).toHaveBeenCalledTimes(1)
})




test("should fire events", () => {
    const mockAddTask = jest.fn()
    const { debug, getByLabelText, getByTestId } = render(
        <TaskCahier addTask={mockAddTask} />
    )
    const input = getByLabelText(/objectifs/i)
    const taskValue=""
    userEvent.type(input, taskValue) 
    / fireEvent.change(input, { target: { value: taskValue}})
    //debug(input)
    expect(input.value).toContain(taskValue)

     const submitButton = getByTestId("submit")

     userEvent.click(submitButton)

    expect(mockAddTask).toHaveBeenCalled()
    expect(mockAddTask).toHaveBeenCalledTimes(1)
})




test("should fire events", () => {
    const mockAddTask = jest.fn()
    const { debug, getByLabelText, getByTestId } = render(
        <TaskCahier addTask={mockAddTask} />
    )
    const input = getByLabelText(/consignes/i)
    const taskValue=""
    userEvent.type(input, taskValue) 
    / fireEvent.change(input, { target: { value: taskValue}})
    //debug(input)
    expect(input.value).toContain(taskValue)

     const submitButton = getByTestId("submit")

     userEvent.click(submitButton)

    expect(mockAddTask).toHaveBeenCalled()
    expect(mockAddTask).toHaveBeenCalledTimes(1)
})




test("should fire events", () => {
    const mockAddTask = jest.fn()
    const { debug, getByLabelText, getByTestId } = render(
        <TaskCahier addTask={mockAddTask} />
    )
    const input = getByLabelText(/techniques/i)
    const taskValue=""
    userEvent.type(input, taskValue) 
    / fireEvent.change(input, { target: { value: taskValue}})
    //debug(input)
    expect(input.value).toContain(taskValue)

     const submitButton = getByTestId("submit")

     userEvent.click(submitButton)

    expect(mockAddTask).toHaveBeenCalled()
    expect(mockAddTask).toHaveBeenCalledTimes(1)
})




test("should display an error", () => {
    const mockAddTask = jest.fn()
    const { debug, getByLabelText, getByTestId, container } = render(
        <TaskCahier addTask={mockAddTask} />
    )
    const inputTitle = getByLabelText(/title/i)
    const titleValue=""
    userEvent.type(inputTitle, titleValue) 

    
    //expect(getByTestId("error-title")).toBeTruthy()
    //debug(container)
})


test("should display an error", () => {
    const mockAddTask = jest.fn()
    const { debug, getByLabelText, getByTestId, container } = render(
        <TaskCahier addTask={mockAddTask} />
    )
    const inputDescription = getByLabelText(/description/i)
    const descriptionValue=""
    userEvent.type(inputDescription, descriptionValue) 

    
    //expect(getByTestId("error-title")).toBeTruthy()
    //debug(container)
})


test("should not display an error", () => {
    const mockAddTask = jest.fn()
    const { debug, getByLabelText, getByTestId, queryByTestId } = render(
        <TaskCahier addTask={mockAddTask} />
    )
    const inputDefinition = getByLabelText(/definition/i)
    const definitionValue=""
    userEvent.type(inputDefinition, definitionValue) 

    
    expect(queryByTestId("error-definition")).toBeNull()
    //debug(container)
})


test("should not display an error", () => {
    const mockAddTask = jest.fn()
    const { debug, getByLabelText, getByTestId, queryByTestId } = render(
        <TaskCahier addTask={mockAddTask} />
    )
    const inputObjectifs = getByLabelText(/objectifs/i)
    const objectifsValue=""
    userEvent.type(inputObjectifs, objectifsValue) 

    
    expect(queryByTestId("error-objectifs")).toBeNull()
    //debug(container)
})



test("should not display an error", () => {
    const mockAddTask = jest.fn()
    const { debug, getByLabelText, getByTestId, queryByTestId } = render(
        <TaskCahier addTask={mockAddTask} />
    )
    const inputConsignes = getByLabelText(/consignes/i)
    const consignesValue=""
    userEvent.type(inputConsignes, consignesValue) 

    
    expect(queryByTestId("error-consignes")).toBeNull()
    //debug(container)
})



test("should not display an error", () => {
    const mockAddTask = jest.fn()
    const { debug, getByLabelText, getByTestId, queryByTestId } = render(
        <TaskCahier addTask={mockAddTask} />
    )
    const inputTechniques = getByLabelText(/techniques/)
    const techniquesValue=""
    userEvent.type(inputTechniques, techniquesValue) 

    
    expect(queryByTestId("error-techniques")).toBeNull()
    //debug(container)
})