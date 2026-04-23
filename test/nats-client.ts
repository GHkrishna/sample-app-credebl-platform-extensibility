import { connect, headers, StringCodec, nkeyAuthenticator } from 'nats';

async function main() {
  const sc = StringCodec();

  // Read nkey from .env or file
  const seed = 'SUAEHE7VXT2LY4YSTFABQAOY4Y3QNY7ZAMAY25GKWUAOIASJ4ULKEXK6HM';

  const nc = await connect({
    servers: process.env.NATS_URL?.split(',') ?? ['nats://localhost:4222'],
    authenticator: nkeyAuthenticator(new TextEncoder().encode(seed)),
    name: 'test-nats-client',
  });

  const hdrs = headers();
  hdrs.set('context-id', 'test-client-id'); // if your service needs this

  const pattern = { cmd: 'get-good-hello' };

  const payload = {
    data: {}, // real payload
    headers: Object.fromEntries(hdrs),
  };

  const msg = await nc.request(
    'get-good-hello',
    sc.encode(JSON.stringify(payload)),
    { timeout: 30000, headers: hdrs }
  );

//   'get-msg'

//   const msg1 = await nc.request(
//     'get-msg',
//     sc.encode(JSON.stringify(payload)),
//     { timeout: 30000, headers: hdrs }
//   );

  console.log('✅ Got response:', sc.decode(msg.data));
//   console.log('✅ Got response:', sc.decode(msg1.data));
  await nc.drain();
}

main().catch(err => {
  console.error('❌ Request failed:', err);
});
