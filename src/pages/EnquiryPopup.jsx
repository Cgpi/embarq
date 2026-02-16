import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Button,
  IconButton,
  InputBase
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import emailjs from "@emailjs/browser";
import formBg from "../assets/FormImage/FormImage.png";

export default function EnquiryPopup({ open, handleClose }) {

  const [contact, setContact] = useState("");
  const [loading, setLoading] = useState(false);

  const isEmail = (val) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const isPhone = (val) =>
    /^[6-9]\d{9}$/.test(val);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isEmail(contact) && !isPhone(contact)) {
      alert("Enter valid Email or Mobile Number");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          user_email: isEmail(contact) ? contact : "",
          user_phone: isPhone(contact) ? contact : ""
        },
        "YOUR_PUBLIC_KEY"
      );

      setContact("");
      handleClose();

    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="xs"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "22px",
          overflow: "hidden",
          background: "transparent",
          boxShadow: "none"
        }
      }}
    >
      <DialogContent sx={{ p: 0 }}>

        <Box
          sx={{
            backgroundImage: `url(${formBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "22px",
            overflow: "hidden"
          }}
        >

          {/* GLASS OVERLAY */}
          <Box
            sx={{
              background: "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(4px)",
              p: { xs: 3, md: 4 },
              textAlign: "center",
              color: "#fff",
              position: "relative"
            }}
          >

            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                color: "#fff"
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* HEADING */}
            <Typography
              sx={{
                fontFamily: "'Fraunces', serif",
                fontSize: { xs: "1.6rem", md: "2rem" },
                fontWeight: 600,
                lineHeight: 1.25,
                mb: 8
              }}
            >
              Start Your<br /> Journey with <br />Embarq
            </Typography>

            {/* SUB HEAD */}
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "0.85rem",
                mb: 0.5
              }}
            >
              Ready to take the road less travelled?
            </Typography>

            <Typography
              sx={{
                fontSize: "0.75rem",
                opacity: 0.85,
                mb: 3,
                lineHeight: 1.5
              }}
            >
              Share your details below and our team will get in touch to guide
              you through availability, next steps, and booking confirmation.
            </Typography>

      {/* FORM WRAPPER */}
<Box
  component="form"
  onSubmit={handleSubmit}
  sx={{
    display: "flex",
    alignItems: "center",
    width: "100%",
    gap: "10px",

    "@media (max-width:360px)": {
      flexDirection: "column",
      alignItems: "stretch"
    }
  }}
>



 <InputBase
  placeholder="Enter your email/phone number*"
  value={contact}
  onChange={(e) => setContact(e.target.value)}
  sx={{
    flex: 1,
    height: "30px",
    px: 2,
    fontSize: "0.8rem",
    background: "#fff",
    border: "1px solid #E0E0E0",
    borderRadius: "40px",

    "@media (max-width:360px)": {
      width: "100%"
    }
  }}
/>



 <Button
  type="submit"
  disabled={loading}
  sx={{
    height: "30px",
    px: 3,
    minWidth: "120px",
    borderRadius: "40px",
    textTransform: "none",
    fontSize: "0.75rem",
    fontWeight: 500,
    background: "linear-gradient(180deg, #F6B94C 0%, #E5A126 100%)",
    color: "#fff",
    boxShadow: "0px 2px 6px rgba(0,0,0,0.25)",

    "@media (max-width:360px)": {
      width: "100%"
    },

    "&:hover": {
      background: "linear-gradient(180deg, #F6B94C 0%, #E5A126 100%)"
    }
  }}
>
  {loading ? "Sending..." : "Enquire Now"}
</Button>


</Box>


          </Box>
        </Box>

      </DialogContent>
    </Dialog>
  );
}
