// Написать функцию, которая проверяет - подходит ли пароль, переданный параметром, под заданные требования:
// Пароль должен содержать как минимум одну заглавную букву и цифру
// Пароль только из латинских букв
// Длина пароля должна быть не менее 10 символов

const passwordValidation = (password: string): boolean => {
  /*if (password.length < 10) {
    return false;
  }*/
  if (/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{10,}$/.test(password)) {
    return true;
  }
  /* if (!/[0-9]/g.test(password)) {
    return false;
  }*/
  return false;
};
console.log(passwordValidation("t5HJuigvyub"));
