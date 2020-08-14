export default {
    debug: false,
    target: 'world',
    setObject(newValue) {
        if (this.debug) console.log('object = ' + newValue);
        this.object = newValue;
    }
};