(function () {

    const dateFormat = 'YYYY-MM-DD';

    const thisWeek = [
        moment().day(1).format(dateFormat),
        moment().day(7).format(dateFormat),
    ];

    const previousWeek = [
        moment().day(-6).format(dateFormat),
        moment().day(0).format(dateFormat),
    ];

    const addButton = (label, onClick) => {
        let btn = document.createElement("button");
        btn.innerHTML = label;
        btn.addEventListener("click", onClick);
        document.body.prepend(btn);
    }

    const replaceUrlSearchParam = (paramName, paramValue) => {
        const queryParams = new URLSearchParams(window.location.search);

        queryParams.set(paramName, paramValue);

        history.pushState(null, null, "?" + queryParams.toString());
        window.location.replace(window.location.href);
    }

    window.commons = {
        thisWeek,
        previousWeek,
        addButton,
        replaceUrlSearchParam
    }

})()
