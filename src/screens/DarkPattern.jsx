import { useState, useEffect } from "react";
import { knownDarkPatternsUrls, siteDarkPatterns } from "../DarkPatternUrls";

export default function DarkPattern() {
  const [currentUrl, setCurrentUrl] = useState("");
  const [displayText, setDisplayText] = useState("No Dark Patterns Found");



  useEffect(() => {
    chrome.action.setBadgeText({ text: "" });

    function updateUrl() {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const currentTab = tabs[0];
        if (currentTab) {
          setCurrentUrl(currentTab.url);
          if (
            knownDarkPatternsUrls?.find((u) => currentTab?.url?.includes(u))
          ) {
            setDisplayText(currentTab.url);
          } else {
            setDisplayText("No Dark Patterns Found");
          }
        }
      });
    }

    updateUrl();

    const tabUpdateListener = chrome.tabs.onActivated.addListener(() => {
      updateUrl();
    });

    return () => {
      chrome.tabs.onActivated.removeListener(tabUpdateListener);
    };
  }, []);

  return (
    <div className="p-4">
      {displayText == "No Dark Patterns Found" ? (
        <div className="text-gray-800 bg-white text-2xl font-bold w-full h-[70vh] flex items-center justify-center">
          {displayText}
        </div>
      ) : (
        <div>
          <div className="w-full break-all">{currentUrl}</div>
          <div className="text-center mt-3 text-base font-semibold p-3 bg-red-100 rounded-xl">Beware of the Dark patterns found in this site</div>
          <div className="px-5 py-3">
            <ol className="list-decimal list-outside space-y-5">
              {siteDarkPatterns
                ?.find((url) => currentUrl?.includes(url?.site))
                ?.content?.map((point, j) => (
                  <li key={j} className="text-lg font-semibold">
                    <div className="">{point?.heading}</div>
                    <div className="text-base font-normal pt-3 space-y-3">
                      {point?.points?.map((pointDesc, k) => (
                        <div key={k}>{pointDesc}</div>
                      ))}
                      {point?.imgPoints?.map((imgPoint, a) => (
                        <div key={a} className="py-3 space-y-2">
                          {imgPoint?.images?.map((image, b) => (
                            <img
                              key={b}
                              src={image}
                              alt=""
                              className="w-full max-w-[40rem] mx-auto border-[0.7rem] rounded-xl"
                            />
                          ))}
                          <div className="text-center text-gray-500">
                            {imgPoint?.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </li>
                ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}
