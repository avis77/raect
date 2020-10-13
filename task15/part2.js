
const defaults = { text: 'hello world', times: 10 };
function printTimes(options) {
    const {text,times} = {...defaults,...options}
    for (let i=0; i < times; i++) {
        console.log(`${String(i + 1).padStart(2, '0')} ${text}`);
    }
}

// print 'hello world' ten times:
printTimes({ text: 'hello world' });