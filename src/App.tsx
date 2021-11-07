import React from 'react'
import Nav from './components/Nav'
import './index.css'
import Main from './Main'

export default function App() {
    return (
        <div className="font-sans h-screen flex flex-col align-middle md:pl-40 md:pr-40 bg-green-500 justify-center sm:pl-10 sm:pr-10">
            <div className="bg-white p-10 flex flex-col align-middle text-center rounded-lg h-5/6">
                <Nav />
                <Main />
            </div>
        </div>
    )
}
