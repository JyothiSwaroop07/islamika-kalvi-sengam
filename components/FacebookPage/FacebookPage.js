import { useEffect } from 'react';

export default function FacebookPage() {
  useEffect(() => {
    // Load Facebook SDK
    if (!window.FB) {
      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v23.0';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      script.onload = () => {
        if (window.FB) {
          window.FB.XFBML.parse();
        }
      };
      document.body.appendChild(script);
    } else {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <>
      <div id="fb-root"></div>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/slamiya.kalvi.sangam"
        data-tabs="timeline"
        data-width=""
        data-height=""
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="false"
      >
        <blockquote
          cite="https://www.facebook.com/slamiya.kalvi.sangam"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/slamiya.kalvi.sangam">Facebook Page</a>
        </blockquote>
      </div>
    </>
  );
}
