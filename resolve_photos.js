

/**
 * // This code uses jquery to resolve images in this section
 * // just add the image to the specified folder and provide teh name here
 *
 * @Warning: No not tamper with this file if you don't know what you are doing
 * @Warning: Do not Move or Delete or Rename the assets/new-images/secondary-school-project-001/ folder or any of the images there in
 * */
// const files = ["CP1_0850",
//     "CP1_0847",
//     "CP1_0846",
//     "CP1_0839",
//     "CP1_0836",
//     "CP1_0834",
//     "CP1_0831",
//     "CP1_0829",
//     "CP1_0823",
//     "CP1_0819",
//     "CP1_0814",
//     "CP1_0811",
//     "CP1_0808",
//     "CP1_0805",
//     "CP1_0803",
//     "CP1_0798",
//     "CP1_0794",
//     "CP1_0789",
//     "CP1_0785",
//     "CP1_0783",
//     "CP1_0781",
//     "CP1_0778",
//     "CP1_0774",
//     "CP1_0771",
//     "CP1_0758",
//     "CP1_0754",
//     "CP1_0749",
//     "CP1_0747",
//     "CP1_0729",
//     "CP1_0717",
//     "CP1_0713",
//     "CP1_0685",
//     "CP1_0670",
//     "CP1_0653",
//     "CP1_0649",
//     "CP1_0647",
//     "CP1_0646",
//     "CP1_0641",
//     "CP1_0631",
//     "CP1_0627",
//     "CP1_0624",
//     "CP1_0622",
//     "CP1_0612",
//     "CP1_0604",
//     "CP1_0603",
//     "CP1_0588",
//     "CP1_0587",
//     "CP1_0578",
// ]

const files = [
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091204/thrive-beyond-fibroids/CP1_0850.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091203/thrive-beyond-fibroids/CP1_0847.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091201/thrive-beyond-fibroids/CP1_0846.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091199/thrive-beyond-fibroids/CP1_0839.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091198/thrive-beyond-fibroids/CP1_0836.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091196/thrive-beyond-fibroids/CP1_0834.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091195/thrive-beyond-fibroids/CP1_0831.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091193/thrive-beyond-fibroids/CP1_0829.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091191/thrive-beyond-fibroids/CP1_0823.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091189/thrive-beyond-fibroids/CP1_0819.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091188/thrive-beyond-fibroids/CP1_0814.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091186/thrive-beyond-fibroids/CP1_0811.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091184/thrive-beyond-fibroids/CP1_0808.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091183/thrive-beyond-fibroids/CP1_0805.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091181/thrive-beyond-fibroids/CP1_0803.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091179/thrive-beyond-fibroids/CP1_0798.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091177/thrive-beyond-fibroids/CP1_0794.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091176/thrive-beyond-fibroids/CP1_0789.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091174/thrive-beyond-fibroids/CP1_0785.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091172/thrive-beyond-fibroids/CP1_0783.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091171/thrive-beyond-fibroids/CP1_0781.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091168/thrive-beyond-fibroids/CP1_0778.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091167/thrive-beyond-fibroids/CP1_0774.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091166/thrive-beyond-fibroids/CP1_0771.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091163/thrive-beyond-fibroids/CP1_0758.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091162/thrive-beyond-fibroids/CP1_0754.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091160/thrive-beyond-fibroids/CP1_0749.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091158/thrive-beyond-fibroids/CP1_0747.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091157/thrive-beyond-fibroids/CP1_0729.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091155/thrive-beyond-fibroids/CP1_0717.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091154/thrive-beyond-fibroids/CP1_0713.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091152/thrive-beyond-fibroids/CP1_0685.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091151/thrive-beyond-fibroids/CP1_0670.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091149/thrive-beyond-fibroids/CP1_0653.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091148/thrive-beyond-fibroids/CP1_0649.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091146/thrive-beyond-fibroids/CP1_0647.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091145/thrive-beyond-fibroids/CP1_0646.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091144/thrive-beyond-fibroids/CP1_0641.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091143/thrive-beyond-fibroids/CP1_0631.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091142/thrive-beyond-fibroids/CP1_0627.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091142/thrive-beyond-fibroids/CP1_0631_1.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091140/thrive-beyond-fibroids/CP1_0624.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091139/thrive-beyond-fibroids/CP1_0622.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091138/thrive-beyond-fibroids/CP1_0612.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091137/thrive-beyond-fibroids/CP1_0604.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091136/thrive-beyond-fibroids/CP1_0587.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091136/thrive-beyond-fibroids/CP1_0603.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091135/thrive-beyond-fibroids/CP1_0588.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091134/thrive-beyond-fibroids/CP1_0584.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091134/thrive-beyond-fibroids/CP1_0579.jpg",
    "https://res.cloudinary.com/dz4wq80nz/image/upload/v1714091133/thrive-beyond-fibroids/CP1_0578.jpg",
]

const directory = "assets/new-images/secondary-school-project-001/"

function populateGallery(f, dir, parentID){
    const parentNode = document.getElementById(parentID)
    f.forEach( imageName => {
        // parentNode.append(`
        $(parentID).append(`
                 <div class="col-xl-4 col-lg-6 col-md-6">
                    <div class="two-section__gallery-single">
                        <div class="two-section__gallery-img-inner wow fadeInUp" style="width: 100%; height: 350px">
                            <img src="${imageName}"  alt="" style="object-fit: cover; height: 400px">
                        </div>
                        <div class="two-section__gallery-img-overly">
                            <div class="two-section__gallery-icon-bg">
                            </div>
                            <a class="img-popup" href="${imageName}" >

                            </a>
                        </div>
                    </div>
                </div>
        `)
    })
}

populateGallery(files, directory, '#gallery-holder')