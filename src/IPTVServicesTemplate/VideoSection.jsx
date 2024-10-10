 const VideoSection = () => (
    <div className="max-w-4xl mx-auto my-12 p-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Experience IPTV Like Never Before
      </h2>
      <div className="aspect-w-16 aspect-h-9">
        <iframe 
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="IPTV Demo Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
  export default  VideoSection;