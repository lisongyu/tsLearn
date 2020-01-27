function greeter(person) {
    return 'Hello' + person.firstName + ' ' + person.lastName;
}
console.log(greeter({
    firstName: '丽丽',
    lastName: '小可爱'
}));
