function test(template, name, age) {
    console.log(template);
    console.log(name);
    console.log(age);
}
var myname = "ll";
var getAge = function () {
    return 18;
};
test `hello my name is ${myname},I'm ${getAge()}`;
//# sourceMappingURL=hello.js.map