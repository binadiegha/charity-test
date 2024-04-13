

/**
 * // This code uses jquery to resolve images in this section
 * // just add the image to the specified folder and provide teh name here
 *
 * @Warning: No not tamper with this file if you don't know what you are doing
 * @Warning: Do not Move or Delete or Rename the assets/new-images/secondary-school-project-001/ folder or any of the images there in
 * */
const files = ["CP1_0850.jpg",
    "CP1_0847.jpg",
    "CP1_0846.jpg",
    "CP1_0839.jpg",
    "CP1_0836.jpg",
    "CP1_0834.jpg",
    "CP1_0831.jpg",
    "CP1_0829.jpg",
    "CP1_0823.jpg",
    "CP1_0819.jpg",
    "CP1_0814.jpg",
    "CP1_0811.jpg",
    "CP1_0808.jpg",
    "CP1_0805.jpg",
    "CP1_0803.jpg",
    "CP1_0798.jpg",
    "CP1_0794.jpg",
    "CP1_0789.jpg",
    "CP1_0785.jpg",
    "CP1_0783.jpg",
    "CP1_0781.jpg",
    "CP1_0778.jpg",
    "CP1_0774.jpg",
    "CP1_0771.jpg",
    "CP1_0758.jpg",
    "CP1_0754.jpg",
    "CP1_0749.jpg",
    "CP1_0747.jpg",
    "CP1_0729.jpg",
    "CP1_0717.jpg",
    "CP1_0713.jpg",
    "CP1_0685.jpg",
    "CP1_0670.jpg",
    "CP1_0653.jpg",
    "CP1_0649.jpg",
    "CP1_0647.jpg",
    "CP1_0646.jpg",
    "CP1_0641.jpg",
    "CP1_0631.jpg",
    "CP1_0627.jpg",
    "CP1_0624.jpg",
    "CP1_0622.jpg",
    "CP1_0612.jpg",
    "CP1_0604.jpg",
    "CP1_0603.jpg",
    "CP1_0588.jpg",
    "CP1_0587.jpg",
    "CP1_0584.jpg",
    "CP1_0579.jpg",
    "CP1_0578.jpg",]

const directory = "assets/new-images/secondary-school-project-001/"

function populateGallery(f, dir, parentID){
    const parentNode = document.getElementById(parentID)
    f.forEach( imageName => {
        // parentNode.append(`
        $(parentID).append(`
                 <div class="col-xl-4 col-lg-6 col-md-6">
                    <div class="two-section__gallery-single">
                        <div class="two-section__gallery-img-inner" style="width: 100%; height: 350px">
                            <img src="${dir+imageName}" alt="" style="object-fit: cover; height: 400px">
                        </div>
                        <div class="two-section__gallery-img-overly">
                            <div class="two-section__gallery-icon-bg">
                            </div>
                            <a class="img-popup" href="${dir+imageName}" >

                            </a>
                        </div>
                    </div>
                </div>
        `)
    })
}

populateGallery(files, directory, '#gallery-holder')