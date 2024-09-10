import React from 'react'

export default function WorldMap() {
    return (
        <section className="relative my-16 h-screen w-full border">
            <div className="absolute left-0 top-0 -z-50 grid h-full w-full translate-y-[0%] place-content-center">
                <img
                    src="src\assets/images/"
                    className="mask-circle fixed-size"
                />
            </div>
        </section>
    )
}
