export default {
    debug: false,
    state: {
        target: 'world',
    },
    setObject(newValue) {
        if (this.debug) console.log('object = ' + newValue);
        this.object = newValue;
    }
};