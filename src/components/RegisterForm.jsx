import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Form } from "formik";
import { object, string } from "yup";


export const registerSchema = object({
  username: string()
    .max(20, "Kullanici adi 20 karakterden az olmalidir.")
    .required("Kullanici adi zorunludur"),
  firstName: string()
    .max(20, "isim 20 karakterden az olmalidir.")
    .required("isim zorunludur"),
  lastName: string()
    .max(20, "Soyisim 30 karakterden az olmalidir.")
    .required("Soyisim zorunludur"),

  email: string()
    .email("Lutfen gecerli bir email giriniz.")
    .required("Email zorunludur"),
  password: string()
    .required("sifre zorunludur")
    .min(8, "sifre en az 8 karakter olmalidir")
    .max(20, "sifre en fazla 20 karakter olmalidir")
    .matches(/\d+/, "sifre bir sayi icermelidir")
    .matches(/[a-z]/, "sifre bir kucuk harf icermelidir")
    .matches(/[A-Z]/, "sifre bir buyuk harf icermelidir")
    .matches(/[!/[@$!%*?&]+/, "sifre bir ozel karakter icermelidir"),
});

const RegisterForm = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
}) => {
  return (
    <Form>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="User Name"
          name="username"
          id="userName"
          type="text"
          variant="outlined"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.username && Boolean(errors.username)}
          helperText={touched.username && errors.username}
        />
        <TextField
          label="First Name"
          name="firstName"
          id="firstName"
          type="text"
          variant="outlined"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.firstName && Boolean(errors.firstName)}
          helperText={touched.firstName && errors.firstName}
        />
        <TextField
          label="Last Name"
          name="lastName"
          id="lastName"
          type="text"
          variant="outlined"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.lastName && Boolean(errors.lastName)}
          helperText={touched.lastName && errors.lastName}
        />
        <TextField
          label="Email"
          name="email"
          id="email"
          type="email"
          variant="outlined"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
        <TextField
          label="password"
          name="password"
          id="password"
          type="password"
          variant="outlined"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
        />
        <Button type="submit" variant="contained" size="large">
          Submit
        </Button>
      </Box>
    </Form>
  );
};

export default RegisterForm;