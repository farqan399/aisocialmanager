import { Platform } from '@prisma/client'; import { SocialProvider } from './types';
import { FacebookProvider } from './facebook'; import { InstagramProvider } from './instagram'; import { TiktokProvider } from './tiktok'; import { YoutubeProvider } from './youtube'; import { LinkedinProvider } from './linkedin'; import { XProvider } from './x'; import { PinterestProvider } from './pinterest';
const providers:Record<Platform,SocialProvider>={FACEBOOK:new FacebookProvider(),INSTAGRAM:new InstagramProvider(),TIKTOK:new TiktokProvider(),YOUTUBE:new YoutubeProvider(),LINKEDIN:new LinkedinProvider(),X:new XProvider(),PINTEREST:new PinterestProvider()};
export function getProvider(p:Platform){return providers[p]}
