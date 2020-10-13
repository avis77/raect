
const defaults = { text: 'hello old world', times: 10 };
function printTimes(options) {
    const {text,times} = {...defaults,...options}
    for (let i=0; i < times; i++) {
        console.log(`${String(i + 1).padStart(2, '0')} ${text}`);
    }
}

function printTimesFromWeirdDevelopersDownstairs(weirdOptions) {
    // TODO fill code (1 line) here
    const {title:text,times} = {...defaults,...weirdOptions}
    printTimes({ text , times });
}
// print 'hello world' ten times:
printTimesFromWeirdDevelopersDownstairs({ title: 'hello world' });