export const PhotoService = {
    getData() {
        return [
            {
                itemImageSrc: 'https://avatars.mds.yandex.net/i?id=9eba284f188563483ef2192c0288ab0ed32e09ba-7593439-images-thumbs&n=13 ',
                thumbnailImageSrc: 'https://avatars.mds.yandex.net/i?id=9eba284f188563483ef2192c0288ab0ed32e09ba-7593439-images-thumbs&n=13 ',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: 'https://avatars.mds.yandex.net/i?id=eee01428007489fdcc9c98bc210435d233eb4f41-8437205-images-thumbs&n=13',
                thumbnailImageSrc: 'https://avatars.mds.yandex.net/i?id=eee01428007489fdcc9c98bc210435d233eb4f41-8437205-images-thumbs&n=13 ',
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
            {
                itemImageSrc: 'https://avatars.mds.yandex.net/i?id=3d527a6ccbe32e48a5a13035738522947cc254b6-10812288-images-thumbs&n=13',
                thumbnailImageSrc: 'https://avatars.mds.yandex.net/i?id=3d527a6ccbe32e48a5a13035738522947cc254b6-10812288-images-thumbs&n=13 ',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: 'https://avatars.mds.yandex.net/i?id=9eba284f188563483ef2192c0288ab0ed32e09ba-7593439-images-thumbs&n=13 ',
                thumbnailImageSrc: 'https://avatars.mds.yandex.net/i?id=9eba284f188563483ef2192c0288ab0ed32e09ba-7593439-images-thumbs&n=13 ',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: 'https://avatars.mds.yandex.net/i?id=eee01428007489fdcc9c98bc210435d233eb4f41-8437205-images-thumbs&n=13',
                thumbnailImageSrc: 'https://avatars.mds.yandex.net/i?id=eee01428007489fdcc9c98bc210435d233eb4f41-8437205-images-thumbs&n=13 ',
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
            {
                itemImageSrc: 'https://avatars.mds.yandex.net/i?id=3d527a6ccbe32e48a5a13035738522947cc254b6-10812288-images-thumbs&n=13',
                thumbnailImageSrc: 'https://avatars.mds.yandex.net/i?id=3d527a6ccbe32e48a5a13035738522947cc254b6-10812288-images-thumbs&n=13 ',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: 'https://avatars.mds.yandex.net/i?id=9eba284f188563483ef2192c0288ab0ed32e09ba-7593439-images-thumbs&n=13 ',
                thumbnailImageSrc: 'https://avatars.mds.yandex.net/i?id=9eba284f188563483ef2192c0288ab0ed32e09ba-7593439-images-thumbs&n=13 ',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: 'https://avatars.mds.yandex.net/i?id=eee01428007489fdcc9c98bc210435d233eb4f41-8437205-images-thumbs&n=13',
                thumbnailImageSrc: 'https://avatars.mds.yandex.net/i?id=eee01428007489fdcc9c98bc210435d233eb4f41-8437205-images-thumbs&n=13 ',
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
            {
                itemImageSrc: 'https://avatars.mds.yandex.net/i?id=3d527a6ccbe32e48a5a13035738522947cc254b6-10812288-images-thumbs&n=13',
                thumbnailImageSrc: 'https://avatars.mds.yandex.net/i?id=3d527a6ccbe32e48a5a13035738522947cc254b6-10812288-images-thumbs&n=13 ',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
        ];
    },

    getImages() {
        return Promise.resolve(this.getData());
    }
};

