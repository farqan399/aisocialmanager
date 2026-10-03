import crypto from 'node:crypto';
const key = crypto.createHash('sha256').update(process.env.ENCRYPTION_KEY || 'dev-only-change-me').digest();
export function encrypt(value:string){const iv=crypto.randomBytes(12);const c=crypto.createCipheriv('aes-256-gcm',key,iv);const enc=Buffer.concat([c.update(value,'utf8'),c.final()]);return [iv.toString('base64'),c.getAuthTag().toString('base64'),enc.toString('base64')].join('.')}
export function decrypt(value:string){const [iv,tag,data]=value.split('.');const d=crypto.createDecipheriv('aes-256-gcm',key,Buffer.from(iv,'base64'));d.setAuthTag(Buffer.from(tag,'base64'));return Buffer.concat([d.update(Buffer.from(data,'base64')),d.final()]).toString('utf8')}
