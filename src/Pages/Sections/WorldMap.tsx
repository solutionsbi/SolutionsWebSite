import React from 'react'
import worldMapImage from '@/assets/images/world-map.png' // Adjust the path as needed

const WorldMap: React.FC = () => {
    return (
        <section className="page-section relative h-screen w-full overflow-hidden">
            <img
                src={worldMapImage}
                alt="World Map"
                className="absolute inset-0 h-full w-full object-cover"
            />
        </section>
    )
}

export default WorldMap
