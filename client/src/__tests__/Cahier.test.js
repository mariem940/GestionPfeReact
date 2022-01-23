import React from "react"
import { render } from "@testing-library/react"
//import userEvent from "@testing-library/user-event"
import mockCahiers from "../mock/mockCahiers"
import Cahier from "../components/pages/Cahier/Cahier";
describe("test cahiers list", () => {
    test("should render an array of cahiers list", () => {
        const mockDeleteTask = jest.fn()
        // const CahiersComponent = render (
        //     <Cahier deleteTask={mockDeleteTask} tasks={mockCahiers}/>

        //)
        expect().toMatchSnapshot()
        //debug()
    })
})