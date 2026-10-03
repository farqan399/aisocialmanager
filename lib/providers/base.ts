import { Platform } from '@prisma/client';
import { SocialProvider, PublishPayload } from './types';
export abstract class HttpProvider implements SocialProvider { abstract platform:Platform; abstract getProfile(t:string):Promise<{id:string;name:string}>; abstract createPost(t:string,p:PublishPayload):Promise<{id:string}>; async getAnalytics(){return {};} }
export function assertConfigured(...names:string[]){for(const n of names)if(!process.env[n])throw new Error(`Missing environment variable: ${n}`)}
