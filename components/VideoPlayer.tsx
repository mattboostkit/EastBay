import { useState } from 'react';
import { getVideoUrl, urlForImage } from '@/lib/sanity.client';

type VideoProps = {
  video: {
    title: string;
    description?: string;
    videoFile?: any;
    externalVideo?: string;
    thumbnail?: any;
  };
};

export default function VideoPlayer({ video }: VideoProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  // Error handling for missing video data
  if (!video) {
    return (
      <div className="p-4 bg-red-50 text-red-500 rounded-md">
        <h2 className="text-lg font-medium">Error Loading Video</h2>
        <p>The video data could not be loaded. Please try again later.</p>
      </div>
    );
  }
  
  const videoUrl = getVideoUrl(video);
  const isYouTube = video.externalVideo && video.externalVideo.includes('youtube.com');
  const isVimeo = video.externalVideo && video.externalVideo.includes('vimeo.com');
  
  if (!videoUrl) {
    return (
      <div className="p-4 bg-amber-50 text-amber-700 rounded-md">
        <h2 className="text-lg font-medium">Video Unavailable</h2>
        <p>This video does not have a valid source URL.</p>
      </div>
    );
  }
  
  const handleVideoLoad = () => {
    setIsLoading(false);
  };
  
  const handleVideoError = () => {
    setIsLoading(false);
    setHasError(true);
  };
  
  return (
    <div className="video-container">
      <h2 className="text-xl font-semibold mb-4">{video.title}</h2>
      
      {/* Show loading state */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-grey-50 bg-opacity-50 z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      )}
      
      {/* Direct video file */}
      {video.videoFile && (
        <div className="relative aspect-w-16 aspect-h-9">
          {hasError ? (
            <div className="flex items-center justify-center h-full bg-grey-100 rounded-lg">
              <div className="text-center p-4">
                <p className="text-red-500 font-medium">Unable to load video</p>
                <p className="text-grey-600 text-sm mt-2">The video file could not be played. Please try again later.</p>
              </div>
            </div>
          ) : (
            <video
              controls
              poster={video.thumbnail ? urlForImage(video.thumbnail)?.width(1280)?.height(720)?.url() : undefined}
              className="w-full h-full rounded-lg object-cover"
              onLoadedData={handleVideoLoad}
              onError={handleVideoError}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      )}
      
      {/* YouTube embed with responsive container */}
      {isYouTube && video.externalVideo && (
        <div className="relative aspect-w-16 aspect-h-9">
          <iframe
            src={video.externalVideo.replace('watch?v=', 'embed/')}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full rounded-lg"
            onLoad={handleVideoLoad}
            onError={handleVideoError}
          ></iframe>
        </div>
      )}
      
      {/* Vimeo embed with responsive container */}
      {isVimeo && video.externalVideo && (
        <div className="relative aspect-w-16 aspect-h-9">
          <iframe
            src={video.externalVideo.replace('vimeo.com', 'player.vimeo.com/video')}
            title={video.title}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full rounded-lg"
            onLoad={handleVideoLoad}
            onError={handleVideoError}
          ></iframe>
        </div>
      )}
      
      {/* Video description */}
      {video.description && (
        <div className="mt-4 prose prose-sm max-w-none">
          <p className="text-grey-700">{video.description}</p>
        </div>
      )}
    </div>
  );
}
