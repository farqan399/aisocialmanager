import { Queue } from 'bullmq'; import IORedis from 'ioredis';
const connection=new IORedis(process.env.REDIS_URL||'redis://localhost:6379',{maxRetriesPerRequest:null});
export const publishQueue=new Queue('publishing',{connection});
export async function enqueuePublishing(postId:string,runAt:Date){await publishQueue.add('publish',{postId},{jobId:`publish:${postId}`,delay:Math.max(0,runAt.getTime()-Date.now()),removeOnComplete:1000,removeOnFail:1000,attempts:3,backoff:{type:'exponential',delay:5000}})}
