
interface JsFileDownloaderDefaultProps {
  timeout?: number;
  mobileDisabled?: boolean;
  headers?: [{ name: string, value: string }];
  forceDesktopMode?: boolean;
  includeCredentials?: boolean;
  method?: 'GET' | 'POST';
  process?: (event: ProgressEvent) => undefined;
  nameCallback?: (name: string) => string;
  autoStart?: boolean;
}

interface JsFileDownloaderProps extends JsFileDownloaderDefaultProps {
  url: string;
  filename?: string;
}

declare class downloadException extends Error {
  constructor(message: any, request: any);
  name: string;
  request: XMLHttpRequest;
}

export = jsFileDownloader;
declare class jsFileDownloader {
  constructor(customParams: JsFileDownloaderProps): Promise<undefined,downloadException> | JsFileDownloader;
  start(): Promise<undefined,downloadException>;
  params: JsFileDownloaderProps;
  link: HTMLAnchorElement;
  request: XMLHttpRequest;
}
