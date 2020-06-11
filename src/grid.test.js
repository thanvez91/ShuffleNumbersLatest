import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import {GridSystem} from "./App.js"



it("Grid systems render correctlt",()=>{
    const {queryByTestId} = render(<GridSystem/>)
    expect(queryByTestId("grid-system")).toBeTruthy()
})