import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { verifyEmail } from "../../api/auth.api";

const VerifyEmail = () => {
  const { token } = useParams();

  useEffect(() => {
    verifyEmail(token).then(() => {
      alert("Email verified successfully");
    });
  }, [token]);

  return <p className="text-center mt-10">Verifying email...</p>;
};

export default VerifyEmail;
