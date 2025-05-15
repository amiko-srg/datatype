let savol1 = prompt('String typedagi malumot kiriting');
let savol2 = prompt('Number typedagi malumot kiriting');
let savol3 = prompt('Boolean typedagi malumot kiriting (true yoki false)');

alert('Hamma malumotlarni togri kiritganingizga ishonchingiz komilmi?');

// String tekshirish
if (typeof savol1 === "string") {
    alert('Siz kiritgan soʻz string typega tegishli');
} else {
    alert('Siz kiritgan soʻz string typega tegishli emas');
}

// Number tekshirish
let raqam = Number(savol2);
if (!isNaN(raqam)) {
    alert('Siz kiritgan raqam number typega tegishli');
} else {
    alert('Siz kiritgan raqam number typega tegishli emas');
}

// Boolean tekshirish
if (savol3.toLowerCase() === 'true' || savol3.toLowerCase() === 'false') {
    alert('Siz kiritgan soʻz boolean typega tegishli');
} else {
    alert('Siz kiritgan soʻz boolean typega tegishli emas');
}