(async () => {
    const loaderModule = await import(
        `${location.origin}/loader/dist/esm/loader.mjs`
    );
    const cssLoader = await import(
        `${location.origin}/loader/dist/esm/loaders/loader.css.mjs`
    );
    const Loader = loaderModule.default;

    const loader = new Loader();
    loader.register("css", cssLoader.default);

    document
        .querySelector(".navigation__button--load-css")
        .addEventListener("click", async () => {
            await loader.load(["/loader/demo/css/dist/index.dark.css"]);

            document.documentElement.classList.toggle("dark-mode");
        });
})();
