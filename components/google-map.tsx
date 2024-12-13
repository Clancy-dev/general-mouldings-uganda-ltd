'use client'

interface Location {
  id: number
  name: string
  address: string
  embedUrl: string
}

interface GoogleMapProps {
  location: Location
}

const GoogleMap: React.FC<GoogleMapProps> = ({ location }) => {
  return (
    <div className="w-full h-[450px] rounded-lg overflow-hidden">
      <iframe
        src={location.embedUrl}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}

export default GoogleMap

