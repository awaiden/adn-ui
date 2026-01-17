"use client";

import { Progress } from "@adn-ui/react";
import { useEffect, useState } from "react";

export default function Default() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress className="w-[60%]" value={progress}>
      <Progress.Track>
        <Progress.Indicator style={{ width: `${progress}%` }} />
      </Progress.Track>
    </Progress>
  );
}
