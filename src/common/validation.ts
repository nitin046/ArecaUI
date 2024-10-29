export const regex = {
  password:
    /(?=^.{8,16}$)(?=.*\d)(?=.*[!@#$%^&*?]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
  email:
    /^(?=[^+\-_*\/]*$)([A-Za-z0-9.]+@[A-Za-z0-9-]+\.[A-Za-z]{2,}([.][a-zA-Z]{2,})?)$/,
  numberTyping: /^[0-9]*$/,
  fullName: /[^A-Za-z\s]+[A-Za-z\s]{0,150}$/,
  pinCode: /^[1-9][0-9]{3,5}$/,
  panNumber: /^[A-Z]{5}[0-9]{4}[A-Z]$/,
  tanNumber: /^[A-Z]{4}[0-9]{5}[A-Z]$/,
  gstIN: /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/,
  international_mobile: /^[1-9][0-9]{5,11}$/,
  alphabetSpaceTyping: /^[a-zA-Z\s]*$/,
};

export const getUniqueId = () => {
  return Math.floor(Math.random() * 0xffffff * 1000000).toString(16);
};
