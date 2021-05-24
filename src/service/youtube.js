class Youtube {
    constructor(key) {
        this.key = key;
        this.requestOptions = {
            method: "GET",
            redirect: "follow",
        };
    }
    async mostPopular() {
        return fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?key=AIzaSyDiBWcG3Luxfn6dOqM8RLKyP9n93xwnd7c&key=AIzaSyDiBWcG3Luxfn6dOqM8RLKyP9n93xwnd7c&part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
            this.requestOptions
        )
            .then((response) => response.json())
            .then((result) => result.items)
            .catch((error) => console.log("error", error));
    }

    async search(query) {
        return fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
            this.requestOptions
        )
            .then((response) => response.json())
            .then((result) =>
                result.items.map((item) => ({ ...item, id: item.id.videoId }))
            )
            .then((items) => items)
            .catch((error) => console.log("error", error));
    }
}

export default Youtube;
