console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1]));
console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]));
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]));
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]));

function countBoomerangs(boomerang) {
    count = 0;
    for (i = 0; i < boomerang.length - 2; i++) {
        if (boomerang[i] == boomerang[i + 2] && boomerang[i] != boomerang[i + 1]) {
            count++;
        }
    }
    return count;
}