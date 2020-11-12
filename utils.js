import fs, {promises, constants} from "fs";

export async function readJson(path) {
    await promises.access(path, constants.R_OK);
    const data = await promises.readFile(path);
    return JSON.parse(data);

    // return new Promise((resolve, reject) => {
    //     fs.readFile(path, 'utf8', function (err, data) {
    //         if (err) {
    //             reject(err);
    //         }
    //         resolve(JSON.parse(data));
    //     });
    // });
}

export async function readText(path) {
    await promises.access(path, constants.R_OK);
    const data = await promises.readFile(path);
    return data.toString();

    // return new Promise((resolve, reject) => {
    //     fs.readFile(path, 'utf8', function (err, data) {
    //         if (err) {
    //             reject(err);
    //         }
    //         resolve(JSON.parse(data));
    //     });
    // });
}

export async function writeFile(path, text) {
    // await promises.access(path, constants.W_OK | constants.O_CREAT);
    await promises.writeFile(path, text, 'utf8');

    // return new Promise((resolve, reject) => {
    //     fs.readFile(path, 'utf8', function (err, data) {
    //         if (err) {
    //             reject(err);
    //         }
    //         resolve(JSON.parse(data));
    //     });
    // });
}


export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const formatDate = (d = new Date()) => {
    return d.toISOString();
}


// https://gist.github.com/pguillory/729616#gistcomment-1946644
export function hook_stream(stream, callback) {
    var old_write = stream.write

    stream.write = (function (write) {
        return function (string, encoding, fd) {
            write.apply(stream, arguments)  // comments this line if you don't want output in the console
            callback(string, encoding, fd)
        }
    })(stream.write)

    return function () {
        stream.write = old_write
    }
}

export const consoleToLog = (logPath) => {
    let logStream;
    try {
        logStream = fs.createWriteStream(`${logPath}/scrobbleLog-${formatDate()}.txt`, {flags: 'a'});
    } catch (e) {
        console.error('Could not open log file for writing');
        console.error(e);
    }

    if (logStream !== undefined) {
        hook_stream(process.stdout, function (string, encoding, fd) {
            logStream.write(string, encoding)
        });
        hook_stream(process.stderr, function (string, encoding, fd) {
            logStream.write(string, encoding)
        })
    }
}

export const buildTrackString = (obj) => {
    const {
        track: {
            artists = [],
            name,
            id,
            external_urls: {
                spotify,
            } = {}
        } = {},
        played_at
    } = obj;
    let artistString = artists.reduce((acc, curr) => acc.concat(curr.name), []).join(' / ');
    return `${artistString} - ${name}, played at ${played_at}`
}
