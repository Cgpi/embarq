import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Button,
  IconButton,
  TextField,
  Stack
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import emailjs from "@emailjs/browser";
import formBg from "../assets/Gift/gifttrip-form-bg.webp";

export default function EnquiryPopup({ open, handleClose }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", city: "", message: "" });
  const [loading, setLoading] = useState(false);

  const isEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  const isPhone = (val) => /^[6-9]\d{9}$/.test(val);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isEmail(form.email)) return alert("Enter valid email");
    if (!isPhone(form.phone)) return alert("Enter valid phone number");

    setLoading(true);
    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          user_name: form.name,
          user_email: form.email,
          user_phone: form.phone,
          user_city: form.city,
          user_message: form.message
        },
        "YOUR_PUBLIC_KEY"
      );
      setForm({ name: "", email: "", phone: "", city: "", message: "" });
      handleClose();
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth
      PaperProps={{ sx: { borderRadius: 1.5, background: "transparent", boxShadow: "none", maxHeight: "95vh" } }}>
      <DialogContent sx={{ p: 0, maxHeight: "95vh", overflowY: "auto", display: "flex", justifyContent: "center" }}>
        <Box sx={{
          position: "relative", width: "100%", maxHeight: "95vh", overflowY: "auto",
          backgroundImage: `url(${formBg})`, backgroundSize: "cover", backgroundPosition: "center",
          borderRadius: 5, px: 4, py: 4
        }}>
          <Box sx={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)", backdropFilter: "blur(2px)" }} />
          <Box sx={{ position: "relative", zIndex: 2, textAlign: "center", color: "#fff" }}>
            <IconButton onClick={handleClose} sx={{ position: "absolute", top: 6, right: 6, color: "#fff", p: 0.5 }}>
              <CloseIcon fontSize="small" />
            </IconButton>

            <Typography sx={{ fontFamily: "'Fraunces', serif", fontSize: { xs: "1.1rem", sm: "1.3rem" }, fontWeight: 600, lineHeight: 1.1, mb: 1.5 }}>
              Start Your<br />Journey with<br />Embarq
            </Typography>
            <Typography sx={{ fontWeight: 600, fontSize: "1rem", mb: 0.5 }}>Ready to take the road less travelled?</Typography>
            <Typography sx={{ fontSize: "0.85rem", opacity: 0.9, mb: 1.5, lineHeight: 1.2 }}>
              Share your details below and our team will get in touch to guide you through availability, next steps, and booking confirmation.
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
              <Stack direction={{ xs: "column", md: "row" }} spacing={1} mb={1}>
                <TextField fullWidth name="name" placeholder="Name" value={form.name} onChange={handleChange} sx={inputStyles} />
                <TextField fullWidth name="email" placeholder="Email" value={form.email} onChange={handleChange} sx={inputStyles} />
              </Stack>

              <Stack direction={{ xs: "column", md: "row" }} spacing={1} mb={1}>
                <TextField fullWidth name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} sx={inputStyles} />
                <TextField fullWidth name="city" placeholder="City" value={form.city} onChange={handleChange} sx={inputStyles} />
              </Stack>

              <TextField fullWidth multiline rows={1} name="message" placeholder="Message" value={form.message} onChange={handleChange} sx={{ ...inputStyles, mb: 1 }} />

              <Button type="submit" disabled={loading} fullWidth
                sx={{ py: 1, borderRadius: "30px", fontWeight: 600, fontSize: "0.75rem", background: "#f2ad3d", color: "#fff", "&:hover": { background: "#e49a25" } }}>
                {loading ? "Sending..." : "SUBMIT"}
              </Button>
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

const inputStyles = {
  "& .MuiOutlinedInput-root": { borderRadius: 1.5, background: "rgba(255,255,255,0.9)", boxShadow: "0 1px 5px rgba(0,0,0,0.1)", "& fieldset": { border: "none" } },
  "& .MuiInputBase-input": { fontSize: "0.75rem", padding: "6px 10px" }
};