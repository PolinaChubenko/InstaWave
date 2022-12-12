export const createImage = (url) =>
    new Promise((resolve, reject) => {
        const image = new Image()
        image.addEventListener('load', () => resolve(image))
        image.addEventListener('error', (error) => reject(error))
        image.setAttribute('crossOrigin', 'anonymous') // needed to avoid cross-origin issues
        image.src = url
    })


export async function getCroppedImg(
    imageSrc,
    imageName,
    pixelCrop,
    setBlobFile,
    flip = { horizontal: false, vertical: false }
) {
        const image = await createImage(imageSrc)
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')

        if (!ctx) {
                return null
        }
        const bBoxWidth = image.width;
        const bBoxHeight = image.height;
        // set canvas size to match the bounding box
        canvas.width = bBoxWidth
        canvas.height = bBoxHeight

        // translate canvas context to a central location to allow flipping around the center
        ctx.translate(bBoxWidth / 2, bBoxHeight / 2)
        ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1)
        ctx.translate(-image.width / 2, -image.height / 2)

        // draw rotated image
        ctx.drawImage(image, 0, 0)

        // croppedAreaPixels values are bounding box relative
        // extract the cropped image using these values
        const data = ctx.getImageData(
            pixelCrop.x,
            pixelCrop.y,
            pixelCrop.width,
            pixelCrop.height
        )

        // set canvas width to final desired crop size - this will clear existing context
        canvas.width = pixelCrop.width
        canvas.height = pixelCrop.height

        // paste generated image in the top left corner
        ctx.putImageData(data, 0, 0)

        return new Promise((resolve, reject) => {
                canvas.toBlob((file) => {
                        file.name = imageName;
                        console.log(file);
                        setBlobFile(file);
                        resolve(URL.createObjectURL(file))
                }, 'image/jpeg')
        })
}