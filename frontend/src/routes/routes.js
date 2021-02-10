import HomeController from '../pages/Home/controllers/HomeController';

const router = async (route) => {

    rootContainer.innerHTML = "";
    switch (route) {
        case "": {
            const homeController = new HomeController();
            homeController.mount();
        }

    }
}

export { router }