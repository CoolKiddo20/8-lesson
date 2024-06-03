// Berilgan ma'lumot
var raqamlar = [2, 4, 9, 10, 45, 67, 8, 90];
var toqlar = [];
var juftlar = [];

// Raqamlarni toq va juftlar guruhlarga ajratish
for (var i = 0; i < raqamlar.length; i++) {
    if (raqamlar[i] % 2 === 0) {
        juftlar.push(raqamlar[i]);
    } else {
        toqlar.push(raqamlar[i]);
    }
}

// Alert orqali birinchi kiruvchi odamga raqamlarni ko'rsatish
alert("Sizning saytga birinchi kirdiysiz! Raqamlar: " + raqamlar.join(', '));

// Toq va juft raqamlarni alohida alertda chiqarish
alert("Toq raqamlar: " + toqlar.join(', '));
alert("Juft raqamlar: " + juftlar.join(', '));
