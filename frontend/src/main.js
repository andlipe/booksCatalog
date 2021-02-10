import { router } from "./routes/routes";
import './assets/scss/styles.scss'

const init = () => {
    router(window.location.hash);
    window.addEventListener("hashchange", () => {
        router(window.location.hash);
    });
};

window.addEventListener("load", init);