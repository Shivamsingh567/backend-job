const slugify = require("slugify");
// 'shivQQam%#4qw539898/<<<>>>>>>&&&& dndcujf'
slugify.extend({
    "%": "%",
    "<": "<",
    ">": ">",
    "&": "&"
});

function slugger(string) {
    return slugify(string, {
        replacement: "-",
        remove: /[%\<>#&*+~.()'"!:@]/gi,
        lower: true,
        strict: true,
        locale: "vi",
        trim: true
    });
}


let a =  'shivQQam%#4qw539898/<<<>>>>>>&&&& dndcujf'
const b =  slugger(a)
console.log(b)
module.exports = slugger;