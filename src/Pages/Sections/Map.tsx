// Original Map.tsx file
import React from 'react'
import { lazy, Suspense } from 'react'

const LazyMap = lazy(() => import('@/components/custom/LazyLoadedMap'))

export const Map = () => {
    return (
        <section className="my-[10vh] hidden h-[60vh] px-[5%] md:block md:h-[90vh]">
            <Suspense fallback={<div>Loading map...</div>}>
                <LazyMap />
            </Suspense>
        </section>
    )
}
