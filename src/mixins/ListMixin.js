import bus from '../utils/bus.js';

export default {
    created() {

        bus.$emit("end:spinner");

    }
}