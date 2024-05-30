let {event_names} = ACRemoteTelemetryClient = require('./src/index.js');

async function run(host_addr) {
let client = new ACRemoteTelemetryClient(host_addr);
	client.client.on("message", (msg, rinfo) => {
		console.log(rinfo, msg);
	});

	client.on(event_names.RT_CAR_INFO, (msg) => {
		console.log(msg);
	});

	let wtf = client.start();
	console.log(wtf);
	console.log("Here");
	
	client.start();

	client.handshake();

	client.subscribeUpdate();
	client.subscribeSpot();

	//client.stop();
}

run(process.argv[2]);
