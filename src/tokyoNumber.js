export const tokyoNumber = {
    data() {
        return {
            tmpData: 'hello',
            title: 'welcome to Tokyo',
            subTitle: 'Tokyo is great',
            number:0
        }
    },
    filters: {
        //ko dung dk this
        lowerCase(value) {
            return value.toLowerCase();
        }
    },
}