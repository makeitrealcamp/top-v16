var a = 1; const b = 2; const c = 3;

(function firstFunction () {
    const b = 5; var c = 6;

    (function secondFunction () {
        const b = 8;
        console.log(`a: ${a}, b: ${b}, c: ${c}`);

        (function thirdFunction () {
        const a = 7; const c = 9;

            (function fourthFunction () {
                const a = 1; const c = 8
            })()

        })()

    })()

})()


