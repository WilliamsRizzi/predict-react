const compareByPrefix = (a, b) => {
    if (a.config.encoding.prefix_length < b.config.encoding.prefix_length) {
        return -1;
    }
    if (a.config.encoding.prefix_length > b.config.encoding.prefix_length) {
        return 1;
    }
    return 0;
};

const reducer = (accumulator, currentValue) => accumulator.concat(currentValue);
export const labelJobToTable = (jobs) => {
    jobs.sort(compareByPrefix);
    const allResultKeys = jobs.map((job) => Object.keys(job.config.labelling.results).map((metric) => metric));
    const headers = [...new Set(allResultKeys.reduce(reducer, []))];
    // eslint-disable-next-line max-len
    const rows = jobs.map((job) => [job.config.encoding.prefix_length, ...headers.map((h) => job.config.labelling.results[h] ? job.config.labelling.results[h] : 0)]);

    // change '0' to 'End'
    const newHeader = headers.map(h => {
        if (h === '0') {
            return 'END';
        } else {
            return h;
        }
    });
    return [['Prefix length', ...newHeader], ...rows];
};
