export const tiposError = [
  "valueMissing", 
  "typeMismatch", // Corregido
  "patternMismatch", // Corregido
  "tooShort", 
  "tooLong", 
  "customError",
];

export const mensajesErrorForms = {
  name: {
      valueMissing: "The name field cannot be empty",
      patternMismatch: "Is that a name? Please enter a valid name",
      tooShort: "Is that a name? Your name must be at least 2 characters long! ",
  },
  password: {
    valueMissing: "The password field cannot be empty",
    tooShort: "The longer, the safer! The password must be at least 4 characters",
    tooLong: "The password cannot exceed 8 characters",
  },
  email: {
      valueMissing: "The email field cannot be empty.",
      typeMismatch: "Enter a valid email if you want a reply!!",
      tooShort: "Enter a valid email if you want a reply!",
  },
  subject: {
      valueMissing: "Make it easy for us. Don' t leave the subject empty!",
  },
  message: { 
      valueMissing: "Write something!",
      tooLong: "Too much to read! The message is too long! ",
  },
};