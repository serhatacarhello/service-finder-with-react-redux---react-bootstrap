import { useFormik } from "formik";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

import * as yup from "yup";
import useApi from "../../../hooks/useApi";
import SubHeader from "../../../components/subHeader";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

const validationSchema = yup.object().shape({
  firstName: yup
    .string("Enter your first name")
    .min(2)
    .required("First name is required"),
  lastName: yup
    .string("Enter your last name")
    .min(2)
    .required("Last name is required"),
  email: yup
    .string("Enter your email")
    .email("Please enter a valid email")
    .required("Required"),
  password: yup
    .string("Enter your password")
    .min(
      5,
      "Password should be of min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit."
    )
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Password is required"),
  conPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password is required"),
});

function RegisterPage() {
  const api = useApi();

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    isSubmitting,
    values,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      firstName: "Mark",
      lastName: "Otto",
      email: "test@test.com",
      password: "123123",
      conPassword: "123123",
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      const registerResponse = await api.put(`/auth/register`, values);
      console.log("alsddfslogin", registerResponse);
      bag.resetForm();
    },
  });
  // console.log(values);

  return (
    <>
      <SubHeader title={"Register as a Professional"} />
      <div className="divider border-top border-3 border-secondary rounded w-25 mx-auto"></div>

      <Form noValidate onSubmit={handleSubmit}>
        <Row className="d-flex flex-column align-items-center justify-content-center my-3 gap-5 ">
          <Form.Group
            as={Col}
            md="5"
            controlId="RegisterForm.firstName"
            className="position-relative"
          >
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={values.firstName}
              disabled={isSubmitting}
              onBlur={handleBlur}
              onChange={handleChange}
              isValid={touched.firstName && !errors.firstName}
              isInvalid={!!errors.firstName}
            />
            {/* <Form.Control.Feedback tooltip className="ms-3">
              Looks good!
            </Form.Control.Feedback> */}
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="5"
            controlId="RegisterForm.lastName"
            className="position-relative"
          >
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={values.lastName}
              disabled={isSubmitting}
              onBlur={handleBlur}
              onChange={handleChange}
              isValid={touched.lastName && !errors.lastName}
              isInvalid={!!errors.lastName}
            />
            {/* <Form.Control.Feedback tooltip className="ms-3">
              Looks good!
            </Form.Control.Feedback> */}
            <Form.Control.Feedback type="invalid" tooltip>
              {errors.lastName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="RegisterForm.email" as={Col} md="5">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              value={values.email}
              onBlur={handleBlur("email")}
              onChange={handleChange("email")}
              disabled={isSubmitting}
              isValid={touched.email && !errors.email}
            />
            {errors.email && touched.email && (
              <div className="text-danger">{errors.email}</div>
            )}
          </Form.Group>

          <Form.Group as={Col} md="5" controlId="RegisterForm.password">
            <Form.Label>Password</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="password"
                placeholder="Password"
                aria-describedby="inputGroupPrepend"
                name="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                disabled={isSubmitting}
                isInvalid={!!errors.password}
                isValid={touched.password && !errors.password}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.password}
              </Form.Control.Feedback>
              {/* <Form.Control.Feedback tooltip className="ms-2">
                Looks good!
              </Form.Control.Feedback> */}
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="5" controlId="RegisterForm.conPassword">
            <Form.Label>Confirm Password</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                aria-describedby="inputGroupPrepend"
                name="conPassword"
                value={values.conPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                disabled={isSubmitting}
                isInvalid={!!errors.conPassword}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.conPassword}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="5">
            <Button
              type="submit"
              className="fw-bolder text-uppercase mt-3 w-100"
              disabled={isSubmitting}
            >
              Register as a professional
            </Button>
          </Form.Group>
        </Row>
      </Form>
    </>
  );
}

export default RegisterPage;
