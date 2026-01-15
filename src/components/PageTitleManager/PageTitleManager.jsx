import { useEffect } from "react";

import { useLocation, matchPath } from "react-router-dom";

import { pageTitles } from "../../utils/pageTitles";

const PageTitleManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    let title = "CryptoRadar";

    const matchCrypto = matchPath("/crypto/:id", pathname);
    if (matchCrypto) {
      const coinName = matchCrypto.params.id;
      title = `CryptoRadar - ${coinName.toUpperCase()}`;
    } else {
      for (const path in pageTitles) {
        if (pathname.startsWith(path)) {
          title = `CryptoRadar - ${pageTitles[path]}`;
        }
      }
    }

    document.title = title;
  }, [pathname]);

  return null;
};

export default PageTitleManager;
