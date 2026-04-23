import { connect, headers, StringCodec } from 'nats';

// Match what your service expects
const pattern = { cmd: 'get-hello' };
const payload = {}; // Or any payload your handler expects

async function main() {
  const nc = await connect({ servers: 'nats://localhost:4222' });
  const sc = StringCodec();

  const sub = nc.subscribe('>');
  for await (const msg of sub) {
    console.log(`[${msg.subject}] ${sc.decode(msg.data)}`);
  }
  await nc.drain();
}
main().catch(console.error);
