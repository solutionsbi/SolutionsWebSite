import mapImage from '@/assets/images/Map Composition/map.png'
import mapPins from '@/assets/images/Map Composition/pins.png'

export const Map2 = () => {
    return (
        <div className="relative my-16 h-[90vh] w-full">
            <img
                src={mapImage}
                alt="Map"
                className="-z-10 h-full w-full object-contain"
            />
            <img
                src={mapPins}
                alt="Map Pins"
                className="absolute left-1/2 top-1/2 z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 object-contain"
            />
            {/* <div className="absolute left-1/2 top-1/2 z-10 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500"></div> */}
        </div>
    )
}
