const sendOtpEmail = async (email, otp) => {
  console.log(`[Applicant] OTP for ${email}: ${otp}`);
  return {
    success: true,
    delivered: false,
    message: `OTP generated for ${email}`
  };
};

module.exports = {
  sendOtpEmail,
};


